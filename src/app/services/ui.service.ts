import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  loading$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  showLoading() {
    this.loading$.next(true);
  }

  hideLoading() {
    this.loading$.next(false);
  }
}
