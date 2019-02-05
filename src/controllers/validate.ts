const validate = {
  create: {
    id: {
      in: ['body'],
      required: true,
      string: true,
      custom(value) {
        console.log('Value', value);
        // throw { error: "Error Occured", message: "Message" };
      },
    },
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: /^[a-z]*$/,
      required: true,
    },
  },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: true,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 0,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  update: {
    dataToUpdate: {
      in: ['body'],
      isObject: true,
      required: true,
      custom(dataToUpdate) { console.log('No data to update'); },
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};
export default validate;
