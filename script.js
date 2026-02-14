// ===== GLOBAL STATE =====
let currentMode = 'encrypt';
let currentCipher = 'caesar';
let currentTheme = 'green';

// ===== DOM ELEMENTS =====
// Theme
const themeToggle = document.getElementById('themeToggle');

// Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Password Generator
const passwordInput = document.getElementById('generatedPassword');
const copyPasswordBtn = document.getElementById('copyPassword');
const regenerateBtn = document.getElementById('regenerate');
const generateBtn = document.getElementById('generateBtn');
const lengthSlider = document.getElementById('passwordLength');
const lengthValue = document.getElementById('lengthValue');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const toggleAdvancedBtn = document.getElementById('toggleAdvanced');
const advancedPanel = document.getElementById('advancedPanel');
const bulkGenerateBtn = document.getElementById('bulkGenerate');
const bulkPasswords = document.getElementById('bulkPasswords');
const passwordList = document.getElementById('passwordList');

// Checkboxes
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const excludeAmbiguous = document.getElementById('excludeAmbiguous');
const passwordType = document.getElementById('passwordType');

// Encryption
const modeBtns = document.querySelectorAll('.mode-btn');
const cipherBtns = document.querySelectorAll('.cipher-btn');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const processBtn = document.getElementById('processBtn');
const processBtnText = document.getElementById('processBtnText');
const copyOutputBtn = document.getElementById('copyOutput');
const cipherKey = document.getElementById('cipherKey');
const keyInputGroup = document.getElementById('keyInputGroup');
const keyLabel = document.getElementById('keyLabel');
const cipherInfo = document.getElementById('cipherInfo');

// Toast
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ===== THEME TOGGLE =====
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('blue-theme');
    currentTheme = document.body.classList.contains('blue-theme') ? 'blue' : 'green';
    
    // Animate theme toggle button
    themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1) rotate(0deg)';
    }, 300);
});

// ===== TAB SWITCHING =====
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        
        // Remove active class from all tabs and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// ===== PASSWORD GENERATOR =====

// Update length value display
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

// Toggle advanced options
toggleAdvancedBtn.addEventListener('click', () => {
    advancedPanel.classList.toggle('show');
    toggleAdvancedBtn.classList.toggle('active');
});

// Generate password
generateBtn.addEventListener('click', generatePassword);
regenerateBtn.addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(lengthSlider.value);
    const type = passwordType.value;
    
    let password = '';
    
    switch(type) {
        case 'random':
            password = generateRandomPassword(length);
            break;
        case 'memorable':
            password = generateMemorablePassword();
            break;
        case 'passphrase':
            password = generatePassphrase();
            break;
        case 'pin':
            password = generatePIN(length);
            break;
    }
    
    passwordInput.value = password;
    updatePasswordStrength(password);
}

