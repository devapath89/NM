const model = {
    DemStats:[]
}
let LVL = "";
//lvling "system"
function multiplyBy(){
  {   document.getElementById("result").innerHTML = ""
         var LVL = parseInt(document.getElementById("LVL").value);
        
         for (let obj of Ninjas) {
           
            if (selectedNinja == obj.NinjaName){ //finner selected ninja og looper igjennom stats
            
             for(let singleStat in obj.Stats ){
    
                for(let growth in obj.Growth  ){
                    if(singleStat == growth){    
                            // console.log("Match! Yas!", growth)

       
                             let statValue = obj.Stats[singleStat];
                            let growthValue = obj.Growth[growth];
    
                            // console.log(statValue[singleStat] + " test  "+ growthValue[growth])
    
                            //console.log(isNaN(statValue) , "<- isNAN check  typeof: " , typeof(statValue)  )
                            document.getElementById("result").innerHTML += `<li>:${(growthValue * LVL) + statValue -growthValue}</li>`;
                            model.DemStats.push ((growthValue * LVL) + statValue -growthValue)
                            
                            
                            //return growthValue * LVLvalue
                           
                           }
                    }
                    console.log (model.DemStats,'hei')
            }    // document.getElementById("result").innerHTML += `<li>${(growth * Lvl) + stat}</li>`;
    
            
      
        } 
    }
}
}


    
    