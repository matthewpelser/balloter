import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
