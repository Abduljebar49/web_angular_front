import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() image=""
  @Input() name=""
  @Input() role=""
  constructor() { }

  ngOnInit(): void {
  }

}
