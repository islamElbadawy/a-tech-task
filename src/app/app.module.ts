import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CardComponent } from './components/card/card.component'
import { TableComponent } from './components/table/table.component'
import { ChartComponent } from './components/chart/chart.component'
import { QRCodeModule } from 'angularx-qrcode'
import { EchartsxModule } from 'echarts-for-angular'
import { TooltipModule } from 'primeng/tooltip'
import { ToastModule } from 'primeng/toast'
import { MessageService } from 'primeng/api'
import { TableModule } from 'primeng/table'
import { MultiSelectModule } from 'primeng/multiselect'
import { DropdownModule } from 'primeng/dropdown'
import { TagModule } from 'primeng/tag'
import { SliderModule } from 'primeng/slider'
import { ProgressBarModule } from 'primeng/progressbar'

@NgModule({
  declarations: [AppComponent, CardComponent, TableComponent, ChartComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    EchartsxModule,
    QRCodeModule,
    TooltipModule,
    ToastModule,
    TableModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
    SliderModule,
    ProgressBarModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
