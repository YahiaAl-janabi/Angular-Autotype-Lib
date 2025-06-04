# 🎯 Angular Autotype

A lightweight Angular directive that creates smooth typewriter effects with a realistic blinking caret - perfect for hero sections, loading messages, and dynamic text displays.

![npm version](https://img.shields.io/npm/v/@yahiaaljanabi/autotype)
![npm downloads](https://img.shields.io/npm/dm/@yahiaaljanabi/autotype)
![license](https://img.shields.io/npm/l/@yahiaaljanabi/autotype)

## ✨ Features

- 🎬 **Smooth typewriter animation** - Types and deletes text naturally
- 💫 **Realistic blinking caret** - CSS-powered animation that looks like real cursors
- ⚙️ **Fully customizable** - Control speeds, pauses, and caret appearance
- 🚀 **Performance optimized** - Uses CSS animations and efficient DOM updates
- 📱 **Mobile friendly** - Works perfectly on all devices
- 🎯 **Angular 19+ ready** - Built with latest Angular standards
- 📦 **Lightweight** - Minimal bundle size impact

## 📦 Installation

```bash
npm install @yahiaaljanabi/autotype
```

## 🚀 Quick Start

### Step 1: Import the directive

```typescript
import { Component } from "@angular/core";
import { AutotypeDirective } from "@yahiaaljanabi/autotype";

@Component({
  selector: "app-demo",
  standalone: true,
  imports: [AutotypeDirective], // 👈 Add this
  template: ` <h1 [libAutotype]="messages"></h1> `,
})
export class DemoComponent {
  messages = [
    "Hello World!",
    "Welcome to Angular!",
    "Start building amazing apps!",
  ];
}
```

### Step 2: Use in your template

```html
<div [libAutotype]="['First message', 'Second message', 'Third message']"></div>
```

That's it! 🎉 Your typewriter effect is ready.

## 📖 Examples

### 🎬 Basic Typewriter Effect

```html
<h1
  [libAutotype]="['Hello Developer!', 'Welcome to our app!', 'Let\\'s build something great!']"
></h1>
```

### ⚡ Fast Typing with Custom Caret

```html
<p
  [libAutotype]="['Typing really fast...', 'And deleting even faster!']"
  [typingSpeed]="30"
  [backspaceSpeed]="20"
  [caret]="'▌'"
></p>
```

### 🎯 Hero Section Example

```html
<div class="hero">
  <h1>
    I am a
    <span
      [libAutotype]="['Developer', 'Designer', 'Creator', 'Problem Solver']"
      [typingSpeed]="80"
      [caret]="'|'"
      class="highlight"
    >
    </span>
  </h1>
</div>
```

### 🔧 Loading Messages

```html
<div
  [libAutotype]="['Loading...', 'Almost there...', 'Ready!']"
  [typingSpeed]="60"
  [pauseAfterTyping]="800"
  [enableBlinking]="true"
></div>
```

### 🎨 No Blinking Caret

```html
<div
  [libAutotype]="['Static cursor example']"
  [enableBlinking]="false"
  [caret]="'_'"
></div>
```

### 📱 Terminal Style

```html
<div class="terminal">
  <span class="prompt">$ </span>
  <span
    [libAutotype]="['ls -la', 'cd projects', 'npm start', 'code .']"
    [typingSpeed]="100"
    [caret]="'█'"
    [pauseAfterTyping]="1500"
  >
  </span>
</div>
```

## ⚙️ Configuration Options

| Property              | Type       | Default | Description                                         |
| --------------------- | ---------- | ------- | --------------------------------------------------- | ----------------------------------- |
| `libAutotype`         | `string[]` | `[]`    | **Required** - Array of strings to cycle through    |
| `caret`               | `string`   | `'      | '`                                                  | Character used as the typing cursor |
| `typingSpeed`         | `number`   | `100`   | Milliseconds between each character when typing     |
| `backspaceSpeed`      | `number`   | `50`    | Milliseconds between each character when deleting   |
| `pauseAfterTyping`    | `number`   | `1000`  | How long to wait after finishing typing (ms)        |
| `pauseAfterBackspace` | `number`   | `500`   | How long to wait after deleting all text (ms)       |
| `enableBlinking`      | `boolean`  | `true`  | Whether the caret should blink (uses CSS animation) |

## 🎨 Styling Tips

### Custom Caret Styles

```css
/* Make caret more visible */
.my-autotype .autotype-caret {
  color: #ff6b6b;
  font-weight: bold;
}

/* Different blink speed */
.my-autotype .autotype-caret {
  animation: autotype-blink 0.5s infinite;
}
```

### Highlight Effect

```css
.highlight {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

## 🛠️ Advanced Usage

### Dynamic String Updates

```typescript
export class DynamicComponent {
  messages = ["Initial message"];

  updateMessages() {
    this.messages = ["New message", "Updated content", "Fresh text!"];
  }
}
```

### Conditional Autotype

```html
<div
  *ngIf="showTypewriter"
  [libAutotype]="messages"
  [typingSpeed]="speed"
></div>
```

## 🔧 Troubleshooting

### Common Issues

**Q: The text doesn't appear**

```typescript
// ✅ Make sure you import the directive
imports: // ✅ Provide an array of strings
[AutotypeDirective][libAutotype] = "['Hello']"; // Not just "Hello"
```

**Q: Caret doesn't blink**

```html
<!-- ✅ Make sure blinking is enabled -->
<div [libAutotype]="messages" [enableBlinking]="true"></div>
```

**Q: Animation is too fast/slow**

```html
<!-- ✅ Adjust speeds to your preference -->
<div [libAutotype]="messages" [typingSpeed]="200" <!-- Slower typing -->
  [backspaceSpeed]="100">
  <!-- Slower deleting -->
</div>
```

## 🤝 Contributing

Found a bug or want to contribute?

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT © Yahia Aljanabi

---

**Made with ❤️ for the Angular community**

[Report Issues](https://github.com/yahiaaljanabi/angular-autotype-lib/issues) | [Request Features](https://github.com/yahiaaljanabi/angular-autotype-lib/issues/new)
