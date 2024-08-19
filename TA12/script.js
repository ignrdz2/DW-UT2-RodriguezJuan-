function generatePassword(length) {
    if (length < 8) {
        console.log("La longitud mínima de la contraseña debe ser de 8 caracteres.");
        return;
    }

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    console.log(password);
}

generatePassword(8);
generatePassword(10);
