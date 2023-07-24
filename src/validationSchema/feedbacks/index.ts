import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  content: yup.string().required(),
  project_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
