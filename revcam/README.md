# String Converter Web App

A minimal web application for basic string manipulation with two functions: Camel Case conversion and String Reversal.


## Features

- **Camel Case Conversion**: Converts normal strings to camelCase format
  - Example: "hello world" → "helloWorld"
- **String Reversal**: Reverses the input string
  - Example: "hello" → "olleh"

## Usage

1. Enter any string in the input field
2. Click either button:
   - **Camel Case**: Converts to camelCase format
   - **Reverse**: Reverses the string characters
3. View result in the output field

## Technologies Used

- HTML5
- CSS3 (Flexbox for layout)
- Vanilla JavaScript

## Code Structure

```bash
/
├── index.html      # Main HTML file
├── style.css       # Styling (embedded in HTML in current implementation)
└── script.js       # JavaScript logic (embedded in HTML)
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/string-converter.git
   ```
2. Open `index.html` in any modern web browser

## Customization

To add new string processing functions:
1. Add a new button with `data-action="newFunction"`
2. Add a new method to the `processors` object in JavaScript:
   ```javascript
   processors.newFunction = str => {
     // Your processing logic
     return processedString;
   }
   ```

---

**Note**: This is a simple educational project demonstrating basic web development concepts. Feel free to modify and extend it according to your needs!
