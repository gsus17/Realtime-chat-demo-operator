import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any): any {
    if (!images) {
      return 'assets/img/noimage.png';
    }
    if (images) {
      return images;
    } else {
      return 'assets/img/noimage.png';
    }
  }

}
