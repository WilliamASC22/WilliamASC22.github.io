
// const peopleArray = people.results;
// const body = document.getElementById("randomizer");

// for (let i = 0; i < peopleArray.length; i++) {
//   let personDiv = document.createElement("div");
//   personDiv.className = "person";

//   let personImage = document.createElement("img");
//   personImage.src = peopleArray[i].picture.large;

//   let personName = document.createElement("h2");
//   personName.innerHTML =
//     peopleArray[i].name.first + " " + peopleArray[i].name.last;

//   let personEmail = document.createElement("p");
//   personEmail.innerHTML = peopleArray[i].email;

//   personDiv.appendChild(personImage);
//   personDiv.appendChild(personName);
//   personDiv.appendChild(personEmail);

//   body.appendChild(personDiv);
// }





// // Accessing people data from data.js
// const peopleArray = people.results;

// //Accessing elements on the HTML file (image, name heading, email heading)
// const personImage = document.querySelector("#personImage");
// const personName = document.querySelector("#personName");
// const personEmail = document.querySelector("#personEmail");

// // Accessing the randomizer button in the HTML file
// const randomizerButton = document.querySelector("#randomizer");

// /* 
//   Event Handler Function for the Randomizer Button
//   Everytime the button is clicked, the code below will run
//   In other words, the code inside the function will run
// */
// randomizerButton.onclick = function (e) {
//   // Prevents the page from reloading
//   e.preventDefault();

//   // Gets a random number between 0 and the length of the data array
//   let randomIndex = Math.floor(Math.random() * peopleArray.length);

//   /* 
//     References a random person object from the people array]
//     Using the random index we generated above
//   */
//   let randomPerson = peopleArray[randomIndex];

//   //Changes the image source to the random person's image
//   personImage.src = randomPerson.picture.large;

//   //Changes the name heading to the random person's name
//   personName.innerHTML = randomPerson.name.first + " " + randomPerson.name.last;

//   //Changes the email heading to the random person's email
//   personEmail.innerHTML = randomPerson.email;
// };






// const people = {
//     results: [
//       {
//         gender: "male",
//         name: {
//           title: "Mr",
//           first: "William",
//           last: "Bhuiyan",
//         },
//         location: {
//           city: "New York City",
//           state: "New York",
//           country: "United States",
//           postcode: 1111,
//           },
//           timezone: {
//             offset: "-5:00",
//             description: "Eastern Time Zone",
//           },
//         email: "wbhuiyan@stu.allstarcode.org",
//         age: 17,
//         phone: "646-915-4826",
//       },   
//     ]
// }








// const people = {
//     results: [
//       {
//         gender: "female",
//         name: {
//           title: "Ms",
//           first: "Kristin",
//           last: "Hawkins",
//         },
//         location: {
//           street: {
//             number: 2548,
//             name: "W Dallas St",
//           },
//           city: "Bendigo",
//           state: "South Australia",
//           country: "Australia",
//           postcode: 5778,
//           coordinates: {
//             latitude: "-89.3359",
//             longitude: "24.1982",
//           },
//           timezone: {
//             offset: "-10:00",
//             description: "Hawaii",
//           },
//         },
//         email: "kristin.hawkins@example.com",
//         login: {
//           uuid: "86e14e29-0383-498b-9235-548298ed24c2",
//           username: "goldengoose371",
//           password: "canuck",
//           salt: "mIoLHRKk",
//           md5: "83277e6146dd95ebc5add09de1e39866",
//           sha1: "e4f80121d224a359ea2ca9a0c78664a97f7a38f2",
//           sha256:
//             "9c3dc6c31053de388d0f9f5158d03d39e5c0e88afee08dced760ebc1ad087bc2",
//         },
//         dob: {
//           date: "1973-03-28T14:39:55.874Z",
//           age: 49,
//         },
//         registered: {
//           date: "2005-06-25T12:44:16.655Z",
//           age: 17,
//         },
//         phone: "05-8812-8181",
//         cell: "0467-266-185",
//         id: {
//           name: "TFN",
//           value: "879155907",
//         },
//         picture: {
//           large: "https://randomuser.me/api/portraits/women/60.jpg",
//           medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
//           thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
//         },
//         nat: "AU",
//       },
//     ]
// }



infoList()
const data=[
    {
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "William",
                "last": "Bhuiyan",
            "location": {
                "city": "New York City",
                "state": "New York",
                "country": "United States",
            },
            "timezone": {
                "offset": "-5:00",
                "description": "Eastern Time Zone",
            },
            "email": "wbhuiyan@stu.allstarcode.org",
            "age": 17,
            "phone": "646-915-4826",
            }
        }   
    ]
    }
]

function infoList() {
    console.log(data["results"])
}