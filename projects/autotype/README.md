# Angular Autotype Directive

A customizable Angular directive that creates typewriter effects by automatically typing multiple strings, backspacing, and repeating in an infinite loop.

## Features

- ✨ **Infinite Loop**: Continuously cycles through multiple strings
- ⚡ **Customizable Speed**: Control typing and backspacing speeds
- 🎯 **Custom Caret**: Choose your preferred caret character
- 📦 **Standalone**: No additional dependencies required
- 🔧 **Angular 19+**: Built for modern Angular applications

## Installation

```bash
npm install @yahiaaljanabi/autotype
```

## Usage

### Basic Example

```typescript
import { Component } from "@angular/core";
import { AutotypeDirective } from "@yahiaaljanabi/autotype";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [AutotypeDirective],
  template: ` <h1 [libAutotype]="strings"></h1> `,
})
export class AppComponent {
  strings = ["Hello World!", "Welcome to Angular!", "Autotype Directive!"];
}
```

### Advanced Example with Custom Options

```typescript
@Component({
  selector: "app-demo",
  standalone: true,
  imports: [AutotypeDirective],
  template: `
    <div
      [libAutotype]="messages"
      caret="_"
      [typingSpeed]="80"
      [backspaceSpeed]="40"
      [pauseAfterTyping]="2000"
      [pauseAfterBackspace]="500"
      class="typewriter"
    ></div>
  `,
  styles: [
    `
      .typewriter {
        font-family: "Courier New", monospace;
        font-size: 2rem;
        color: #00ff00;
        background: #000;
        padding: 20px;
        min-height: 60px;
      }
    `,
  ],
})
export class DemoComponent {
  messages = [
    "Building amazing apps...",
    "With Angular 19...",
    "Using TypeScript...",
    "Made simple!",
  ];
}
```

## API Reference

### Directive: `[libAutotype]`

| Property                | Type       | Default | Description                                        |
| ----------------------- | ---------- | ------- | -------------------------------------------------- | ---------------------------------------- |
| `[libAutotype]`         | `string[]` | `[]`    | Array of strings to type and cycle through         |
| `caret`                 | `string`   | `'      | '`                                                 | Character to display as the typing caret |
| `[typingSpeed]`         | `number`   | `100`   | Speed of typing in milliseconds per character      |
| `[backspaceSpeed]`      | `number`   | `50`    | Speed of backspacing in milliseconds per character |
| `[pauseAfterTyping]`    | `number`   | `1000`  | Pause duration after completing a string (ms)      |
| `[pauseAfterBackspace]` | `number`   | `500`   | Pause duration after backspacing a string (ms)     |

### Example Configurations

#### Fast Typing

```html
<span
  [libAutotype]="['Fast!', 'Quick!', 'Speedy!']"
  [typingSpeed]="50"
  [backspaceSpeed]="25"
>
</span>
```

#### Slow and Dramatic

```html
<h2
  [libAutotype]="['Once upon a time...', 'In a land far away...']"
  [typingSpeed]="200"
  [pauseAfterTyping]="3000"
  caret="█"
></h2>
```

#### Custom Caret Characters

```html
<!-- Underscore caret -->
<div [libAutotype]="strings" caret="_"></div>

<!-- Block caret -->
<div [libAutotype]="strings" caret="█"></div>

<!-- No caret -->
<div [libAutotype]="strings" caret=""></div>

<!-- Multiple character caret -->
<div [libAutotype]="strings" caret="..."></div>
```

## Module Usage (Non-Standalone)

If you're not using standalone components:

```typescript
import { NgModule } from "@angular/core";
import { AutotypeDirective } from "@yahiaaljanabi/autotype";

@NgModule({
  imports: [AutotypeDirective],
  // ... other module configuration
})
export class YourModule {}
```

## Styling Tips

```css
/* Smooth caret blinking */
.autotype-container {
  font-family: "Courier New", monospace;
}

/* Custom animations */
@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.blinking-caret::after {
  content: "|";
  animation: blink 1s infinite;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Requirements

- Angular 19.2.0+
- TypeScript 5.0+

## License

MIT © [Yahia Aljanabi]

## Contributing

Issues and pull requests are welcome! Please visit the [GitHub repository](https://github.com/yourusername/angular-autotype) to contribute.

## Changelog

### v1.0.0

- Initial release
- Basic autotype functionality
- Customizable caret and timing options
- Standalone directive support
