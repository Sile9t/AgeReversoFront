export function getRandomSecureID() {
   const secureArray = new Uint32Array(5);
   window.crypto.getRandomValues(secureArray);

   return Array.from(secureArray, (it) => it.toString(36)).join("");
}
