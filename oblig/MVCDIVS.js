let html = ``;
function makeDivs(){


        
        // tenge opp stats utifra anvn
        // mellomlagre id osv i hver sin - dollare ut i viewloop
      for(let option of Ninjas){ //gir muligheten til og dra ut single string av en flere objektet arrey
            if(option.NinjaName == selectedNinja){

            //   Ninija spesifier //
            html += `<div class="Ninjasheet1-containers">`
            html+= `<div class="ninja"`
            html +=`<div class=ninjaImg><img src="${option.file}"></div>`;//end off img//
            
            html += `<div class="Ninjainfo1-containers">`
    
    
            html += `<div class="a3">`
            html += `<div class="position">Position: ${option.Position}</div>`
        
                        //  penalty / off poss//
        
                         html +=`<div class="Penalty-containers">`
                         html +=`<div class="is-off">is off </div>`
                         html +=`<div class="Y-N">yes / no </div>`
                         html +=`<div class="offpos">is off </div>`
                         html +=`<div class="Pen"> Penalty %</div>`
                         html += `</div>`
                         //penalty / off end //
                         html += `</div>`//end off penalty container//
                         html += `</div>`//end off a3//
                         
                         html += '<div class="a4">'
   // ninja id name etc and choose ninja //
  // select dropdown in here //
  html += `<select class="hei" onchange="selectNinja(this.value)">` ; 
  
  for(let ninja of Ninjas){
  html +=`<option>${ninja.NinjaName}</option>`
  }
  html += '</select>'
  html += `<div class="theninja">`
       
  html+= `<div Class=ID>Identifier ${option.Identifier}</div>` 
  //// end ninja ID////
  html+= `<div class= NinjaName > ${option.NinjaName}</div>`
  html += `</div>`
  //              lvl input and lvl defined //
  html += `<div class="LVLbox">`

  html+=`<input type="text" class="LVL" id="LVL" /><br> <input class="button" type="button" onClick="multiplyBy(this)" Value="LVL" />`
         
  html+=`<div ID="result"> </div>`
  html += `</div>`        //end off lvl defined //
  
                         html += `</div>` //end off a4//





    //                             //end off spesifer//
      html += `</div>`//end off infosheet//
      html +=`<div class="a1">`
      html += `<div class="er">`//cost and ck boxes//
          html += `<div Class=Cost>Cost</div>`
          html += `<div Class=chakra>${option.Chakra}</div>`
     html += `</div>` //end off cost box//
           html += `  <div class="fq"> ` //fixed cost container//
      html += `  <div class="Fixed1">` //fixed cost forbidden //
      html += `<div Class=quarter1>can be quartered?: </div>`
      html += `<div Class=NY> ${option.Forbidden}</div>`
      html += `</div>`//end off fixed 1 forbidden //
      html += `  <div class="Fixed2">`//fixed cost 2 have fixed chakra like evovve nin etc //
      html += `<div Class=quarter2>can be quartered?: </div>`
      html += `<div Class=YN>${option.FixedChakra}</div>`
      html += `</div>` //end off fixed 2 forbidden //
      html += `</div>`//end off fq fixed cost boxes 
      html += `<div class="Seals">` //seal class//
      html += ` <div class="SealTag">Seal:</div>`
      html += `<div class=seal>${option.Seal}</div>`
            html += ` </div>`//end off Seals//
             html += `</div>` //end of a1
             html +=`<div class="a2">`

             html +=`<div class="bonusstat">`
             html += `<div class="qq"><b>Statpoints used</b></div>`
             html += `    <input type="text" id="txtTotal" placeholder="0"class="used">`
             html += `</div>` //end off bonusstat//
             
             html +=`<div class="Item-container">`
             html +=`<div class="ItemTg1">Item1</div>`
             html +=`<div class="item1"onclick="">Item 1 EQ</div>` //updateViewItem() put back in yo onclick when your done //
             html +=`<div class="ItemTg2">Item2</div>`
             html +=`<div class="Item2">Item 2</div>`
             html +=`<div class="ItemTg3">item3</div>`
             html +=`<div class="Item3">Item 3</div>`
             html +=`<div class="ItemTg"></div>`
             html +=`<div class="ItemEq"></div>` 
             html += `</div>`;//end off items//
                                   //bloodline//
             
             html += `<div class="BL-container">` //bl container//
             html += `<div class="bloodline">Blood line</div>`
             html += `<div class="bloodlinelvl">Blood line LVL</div>`
             html += `<div class="Blood-line">drop down off BL</div>`
             html += `<input  type="number" id="inn" name="ticketNum" class=Blood-Line-LvL min="1" max="15" Value="Blood line LvL"`
             html += `</div>`// end off BL container   
                                    
             html += `</div>` //no idea what it ends . but it does//    
             html += `</div>`; //end off a2//

             
            html += `<div class="StatRelated">` // The Stat container for all stats //
            html += `<div class="input-container"><b>Statspoint</b></div> `;
            html += `<div class=The-Stats>STATS</div>`; //stats bar//
            html += `<div class="Efficantcy">Efficantcy</div>`

            html += `<div class="input-containers">`

       html += ` <input type="text" id="s01" placeholder="0" onKeyUp="javascript:Add();"class="s01">` 
       html += ` <input type="text" id="s02" placeholder="0" onKeyUp="javascript:Add();"class="s02">`
       html += ` <input type="text" id="s03" placeholder="0" onKeyUp="javascript:Add();"class="s03" >`
       html += ` <input type="text" id="s04" placeholder="0" onKeyUp="javascript:Add();"class="s04" min="0" max="45">`
       html += ` <input type="text" id="s05" placeholder="0" onKeyUp="javascript:Add();"class="s05" min="0" max="45">`
       html += ` <input type="text" id="s06" placeholder="0" onKeyUp="javascript:Add();"class="s06" min="0" max="45">`
       html += ` <input type="text" id="s07" placeholder="0" onKeyUp="javascript:Add();"class="s07" min="0" max="0">`
       html += ` <input type="text" id="s08" placeholder="0" onKeyUp="javascript:Add();"class="s08" min="0" max="10">`
       html += ` <input type="text" id="s09" placeholder="0" onKeyUp="javascript:Add();"class="s09" min="0" max="21">`
       html += ` <input type="text" id="s10" placeholder="0" onKeyUp="javascript:Add();"class="s10" min="0" max="15">`
       html += ` <input type="text" id="s11" placeholder="0" onKeyUp="javascript:Add();"class="s11" min="0" max="10">`
       html += ` <input type="text" id="s12" placeholder="0" onKeyUp="javascript:Add();"class="s12" min="0" max="15">`
       html += ` <input type="text" id="s13" placeholder="0" onKeyUp="javascript:Add();"class="s13" min="0" max="0">`
       html += ` <input type="text" id="s14" placeholder="0" onKeyUp="javascript:Add();"class="s14" min="0" max="0">`
       html += ` <input type="text" id="s15" placeholder="0" onKeyUp="javascript:Add();"class="s15" min="0" max="0">`
       html += ` <input type="text" id="s16" placeholder="0" onKeyUp="javascript:Add();"class="s16" min="0" max="0">`
       html += ` <input type="text" id="s17" placeholder="0" onKeyUp="javascript:Add();"class="s17" min="0" max="0">`
       html += ` <input type="text" id="s18" placeholder="0" onKeyUp="javascript:Add();"class="s18" min="0" max="0">`
       html += ` <input type="text" id="s19" placeholder="0" onKeyUp="javascript:Add();"class="s19" min="0" max="0">`
       html += ` <input type="text" id="s20" placeholder="0" onKeyUp="javascript:Add();"class="s20" min="0" max="0">`
       html += `</div>`; //end off stat + //

            html += `<div class="txt">`; //statnames //
            html += `<div class=Taijutsu-txt>Taijutsu</div>`
            html += `<div class=Ninjutsu-txt>Ninjutsu</div>`
            html += `<div class=Bukijutsu-txt>Bukijutsu</div>`
            html += `<div class=Stamina-txt>Stamina</div>`
            html += `<div class=Elemental-txt>Elemental</div>`
            html += `<div class=Genjutsu-txt>Genjutsu</div>`
            html += `<div class=Attack-txt>Attack</div>`
            html += `<div class=Crittical-strike-txt>CriticalStrike</div>`
            html += `<div class=Crittical-hit-txt>Critical Hit</div>`
            html += `<div class=Re-roll-txt>Reroll</div>`
            html += `<div class=Focus-pew-txt>Focus</div>`
            html += `<div class=Focus-burst-pew-txt>Focus Burst</div>`
            html += `<div class=Focus-range-pew-txt>Focus Range</div>`
            html += `<div class=Bukijutsu-Boost-txt>Bukijutsu Boost</div>`
            html += `<div class=Bukijutsu-Recovery-txt>bukijutsu Recovery</div>`
            html += `<div class=Genjutsu-Activation-txt>Genjutsu Activation</div>`
            html += `<div class=Genjutsu-Mastery-txt>Genjutsu Mastery</div>`
            html += `<div class=Genjutsu-Recovery-txt>Genjutsu Recharge</div>`
            html += `<div class=Endurance-txt>Endurance</div>`
            html += `</div>`; // end off Stat names//

              
    
            html += `<div class="Stats">`
        html += `<div class="Primestat-containers">`//Prime stat container //
       
        
        //stat from ninja
        //loope ut stats
        let currentStat = ""; // mellomlagringsvar
        for(stat in DemStats){
    
        currentStat = stat;
    
        html += `<div class="StatNames">${DemStats[stat]} </div>`
            console.log(DemStats,'bø')
         }
         
    
  
    
        html += `</div>`;//end off Primary//
        
        html += `<div class="Secondary-containers">`
        html += `<div Class= Atk>${SecondaryStats.Attack}</div>`;
        html += `<div Class= Strike>${SecondaryStats.CriticalStrike}</div>`;
        html += `<div Class= Hit>${SecondaryStats.CriticalChance} </div>`;
        html += `<div Class= Re-Roll>${SecondaryStats.Reroll}</div>`;
        html += `<div Class= Focus>${SecondaryStats.Focus}</div>`;
        html += `<div Class= Focus-Burst>${SecondaryStats.FocusBurst}</div>`;
        html += `<div Class= Focus-Range>${SecondaryStats.FocusRange}</div>`;
        html += `<div Class= Buki-Boost>${SecondaryStats.BukijutsuBoost}</div>`;
        html += `<div Class= Buki-Rec>${SecondaryStats.BukijutsuRecovery}</div>`;
        html += `<div Class= Gen-Act>${SecondaryStats.GenjutsuActivation}</div>`;
        html += `<div Class= Gen-Mastery>${SecondaryStats.GenjutsuMastery}</div>`;
        html += `<div Class= Gen-Rec> ${SecondaryStats.GenjutsuRecharge}</div>`;
        html += `<div Class= Endu> ${SecondaryStats.Endurance}</div>`;   
        html += `</div>`;//end off secondedary//
           
//                 //the Efficantcy off stats //

   
html += `<div class="Effi-container">`       
html+= `<div class="tai-effi">%</div>`
html+= `<div class="nin-effi">%</div>`
html+= `<div class="buki-effi">%</div>`
html+= `<div class="stam-effi">%</div>`
html+= `<div class="ele-effi">%</div>`
html+= `<div class="gen-effi">%</div>`
html+= `<div class="atk-effi">%</div>`
html+= `<div class="strike-effi">%</div>`
html+= `<div class="hit-effi">%</div>`
html+= `<div class="reroll-effi">%</div>`
html+= `<div class="focus-effi">%</div>`
html+= `<div class="focusburst-effi">%</div>`
html+= `<div class="focusrange-effi">%</div>`
html+= `<div class="boost-effi">%</div>`
html+= `<div class="buki-rec-effi">%</div>`
html+= `<div class="gen-act-effi">%</div>`
html+= `<div class="gen-mastery-effi">%</div>`
html+= `<div class="gen-rec-effi">%</div>`
html+= `<div class="endu-effi">%</div>`
html += `</div>`; //end off Efficantcy//

html += `</div>`//end of stat related container 




html += `</div>`; //end of primary stat container //
//secondary stats//


        html += `</div >`   //end of Stats//  


html += `<div class="Dmgout-containers">`
html += `<div class="r21">`//r21//
html += `<div class="AvrageDMG">Avrage DMG:</div>`
html += `<div class="D-R">Damage Range:</div>`
html += `</div>` // end off r21//

html += `<div class="DMG">`
html += `<div class="AvrageDMG-out">Avrage DMG out(output field )</div>`
html += `<div class="Low-High-DMG">`

html += `<div class="Low-DMG">DMG out lowest (output field )</div>`
html += `<div class="High-DMG">DMG out highest (output field )</div>`
html += `</div>`
html += `</div>`

html += `<div class="Crit-DMG-Tag">`
html += `<div class="Average-DMG-on-Crit">Average DMG on Crit:</div>`
html += `<div class="Damage-Range-with-Critical-Hit">Damage Range with Critical Hit:</div>`
html += `</div>`
html += `<div class="Critt-DMG-Out">`
html += `<div class="Average-DMG-on-Crit-Out">Average DMG on Crit (Output) </div>`
html += `<div class="lowcrit-higcritt">`
html += `<div class="Low-critt-DMG">lowest (output field )</div>`
html += `<div class="High-critt-DMG">highest (output field )</div>`
html += `</div>`
html += `</div>`//end off 
html += `</div>`// end off  dmg//







      
               html += `</div>`// end of sheet container//
        selectResult.innerHTML =  html;

    }
    }

}