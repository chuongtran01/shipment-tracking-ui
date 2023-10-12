import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  private subject = new BehaviorSubject<string>('');

  constructor() {}

  sendSearchInput(message: string) {
    this.subject.next(message);
  }

  receiveSearchInput(): Observable<string> {
    return this.subject.asObservable();
  }
}
