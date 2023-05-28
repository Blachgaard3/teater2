const menuBtns = document.querySelectorAll('.bmBtn');
// Her har vi valgt alle burgermenu knapperne bmBtn med en querySelectorAll 
menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {

        const subMenu = btn.nextElementSibling;

        if (subMenu.style.display === 'block') {

            subMenu.style.display = 'none';

        } else {
            subMenu.style.display = 'block';
        }
    });
});
//kode der gør at det ikke er muligt at vælge en dato før den aktuelle dato når man skal reservere pladser på teaterkatten
// Her går går javascript ind og finder ElementByIf Dato, som dækker over datofeltet i reservationen
var datoFelt = document.getElementById("Dato");
// Her finder man den aktuelle aktuelle dato ved at generere den aktuelle dato som en string i År,måneds og dato 
var aktuelDato = new Date().toISOString().split("T")[0];
// Her går vi ind og sætter en grænse så man som minumum kun kan vælge den aktuelle dato, og derfor ikke kan -
// trykke på forige datoer i kalenderen. 
datoFelt.setAttribute("min", aktuelDato);
// nedeunder kan man se koden der giver en alert når man trykker på reserver knappen
var reserverBtn = document.getElementsByClassName("reserverBtn")[0];

reserverBtn.addEventListener("click", function(event) {
  // Viser en alert-besked
  alert("Du bliver nu ført videre til din mail. Her skal du ikke ændre på noget, men blot sende mailen og vente på at din bordreservation bliver bekræftet");
});

// hertil kommer der kode til vores reviews på siden.
//her skal nogle af de anmeldelser som de har fået på facebook vises på skift.
var reviewSlide = document.querySelectorAll("#reviewBox .reviewData");

var currentSlide = 0; 

function slideToNextReview() {
    reviewSlide[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % reviewSlide.length;
    reviewSlide[currentSlide].style.display = "block";
}

for (var i = 1; i < reviewSlide.length; i++) {
    reviewSlide[i].style.display = "none";
}


setInterval(slideToNextReview,3500); //Her sætter vi timeren til 3,5 sek sekunder, så slideren skifter til et andet review efter 4 sek.

//Her kommer der kode til at få menukortene til at komme frem 


function visDrinkCategory(category) {
    var selectedBtn = document.querySelector(`button[onclick="visDrinkCategory('${category}')"]`);
    
    // Tjek om den valgte knap allerede har klassen "aktivBtn"
    var isActive = selectedBtn.classList.contains("aktivBtn");
  
    // Skjul alle drikkekategorier
    var drinkCategory = document.getElementsByClassName("drinkCategory");
    for (var i = 0; i < drinkCategory.length; i++) {
      drinkCategory[i].style.display = "none";
    }
  
    // Fjern "aktivBtn" fra alle knapper
    var drinkButton = document.getElementsByClassName("drinksBtn");
    for (var j = 0; j < drinkButton.length; j++) {
      drinkButton[j].classList.remove("aktivBtn");
    }
  
    // Hvis knappen ikke er aktiv, tilføj "aktivBtn" og vis den tilhørende drikkekategori
    if (!isActive) {
      selectedBtn.classList.add("aktivBtn");
      var selectedCategory = document.getElementById(category + "Category");
      selectedCategory.style.display = "block";
    }
  }
