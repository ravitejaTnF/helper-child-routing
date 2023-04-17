import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHelperService {

  constructor() { }

  getData(){
    return of([{"versionType":"PAPE","SKU":"Y159242","ISBN":"398423982348","title":"The power of tests"},
    {"versionType":"EBK","SKU":"AZ87893","ISBN":"9781138589964","title":"Biochemistry in the Lab"}
  ]);
  };
}
