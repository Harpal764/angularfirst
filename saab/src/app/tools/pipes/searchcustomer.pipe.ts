import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchcustomer'
})
export class SearchcustomerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let data = value.filter((e: any) =>

      e.name.startsWith(args[0])||(e.age==args[0]))
      return data;


  }

}
