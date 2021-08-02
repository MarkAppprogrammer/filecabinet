let userStorage = {
    firstname: "Mark",
    username: "markagib123",
    password: "Godblessall"
  }

  let cerPagevar = "filecabinet.expensetracker.html"

  function cerPage() {
    location.href = cerPagevar
  }

function StorageLocal() {
    localStorage.setItem("first-name", JSON.stringify(userStorage.firstname))
    localStorage.setItem("username", JSON.stringify(userStorage.username))
    localStorage.setItem("password", JSON.stringify(userStorage.password))  
}
 function ArraySorter(array) {  
    for (let i = 0; i < array.length; i++) {
      return array[i]
    } 
  }


StorageLocal()

const commands = {
    docgetElememnt: function myfunction(ans, element) {
      ans = document.getElementById(element)
    }
}


let user = {
    firstname: "",
    username: "",
    password: ""
}
//variables
  let userLoggedIn = false

  function getItem() {
    userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"))
  }

  function saveLogin() {
    localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn))
  }

  function CheckifLoggedIn() {
    console.log(userLoggedIn)
    getItem()
    if(userLoggedIn === true) {
      console.log("stay")
      location.href = "filecabinet.expensetracker.html" 
      cerPagevar = ""
    }
    else {
      location.href = "filecabinet.login.html"
    }
  }

  
  let errorMessage = document.getElementById("error")
  let submitButton = document.getElementById("submitbutton")

  //Modal

  // Get the modal
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  function setTime() {
    setTimeout(setToFalse, 300000)
  }

  function setToFalse() {
    console.log("set")
    userLoggedIn = false
    saveLogin()
    CheckifLoggedIn()
    alert("Logged Out")
  } 

  function goToHome() {
    location.href = "filecabinet.home.html"
  }

  function setToFalse() {
    console.log("set")
    userLoggedIn = false
  } 

  function CheckUserPwd() {
    console.log("clicked")
    //Gets username and pwd from local storage
    JSON.parse(localStorage.getItem("username"))
    JSON.parse(localStorage.getItem("password"))
    //checks user and pwd
   if(document.getElementById("username").value === userStorage.username && document.getElementById("password").value === userStorage.password) {
      console.log("Logged In")
      //sets user to logged in
      userLoggedIn = true
      saveLogin()
      //checks if user  is goint to certain page
      if (cerPagevar) {
        cerPage()
      }
      else {
        goToHome()
      }
    }
  }

  // sign up
  function SignUp() {
    userStorage.push(document.getElementById("first-nameS"))
  }

//Console.log statistics

  function Stats() {
    //variables
    const d = new Date()
    const date1 = new Date()
    const date2 = new Date()
    const date3 = new Date()
    const date4 = new Date()
    const date5 = new Date()

    //console.log
    console.log("Date: " + d.getMonth() + "/" + date1.getDay() + "/" + date2.getFullYear() + "  Time: " + 
    date3.getHours() + ":" + date4.getMinutes() + ":" + date5.getMilliseconds())

    //api for ip
    function json(url) {
      return fetch(url).then(res => res.json());
    }
    
    let apiKey = 'c4015a81c53b071115e955749de7927a794f5cd19178014c03c516da';
    json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
      console.log("Ip info:")
      console.log(data.ip);
      console.log(data.latitude + " " + data.longitude)
      console.log(data.city);
      console.log(data.country_code);
      console.log("Carrier Info")
      console.log(data.asn.asn + " " + data.asn.name )
      console.log(data.asn.domain + " " + data.asn.route )

      
    });
  }
  
  Stats()