function generateRandomPassword(length) {
    let charset = '';
    let password = '';
    
    // Build charset based on options
    if (includeLowercase.checked) {
        charset += excludeAmbiguous.checked ? 'abcdefghijkmnopqrstuvwxyz' : 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeUppercase.checked) {
        charset += excludeAmbiguous.checked ? 'ABCDEFGHJKLMNPQRSTUVWXYZ' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeNumbers.checked) {
        charset += excludeAmbiguous.checked ? '23456789' : '0123456789';
    }
    if (includeSymbols.checked) {
        charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    
    if (charset === '') {
        showToast('Please select at least one character type');
        return '';
    }
    
    // Generate password
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    return password;
}

function generateMemorablePassword() {
    const words = ['Apple', 'Banana', 'Cherry', 'Dragon', 'Eagle', 'Forest', 'Galaxy', 'Harbor',
                   'Island', 'Jungle', 'Knight', 'Lion', 'Mountain', 'Night', 'Ocean', 'Phoenix',
                   'Queen', 'River', 'Storm', 'Tiger', 'Universe', 'Valley', 'Wizard', 'Xenon',
                   'Yellow', 'Zebra', 'Brave', 'Cloud', 'Dream', 'Fire'];
    
    const word1 = words[Math.floor(Math.random() * words.length)];
    const word2 = words[Math.floor(Math.random() * words.length)];
    const num = Math.floor(Math.random() * 999);
    const symbols = '!@#$%^&*';
    const symbol = symbols.charAt(Math.floor(Math.random() * symbols.length));
    
    return `${word1}${word2}${num}${symbol}`;
}

function generatePassphrase() {
    const words = ['correct', 'horse', 'battery', 'staple', 'random', 'secure', 'crypto', 'digital',
                   'quantum', 'neural', 'cyber', 'matrix', 'signal', 'cipher', 'binary', 'vector',
                   'orbital', 'stellar', 'cosmic', 'prism', 'nexus', 'zenith', 'apex', 'vertex',
                   'azure', 'crimson', 'emerald', 'golden', 'silver', 'bronze', 'iron', 'steel'];
    
    const numWords = 4 + Math.floor(Math.random() * 3); // 4-6 words
    const selectedWords = [];
    
    for (let i = 0; i < numWords; i++) {
        selectedWords.push(words[Math.floor(Math.random() * words.length)]);
    }
    
    return selectedWords.join('-');
}

function generatePIN(length) {
    let pin = '';
    for (let i = 0; i < length; i++) {
        pin += Math.floor(Math.random() * 10);
    }
    return pin;
}

// Update password strength
function updatePasswordStrength(password) {
    if (!password) {
        strengthBar.style.width = '0%';
        strengthText.textContent = 'Generate a password';
        return;
    }
    
    let score = 0;
    
    // Length scoring
    if (password.length >= 8) score += 20;
    if (password.length >= 12) score += 20;
    if (password.length >= 16) score += 20;
    
    // Complexity scoring
    if (/[a-z]/.test(password)) score += 10;
    if (/[A-Z]/.test(password)) score += 10;
    if (/[0-9]/.test(password)) score += 10;
    if (/[^a-zA-Z0-9]/.test(password)) score += 10;
    
    // Update UI
    strengthBar.style.width = `${score}%`;
    
    if (score < 40) {
        strengthText.textContent = 'Weak';
        strengthText.style.color = '#ef4444';
    } else if (score < 60) {
        strengthText.textContent = 'Medium';
        strengthText.style.color = '#f59e0b';
    } else if (score < 80) {
        strengthText.textContent = 'Strong';
        strengthText.style.color = '#fbbf24';
    } else {
        strengthText.textContent = 'Very Strong';
        strengthText.style.color = '#10b981';
    }
}

// Bulk generate passwords
bulkGenerateBtn.addEventListener('click', () => {
    passwordList.innerHTML = '';
    bulkPasswords.style.display = 'block';
    
    for (let i = 0; i < 10; i++) {
        const password = generateRandomPassword(parseInt(lengthSlider.value));
        const item = document.createElement('div');
        item.className = 'password-item';
        item.innerHTML = `
            <span>${password}</span>
            <button onclick="copyToClipboard('${password}')" title="Copy">📋</button>
        `;
        passwordList.appendChild(item);
    }
    
    // Scroll to bulk passwords
    bulkPasswords.scrollIntoView({ behavior: 'smooth' });
});

// Copy password
copyPasswordBtn.addEventListener('click', () => {
    const password = passwordInput.value;
    if (password) {
        copyToClipboard(password);
    }
});

// ===== ENCRYPTION/DECRYPTION =====

// Mode toggle (Encrypt/Decrypt)
modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        processBtnText.textContent = currentMode === 'encrypt' ? 'Encrypt Text' : 'Decrypt Text';
    });
});

// Cipher selection
cipherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cipherBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCipher = btn.dataset.cipher;
        updateCipherUI();
    });
});

