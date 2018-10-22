import { Pipe, PipeTransform } from '@angular/core';
import { PagesToNavigateClass } from 'src/models/pagesToNavigate.class';
/*
 * Will return array who property show is set to true 
*/
@Pipe({ name: 'showOnly' })
export class ShowOnlyPipe implements PipeTransform {
    transform(value: PagesToNavigateClass[]): PagesToNavigateClass[] {
        if (value == null || value === undefined) {
            return [];

        }
        return value.filter(data => data.show);
    }
}
