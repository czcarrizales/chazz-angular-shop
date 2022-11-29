import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spell-edit',
  templateUrl: './spell-edit.component.html',
  styleUrls: ['./spell-edit.component.scss']
})
export class SpellEditComponent implements OnInit {
  id!: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']
      this.editMode = params['id'] != null;
    })
  }

}