// Update cipher UI based on selection
function updateCipherUI() {
    // Update key input visibility and label
    switch(currentCipher) {
        case 'caesar':
            keyInputGroup.style.display = 'block';
            keyLabel.textContent = 'Shift Value (1-25):';
            cipherKey.type = 'number';
            cipherKey.min = '1';
            cipherKey.max = '25';
            cipherKey.value = '13';
            cipherKey.placeholder = 'Enter shift value (1-25)';
            updateCipherInfo('Caesar Cipher', 
                'The Caesar cipher shifts each letter by a fixed number of positions in the alphabet.',
                'Educational only - easily broken with frequency analysis');
            break;
        case 'rot13':
            keyInputGroup.style.display = 'none';
            updateCipherInfo('ROT13',
                'ROT13 is a special case of Caesar cipher with a shift of 13. Applying ROT13 twice returns the original text.',
                'Educational only - commonly used for hiding spoilers');
            break;
        case 'base64':
            keyInputGroup.style.display = 'none';
            updateCipherInfo('Base64 Encoding',
                'Base64 is an encoding scheme that converts binary data to ASCII text format.',
                'Not encryption - data is easily decoded');
            break;
        case 'xor':
            keyInputGroup.style.display = 'block';
            keyLabel.textContent = 'Encryption Key:';
            cipherKey.type = 'text';
            cipherKey.removeAttribute('min');
            cipherKey.removeAttribute('max');
            cipherKey.value = 'secret';
            cipherKey.placeholder = 'Enter encryption key';
            updateCipherInfo('XOR Cipher',
                'XOR encryption uses the XOR operation with a key. Applying XOR twice with the same key returns the original text.',
                'Basic encryption - use strong keys for better security');
            break;
        case 'substitution':
            keyInputGroup.style.display = 'none';
            updateCipherInfo('Substitution Cipher',
                'Each letter is replaced with another letter from a shuffled alphabet.',
                'Educational only - vulnerable to frequency analysis');
            break;
        case 'reverse':
            keyInputGroup.style.display = 'none';
            updateCipherInfo('Reverse Text',
                'Simply reverses the order of characters in the text.',
                'Not encryption - easily reversible');
            break;
    }
}

function updateCipherInfo(title, description, security) {
    cipherInfo.innerHTML = `
        <h4>ℹ️ About ${title}</h4>
        <p>${description}</p>
        <p><strong>Security:</strong> ${security}</p>
    `;
}

// Process (Encrypt/Decrypt)
processBtn.addEventListener('click', () => {
    const input = inputText.value;
    
    if (!input) {
        showToast('Please enter text to process');
        return;
    }
    
    let output = '';
    
    try {
        if (currentMode === 'encrypt') {
            output = encrypt(input, currentCipher);
        } else {
            output = decrypt(input, currentCipher);
        }
        
        outputText.value = output;
    } catch (error) {
        showToast('Error processing text: ' + error.message);
    }
});

// Encryption functions
function encrypt(text, cipher) {
    switch(cipher) {
        case 'caesar':
            return caesarCipher(text, parseInt(cipherKey.value) || 13);
        case 'rot13':
            return caesarCipher(text, 13);
        case 'base64':
            return btoa(text);
        case 'xor':
            return xorCipher(text, cipherKey.value || 'secret');
        case 'substitution':
            return substitutionCipher(text);
        case 'reverse':
            return text.split('').reverse().join('');
        default:
            return text;
    }
}

function decrypt(text, cipher) {
    switch(cipher) {
        case 'caesar':
            return caesarCipher(text, -parseInt(cipherKey.value) || -13);
        case 'rot13':
            return caesarCipher(text, 13); // ROT13 is its own inverse
        case 'base64':
            return atob(text);
        case 'xor':
            return xorCipher(text, cipherKey.value || 'secret'); // XOR is its own inverse
        case 'substitution':
            return substitutionCipher(text, true);
        case 'reverse':
            return text.split('').reverse().join('');
        default:
            return text;
    }
}

// Caesar Cipher implementation
function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = code >= 65 && code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}

// XOR Cipher implementation
function xorCipher(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return result;
}

// Substitution Cipher implementation
let substitutionKey = null;

function substitutionCipher(text, reverse = false) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    // Generate or use existing substitution key
    if (!substitutionKey) {
        substitutionKey = alphabet.split('').sort(() => Math.random() - 0.5).join('');
    }
    
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const isUpper = char === char.toUpperCase();
            const lowerChar = char.toLowerCase();
            const index = reverse 
                ? substitutionKey.indexOf(lowerChar)
                : alphabet.indexOf(lowerChar);
            const newChar = reverse
                ? alphabet.charAt(index)
                : substitutionKey.charAt(index);
            return isUpper ? newChar.toUpperCase() : newChar;
        }
        return char;
    }).join('');
}

// Copy output
copyOutputBtn.addEventListener('click', () => {
    const output = outputText.value;
    if (output) {
        copyToClipboard(output);
    }
});

// ===== UTILITY FUNCTIONS =====

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Copied to clipboard!');
    });
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== INITIALIZE =====
updateCipherUI();
