export function caesarCipher(string, shift) {
    let cipherText = "";

        for (let i = 0; i < string.length; i++)
        {
            let char = string[i];
            // for non letter
            if ( /[a-zA-Z]/.test(char) === false ) {
                cipherText += char;
            // for upper case
            } else if (char === char.toUpperCase(string[i])) {
                let ch =  String.fromCharCode((char.charCodeAt(0) + shift-65) % 26 + 65);
                cipherText += ch;
            // for lower case
            } else if (char === char.toLowerCase(string[i])) {
                let ch = String.fromCharCode((char.charCodeAt(0) + shift-97) % 26 + 97);
                cipherText += ch;
        }}
    return cipherText;
}