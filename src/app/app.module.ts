import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { JustgageModule } from 'angular2-justgage';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';

import { GaugesComponent } from './gauges/gauges.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ToastrDemoComponent } from './toastr/toastr-demo.component';
import { ToastrFormComponent } from './toastr/toastr-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GaugesComponent,
    WelcomeComponent,
    FileUploadComponent,
    FormsComponent,
    ToastrDemoComponent,
    ToastrFormComponent
  ],
  imports: [
    JustgageModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent },
      {path: 'gauges', component: GaugesComponent },
      {path: 'fileupload', component: FileUploadComponent },
      {path: 'forms', component: FormsComponent },
      {path: 'toastr', component: ToastrDemoComponent },
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
