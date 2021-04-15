/// <reference types="cypress" />

import LoginScreenPageObject from "../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject";

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      // Pré Teste
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');

      // Cenário
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForm();

      // Asserções
      cy.url().should('include', '/app/profile');

      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;
          cy.getCookie('APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });

    // // it === test que estamos fazendo
    // it('preencha os campos e vá para a página /app/profile', () => {
    //   cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
    //     .as('userLogin');
  
    //   cy.visit('/app/login/');
  
    //   // preencher o input usuario
    //   // document.querySelector('input[name="usuario"]')
    //   cy.get('#formCadastro input[name="usuario"]').type('omariosouto');
  
    //   // preencher o input senha
    //   cy.get('#formCadastro input[name="senha"]').type('senhasegura');
  
    //   // clicar no botão de submit!
    //   cy.get('#formCadastro button[type="submit"]').click();
  
    //   // o que esperamos? ir para "/app/profile/"
    //   cy.url().should('include', '/app/profile');
  
    //   // Temos o token?
    //   cy.wait('@userLogin')
    //     .then((intercept) => {
    //       // token do servidor
    //       const { token } = intercept.response.body.data;
  
    //       cy.getCookie('APP_TOKEN')
    //         .should('exist')
    //         // token do cookie é igual ao do server?
    //         .should('have.property', 'value', token);
    //     });
    // });
  });
  
