$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
    
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
  

  
    
  })
function getRandom(max){
  return Math.floor(Math.random() * max);
}
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
const paragraph = document.getElementById('myParagraph');
        const button = document.getElementById('changeTextButton');

        button.addEventListener('click', () => {
            const newText = window.prompt("Enter the new name for your pet:");

            if (newText !== null) { // Check if the user didn't click Cancel
                paragraph.textContent = newText;
            }
        });
    var pet_info = {name:"RainbowDash", status: "Alive",  weight:"10", happiness:"10"};
  var happiness = getRandom(25);
  var weight = getRandom(25);
  var textelement = document.querySelectorAll(".status")[0];
  var myButton = document.querySelectorAll(".action")[0]; 
  var myButtonT = document.querySelectorAll(".action2")[0];
  var myButtonH = document.querySelectorAll(".action3")[0];
  // button stuff
    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      weight = weight + 5;
      pet_info.weight = weight;
      checkAndUpdatePetInfoInHtml();

      happiness = happiness + 1;
      pet_info.happiness = happiness;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      weight = weight - 1;
      pet_info.weight = weight;
      checkAndUpdatePetInfoInHtml();
      happiness = happiness + 1;
      pet_info.happiness = happiness;
      checkAndUpdatePetInfoInHtml();
       myButtonT.onclick = () => {
    text.classList.add("start-bouncing");
  }

  text.onanimationend = () => {
    text.classList.remove("start-bouncing");
    
  }
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      happiness = happiness - 1;
      pet_info.happiness = happiness;
      checkAndUpdatePetInfoInHtml();
      weight = weight - 2;
      pet_info.weight = weight;
      checkAndUpdatePetInfoInHtml();
    }
// Action counter
  
let clickCount = 0; // Initialize the counter

    const clickCountDisplay = document.getElementById("clickCountDisplay");

    myButton.addEventListener("click", function() {
        clickCount++; // Increment the counter
        clickCountDisplay.textContent = clickCount; // Update the display
    });

    myButtonT.addEventListener("click", function() {
        clickCount++; // Increment the counter
        clickCountDisplay.textContent = clickCount; // Update the display
    });

    myButtonH.addEventListener("click", function() {
        clickCount++; // Increment the counter
        clickCountDisplay.textContent = clickCount; // Update the display
    });

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    // game over stuff and conditions
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 60 && pet_info.weight > 10){
        pet_info.status = "Alive";
        textelement.style.color = "white";
        textelement.style.fontSize = "16px";
      }
      if (pet_info.weight < 10){
        pet_info.status = "Underweight";
        textelement.style.color = "purple";
        textelement.style.fontSize = "25px";
      }
      if (pet_info.weight >= 60){
        pet_info.status = "Obese";
        textelement.style.color = "purple";
        textelement.style.fontSize = "25px";
      }
      if (pet_info.happiness <= 5){
        pet_info.status = "Depressed";
        textelement.style.color = "blue";
        textelement.style.fontSize = "25px";
      }
      if (clickCount > 2 && pet_info.weight <= 5 || pet_info.happiness <= 0 || pet_info.weight >=100){
        pet_info.status = "DEAD";
        textelement.style.color = "red";
        textelement.style.fontSize = "50px";
        myButton.disabled = true;
        myButtonT.disabled = true;
        myButtonH.disabled = true;
        text.style.transform = "rotate(180deg)";
        
      }
    }
    function refreshPage(){
    window.location.reload();
} 
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.status').text(pet_info['status'])
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  // random image stuff
    const imageUrls = [
      "https://cdn.glitch.global/d0ec3f0b-52ef-479e-88da-0dc454faaa9f/panda?v=1751043704786",
      "https://cdn.glitch.global/d0ec3f0b-52ef-479e-88da-0dc454faaa9f/dog.bone?v=1751043709605",
      "https://cdn.glitch.global/d0ec3f0b-52ef-479e-88da-0dc454faaa9f/dog?v=1751043703567",
      // Add more image URLs here
    ];    
    const randomIndex = Math.floor(Math.random() *   imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    document.getElementById("myImage").src = randomImageUrl;

// Action counter

const text = document.querySelector("#myImage")

function bounce(){
   text.onclick = () => {
    text.classList.add("start-bouncing");
  }

  text.onanimationend = () => {
    text.classList.remove("start-bouncing");
    
  }
}
 
bounce()

//game time

 