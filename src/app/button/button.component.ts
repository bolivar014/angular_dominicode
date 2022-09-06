import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<button [ngStyle]="{ 'background-color': color }">{{ label }}</button>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // Recibimos componentes hijos
  @Input() color?: string;
  @Input() label?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
