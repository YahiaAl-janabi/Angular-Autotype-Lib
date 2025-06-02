import { Directive, ElementRef, Input, OnInit } from "@angular/core";

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

  private currentString = 0;
  private charIndex = 0;
  private typing = true;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.typeLoop();
  }

  private updateDisplay(text: string) {
    this.el.nativeElement.textContent = text + this.caret;
  }

  private typeLoop() {
    if (!this.strings.length) return;

    const current = this.strings[this.currentString];

    if (this.typing) {
      // Typing phase
      if (this.charIndex < current.length) {
        this.updateDisplay(current.slice(0, this.charIndex + 1));
        this.charIndex++;
        setTimeout(() => this.typeLoop(), this.typingSpeed);
      } else {
        // Switch to backspacing
        this.typing = false;
        setTimeout(() => this.typeLoop(), this.pauseAfterTyping);
      }
    } else {
      // Backspacing phase
      if (this.charIndex > 0) {
        this.charIndex--;
        this.updateDisplay(current.slice(0, this.charIndex));
        setTimeout(() => this.typeLoop(), this.backspaceSpeed);
      } else {
        // Move to next string
        this.typing = true;
        this.currentString = (this.currentString + 1) % this.strings.length;
        setTimeout(() => this.typeLoop(), this.pauseAfterBackspace);
      }
    }
  }
}
