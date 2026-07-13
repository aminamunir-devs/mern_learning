import { webcrypto, randomFillSync } from "crypto";

if (typeof globalThis.crypto === "undefined") {
  if (webcrypto) {
    globalThis.crypto = webcrypto;
  } else {
    globalThis.crypto = {
      getRandomValues: (arr) => {
        randomFillSync(arr);
        return arr;
      },
    };
  }
}

export default globalThis.crypto;
