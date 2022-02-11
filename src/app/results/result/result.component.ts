import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input() result!: string;
  constructor() {}

  ngOnInit(): void {}
}
