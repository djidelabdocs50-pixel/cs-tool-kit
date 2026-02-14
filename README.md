# 🛡️ CyberSec Toolkit - Password Generator & Encryption Suite

A professional, full-featured cybersecurity toolkit combining secure password generation with multiple encryption cipher implementations. Built with vanilla JavaScript and featuring a stunning dual-theme UI.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌐 Live Demo

**[View Live Project](https://djidelabdocs50-pixel.github.io/cs-tool-kit/)**

## ✨ Features

### 🔑 Password Generator

**Multiple Generation Modes:**
- **Random** - Cryptographically strong passwords with customizable options
- **Memorable** - Word-based combinations easy to remember
- **Passphrase** - 4-6 word combinations (Diceware-style)
- **PIN Codes** - Numeric-only passwords

**Customization Options:**
- Adjustable length (8-64 characters)
- Character type selection (uppercase, lowercase, numbers, symbols)
- Exclude ambiguous characters (0, O, l, 1, I)
- Real-time strength meter with visual feedback
- Bulk generation (10 passwords at once)
- Copy to clipboard with one click

### 🔐 Encryption Tools

**Six Different Cipher Implementations:**

1. **Caesar Cipher** 
   - Classic shift cipher with customizable shift value (1-25)
   - Educational demonstration of substitution ciphers

2. **ROT13** 
   - Special case of Caesar cipher with fixed 13-position shift
   - Self-inverse property (encrypt = decrypt)

3. **Base64** 
   - Standard binary-to-text encoding
   - Commonly used for data transfer

4. **XOR Cipher** 
   - Bitwise XOR encryption with custom key
   - Symmetric encryption demonstration

5. **Substitution Cipher** 
   - Random alphabet substitution
   - Classic cryptography technique

6. **Reverse** 
   - Simple text reversal
   - Basic obfuscation method

**Encryption Features:**
- Encrypt/Decrypt mode toggle
- Custom key/shift input for applicable ciphers
- Copy encrypted/decrypted output
- Educational info boxes explaining each cipher
- Real-time processing

### 🎨 Design Features

**Dual Theme System:**
- 🟢 **Cyber Green** - Hacker aesthetic (default)
- 🔵 **Blue/Purple** - Modern tech theme
- Smooth theme switching with rotation animation

**Modern UI/UX:**
- Glassmorphism design
- Animated gradient backgrounds
- Smooth transitions and hover effects
- Responsive layout (mobile-friendly)
- Toast notifications for user feedback
- Tab-based navigation

## 🚀 Quick Start

### View Live
Simply visit the [live demo](https://djidelabdocs50-pixel.github.io/cs-tool-kit/)

### Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/djidelabdocs50-pixel/cs-tool-kit.git
cd cs-tool-kit
```

2. **Open in browser**
```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 📁 Project Structure

```
cs-tool-kit/
├── index.html          # Main HTML structure
├── style.css           # All styling with dual themes
├── script.js           # Password generation & encryption logic
└── README.md           # This file
```

## 💻 Usage

### Password Generator

1. Navigate to **Password Generator** tab
2. Set desired password length using slider
3. Select character types (uppercase, lowercase, numbers, symbols)
4. Click **"⚡ Generate Password"**
5. Copy password using clipboard button
6. **Advanced Options:**
   - Select password type (Random, Memorable, Passphrase, PIN)
   - Generate 10 passwords at once

### Encryption Tool

1. Navigate to **Encryption Tool** tab
2. Choose **Encrypt** or **Decrypt** mode
3. Enter your text in the input field
4. Select encryption method
5. Enter key/shift value if required
6. Click **"🔐 Encrypt Text"** or **"🔓 Decrypt Text"**
7. Copy result using clipboard button

### Theme Toggle

- Click the **🎨** button in the header to switch between Cyber Green and Blue/Purple themes

## 🔒 Security Notes

⚠️ **Educational Purpose**: This toolkit is designed for learning cryptography concepts and understanding password security.

**For Production Use:**
- Use established encryption libraries (CryptoJS, TweetNaCl, Web Crypto API)
- Implement server-side password hashing (bcrypt, Argon2)
- Never store passwords in plain text
- Use HTTPS for all password transmissions

**Password Best Practices:**
- Never reuse passwords across services
- Use a dedicated password manager
- Enable two-factor authentication (2FA)
- Update passwords regularly
- Avoid dictionary words and personal information

## 🧮 Technical Details

### Password Strength Calculation

The strength meter uses a comprehensive scoring system (0-100):
- **Length**: Rewards longer passwords (up to 25 points)
- **Character Diversity**: Scores based on character types used (up to 25 points)
- **Uniqueness**: Ratio of unique characters to total (up to 15 points)
- **Entropy**: Cryptographic strength calculation (up to 25 points)
- **Pattern Penalties**: Deductions for detected weaknesses

### Encryption Algorithms

| Cipher | Type | Strength | Best Use Case |
|--------|------|----------|---------------|
| Caesar | Substitution | ⭐ | Educational demos |
| ROT13 | Substitution | ⭐ | Spoiler hiding |
| Base64 | Encoding | ⭐ | Data encoding |
| XOR | Symmetric | ⭐⭐ | Basic encryption |
| Substitution | Substitution | ⭐⭐ | Learning cryptography |
| Reverse | Transformation | ⭐ | Simple obfuscation |

**Note:** These ciphers are for educational purposes. For real security, use modern encryption standards (AES, RSA).

## 🛠️ Built With

- **HTML5** - Semantic structure
- **CSS3** - Styling and animations
  - CSS Variables for theming
  - Flexbox & Grid layouts
  - Keyframe animations
  - Responsive design patterns
- **Vanilla JavaScript** - No dependencies
  - DOM manipulation
  - Cryptography implementations
  - Event handling
  - Clipboard API

## 🎯 Key Learning Outcomes

This project demonstrates:
- ✅ Advanced DOM manipulation
- ✅ Cryptography algorithm implementation
- ✅ CSS animations and transitions
- ✅ Theme switching systems
- ✅ Responsive design principles
- ✅ Clean code architecture
- ✅ User experience optimization

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)

## ⚡ Performance

- No external dependencies - Fast load times
- Optimized animations - 60fps smooth
- Efficient algorithms - Instant processing
- Local operation - No server calls (privacy-friendly)

## 🔗 Related Projects

- [Password Strength Checker](https://djidelabdocs50-pixel.github.io/pstrength/) - Advanced password analysis tool
- [Portfolio Website](https://djidelabdocs50-pixel.github.io/portfolio/) - Personal portfolio

## 📞 Contact & Connect

**Abdo** - Freshman CS Student | Web Developer | Cybersecurity Enthusiast

- **LinkedIn**: [Abdelkader Jidel](https://www.linkedin.com/in/abdelkader-jidel)
- **Twitter/X**: [@dj_ab_do](https://x.com/dj_ab_do)
- **Email**: djidelabdocs50@gmail.com
- **Portfolio**: [View Portfolio](https://djidelabdocs50-pixel.github.io/portfolio/)

## 📝 License

© 2026 Abdo. All Rights Reserved.

This project is available for educational purposes. Feel free to fork, learn from, and build upon this code.

## 🙏 Acknowledgments

- Cryptography concepts from classical cipher studies
- Design inspiration from modern security tools
- UI/UX patterns from contemporary web applications

## 🚀 Future Enhancements

Planned features:
- [ ] Hash generators (MD5, SHA-256, SHA-512)
- [ ] AES encryption implementation
- [ ] Password strength analyzer integration
- [ ] Export/import password lists
- [ ] Password history with local storage
- [ ] Multi-language support
- [ ] Dark/Light mode toggle

## 🐛 Known Issues

None currently. Please report any bugs via GitHub issues.

## 📈 Version History

- **v1.0.0** (2026) - Initial release
  - Password generator with 4 modes
  - 6 encryption ciphers
  - Dual theme system
  - Responsive design

---

**⚠️ Disclaimer**: This tool is for educational purposes. For production security needs, use industry-standard encryption libraries and follow established security best practices.

**Built with ❤️ for learning cybersecurity concepts**

*Making password security accessible and understandable*
