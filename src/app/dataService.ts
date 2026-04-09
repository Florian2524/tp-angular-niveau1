import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData(): Observable<number[]> {
    return of([1, 2, 3, 4, 5, 6, 7, 8]);
  }
}
