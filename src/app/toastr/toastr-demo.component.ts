import { Component, OnInit, AfterViewInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-toastr-demo',
  templateUrl: './toastr-demo.component.html',
  styleUrls: ['./toastr-demo.component.css']
})
export class ToastrDemoComponent implements OnInit, AfterViewInit {
  pageTitle = 'Toastr Demo';

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }
  showSuccess() {
    this.toastr.success('You are awesome!', 'Success!');
  }
  showError() {
    this.toastr.error('This is not good!', 'Oops!');
  }

  showWarning() {
    this.toastr.warning('You are being warned.', 'Alert!');
  }

  showInfo() {
    this.toastr.info('Just some information for you.');
  }

  showCustom() {
    this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
  }
  ngOnInit() {}
  ngAfterViewInit() { }
}
