const FormValidation = (key, formVal) => {
  switch (key) {
    case "habitTitle":
    case "currentNote":
      return formVal === "";
    default:
      return false;
  }
};

export default FormValidation;
