import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {

  @Input() inputTest!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
