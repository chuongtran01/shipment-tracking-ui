import {Injectable, signal} from '@angular/core';
import {PrincipalInterface} from "../../models/Principal";

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  readonly user = signal<PrincipalInterface | null>(null);

  constructor() {}
}
