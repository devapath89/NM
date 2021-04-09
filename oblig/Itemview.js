

function updateViewItem(){
    document.getElementById('hovedSide').innerHTML = '' ;
    document.getElementById('selectResult').innerHTML ='';
    let html = '';

//  for(let thing in Equipments.Ability){ 
    //     html += `<img src="${Equipments.Ability[thing].file}></div>`
    //  console.log(Equipments.Ability[thing].file2,"i fixeded it")
   
   //Equipments.Ability[x].file
   
//    ${Equipments.Ability}
   
   html +=`<div class="grid-container2">`
   html +=`<select name="Equipment" id="Equip1">`;
   for(let option in Equipments.Ability){

       if(Equipments.Ability[option].NinjaName == selectedNinja){
        html +=  `<option >${option}</option>`
       }

    
    
   
   
//     html +=`<select name="Equipment" id="Equip2">`;
//     html += '</select>'
//     html +=`<select name="Equipment" id="Equip3">`;
 
}
html += '</select>'  

html +=`<select name="Equipment" id="Equip2">`;  
for(let option in Equipments.Ability){
  
    if(Equipments.Ability[option].NinjaName == selectedNinja){
        html +=  `<option>${option}</option>`
       }}
html += '</select>'  
html +=`<select name="Equipment" id="Equip3">`;  
for(let option in Equipments.Ability){
   
    if(Equipments.Ability[option].NinjaName == selectedNinja){
        html +=  `<option >${option}</option>`
       }}
html += '</select>'  


html+= '<select>'
       for (let weapon in Equipments.LW){
        html +=  `<option >${weapon}</option>`
       }
       html += '</select>'  
        //    html +=`<div class="Equip">${LegendayWepons}</div>`
           
           html +=`<div class="Equip"></div>`
           html +=`<div class="Equip"></div>`
           html +=`<div class="Equip"></div>`
    html += `</div>`; html += '</select>'
    
    html+= `<button onclick ="runViews()">Save Equipment list</button>`
    
   



hovedSide.innerHTML = html;
    document.getElementById('hovedSide').innerHTML = html;
    
    // html= `<select onchange="selectEquipment(this.value)">` 
    
   
   
   
     }




//  makeDivs();/*send you back to main*/ 
// function selectEquipment(clickedEquipment) {
//     selectedEquipment = clickedEquipment;
    
//     }
   


//     function runViews() {
// MakeDropDown()
// selectNinja()
// makeDivs(){} 