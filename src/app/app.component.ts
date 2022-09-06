import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  name?: string;
  title = 'Día 5 del reto';
  url = 'https://d.wattpad.com/story_parts/2/images/15948b36ef404a19901251797207.jpg';

  selection?: string;

  //
  cities = ['Colombia', 'Barcelona', 'Perú', 'Ecuador'];

  // Función que retorna los cambios
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes... -> ', changes);
  }

  // Metodo que siempre se ejecuta de primero cuando no existe Input y Output
  // Se utiliza para consumir las apis - antes de cargar las vistas
  ngOnInit(): void {
    console.log('ngOnInit... -> ');
  }

  // Se ejecuta cuando se destruye el componente...
  ngOnDestroy(): void {
    console.log('Destroy... -> ');
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
