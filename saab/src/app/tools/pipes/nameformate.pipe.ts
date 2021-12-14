import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameformate'
})
export class NameformatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(args[0]==1){
      return "Mr. "+value;
    }else if(args[0]==2){
      return "Miss. "+value;
    }else {
      return "Dear. "+ value;
    }
    return null;
  }

}
