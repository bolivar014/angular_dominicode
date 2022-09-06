import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `<ul class="list-group">
                <li class="list-group-item mt-1" (click)="onCityClicked(city)" [ngClass]="{ 'active': city === selection }">{{ city | titlecase }}</li>
            </ul>
            `,
  styleUrls: ['./cities.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection?: string;
  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city: string): void {
    //
    this.cityClickedEvent.emit(city);
  }

  counterRender(): boolean {
    console.log('render cities...');

    return true;
  }
}
