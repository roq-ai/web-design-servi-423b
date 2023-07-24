import * as yup from 'yup';

export const subscriptionPlanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
});
