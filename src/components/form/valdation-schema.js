export const validationStateSchema = {
  name: {
    required: true,
  },
  org: {
    required: false,
  },
  phone: {
    required: true,
    validator: {
      regEx: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      error: 'Uneli ste nevalidan broj telefona',
    },
  },
  email: {
    required: true,
    validator: {
      regEx: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      error: 'Uneli ste nevalidnu email adresu',
    },
  },
  website: {
    required: false,
  },
  message: {
    required: false,
  },
};
