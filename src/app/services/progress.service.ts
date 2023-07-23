import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  private progressSubject = new BehaviorSubject<number>(1);
  public progress$ = this.progressSubject.asObservable();

  updateProgress(progress: number) {
    this.progressSubject.next(progress);
  }
}
