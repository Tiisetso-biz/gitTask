/*============================================ START OF CONTACT FORM ====================================================== */
const formId = "save-later-form"; // ID of the form
const url = location.href; //  href for the page
const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const saveButton = document.querySelector("#save"); // select save button
let form = document.querySelector(`#${formId}`); // select form
let formElements = form.elements; // get the elements in the form

//let itms = [];
//localStorage.setItem("items", JSON.stringify(itms));

/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key
 * @returns {Object}
 */
const getFormDataFromLocalStorage = () => {
  let data = { [formIdentifier]: {} };
  for (const element of formElements) {
    //if length of an element name is greater than 0
    if (element.name.length > 0) {
      //get the value of that element inside the form
      data[formIdentifier][element.name] = element.value;
    }
  }
  //return the data contained
  return data;
};

saveButton.onclick = event => {
  /**event.preventDefault();
  data = getFormData();
  itms.push(data[formIdentifier]);
  localStorage.setItem("items", JSON.stringify(itms));
  let numItems = 0;
  for(let i = 0; i < itms.length; i++){
     JSON.parse(localStorage.getItem(itms[i]));
     numItems++;
  }
    alert("Draft has been saved for later. You now have " + numItems + " items saved for later.") **/
    event.preventDefault();
  data = getFormDataFromLocalStorage();
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]));
  alert("Draft has been saved for later. You now have + numItems +  items saved for later.")
};

/**
 * This function populates the form with data from localStorage
 * if commentFormIdentifier has some data in localStorage,
 * get that information and populate it on the form
 *
 */
const populateFormWithDataFromLocalStorage = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
    alert("Form has been refilled with data...")
  }
};

document.onload = populateFormWithDataFromLocalStorage(); // populate the form when the document is loaded

/*============================================ END OF CONTACT FORM ====================================================== */


