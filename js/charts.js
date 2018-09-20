const area_chart = document.querySelector("#area-chart");

const myLineChart = new Chart(area_chart, {
    type: 'line',
    data: {
        label: "Traffic",
        xLabels:["Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        backgroundColor: "rgb(252, 232, 255)",
        borderColor: "rgb(252, 232, 255)",
        borderWidth: 4,
        pointBorderWidth: 15,
        showLine: true,
        datasets: [{
            data: [1,3,5,4,6,2,8]
        }]
    },

});

area_chart.textContent = myLineChart;