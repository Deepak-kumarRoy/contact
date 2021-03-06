import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityfilter'
})
export class CityfilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    
    if(!searchText)
    return []

    return items.filter(function(search){
      return search.location.toLowerCase().indexOf(searchText.toLowerCase())>-1;
    });
    
  }

}
