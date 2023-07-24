import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  client_id: yup.string().nullable(),
  manager_id: yup.string().nullable(),
});
