// let profileContainer= document.getElementById("container", "h1")
// let searchBtn= document.getElementById("search")

// let profileName, 
// profileImg, 
// profileDOB, 
// profileLocation, 
// profileEmail, 
// profileLogin,
// profileRegistered, 
// profileCellPhone

// searchBtn.onclick= function(event){
//     event.preventDefault()

//     let searchBox= document.getElementById("profile_num")
//     let searchValue= parseInt(searchBox.value)

//     if (Number.isInteger(searchValue) == false){
//         alert("Please enter a number between 1 and 15!")
//     }
//     else if (searchValue < 1 || searchValue > 15){
//         alert("Please enter a number between 1 and 15!")
//     }
//     else{
//         profileContainer.innerHTML= ""

//         let indexValue= searchValue- 1

//         profileName= document.createElement("h1")
//         profileName.innerHTML= 
//             data[indexValue].name.title+ " "+
//             data[indexValue].name.first+ " "+
//             data[indexValue].name.last

//         profileImg= document.createElement("img")
//         profileImg.src= 
//             data[indexValue].picture.large

//         profileDOB= document.createElement("h2")
//         profileDOB.innerHTML= 
//             "DoB: "+ data[indexValue].dob.date+ 
//             "&emsp; Age: "+ data[indexValue].dob.age

//         profileLocation= document.createElement("h2")
//         profileLocation.innerHTML= 
//             "Location: "+
//             data[indexValue].location.city+ ", "+
//             data[indexValue].location.state+ ", "+
//             data[indexValue].location.country+ " "+
//             data[indexValue].location.postcode

//         profileEmail= document.createElement("h2")
//         profileEmail.innerHTML= 
//             "Email Address: "+ data[indexValue].email

//         profileLogin= document.createElement("h2")
//         profileLogin.innerHTML= 
//             "username: "+ data[indexValue].login.username+ 
//             "<br> password: "+ data[indexValue].login.password

//         profileRegistered= document.createElement("h2")
//         profileRegistered.innerHTML=
//             "Date Registered: "+
//             data[indexValue].registered.date

//         profileCellPhone= document.createElement("h2")
//         profileCellPhone.innerHTML= 
//             "Cell: "+
//             data[indexValue].cell+ 
//             "&emsp; Phone: "+
//             data[indexValue].phone

//         profileContainer.append(
//             profileName, 
//             profileImg, 
//             profileLogin, 
//             profileDOB, 
//             profileRegistered, 
//             profileLocation, 
//             profileCellPhone, 
//             profileEmail
//         )
//     }
// }

document.addEventListener("DOMContentLoaded", () => {

  const themeStylesheet = document.getElementById("theme");
  const themeToggle = document.getElementById("theme-toggle");

  // If either element is missing, do nothing
  if (themeStylesheet == null) {
    return;
  }
  if (themeToggle == null) {
    return;
  }

  // Load saved theme, default to light
  let saved = localStorage.getItem("theme");
  if (saved == null) {
    saved = "light";
  }

  if (saved == "dark") {
    themeStylesheet.href = "darkStyle.css";
    themeToggle.innerText = "Light Mode";
  } else {
    themeStylesheet.href = "style.css";
    themeToggle.innerText = "Dark Mode";
  }

  themeToggle.addEventListener("click", () => {

    // If currently using style.css -> switch to darkStyle.css
    if (themeStylesheet.href.indexOf("style.css") != -1) {
      themeStylesheet.href = "darkStyle.css";
      themeToggle.innerText = "Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      themeStylesheet.href = "style.css";
      themeToggle.innerText = "Dark Mode";
      localStorage.setItem("theme", "light");
    }

  });

});
