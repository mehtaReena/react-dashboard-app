import React from "react";

import { Bar } from "react-chartjs-2";

function BarChart(props) {

    const dataBar = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'water',
            barPercentage:0.6,
            backgroundColor: '#EC932F',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },

        ]
      };
    return (
        <div class="chart-box">
           <div className="card">
                <h2> Sedimentes</h2>
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

export default BarChart;