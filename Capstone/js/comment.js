/*========================= START OF COMMENT PAGE ================================================ */

const commentFormId = "save-later-comment"; // ID of the form
const commentURL = location.href; //  href for the page
const commentFormIdentifier = `${commentURL} ${commentFormId}`; // Identifier used to identify the form
const commentSaveButton = document.querySelector("#saveComment"); // select save button
let commentForm = document.querySelector(`#${commentFormId}`); // select form
let commentFormElements = commentForm.elements; // get the elements in the form
const list = document.querySelector("#clist"); //get the <ul> tag
const commentContent = document.querySelector("#comment"); //get text content
const submitCom = document.querySelector("#submit"); //get submit button

const comments = []; //array of comments

/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key
 * @returns {Object}
 */
const getCommentDataFromLocalStorage = () => {
  let localStorageData = { [commentFormIdentifier]: {} };
  for (const element of commentFormElements) {
    //if length of an element name is greater than 0
    if (element.name.length > 0) {
      //get the value of that element inside the form
      localStorageData[commentFormIdentifier][element.name] = element.value;
    }
  }
  //return the data contained
  return localStorageData;
};

//save comment as draft
commentSaveButton.onclick = (event) => {
  //cancel default action of the event
  event.preventDefault();

  //get comment data
  localStorageData = getCommentDataFromLocalStorage();
  comments.push(commentContent)
  //store the value in localStorage
  localStorage.setItem(
    commentFormIdentifier,
    JSON.stringify(localStorageData[commentFormIdentifier])
  );

  //alert the user
  alert("Draft comment saved." + "\n" + "You have " +  comments.length +  " items saved.");
};

//submit comment and display it on the page below
submitCom.onclick = (event) => {
  //cancel default action by the event
  event.preventDefault();
  //if textarea has something
  if (commentContent.value != "") {
    //push that something into comments array
    comments.push(commentContent.value);
    //store that in the localStorage
    localStorage.setItem("comments", JSON.stringify(comments));

    //create a list <li>
    let listItem = document.createElement("li");
    for (let i = 0; i < comments.length; i++) {
      //add comment inputted by user to the comment list in the page
      listItem.innerHTML = commentContent.value + "<br/>";
    }
    list.appendChild(listItem);
    // clear the textatea
    commentContent.value = "";
    //alert user
    alert("Comment submitted.");
  }
};

/**
 * This function populates the form with data from localStorage
 * if commentFormIdentifier has some data in localStorage,
 * get that information and populate it on the form
 */
const populateFormWithDataFromLocalStorage = () => {
  if (localStorage.key(commentFormIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(commentFormIdentifier)); // get and parse the saved data from localStorage
    for (const element of commentFormElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
    alert("Form has been refilled with data...");
  }
};

document.onload = populateFormWithDataFromLocalStorage(); // populate the form when the document is loaded

/*============================================ END OF COMMENT FORM ====================================================== */
