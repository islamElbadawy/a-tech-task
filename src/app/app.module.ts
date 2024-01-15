import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [AppComponent, CardComponent, TableComponent, ChartComponent],
  imports: [BrowserModule, AppRoutingModule, NgApexchartsModule, QRCodeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
