import { Component, ViewChild } from '@angular/core'
import { EChartsOption } from 'echarts'
import { BarChart, LineChart } from 'echarts/charts'
import { TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent {
  readonly echartsExtentions: any[]
  echartsOptions: EChartsOption = {}

  constructor() {
    this.echartsExtentions = [LineChart, TooltipComponent, GridComponent, LegendComponent]
  }

  ngOnInit() {
    this.echartsOptions = {
      title: {
        text: 'Ticket Usage Statistics',
      },
      tooltip: {
        trigger: 'axis',
        triggerOn: 'mousemove|click',
        backgroundColor: '#1E1B39',
        axisPointer: {
          type: 'line',
          label: {
            backgroundColor: '#1E1B39',
          },
          axis: 'auto',
          animation: 'auto',
          animationDurationUpdate: 200,
          animationEasingUpdate: 'exponentialOut',
        },
        formatter: (params: any) => {
          return `
          <span class='text-[12.112px] text-[#E5E5EF]'>${params[0].data} usages</span><br>
                  <span class='flex items-center me-1 text-[8.074px] text-mainColor font-medium'> <span class='rotate-[-90deg] rtl:rotate-0 me-1'><svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <ellipse cx="4.74882" cy="4.83807" rx="4.14588" ry="4.03717" fill="#8A74F9"/>
                  <path d="M5.67989 4.4061L5.56864 4.51443C4.97335 5.09411 4.37801 5.67384 3.7826 6.25363C3.66216 6.37092 3.51984 6.39661 3.3777 6.33256C3.24077 6.26986 3.16562 6.1551 3.18558 6.01635C3.20351 5.9161 3.25208 5.82346 3.32494 5.75051C3.90062 5.17979 4.48376 4.61634 5.06464 4.05069L5.17467 3.94354C5.13917 3.93763 5.10337 3.93357 5.06742 3.93137C4.83451 3.93036 4.60143 3.93256 4.36869 3.92968C4.18438 3.92765 4.05716 3.80411 4.05474 3.63241C4.05231 3.44515 4.16772 3.31958 4.36054 3.3184C4.89624 3.31502 5.43165 3.31463 5.96677 3.31722C6.18319 3.3184 6.30502 3.43231 6.30902 3.64069C6.31885 4.15795 6.32469 4.67526 6.32655 5.19264C6.32724 5.38226 6.20055 5.4938 6.00703 5.49228C5.82446 5.49059 5.70436 5.37634 5.6988 5.19213C5.6929 4.97344 5.69238 4.75458 5.68908 4.53572C5.68839 4.50125 5.68388 4.46745 5.67989 4.4061Z" fill="white"/>
                  </svg></span><span> % ${(params[0].data * 0.1).toFixed(2)}</span> </span>`
        },
        borderRadius: 8,
        borderColor: '#1E1B39',
      },
      grid: {
        left: '3%',
        right: '3%',
        bottom: '1%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'nov', 'Dec'],
          axisTick: {
            show: false,
          },
        },
      ],
      yAxis: {
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          name: 'User',
          type: 'line',
          stack: 'Total',
          smooth: true,
          showSymbol: false,
          emphasis: {
            focus: 'series',
          },
          data: [140, 32, 101, 64, 90, 140, 50, 32, 101, 64, 132, 40],
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(138, 116, 249, 0.26)', // Start color
                },
                {
                  offset: 1,
                  color: 'rgba(138, 116, 249, 0.00)', // End color
                },
              ],
            },
          },
          lineStyle: {
            width: 3,
            color: '#8A74F9', // Line color
          },
        },
      ],
    }
  }
}
