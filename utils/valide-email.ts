export default (email: string): boolean => {
  var pattern = /^[^@]+@[^@]+\.[^@]+$/;
  return pattern.test(email);
};
