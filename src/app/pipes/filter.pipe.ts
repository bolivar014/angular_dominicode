import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../services/data.service';

@Pipe({
    name: 'filter',
})

export class FilterPipe implements PipeTransform {
    //
    transform(cities: City[], arg: string): City[] {
        //
        if(!arg || arg?.length < 3) return cities;

        let result: City[] = [];

        for(const citi of cities) {
            if(citi.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                result = [...result, citi];
            }
        }

        //
        return result;
    }
}
