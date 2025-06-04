import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[libAutotype]",
  standalone: true,
})
export class AutotypeDirective implements OnInit {
  @Input("libAutotype") strings: string[] = [];
  @Input() caret: string = "|";
  @Input() typingSpeed: number = 100;
  @Input() backspaceSpeed: number = 50;
  @Input() pauseAfterTyping: number = 1000;
  @Input() pauseAfterBackspace: number = 500;
  @Input() enableBlinking: boolean = true;

  private currentString = 0;
  private charIndex = 0;
  private typing = true;
  private caretElement?: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setupCaretStyles();
    this.typeLoop();
  }

  private setupCaretStyles() {
    if (!this.enableBlinking) return;

    const style = this.renderer.createElement("style");
    style.textContent = `
      .autotype-caret {
        animation: autotype-blink 1s infinite;
      }
      
      @keyframes autotype-blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
      }
    `;

    if (!document.querySelector("style[data-autotype-styles]")) {
      this.renderer.setAttribute(style, "data-autotype-styles", "true");
      this.renderer.appendChild(document.head, style);
    }
  }

  private updateDisplay(text: string) {
    this.el.nativeElement.innerHTML = "";

    const textNode = this.renderer.createText(text);
    this.renderer.appendChild(this.el.nativeElement, textNode);

    if (this.caret) {
      this.caretElement = this.renderer.createElement("span");
      this.renderer.setProperty(this.caretElement, "textContent", this.caret);

      if (this.enableBlinking) {
        this.renderer.addClass(this.caretElement, "autotype-caret");
      }

      this.renderer.appendChild(this.el.nativeElement, this.caretElement);
    }
  }

  private typeLoop() {
    if (!this.strings.length) return;

    const current = this.strings[this.currentString];

    if (this.typing) {
      if (this.charIndex < current.length) {
        this.updateDisplay(current.slice(0, this.charIndex + 1));
        this.charIndex++;
        setTimeout(() => this.typeLoop(), this.typingSpeed);
      } else {
        this.typing = false;
        setTimeout(() => this.typeLoop(), this.pauseAfterTyping);
      }
    } else {
      if (this.charIndex > 0) {
        this.charIndex--;
        this.updateDisplay(current.slice(0, this.charIndex));
        setTimeout(() => this.typeLoop(), this.backspaceSpeed);
      } else {
        this.typing = true;
        this.currentString = (this.currentString + 1) % this.strings.length;
        setTimeout(() => this.typeLoop(), this.pauseAfterBackspace);
      }
    }
  }
}
