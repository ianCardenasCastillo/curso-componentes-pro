import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TimerService {

  private countdownTimerRef: any = null;
  public paused: boolean = true;
  private init: number = 0;
  private countdownEndSubject = new Subject<void>(); // Permite la creación de eventos
  private countdownSubject = new BehaviorSubject<number>(0);
  public countdownEnd$ = this.countdownEndSubject.asObservable(); // Solo permite la observación
  public countdown$ = this.countdownSubject.asObservable();


  constructor() { }


  destroy(): void {
    this.clearTimeout();
  }

  restartCountdown(init?: number) {
    if (init) {
      this.init = init;
    }
    if (this.init && this.init > 0) {
      this.paused = true;
      this.clearTimeout();
      this.countdownSubject.next(this.init);
    }
  }

  toogleCountdown() {
    this.paused = !this.paused;
    this.paused ? this.clearTimeout() : this.doCountdown();
  }

  private doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      this.countdownSubject.next(this.countdownSubject.getValue() - 1);
      this.processCountdown();
    }, 1000);
  }

  private processCountdown() {
    if (this.countdownSubject.getValue() === 0) {
      this.countdownEndSubject.next();
    }
    else {
      this.doCountdown();
    }
  }

  private clearTimeout() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
}
