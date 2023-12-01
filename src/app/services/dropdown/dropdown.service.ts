import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private subject = new BehaviorSubject<string>('');

  constructor() {}

  sendSelectedOption(message: string) {
    this.subject.next(message);
  }

  receiveSelectedOption(): Observable<string> {
    return this.subject.asObservable();
  }
}
