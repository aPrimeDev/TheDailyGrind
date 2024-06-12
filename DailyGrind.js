//alert("can you see this?");

//Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
//One unique image, with appropriate and matching content in the alt tag.
//A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
//A unique color that supports the image and paragraph of content
//The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.//
// pic - the src of the coffee
// alt - the alt tag for the coffee pic
// desc - a description of the coffee
// color - the color associated with the coffee
//day - the day of the week for coffee

function coffeeTemplate(coffee) {
  return `
       <p>
        <img
          src="${coffee.pic}"
          alt="${coffee.alt}" id="coffee"/>
        />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily
        coffee special is <strong class="feature">${coffee.name}</strong>,
        ${coffee.desc}
      </p>
      `;
}
let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console
console.log(queryString);

//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("day")) {
  //from querystring
  myDay = urlParams.get("day");
}

myDay = parseInt(myDay);

switch (myDay) {
  case 0:
    today = "Sunday";
    coffee = {
      name: "Bubble Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of bubble tea",
      color: "purple",
      day: "Sunday",
      desc: "The coldest most juicy milk youve ever drank, flavors abound :D",
    };

    break;

  case 1:
    today = "Monday";
    coffee = {
      name: "Mad Mocha",
      pic: "images/mocha.jpg",
      alt: "a picture of a mocha",
      color: "red",
      day: "Monday",
      desc: "The Monday Madness In A Chocolaty Coat",
    };

    break;

  case 2:
    today = "Tuesday";
    coffee = {
      name: "Tide Turner Tea",
      pic: "images/bubble-tea.jpg",
      alt: "a picture of blue tea",
      color: "light blue",
      day: "Tuesday",
      desc: "The blue waves wash away the stress of this week. With redbull infusion",
    };
    break;

  case 3:
    today = "Wednesday";
    coffee = {
      name: "The Windup",
      pic: "images/caramel-latte.jpg",
      alt: "a picture of mango lasse",
      color: "light orange",
      day: "Wednesday",
      desc: "Mango Lasse with pineapple and guava infusions",
    };
    break;

  case 4:
    today = "Thursday";
    coffee = {
      name: "The Hicksday",
      pic: "images/pumpkin-spice-latte.jpg",
      alt: "a picture of bubble tea",
      color: "brown",
      day: "Thursday",
      desc: "Warm Apple Cider with a lil bite o spice",
    };
    break;

  case 5:
    today = "Friday";
    coffee = {
      name: "YayYay Tea",
      pic: "images/frappaccino.jpg",
      alt: "a picture of bubble tea",
      color: "pink",
      day: "Friday",
      desc: "Our famous pink passionfruit blend with redbull and Club Soda",
    };
    break;

  case 6:
    today = "Satuday";
    coffee = {
      name: "Drip Recovery",
      pic: "images/drip.jpg",
      alt: "a picture of bubble tea",
      color: "black",
      day: "Saturday",
      desc: "Comeback from a freaknite with some black coffee. Burbon shots additional $5",
    };
    break;
}
//Places our coffee object on the page
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;
