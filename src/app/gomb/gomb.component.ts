import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gomb',
  templateUrl: './gomb.component.html',
  styleUrls: ['./gomb.component.css']
})
export class GombComponent implements OnInit {
  @Input() felirat: string;
  @Output() press = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
