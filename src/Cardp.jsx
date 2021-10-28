import React from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function Cardp(props) {
    let labelsData= ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const options = {
        chart: {

            type: 'column'
        },
        xAxis: {
            type: "category",
            labels: {
              style: {
                fontSize: "13px",
                fontFamily: "Verdana, sans-serif"
              }
            },
            categories: labelsData
          },
        yAxis: {
            title:{
                text:'Temperature',
                style: {
                    fontSize: '18px',
                    fontFamily: 'sans-serif',
                    color:'#FCFFC5'
                },


            },
            labels: {
                format: '{value}\xB0C',
                style: {
                   color: Highcharts.getOptions().colors[5]
                }
             },


        },
        title: {
            text: 'Weather chart',
            style: {
                fontSize: '25px',
                fontFamily: 'sans-serif',
                color:'#FCFFC5'
            },
        },

        legend: {
            layout: 'vertical',

            align: 'top',
             verticalAlign: 'right',
            borderWidth: 0,
            backgroundColor: (
                Highcharts.theme && Highcharts.theme.legendBackgroundColor)
                || '#FFFFFF'
        },

        series: [{
            name: 'Temperature',

            type: 'column',
            data: [65, 59, 80, 81, 56, 55, 40],
            tooltip: {
                valueSuffix: '\xB0C',
                style: {
                    color: Highcharts.getOptions().colors[5]
                 }
             }
        },


        ]
    }
    return (
        <div class="chart-box">

            <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    containerProps={{ className: "chart" }}
                />

        </div>
    );
}

export default Cardp;