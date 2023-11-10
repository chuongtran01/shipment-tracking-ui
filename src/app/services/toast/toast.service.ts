import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastParam, ToastType } from 'src/app/models/Toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private subject = new BehaviorSubject<ToastParam>({
    severity: ToastType.default,
    summary: '',
    detail: '',
    key: '',
  });

  sendToast(toastParam: ToastParam) {
    this.subject.next(toastParam);
  }

  receiveToast(): Observable<ToastParam> {
    return this.subject.asObservable();
  }
}
