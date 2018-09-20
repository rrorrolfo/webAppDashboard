
///////////   VARIABLES  /////////////////

const area_chart = document.querySelector("#area-chart");

///////////   Alerts  /////////////////

const $alert_message = $("#alerts");
const $close_alert = $("#close_alert");

$(document).ready($alert_message.show({
    duration: 900
}))

$close_alert.click(() => {
    $alert_message.hide();
 //   $close_alert.parent().remove("div");
});


////////////// Line chart /////////////

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


