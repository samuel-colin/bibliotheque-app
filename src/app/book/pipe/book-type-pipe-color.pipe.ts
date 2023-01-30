import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookTypePipeColor'
})
export class BookTypePipeColorPipe implements PipeTransform {

  transform(type: string): string {

    let color: string;
  
    switch (type) {
      case 'Roman':
        color = 'blue lighten-3';
        break;
      case 'Biographie':
        color = 'green lighten-3';
        break;
      case 'Poésie':
        color = 'orange lighten-3';
        break;
      default:
        color = 'grey lighten-3';
        break;
    }
  
    return 'chip ' + color;
  }

}
