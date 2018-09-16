import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
