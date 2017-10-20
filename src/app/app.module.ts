import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaugesComponent } from './gauges/gauges.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GaugesComponent,
    WelcomeComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent },
      {path: 'gauges', component: GaugesComponent },
      {path: 'fileupload', component: FileUploadComponent },
      {path: '', redirectTo: 'gauges', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
