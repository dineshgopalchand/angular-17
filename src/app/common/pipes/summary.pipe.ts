import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, maxLimit: any) {
    console.log(value, maxLimit);
    if (!value) {
      return null;
    }
    const limit = maxLimit ? (maxLimit === 'full' ? value.length : maxLimit) : 150;
    if (limit && limit < value.length) {
      return value.substr(0, limit) + '...';
    }
    return value;

  }

}
