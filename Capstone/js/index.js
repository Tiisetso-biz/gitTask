/*========================= START OF INDEX PAGE ================================================ */

/**grab image by getElementId,
 * save the image as base64,
 * save base64 string to localStorage
 */
messiImage = document.getElementById('messi');
akaImage = document.getElementById('aka');
// imgData = getBase64Image(messiImage);
// localStorage.setItem("imgData", imgData);


/*convert the image to a base64 string
function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
} */

const saveImg = document.getElementById("save"); //get save button
const saveImg1 = document.getElementById("save1"); //get save button
let imgArr = [];

//save image to localStorage
saveImg.onclick = (event) => {
    //cancel default action of the event
    event.preventDefault();
    //convert image to base64 string
    messiImage.onchange = e => {
        const fr = new FileReader()
        fr.onloadend = () => document.write(fr.result)
        fr.readAsDataURL(e.target.files[0])
      }
    imgArr.push(messiImage);
    localStorage.setItem("images", JSON.stringify(imgArr));
    alert("Image saved." + "\n" + "You have " + imgArr.length + " items saved.");
}

//save image to localStorage
saveImg1.onclick = (event) => {
    //cancel default action of the event
    event.preventDefault();
    //convert image to base64 string
    akaImage.onchange = e => {
        const fr = new FileReader()
        fr.onloadend = () => document.write(fr.result)
        fr.readAsDataURL(e.target.files[0])
      }
    imgArr.push(akaImage);
    localStorage.setItem("images", JSON.stringify(imgArr));
    alert("Image saved." + "\n" + "You have " +  imgArr.length +  " items saved.");
}

/*============================================ END OF INDEX FORM ====================================================== */
