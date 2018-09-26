

////////////// NOTIFICATIONS  /////////////


    /// SHOW NOTIFICATIONS

const $bell = $(".bell");
const $notification_output = $(".notification_output");
const $notification = $("notification_container");
const $notification_message = $(".notification_message");
const $close_notification = $(".close_notification");


$bell.click( () => {
  $notification_output.slideDown({
    duration: 600
});
});

  /// REMOVE NOTIFICATIONS

  $(".close_notification").click((event) => {

    for (let i = 0 ; i < $notification_message.length ; i += 1) {

      if (event.target.previousElementSibling.innerHTML == $notification_message[i].innerHTML) {

        const parent = $notification_message[i].parentNode.parentNode;
        const child = $notification_message[i].parentNode;

        parent.removeChild(child);

      }
    }
});


///////////   ALERTS  /////////////////

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


////////////// AREA CHART FUNCTION /////////////

const dataset_hourly = [125,100,98,67,75,86,90,101,76,65,64,32,37,09, 45, 67, 78, 69, 98, 101, 98,87,78, 89];
const xlabels_hourly = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00",  "22:00",  "23:00"];

const dataset_daily = [1345,2895,1935,2101,1875,2500, 2978];
const xlabels_daily = ["Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const dataset_weekly = [5768, 4657, 5007, 5234, 4897, 4098, 5647, 6875, 6754];
const xlabels_weekly = ["3-9", "10-16", "17-23", "24-30", "1-6", "7-13", "14-20", "21-27"];

const dataset_monthly = [19834, 20234, 21039, 19578, 18039, 19010];
const xlabels_monthly = ["May", "June", "July", "August", "September", "October"];

    ////////Function to print an area chart /////////

function print_area_chart (data, xlabels) {

    let area_chart = new Chart(document.querySelector("#area-chart"), {
      type: 'line',
      data: {
          
          xLabels: xlabels,
          
          datasets: [{
              data: data,
              backgroundColor: "rgba(16, 123, 147, 0.144)",
              borderColor: "#107B93",
              borderWidth: 1,
              pointBorderWidth: 5,
              showLine: true
          }]
      },

      options: {
              legend: { display: false },
              elements: {
                line: {
                    tension: 0
                }
      }
    }
    });

  return area_chart
}

    

////////////// TIMEFRAME MENU FUNCTIONALITY /////////////

const timeFrameMenu = document.querySelector("#timeframe_menu");
const timeFrameList = document.querySelectorAll("#timeframe_menu button");

timeFrameMenu.addEventListener("click", (event) => {
  if (event.target === timeFrameList[0]) {
    print_area_chart(dataset_hourly, xlabels_hourly);
  } else if (event.target === timeFrameList[1]) {
    print_area_chart(dataset_daily, xlabels_daily);
  } else if (event.target === timeFrameList[2]) {
    print_area_chart(dataset_weekly, xlabels_weekly);
  } else if (event.target === timeFrameList[3]) {
    print_area_chart(dataset_monthly, xlabels_monthly);
  } 
});

print_area_chart(dataset_daily, xlabels_daily);

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
        display: false
      },
      layout: {
        padding: {

            right: 50
        }
    },
      legend: {
        position: "right",
        labels: {
          boxWidth: 14,
          fontSize: 14,
          padding: 15
          
        }
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
    photo: "images/josh.jpg"
    },
    {
      name: "Anna Gold",
      email: "anna-gold@example.com ",
      dateJoined: new Date('September 16, 2018'),
      photo: "images/anna.jpg"
    },
    {
      name: "Joaquim Cooper",
      email: "joaquim-cooper@example.com ",
      dateJoined: new Date('September 16, 2018'),
      photo: "images/joaquim.jpg"
    },
    {
      name: "Lyona Vera",
      email: "lyonavera@example.com ",
      dateJoined: new Date('September 17, 2018'),
      photo: "images/lyona.jpg"
        }
]


function printMembers() {
  const newMembers = [];
  let list = " ";

  for(let i = 0; i < new_members.length; i += 1) {
    list = '<div class="member">'
    list += '<img src="' + new_members[i]["photo"] +'">'
    list += '<div class="member_data_wrapper">'
    list += '<p class="member_name">'+ new_members[i]["name"] + '</p>'
    list += '<p class="member_email">' + new_members[i]["email"] + '</p>'
    list += '</div>'
    list += '<p class="date_joined">' + new_members[i]["dateJoined"].getDate() + '/' + new_members[i]["dateJoined"].getMonth() + '/' + new_members[i]["dateJoined"].getFullYear() + '</p>'
    list += '</div>'

    newMembers.push(list);
  }
  output_members.innerHTML = newMembers;
}

printMembers();


//////////////  MEMBERS ACTIVITY SECTION /////////////

const output_activity = document.querySelector("#output_activity");

const members_activity = [
  {
    name: "Jonas Ibsen",
    action: "commented",
    sectionOfActivity: "YourApp´s SEO Tips",
    timeOfActivity: 4,
    timeUnit: "hours",
    photo: "images/jonas.jpg" 
},
{
  name: "Victoria Adler",
  action: "commented",
  sectionOfActivity: "Facebook´s changes for 2016",
  timeOfActivity: 5,
  timeUnit: "hours",
  photo: "images/victoria.jpg" 
},
{
  name: "Daniel Benson",
  action: "commented",
  sectionOfActivity: "Facebook´s changes for 2016",
  timeOfActivity: 7,
  timeUnit: "hours",
  photo: "images/daniel.jpg" 
},
{
  name: "Leia Star",
  action: "commented",
  sectionOfActivity: "YourApp´s SEO Tips",
  timeOfActivity: 1,
  timeUnit: "day",
  photo: "images/leia.jpg" 
},
]

function print_activity () {

  const activity = [];
  let output = " ";

  for (let i = 0; i < members_activity.length; i += 1) {
    output = '<div class="member">'
    output += '<img src="' + members_activity[i]["photo"] + '">'
    output += '<div class="member_data_wrapper">'
    output += '<p class="activity_done">' + members_activity[i]["name"] + ' ' + members_activity[i]["action"] + ' on ' + members_activity[i]["sectionOfActivity"] + '</p>'
    output += '<p class="activity_time">' + members_activity[i]["timeOfActivity"] + ' ' + members_activity[i]["timeUnit"] + ' ago</p>'
    output += '</div><p class="activity_details">></p></div>'

    activity.push(output);
  }

  output_activity.innerHTML = activity;
}

print_activity();


