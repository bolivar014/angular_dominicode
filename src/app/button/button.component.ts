import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button>{{ label }}</button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // Recibimos componentes hijos
  @Input() color?: string;
  @Input() label?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
