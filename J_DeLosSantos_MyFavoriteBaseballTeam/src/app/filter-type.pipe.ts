import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterType',
  standalone: true
})
export class FilterTypePipe implements PipeTransform {

  transform(contentList: Content[], type?: string) {
    let filteredList = [];
    if(type === 'none'){
        filteredList = contentList.filter(content=>{
            return content.type === null;
        })
    } else{
        filteredList = contentList.filter(content=>{
            return content.type === type;
        })
    }
    return filteredList;
  }

}
