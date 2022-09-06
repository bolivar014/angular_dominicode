import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `<ul>
                <li (click)="onCityClicked(city)" [ngClass]="{ 'alert alert-info': city === selection }">{{ city }}</li>
            </ul>`,
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  @Input() city!: string;
  @Input() selection?: string;
  @Output() cityClickedEvent = new EventEmitter<string>();

  onCityClicked(city: string): void {
    // 
    this.cityClickedEvent.emit(city);
  }

}
