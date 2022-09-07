import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface City {
  name: string;
  _id: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private readonly API = environment.api;
  constructor(private readonly http: HttpClient) { }

  // Metodo que permitira agregar nuevas ciudades
  addNewCity(city: City): Observable<City> {
    const body = { name: city };
    return this.http.post<City>(this.API, body);
  }

  // Metodo para listar ciudades
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.API);
  }

  // Metodo para modificar una ciudad
  updateCity(city: City): Observable<void> {
    const body = { name: city.name };
    return this.http.put<void>(`${this.API}/${city._id}`, body);
  }

  // Metodo para eliminación de registros
  deleteCity(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }



}
