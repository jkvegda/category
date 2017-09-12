import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
 transform(value: any[], input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
            	return el.childName.toLowerCase().indexOf(input) > -1;
			})
        }
        return value;
    }
}