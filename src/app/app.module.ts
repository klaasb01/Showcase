import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JustgageModule } from 'angular2-justgage';
import { AppComponent } from './app.component';
import { GaugesComponent } from './gauges/gauges.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ToasterService, ToastComponent, ToasterModule} from 'angular2-toaster';

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
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
