// Encryption key (change this to your own secret key)
const encryptionKey: number = 0xab;

/**
 * @author Lusaib Latheef
 */
export default function localStorageUtil<T>(key: string, value?: T): T | null {
  // Check if localStorage is supported by the browser
  if (typeof Storage === "undefined") {
    console.error("localStorage is not supported in this browser.");
    return null;
  }

  // Encrypt value with XOR
  function encrypt(value: string): string {
    let encryptedValue = "";
    for (let i = 0; i < value.length; i++) {
      encryptedValue += String.fromCharCode(
        value.charCodeAt(i) ^ encryptionKey
      );
    }
    return encryptedValue;
  }

  // Decrypt value with XOR
  function decrypt(encryptedValue: string): string {
    let decryptedValue = "";
    for (let i = 0; i < encryptedValue.length; i++) {
      decryptedValue += String.fromCharCode(
        encryptedValue.charCodeAt(i) ^ encryptionKey
      );
    }
    return decryptedValue;
  }

  // Set value to localStorage
  if (value !== undefined) {
    try {
      const encryptedValue = encrypt(JSON.stringify(value));
      localStorage.setItem(key, encryptedValue);
    } catch (error) {
      console.error("Error setting value in localStorage:", error);
    }
  }

  // Get value from localStorage
  else {
    try {
      const encryptedValue = localStorage.getItem(key);
      const decryptedValue = encryptedValue ? decrypt(encryptedValue) : null;
      return decryptedValue ? JSON.parse(decryptedValue) : null;
    } catch (error) {
      console.error("Error getting value from localStorage:", error);
      return null;
    }
  }

  return null;
}
