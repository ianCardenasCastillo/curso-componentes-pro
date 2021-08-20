import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Input() init: number = null;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();
  public counter: number = 0;
  private countdownTimerRef: any = null;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`init value updated to: ${changes.init.currentValue}`);
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountDown();
    }
  }

  doCountDown() {
    this.countdownTimerRef = setTimeout(() => {
      this.counter--;
      this.processCountDown();
    }, 1000);
  }

  processCountDown() {
    this.onDecrease.emit(this.counter);
    console.log(`count is ${this.counter}`);

    if (this.counter === 0) {
      this.onComplete.emit();
      console.log(`Counter end`);
    } else {
      this.doCountDown();
    }
  }

  private clearTimeout() {
    if (this.countdownTimerRef) {
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }
}
