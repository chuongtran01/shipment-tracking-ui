import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  public setData (key: string, value: string) {
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string): string | null {
    let data = localStorage.getItem(key) || null;

    if (!data) return null;

    return this.decrypt(data);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

  private encrypt(txt: string): string {
    return CryptoJS.AES.encrypt(txt, environment.secretKey).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, environment.secretKey).toString(CryptoJS.enc.Utf8);
  }
}
