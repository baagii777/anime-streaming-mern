const CryptoJS = require("crypto-js");

const encryptedPassword = "ENCRYPTED_PASSWORD";
const secretKey = "SECRT_KEY";

const decrypted = CryptoJS.AES.decrypt(encryptedPassword, secretKey).toString(
  CryptoJS.enc.Utf8,
);

console.log(decrypted);
