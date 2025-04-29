const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable, isAgeAbove50, hasAadharCard)


  let feedback;
  if (isSeatAvailable) {
    console.log("seat is available")
    feedback="seat is available"
    if (isAgeAbove50) {
      console.log(",aged above 50 ")
      feedback=feedback + " ,aged above 50"
      if (hasAadharCard) {
        console.log("Has Aadhaar card")
        feedback=feedback+"Has Aadhaar card"
        let confirmmsg=confirm(`are you sure to come inside the bus`)
        console.log("confirmmsg",confirmmsg)
        if(confirmmsg){
        alert(`please open the door`)
        }
        // alert(`you is suitable for this bus`)

      } else {
        console.log("do have adhaar")

        feedback=feedback +" ,you don't have adhaar"
      }


    } else {
      console.log("you age below 50 years ")
  
     feedback= feedback + " ,your age is below 50 years"
    }
  } else {
    console.log("not have any seats")
    passengerStatus.textContent="seat is not available"
    feedback="seat is not available"
  }
passengerStatus.textContent=feedback;
});