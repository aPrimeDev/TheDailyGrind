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

let myDate = new Date();
let myDay = myDate.getDay();
let today;
let coffee = {
  name: "Bubble Tea",
  pic: "image/bubble-tea.jpg",
  alt: "a picture of bubble tea",
  color: "purple",
  day: "Tuesday",
  desc: "The coldest most juicy milk youve ever drank, now with bursting balls :D",
};

switch (myDay) {
  case 0:
    today = "Sunday";
    break;

  case 1:
    today = "Monday";
    break;

  case 2:
    today = "Tuesday";
    break;

  case 3:
    today = "Wednesday";
    break;

  case 4:
    today = "Thursday";
    break;

  case 5:
    today = "Friday";
    break;

  case 6:
    today = "Satuday";
    break;
}

console.log(today);
