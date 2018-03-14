import { NgModule } from "@angular/core";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DetailComponent } from "./detail/detail.component";

@NgModule({
  declarations: [
    DashboardComponent,
    DetailComponent,
  ],
  exports: [
    DashboardComponent,
    DetailComponent,
  ],
})
export class HomeModule { }
