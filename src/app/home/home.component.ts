import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
  onCitySelected(city: string): void {
    console.log(city);
    this.selection = city;
  }

  // Evento para limpiar la lista
  onClear(): void {
    this.selection = '';
  }

  // Evento para eliminación de id
  onCityDelete(id: string): void {
    console.log('el id a eliminar, es: ', id);
  }
}
