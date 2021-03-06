let storedCampers = JSON.parse(localStorage.getItem('storedCampers')|| "[]");
let storedCamperItems = JSON.parse(localStorage.getItem('storedCamperItems')|| "[]");

export function finalizeTrip() {
  let campers = [];
  let camperItems = [];
  let camperArr = document.getElementsByClassName("parent");    
  for (let j = 1; j < camperArr.length - 1; j++) {
    campers.push(camperArr[j].id);     
    let itemsForCamper = camperArr[j].getElementsByClassName("box");
    let currentCamperItems = [];
    for (let i = 0; i < itemsForCamper.length; i++){
      currentCamperItems.push(itemsForCamper[i].id);
    }
    camperItems.push(currentCamperItems);
    localStorage.setItem('storedCampers', JSON.stringify(campers));
    localStorage.setItem('storedCamperItems', JSON.stringify(camperItems));
    // storedCampers.push(campers);
    // storedCamperItems.push(camperItems);
  }
  document.getElementById("save-trip").onclick = function() { 
    finalizeTrip();
  };
}