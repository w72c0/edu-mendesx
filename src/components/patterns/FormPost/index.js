/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Button';
import Text from '../../foundation/Text';
import ArrowIcon from '../../commons/utils/ArrowIcon';
import {
  ButtonStyled,
  ButtonStyledFilter,
  Carousel,
  ContainerInputButton,
  FormContainer,
  ImagePreview,
  ImagePreviewContainer,
  TextFieldStyled,
} from './style';
import userService from '../../../services/user/userService';
import photoFilter from './style/photoFilter';
import FilterPreview from './style/filters';

function FormEditor({ onClose }) {
  const router = useRouter();
  const [steps, setSteps] = React.useState(1);
  const [url, setUrl] = React.useState('');
  const [post, setPost] = React.useState({
    photoUrl: '',
    description: 'Descrição',
    filter: 'none',
  });
  const URLValidation = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i;

  const handleClick = () => {
    setSteps(2);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setUrl(value);
  };

  const handleUrlImage = () => {
    setPost((prevState) => ({ ...prevState, photoUrl: url }));
  };

  const handleSelectFilter = (name) => {
    setPost((prevState) => ({ ...prevState, filter: name }));
  };

  const handlePost = async () => {
    await userService
      .sendPost(post)
      .then(() => {
        router.push('/app/profile');
        onClose();
      })
      .catch(() => {
      })
      .finally(() => {
      });
  };

  const isValidUrl = URLValidation.test(post.photoUrl);

  return (
    <>
      <Button
        ghost
        type="button"
        onClick={() => onClose(true)}
        style={{ textAlign: 'right', padding: '10px 20px 10px 20px' }}
      >
        X
      </Button>
      <ImagePreviewContainer>
        <FilterPreview>
          <ImagePreview
            className={`filter-${post.filter}`}
            src={post.photoUrl || '/images/noPreview.svg'}
            alt=""
          />
        </FilterPreview>
      </ImagePreviewContainer>
      <FormContainer>
        {steps === 1 ? (
          <Box display="flex" flexDirection="column" justifyContent="center">
            <ContainerInputButton>
              <TextFieldStyled
                placeholder="URL da imagem"
                color="tertiary.light"
                value={url}
                onChange={handleChange}
                name="url"
                error="URL inválida"
              />
              <ButtonStyled
                variant="secondary.main"
                disabled={!url}
                onClick={handleUrlImage}
              >
                <ArrowIcon id="arrow" />
              </ButtonStyled>
            </ContainerInputButton>

            {!isValidUrl && post.photoUrl && (
              <Text variant="smallestException" color="error.main" role="alert">
                URL inválida
              </Text>
            )}
          </Box>
        ) : (
          <div>
            <Carousel>
              {photoFilter.map((item) => (
                <div key={item.name}>
                  <ButtonStyledFilter
                    onClick={() => handleSelectFilter(item.name)}
                  >
                    <FilterPreview>
                      <img
                        className={`filter-${item.name}`}
                        src={post.photoUrl}
                        alt=""
                        style={{ height: '88px', width: '88px' }}
                      />
                    </FilterPreview>
                  </ButtonStyledFilter>

                  <Text variant="profileTextSM" color="tertiary.light">
                    {item.name}
                  </Text>
                </div>
              ))}
            </Carousel>
          </div>
        )}

        <Button
          variant="primary.main"
          type="submit"
          disabled={!url || !post.photoUrl || !isValidUrl}
          fullWidth
          onClick={steps === 1 ? handleClick : handlePost}
        >
          {steps === 1 ? 'Avançar' : 'Postar'}
        </Button>
      </FormContainer>
    </>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormPost({ propsDoModal, onClose }) {
  return (
    <Box
      marginLeft="auto"
      marginRight="auto"
      paddingRight={{ xs: '0', md: '0' }}
      paddingLeft={{ xs: '0', md: '0' }}
      display="grid"
      placeItems="center"
      height="100vh"
    >
      <Box
        display="flex"
        justifyContent="center"
        paddingRight={{ xs: '0', md: '0' }}
        paddingLeft={{ xs: '0', md: '0' }}
        width="375px"
        height="667px"
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          backgroundColor="white"
          height="667px"
          width="375px"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...propsDoModal}
        >
          <FormEditor onClose={onClose} />
        </Box>
      </Box>
    </Box>
  );
}
