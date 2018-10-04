

////////////// NOTIFICATIONS  /////////////

const $bell = $(".bell");
const $notification_output = $(".notification_output");
const $notification = $(".notification_container");
const $notification_message = $(".notification_message");
const $close_notification = $(".close_notification");
const $green_dot = $("#green_dot")

  //SHOW GREEN DOT WHEN THERE ARE NOTIFICATIONS

  if ($notification.length != 0) {
    $green_dot.css("display", "block");
  }

  // HIDE GREEN DOT WHEN USER CLICKS ON BELL ICON

  $bell.click(() => {
    $green_dot.css("display", "none")
  })


    /// SHOW NOTIFICATIONS

let clicks = 0;

$bell.click( () => {

  if(clicks == 0) {
  $notification_output.slideDown(600);
  clicks += 1;
  }
    // hide notifications

  else {
    $notification_output.slideUp(600);
    clicks -=1;
  }
});

  /// REMOVE NOTIFICATIONS

  $close_notification.click((event) => {

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

$(document).ready($alert_message.show(900));

$close_alert.click(() => {
    $alert_message.hide(800);
});


////////////// AREA CHART /////////////

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
        display: false
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
];


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
  }
];

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


////// MESSAGING A MEMBER FUNCTIOANLITY

const $submit_message = $("#send_message");
const $search_user = $("#search_user");
const $message_for_user = $("#message_for_user");
const $label_search_user = $("label[for='search_user']");
const $label_message_for_user = $("label[for='message_for_user']");
const $success_message = $("#message_success");

  // hide succes message

  $success_message.hide();

   // Search User autocomplete functionality

      /*Function for creating an array containing all the current members of the app */

      const list_current_members = [];

      function current_members (object) {
        for (let i = 0; i < object.length; i += 1) {
          list_current_members.push(object[i]["name"]);
        }
      }

      current_members(new_members);
      current_members(members_activity);

  // Auto complete 

   $search_user.autocomplete({
    source: list_current_members,
    minLength: 0,
    classes: {
      "ui-autocomplete": "background"
    }
  });

  // Submit event that activates validation of fields

$submit_message.click((event) => {

    //Remove required decoration if present
    $search_user.removeClass(["error"]);
    $message_for_user.removeClass(["error"]);
    $label_search_user.css("display", "none");
    $label_message_for_user.css("display", "none");
    

    // Display required fields decoration

    const field_validation =  (field, label_to_style) => {

      if (field.val() == "") {
        field.addClass("error");
        label_to_style.css("display", "block");
      }

    }

    field_validation($search_user, $label_search_user);

    field_validation($message_for_user, $label_message_for_user);

    event.preventDefault();

    // Succesful message display:

    if($message_for_user.val() != "" && $search_user.val() != "") {

      //Reset form fields
      $search_user.val("");
      $message_for_user.val("");

    //show success message
      $success_message.show(900).delay(2000).hide(900);
    }

});

////// LOCAL STORAGE FUNCTIONALITY

const settings = document.querySelector("#settings");
const checkboxes = document.querySelectorAll("input[type='checkbox']");

settings.addEventListener("click", () => {

  let a = event.target

  if (event.target.tagName == "INPUT") {

    if (a.parentNode.previousElementSibling.textContent == "Send Email Notifications") {
    }
    
    localStorage.setItem("checked", event.target.checked)
  }
});