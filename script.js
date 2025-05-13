function firstWord(str) {
  if (!str) {
    return "";
  }
  const index = str.indexOf(" ");
  if (index === -1) {
    return str;
  } else {
    return str.substring(0, index);
  }
}

