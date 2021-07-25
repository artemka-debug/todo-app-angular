import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cssVariable'
})
export class CssVariablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `var(--${value})`;
  }

}
