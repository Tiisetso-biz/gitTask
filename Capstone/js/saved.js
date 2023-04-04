//View all the items saved for later

//display comments on the webpage for "saved for later"
const displayComments = () => {
  let list = document.getElementById("comments"); //get <ul> list tag
  let listItem = document.createElement("li"); //create a <li> list tag

  let allComments = []; // to store all comments

  allComments = JSON.parse(localStorage.getItem("comments")); //get all comments from the localStorage

  //loop through all comments and print out each one of them on a <li> list tag
  for (let i = 0; i < allComments.listItem; i++) {
    listItem.innerHTML = allComments[i];
    list.appendChild(listItem);
  }
};

displayComments(); //invoke the display comments function

function allert() {
  alert("Saved for later folder is empty.");
}
allert();
