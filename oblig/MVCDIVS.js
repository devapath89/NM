function makeDivs(){

        let html = ``;
        //tenge opp stats utifra anvn
        //mellomlagre id osv i hver sin - dollare ut i viewloop
      for(let option of Ninjas){ //gir muligheten til og dra ut single string av en flere objektet arrey
            if(option.NinjaName == selectedNinja){
html += `<div class="Ninjasheet1-containers">` //ninja 1 sheet1 tabel with lots off containers//
              // Ninija spesifier //
            html += `<div class="Ninjainfo1-containers">`
            html +=`<div class=ninjaImg><img src="${option.file}"</div>`;
            html += `<div Class=Cost>Cost</div>`
            html += `<div Class=chakra>${option.Chakra}</div>`
            html += `  <div class="Fixed1">` //fixed cost forbidden //
            html += `<div Class=quarter1>can be quartered?: </div>`
            html += `<div Class=NY> ${option.Forbidden}</div>`
            html += `</div>` //end off fixed 1 forbidden //
            html += `  <div class="Fixed2">`//fixed cost 2 have fixed chakra like evovve nin etc //
            html += `<div Class=quarter2>can be quartered?: </div>`
            html += `<div Class=YN>${option.FixedChakra}</div>`
            html += `</div>` //end off fixed 2 forbidden //
            html += `<div class=position>Position: ${option.Position}</div>`
                                //seals //
            html += `<div class="Seals"></div>`
            html += ` <div class="SealTag"></div>`
            html += `<div class=seal>Seal: ${option.Seal}</div>`
                                //end of seal//
                               //lvl input and lvl defined //
            html += `<div class="LVLbox">`
            html += `<div class="button">LVL</div>`
            html+=`<input type="text" id="LVL" /><br> <input class="button" type="button" onClick="multiplyBy(this)" Value="LVL" />`
            html += `</div>`                
                  // html+=`<div ID="result"> </div>`
                        //end off lvl defined //
                
                        //gives the Ninja identi//
            html+= `<div Class=ID>Identifier ${option.Identifier}</div>` 
            //end ninja ID//
            html+= `<div class= NinjaName > ${option.NinjaName}</div>`
            
                            //end off spesifer//
                    //equipment and items //

//    html +=`<div class="Item-container"onclick="updateViewItem()">`
//    html +=`<div class="ItemTg1">Item1</div>`
//    html +=`<div class="item1"onclick="">Item 1 EQ</div>` 
//    html +=`<div class="ItemTg2">Item2</div>`
//    html +=`<div class="Item2">Item 2</div>`
//    html +=`<div class="ItemTg3">item3</div>`
//    html +=`<div class="Item3">Item 3</div>`
//    html +=`<div class="ItemTg"></div>`
//    html +=`<div class="ItemEq"></div>`
//    html += `</div>`;
    //end off items//

                             //bloodline//
            html += `<div class="BL-containers">` //bl container//
            html += `<div class="BL">drop down off BL</div>`
            html += `<div class="Bloodline">g</div>`
            html += `<div class="bloodline">Blood line</div>`
            html += `<div class="bloodlinelvl">Blood line LVL</div>`
            html += `<div class="Blood-line">drop down off BL</div>`
            html += `<input  type="number" id="inn" name="ticketNum" class=Blood-Line-LvL min="1" max="15"`
            html += `</div>`
                        // end off BL container

                         //penalty / off poss//

            html +=`<div class="Penalty-containers">`
            html +=`<div class="is-off">`
            html +=`<div class="Y-N"></div>`
            html +=`</div>`
            html +=`<div class="offpos">`
            html +=`<div class="Pen"></div>`
            html +=`</div>`
            html +=`<div class="penalty">%off pen </div>`
            html += `</div>`
            //penalty / off end //

            html += `<div class="Stat-container">` // The Stat container for all stats //
            html += `<div class="qq"></div>`
            html += `<div class="used"></div>`
            html += `<div class=The-Stats>STATS</div>`; //stats bar//
            html += `<div class="txt">`; //statnames //
            html += `<div class=Tai>Taijutsu</div>`
            html += `<div class=Nin>Ninjutsu</div>`
            html += `<div class=Buki>Bukijutsu</div>`
            html += `<div class=Sta>Stamina</div>`
            html += `<div class=Ele>Elemental</div>`
            html += `<div class=Gen>Genjutsu</div>`
            html += `<div class=atk>Attack</div>`
            html += `<div class=Strike>CriticalStrike</div>`
            html += `<div class=Hit>Critical Hit</div>`
            html += `<div class=roll>Reroll</div>`
            html += `<div class=Focus>Focus</div>`
            html += `<div class=Burst>Focus Burst</div>`
            html += `<div class=Range>Focus Range</div>`
            html += `<div class=Boost>Bukijutsu Boost</div>`
            html += `<div class=Rec>Bukijutsu Recovery</div>`
            html += `<div class=Act>Genjutsu Activation</div>`
            html += `<div class=Mastery>Genjutsu Mastery</div>`
            html += `<div class=Rech>Genjutsu Recharge</div>`
            html += `<div class=Endu>Endurance</div>`
            html += `</div>`; // end off Stat names//
        
                //the Efficantcy off stats //
            html += `<div class="Effi-container">` 
            html+= `<div class="Efficantcy"><b>Efficantcy</b></div>`
            html+= `<div class="tai-effi">tai % </div>`
            html+= `<div class="nin-effi">nin effi% </div>`
            html+= `<div class="buki-effi">buki effi %</div>`
            html+= `<div class="Stam-effi">stamina effi %</div>`
            html+= `<div class="ele-effi">ele effi %</div>`
            html+= `<div class="gen-effi">Gen effi%</div>`
            html+= `<div class="atk-effi">N/A</div>`
            html+= `<div class="strike-effi">strike %</div>`
            html+= `<div class="hit-effi">hit %</div>`
            html+= `<div class="reroll-effi"> reroll %</div>`
            html+= `<div class="focus-effi"> focus %</div>`
            html+= `<div class="focus-burst"> burst %</div>`
            html+= `<div class="focus-range"> range %</div>`
            html+= `<div class="boost-effi"> boost %</div>`
            html+= `<div class="buki-rec-effi"> recov %</div>`
            html+= `<div class="gen-act-effi"> gen act %</div>`
            html+= `<div class="gen-mastery-effi"> mastery %</div>`
            html+= `<div class="gen-rec-effi"> gen reac %</div>`
            html += `</div>`; //end off Efficantcy//
                  
    
    
                //Stat input from stat+//
            html += `<div class="input-containers">`
        html += `<div class="input-container"><b>Statspoint</b></div> `;
       html += `<input  type="number" id="inn" name="ticketNum" class="s01" >`
       html += `<input  type="number" id="inn" name="ticketNum" class="s02" >`
       html += `<input  type="number" id="inn" name="ticketNum" class="s03" >`
       html += `<input  type="number" id="inn" name="ticketNum" class="s04" min="0" max="45">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s05" min="0" max="45">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s06" min="0" max="45">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s07" min="0" max="0">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s08" min="0" max="10">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s09" min="0" max="21">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s10" min="0" max="15">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s11" min="0" max="10">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s12" min="0" max="15">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s13" min="0" max="0">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s14" min="0" max="0">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s15" min="0" max="0">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s16" min="0" max="0">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s17" min="0" max="0">`
       html += `<input  type="number" id="inn" name="ticketNum" class="s18" min="0" max="0">`
       html += `</div>`; //end off stat + //
     
            html += `</div>`
            html += `<div class="Primestat-containers">`//Prime stat container //
                        //stat from ninja
        //loope ut stats
    let currentStat = ""; // mellomlagringsvar
    for(stat in option.Stats){
    //get key
    //     currentStat = stat; // - ta vare på "current stat" fra løkka
    //     html += `<div>${currentStat}: ${option.Stats[stat]}</div>`;
    // }                   //  name       stat value
    // let currentGrowth = "";
    currentStat = stat;

    html += `<div class="StatNames">${option.Stats[stat]}${model.DemStats[0]} </div>`;
        console.log(model.DemStats,'bø')
     }
    //  for(stat in model.DemStats){
    //     //get key
    //     //     currentStat = stat; // - ta vare på "current stat" fra løkka
    //     //     html += `<div>${currentStat}: ${option.Stats[stat]}</div>`;
    //     // }                   //  name       stat value
    //     // let currentGrowth = "";
    //     currentStat = stat;
    
    //     html += `<div class="StatNames">${stat} </div>`;
    
    //      }


 html += `</div>`; //end of primary stat container //
 //secondary stats//
 html += `<div class="Secondary-containers">`
    html += `<div Class= Atk>${SecondaryStats.Attack}</div>`;
    html += `<div Class= strike>${SecondaryStats.CriticalStrike}</div>`;
    html += `<div Class= hit>${SecondaryStats.CriticalChance} </div>`;
    html += `<div Class= roll>${SecondaryStats.Reroll}</div>`;
    html += `<div Class= focus>${SecondaryStats.Focus}</div>`;
    html += `<div Class= burst>${SecondaryStats.FocusBurst}</div>`;
    html += `<div Class= range>${SecondaryStats.FocusRange}</div>`;
    html += `<div Class= boost>${SecondaryStats.BukijutsuBoost}</div>`;
    html += `<div Class= rec>${SecondaryStats.BukijutsuRecovery}</div>`;
    html += `<div Class= act>${SecondaryStats.GenjutsuActivation}</div>`;
    html += `<div Class= mastery>${SecondaryStats.GenjutsuMastery}</div>`;
    html += `<div Class= rech> ${SecondaryStats.GenjutsuRecharge}</div>`;
    
    html += `</div>`;//end off secondedary//

    
                html += `</div>`//end of stat related container 
               
               html += `</div>` //end off sheet//      
           html += `</div>`; //end off ninjasheet 1 + //
        selectResult.innerHTML =  html;

    }
    }

}