
let nameInput = document.querySelector(".nameInput");
let BirthdayInput = document.querySelector(".BirthdayInput");
let whatsInput = document.querySelector(".whatsInput");
let locationInput = document.querySelector(".locationInput");
let dayInput = document.querySelector(".dayInput");
let timeInput = document.querySelector(".timeInput");
let submitbtn = document.querySelector(".btn");
let inputs = document.querySelectorAll("input");

let printName = document.querySelector(".print-name");
let printBirthdayDate = document.querySelector(".print-date");
let whatsCount = document.querySelector(".count");
let printDay = document.querySelector(".print-day");
let printLocation = document.querySelector(".print-location");
let printTime = document.querySelector(".print-time");

let cardContainer = document.querySelector(".card-container");

submitbtn.addEventListener("click", () => {
    let isFormValid = true;

    // Validate each input field
    inputs.forEach((input) => {
        if (input.type !== "file" && input.value.trim() === "") {
            isFormValid = false; // If any input is empty, form is invalid
            input.classList.add("error"); // Highlight invalid inputs
        } else {
            input.classList.remove("error"); // Remove error class from valid inputs
        }
    });

    // If the form is not valid, show alert and stop execution
    if (!isFormValid) {
        alert("Please fill out all fields correctly before submitting!");
        return;
    }

    // If the form is valid, display success message and populate card
    alert("Form submitted successfully!");
    printName.textContent = nameInput.value;
    printBirthdayDate.textContent = BirthdayInput.value;
    whatsCount.textContent = whatsInput.value;
    printLocation.textContent = locationInput.value;
    printDay.textContent = dayInput.value;
    printTime.textContent = timeInput.value;

    // Display the card-container

    cardContainer.style.display = "flex"; // Make the card visible
    let body = document.querySelector('body');
    document.body.style.backgroundColor = '#fff';
     let infoContainer = document.querySelector(".information-container");
     infoContainer.style.display = "none";
    

});
let dawnloadButton = document.querySelector(".dawnload-card");

     dawnloadButton.addEventListener("click" , () => {
        html2canvas(cardContainer).then((canvas) => {
            // Convert canvas to image
            const image = canvas.toDataURL("image/png");
            
            // Create a temporary link to trigger download
            const link = document.createElement("a");
            link.href = image;
            link.download = "birthday-card.png";
            
            // Append link to body, click it, and remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
     });

// let closebtn = document.querySelector(".fa-xmark");
// let cross = document.querySelector(".xMark");
// closebtn.addEventListener("click", () => {
  
// })

// const photoInput = document.getElementById('photo');
//     const photoPreview = document.getElementById('photo-preview');
//     const uploadButton = document.getElementById('uploadButton');

//     // File preview functionality
//     photoInput.addEventListener('change', (event) => {
//       const file = event.target.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//           photoPreview.innerHTML = `<img src="${e.target.result}" alt="Photo Preview">`;
//           cross.classList.add('active');
//         };
//         reader.readAsDataURL(file);
//       } 
//     });