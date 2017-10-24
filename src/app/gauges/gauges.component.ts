import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauges',
  templateUrl: './gauges.component.html',
  styleUrls: ['./gauges.component.css']
})
export class GaugesComponent implements OnInit {
  pageTitle = 'Gauges Demo';
  options = {
    min: 0,
    title: 'CPU'
  };
  max = 100;
  value = 67;

  constructor() { }

  ngOnInit() {
  }

}
