import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.scss']
})
export class GamecontrolComponent implements OnInit {
  @Output() numberChanged = new EventEmitter<number>();
  i = 0;
  gameInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.gameInterval = setInterval(() => {
      this.i = this.i + 1
      this.numberChanged.emit(this.i)
    }, 1000)
  }

  stopGame() {
    clearInterval(this.gameInterval)
  }

}
