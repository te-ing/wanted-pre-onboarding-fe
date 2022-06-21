const emailReg =
  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const passwordReg =
  /^(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

export const validateEmail = (email) => emailReg.test(email);
export const validatePassword = (password) => passwordReg.test(password);
