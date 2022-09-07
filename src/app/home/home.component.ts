import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Día 5 del reto';
  url = 'https://d.wattpad.com/story_parts/2/images/15948b36ef404a19901251797207.jpg';
  selection!: City;
  criteria = '';
  cities: City[] = [];

  constructor(private readonly dataSvc: DataService) {}

  ngOnInit(): void {
    // Obtenemos el get de ciudades y los enviamos al array cities
    this.dataSvc.getCities()
    .subscribe(resp => {
      this.cities = [...resp];
    })
  }

  // Metodo para agregar nuevas ciudades al array cities
  addNewCity(city: string): void {
    // this.cities.push(city);
    this.dataSvc.addNewCity(city).subscribe(resp => {
      this.cities.push(resp);
    });
  }

  // Evento para determinar los click en la lista tipo UL
  onCitySelected(city: City): void {
    console.log(city);
    this.selection = city;
  }

  // Evento para eliminación de id
  onCityDelete(id: string): void {
    console.log('el id a eliminar, es: ', id);
  }

  // Evento para limpiar la lista
  onClear(): void {
    this.selection = {
      _id: '',
      name: ''
    };
  }


}
