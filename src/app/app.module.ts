import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/chart/chart.component';
import { QRCodeModule } from 'angularx-qrcode';
import { EchartsxModule } from 'echarts-for-angular';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [AppComponent, CardComponent, TableComponent, ChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EchartsxModule,
    QRCodeModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
