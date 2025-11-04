# 🌀 cli-spinner-lite

[![npm version](https://img.shields.io/npm/v/cli-spinner-lite.svg)](https://www.npmjs.com/package/cli-spinner-lite)
[![npm downloads](https://img.shields.io/npm/dm/cli-spinner-lite.svg)](https://www.npmjs.com/package/cli-spinner-lite)
[![license](https://img.shields.io/npm/l/cli-spinner-lite.svg)](LICENSE)

A **tiny**, dependency-free CLI spinner for Node.js — perfect for showing progress during async tasks, installs, or API calls.

---

## 🚀 Installation

```bash
npm install cli-spinner-lite
```

---

## 🧠 Usage Example

Use `cli-spinner-lite` to display a simple, animated spinner during any asynchronous process.

```js
import Spinner from "cli-spinner-lite";

const spin = new Spinner("Fetching data...");
spin.start();

setTimeout(() => {
  spin.updateText("Still working...");
}, 2000);

setTimeout(() => {
  spin.stop("Completed successfully!");
}, 4000);
```

When you run this script in your terminal, the spinner will animate as your code runs:

```
⠋ Fetching data...
⠙ Still working...
✔ Completed successfully!
```

That’s it — no dependencies, just a clean visual indicator for your CLI tasks.

---

## ⚙️ API Reference

### `new Spinner(text?, frames?)`

Creates a new spinner instance.

| Parameter | Type       | Description                           |
| --------- | ---------- | ------------------------------------- |
| `text`    | `string`   | Message text shown beside the spinner |
| `frames`  | `string[]` | Custom animation frames (optional)    |

### `.start([text])`

Starts the spinner. Optionally updates the message.

### `.updateText(text)`

Updates the displayed message while spinning.

### `.stop([message])`

Stops the spinner and prints a success checkmark (`✔`).

### `.fail([message])`

Stops the spinner and prints a failure cross (`✖`).

### `.setStyle(frames)`

Switches the spinner style dynamically.

---

## 🎨 Spinner Styles

`cli-spinner-lite` includes a few built-in animation frame sets you can use:

```js
import Spinner, { spinners } from "cli-spinner-lite";

const spin = new Spinner("Processing...", spinners.line);
spin.start();
setTimeout(() => spin.stop("Done!"), 2000);
```

**Available presets:**

```js
export const spinners = {
  dots: ["⠋", "⠙", "⠸", "⠴", "⠦", "⠇"],
  line: ["-", "\\", "|", "/"],
  pulse: ["·", "●", "·", "○"],
};
```

---

## 🪶 Why cli-spinner-lite?

✅ Zero dependencies  
✅ Works on macOS, Linux, and Windows  
✅ Small (~150 lines)  
✅ Customizable spinner frames  
✅ Perfect for any CLI script or Node.js tool

---

## 📦 Example CLI Script

```js
#!/usr/bin/env node
import Spinner from "cli-spinner-lite";

const spinner = new Spinner("Running heavy task...");
spinner.start();

setTimeout(() => {
  spinner.stop("Task completed!");
}, 3000);
```

Output:

```
⠋ Running heavy task...
✔ Task completed!
```

---

## 🧪 Local Testing

To test before publishing:

```bash
npm link
```

Then in another project:

```bash
npm link cli-spinner-lite
```

---

## 📦 Publish to npm

1. Log in:
   ```bash
   npm login
   ```
2. Publish:
   ```bash
   npm publish --access public
   ```
3. Test it anywhere:
   ```bash
   npm install cli-spinner-lite
   ```

---

## 📄 License

MIT © 2025 [Your Name]

---

### ⭐ If you like this package

Give it a ⭐ on [GitHub](https://github.com/dev-mas-ud/cli-spinner-lite) or share it on npm!
