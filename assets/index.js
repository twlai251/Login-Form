// function registerComplete() {
//     var checking_username = document.forms["box"]["username"].value;
//     var checking_password = document.forms["box"]["password"].value;
//     if (checking_username == "" || checking_password == "") {
//       if (checking_username == "") {
//         alert("Username needs to be filled in!");
//       } else {
//         alert("Password needs to be filled in!");
//       }
//     } else {
//       alert("Register Completed!");
//     }
//   }

  function registerComplete() {
    alert("Register Completed!");
  }

  function Info(){
    var name = document.getElementById('name').value;

    document.write("Hello " + name);
    document.write("<br/>");

    document.write("You have logged in.");
    document.write("<br/>");

  }