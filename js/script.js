
// //set bg color for selected sits

// function decreaseAvailableSit(){
//     let availableSits = 40;
    
//     availableSits -=1;
//     return availableSits;
// }

// //access all sits
// const sits = document.querySelectorAll('.sit');
// //console.log(sits);
// for(const sit of sits){
//     console.log(sit);

//     //added click event to each sit
//     sit.addEventListener('click', function(){
//         console.log(sit.id);
        

//         //get the sit code
//         const sitCode = sit.innerText;

//         //set bg color for selected sit
//         sit.classList.add('bg-[#1DD100]');

//         const availableSits = decreaseAvailableSit();
//         document.getElementById('availableSits').innerText = availableSits;
//     })
    
//}

//remove hide class 
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

//get value by id
function getValueById(id){
    const element = document.getElementById(id);
    return element.innerText;
}

//set value by id
function setValueById(id, seatCode){
    document.getElementById(id).innerText = seatCode;
}

let availableSeats = 40;
let selectedSeats = 0;
let totalPrice = 0;
function selectSit(button){
    //select 4 seat at a time
    if(selectedSeats > 3){
        alert("You can select maximun 4 seats!");
        return;
    }
    //set bg color for selected sit
     if (!button.disabled) {
        button.disabled = true;
        button.style.background = '#1DD100';
        button.style.color = 'white';
        availableSeats--;
        selectedSeats++;
        totalPrice += 550;

        //set remaining seats after selection
        document.getElementById('availableSits').innerText = availableSeats;

        //set total price after selection
        document.getElementById('total_price').innerText = totalPrice;
      }
      console.log(selectedSeats);

      if(selectedSeats === 1){
        //get seat code by id
      const seatCode = getValueById(button.id);

      //set seat code by id
      setValueById('sit_1', seatCode);

      //show element by id
      showElementById('sit_1_info');
      }else if(selectedSeats === 2){
      const seatCode = getValueById(button.id);
      setValueById('sit_2', seatCode);
      showElementById('sit_2_info');
      }else if(selectedSeats === 3){
      const seatCode = getValueById(button.id);
      setValueById('sit_3', seatCode);
      showElementById('sit_3_info');
      }else{
      const seatCode = getValueById(button.id);
      setValueById('sit_4', seatCode);
      showElementById('sit_4_info');
      }
}