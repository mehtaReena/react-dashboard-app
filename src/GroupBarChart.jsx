import React from "react";

import { Bar } from "react-chartjs-2";


function GroupBarChart(props) {

    const dataBar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sediments',
             backgroundColor: '#a6a6a6',
            // background: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.5) 35px, rgba(255,255,255,.5) 70px)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [23, 59, 53, 69, 56, 55, 40]
          },
          {
            label: 'Water',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },

          {
            label: 'SediPhosphoursents %',
            backgroundColor: '#033e5033',
            borderColor:  'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [32, 19, 23, 20, 6, 5, 10]
          }
        ]
      };

    return (
        <div class="chart-box">
            <div className="card">
                <h2> Water</h2>
            <Bar
                data={dataBar}
                options={{
                    legend: {
                        position: "bottom",
                        align: "start"
                    },


                }}
            />


        </div>
        </div>
    );
}

export default GroupBarChart;