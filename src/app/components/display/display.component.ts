import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnChanges {

  @Input() time: number = null;
  public minutes: string = '00';
  public seconds: string = '00';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.time) {
      this.minutes = `0${Math.trunc(changes.time.currentValue / 60)}`.substr(-2);
      this.seconds = `0${changes.time.currentValue - +this.minutes * 60}`.substr(-2);
    }
  }

  ngOnInit() { }

}
