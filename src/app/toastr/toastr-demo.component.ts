import { Component, OnInit } from '@angular/core';
import {ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-toastr-demo',
  templateUrl: './toastr-demo.component.html',
  styleUrls: ['./toastr-demo.component.css']
})
export class ToastrDemoComponent implements OnInit {
  pageTitle = 'Toastr Demo';
  private toasterService: ToasterService;
  constructor(toasterService: ToasterService) {
    this.toasterService = toasterService;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }
}
