import { Component, Input, OnInit } from '@angular/core';
import { ExerciseObject } from 'src/app/exercises-service/exercises-service.model';

@Component({
  selector: 'app-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.scss']
})
export class ApprovalListComponent implements OnInit {

  @Input() exercises : ExerciseObject[] = [];
  @Input() ngStyle : {[klass : string] : any} = {};

  constructor() { }

  ngOnInit() {
  }

}
