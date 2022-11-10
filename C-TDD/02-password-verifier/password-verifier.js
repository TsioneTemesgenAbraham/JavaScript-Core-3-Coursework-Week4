function verify(string) {
  if (string.length >= 8) {
    return "Password accepted";
  }
  if (string == "") {
    return "Password rejected";
  }

  if (string !== string.toLowerCase()) {
    return "Password accepted";
  }
  if (/\d/.test(string) === true) {
    return "Password accepted";
  }
  return "Password rejected";
}

module.exports = verify;
