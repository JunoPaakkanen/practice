// Haetaan dataa
let saveFile = () => {

    const mitenmenee = document.getElementById("mood");

// Tämä muuttuja pitää sisällään datan
let data = "Mieli?: " + mitenmenee.value;

// Tulostetaan data konsoliin
console.log(data);

// Tehdään blob
const textToBLOB = new Blob([data], { type: "text/plain" });

// Nimetään dokumentti
var filename = new Date();
var month =new Date(); 
month = month.getMonth();

var day = new Date();
var day = day.getUTCDate();

var year = new Date();
var year = year.getUTCFullYear();

newdate = year + "/" + month + "/" + day;
const sFileName = filename; 


// Luodaan dokumentti
let newLink = document.createElement("a");
newLink.download = new Date();

if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        } else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
                }

newLink.click();
        };



