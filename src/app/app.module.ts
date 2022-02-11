import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { ResultComponent } from './results/result/result.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, ResultsComponent, ResultComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [UpperCasePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
