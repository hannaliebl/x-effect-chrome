const FormValidation = (key, formVal) => {
  switch (key) {
    case "habitTitle":
    case "currentNote":
      return formVal.length === 0 ? true : /^\s*$/.test(formVal);
    default:
      return false;
  }
};

export default FormValidation;
