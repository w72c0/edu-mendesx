import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './index';

// eslint-disable-next-line no-undef
describe('useForm()', () => {
  // eslint-disable-next-line no-undef
  describe('when user types', () => {
    // eslint-disable-next-line no-undef
    test('change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Mario',
        },
      }));

      const initialValues = { nome: 'Mario' };
      // eslint-disable-next-line no-undef
      expect(result.current.values).toEqual(initialValues);

      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Ju',
        },
      };
      act(() => {
        result.current.handleChange(event);
      });
      // expect, to be a new value
      // eslint-disable-next-line no-undef
      expect(result.current.values).toEqual({ nome: 'Ju' });
    });
  });
});
