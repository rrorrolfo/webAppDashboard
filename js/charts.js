
///////////   VARIABLES  /////////////////



///////////   Alerts  /////////////////

const $alert_message = $("#alerts");
const $close_alert = $("#close_alert");

$(document).ready($alert_message.show({
    duration: 900
}))

$close_alert.click(() => {
    $alert_message.hide({
        duration: 800
    });
});


////////////// Line chart /////////////

    new Chart(document.querySelector("#area-chart"), {
    type: 'line',
    data: {
        
        xLabels:["Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        
        datasets: [{
            data: [1345,2895,1935,2101,1875,2500, 2978],
        backgroundColor: "rgba(16, 123, 147, 0.144)",
        borderColor: "#107B93",
        borderWidth: 1,
        pointBorderWidth: 5,
        showLine: true
        }]
    },

    options: {
            legend: { display: false },
            title:{
                display: false,
                text: 'TRAFFIC'
              }
    }
});

////////////// DONUT CHART /////////////


new Chart(document.querySelector("#donut_chart"), {
    type: 'doughnut',
    data: {
      labels: ["Phones", "Tablets", "Desktop"],
      datasets: [
        {
          backgroundColor: ["#3cba9f", "#8e5ea2", "#107B93"],
          data: [650, 458, 1243]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'MOBILE USERS'
      }
    }
});


////////////// BARS CHARTS /////////////


new Chart(document.querySelector("#bar_chart"), {
    type: 'bar',
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [
        {
          label: "Traffic",
          backgroundColor: ["#107B93","#107B93","#107B93","#107B93","#107B93","#107B93","#107B93"],
          hoverBackgroundColor: "#062D36",
          data: [1345,2895,1935,2101,1875,2500, 2978]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
        text: 'DAILY TRAFFIC'
      }
    }
});


//////////////  NEW MEMBERS SECTION /////////////

const output_members = document.querySelector("#output_members")

const new_members = [
    {
    name: "Josh Silver",
    email: "josh-silver@example.com ",
    dateJoined: new Date('September 15, 2018'),
    photo: "../images/josh.jpg"
    },
    {
      name: "Anna Gold",
      email: "anna-gold@example.com ",
      dateJoined: new Date('September 16, 2018'),
      photo: "../images/anna.jpg"
    },
    {
      name: "Joaquim Cooper",
      email: "joaquim-cooper@example.com ",
      dateJoined: new Date('September 16, 2018'),
      photo: "../images/joaquim.jpg"
    },
    {
      name: "Lyona Vera",
      email: "lyonavera@example.com ",
      dateJoined: new Date('September 17, 2018'),
      photo: "../images/lyona.jpg"
        }
]


function printMembers() {
  for(let i = 0; i < new_members.length; i += 1) {
    
    console.log(new_members[i]["name"]);
  }
}

printMembers();