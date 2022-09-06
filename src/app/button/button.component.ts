import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button [ngStyle]="{ 'background-color': color }">{{ label }}</button>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy {
  // Recibimos componentes hijos
  @Input() color?: string;
  @Input() label?: string;
  @Input() selection?: string;
  
  constructor() { }
  
  // 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes ->', changes)
  }

  // 
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // 
  ngOnDestroy(): void {
    console.log('onDestroy');
  }

  counterRender(): boolean {
    console.log('render form Button...');

    return true;
  }
}
