import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

    transform(value: any): string[] {
        return Object.keys(value)
            .filter((val: any) => isNaN(Number(val)))
            .map(key => String(value[key]));
    }

}
