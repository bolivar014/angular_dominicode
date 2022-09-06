import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNewItemComponent {
  @Input() label?: string;
  @Input() className = 'btn-primary';

  // Output de salida para enviar argumentos al Parent
  @Output() newItemEvent = new EventEmitter<string>();

  onAddNewItem(item: string): void {
    console.log('item -> ', item);
    // Enviamos argumento por medio de función emit hacía el componente padre app.component
    this.newItemEvent.emit(item);
  }

  counterRender(): boolean {
    console.log('render form...');

    return true;
  }
}
