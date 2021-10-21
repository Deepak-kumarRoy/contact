import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postfilter'
})
export class PostfilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if(!searchText)
    return []
    
    return items.filter(function(search){
      return search.post.toLowerCase().indexOf(searchText.toLowerCase())>-1;
    });
    
  }

}
