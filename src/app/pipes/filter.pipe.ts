import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], text: string, column: string): any[] {

    if(text === '') return value;

    if(!value) return value

    return value.filter(item=> item[column].toLowerCase().includes(text.toLowerCase()))
  }

}
