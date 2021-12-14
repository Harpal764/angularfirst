import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderformate'
})
export class GenderformatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    switch(value){
      case 1:
        return "Male";
      case 2:
        return "Female";
      default:
        return "Other";

    }

  }

}
