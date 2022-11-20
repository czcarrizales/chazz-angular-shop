import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

  @Input() inputTest!: string;
  @Input() hiddenEgg!: string;
  @Output() newFireworkEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  displayFirework(value: string) {
    this.newFireworkEvent.emit(value)
  }

}
