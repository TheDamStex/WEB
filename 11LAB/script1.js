function makeStringUppered(str1, str2, str3, str4, str5) {
  return `${str1.toUpperCase()} ${str2.toLowerCase()} ${str3.toUpperCase()} ${str4.toLowerCase()} ${str5.toUpperCase()}`;
}

const result1 = makeStringUppered("один", "два", "три", "чотири", "п’ять");
console.log(result1);
