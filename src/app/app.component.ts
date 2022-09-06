import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name?: string;
  title = 'Día 5 del reto';
  url = 'https://d.wattpad.com/story_parts/2/images/15948b36ef404a19901251797207.jpg';
  selection?: string;
  criteria = '';
  cities = ['Colombia', 'Barcelona', 'Perú', 'Ecuador'];

  // Metodo para agregar nuevas ciudades al array cities
  addNewCity(city: string): void {
    this.cities.push(city);
  }

  // Evento para determinar los click en la lista tipo UL
  onCityClicked(city: string): void {
    console.log(city);
    this.selection = city;
  }

  // Evento para limpiar la lista
  onClear(): void {
    this.selection = '';
  }
}
