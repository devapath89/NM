
    function makeDivs(){
        let html = ``;
        //tenge opp stats utifra anvn
        //mellomlagre id osv i hver sin - dollare ut i viewloop
      for(let option of Ninjas){ //gir muligheten til og dra ut single string av en flere objektet arrey
            if(option.NinjaName == selectedNinja){
                
                html +=`<div class=ninjaImg><img src="${option.file}"</div>`;
                html += `<div Class=Cost>Cost</div>`
                html += `<div Class=chakra>${option.Chakra}</div>`
                html += `<div Class=quarter1>can be quartered?: </div>`
                html += `<div Class=NY> ${option.Forbidden}</div>`
                html += `<div Class=quarter2>can be quartered?: </div>`
                html += `<div Class=YN>${option.FixedChakra}</div>`
                html += `<div Class=qq>Stats+Used</div>`
                html += `<div Class=used> auto input </div>`
                html += `</div>`;


                html += `<div class="input-containers">`
                html += `<div class="input-container"><b>Statspoint</b></div> `;
                //<input type="number" id="quantity" name="quantity" min="1" max="5">//
              
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers01" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers02" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers03" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers04" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers05" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers06" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers07" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers08" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers09" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers10" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers11" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers12" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers13" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers14" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers15" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers16" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers17" >`
                html += `<input  type="number" id="inn" name="ticketNum" class="input-containers18" >`
                html += `</div>`;
               
                html += `</div>`;

                html += `<div id="selectResult">`;
                html += `<div Class=avrdmg>Avrage dmg :in</div>`
                html += `<div Class=D-R>Damage range :in</div>`
                html += `<div Class=avrdmgcritt>Avrage dmg on critt :in</div>`
                html += `<div Class=Dmgran>Dmg range :in</div>`
                html += `<div Class=low-dmg>low dmg in</div>`
                html += `<div Class=high-dmg>high dmg in</div>`
                html += `<div Class=avrcrit-dmg>avrage critt in</div>`
                html += `<div Class=dmg-rng-critt> dmg range critt in</div>`
                html += `<div Class=low-critt>low critt in</div>`
                html += `<div Class=high-critt>high critt inn</div>`


                html += `<div class=position>Position: ${option.Position}</div>`
                html += `<div class=seal>Seal: ${option.Seal}</div>`
                html += `</div>`;
                html += `<div class=The-Stats>STATS</div>`;
                html += `<div id="txt">`;
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
                // html += `<div class=Endu>Endurance</div>`
                // // html += `<div class=></div>`
                // html += `<div class=></div>`
                // html += `<div class=></div>`
                // html += `<div class=></div>`
                html += `</div>`;
                html += `<div class=bloodline>Blood line </div>`
                html += `<div class=bloodlinelvl>Blood line LVL </div>`
                html += `<div class=Blood-line>drop down off BL  </div>`
                html += `<div class=Blood-Line-LvL> input BL lvl </div>`
                //loope ut stats
                let currentStat = ""; // mellomlagringsvar
                for(stat in option.Stats){
                    //get key
                //     currentStat = stat; // - ta vare på "current stat" fra løkka
                //     html += `<div>${currentStat}: ${option.Stats[stat]}</div>`;
                // }                   //  name       stat value
                // let currentGrowth = "";
                currentStat = stat;

                    html += `<div class="StatNames">${option.Stats[stat]} </div>`;

                }
                html += `</div>`;
                html += `</div>`;
                html += `</div>`;
                html += `</div>`;
                html += `<div id="Secondary">`;
                let currentSecondaryStats = "";

                //for (Object in SecondaryStats){

                    currentSecondaryStats = SecondaryStats;

                html += `<div Class= Atk>${SecondaryStats.Attack}</div>`;
                html += `<div Class= Strike>${SecondaryStats.CriticalStrike}</div>`;
                html += `<div Class= hit>${SecondaryStats.CriticalChance} </div>`;
                html += `<div Class= roll>${SecondaryStats.Reroll}</div>`;
                html += `<div Class= Focus>${SecondaryStats.Focus}</div>`;
                html += `<div Class= Burst>${SecondaryStats.FocusBurst}</div>`;
                html += `<div Class= Range>${SecondaryStats.FocusRange}</div>`;
                html += `<div Class= Boost>${SecondaryStats.BukijutsuBoost}</div>`;
                html += `<div Class= Rec>${SecondaryStats.BukijutsuRecovery}</div>`;
                html += `<div Class= Act>${SecondaryStats.GenjutsuActivation}</div>`;
                html += `<div Class= Mastery>${SecondaryStats.GenjutsuMastery}</div>`;
                html += `<div Class= Rech> ${SecondaryStats.GenjutsuRecharge}</div>`;

                html += `</div>`;

                //}
                html+= `<div Class=ID>Identifier ${option.Identifier}</div>`
                html+= `<div class= NinjaName > ${option.NinjaName}</div>`
                html+= `<div class=lvl>LVL</div>`
                let currentAbility = "";
                     for(Ability in option.Ability){
                          currentAbility =Ability;
                     html+= `<div>Ability ${option.Ability[Ability]}</div>`
                  }
                html+=`<div class=fixed>fixed Chakra?: ${option.FixedChakra}</div>`




            html += `</div>`;

          html+=`<input type="text" id="LVL" /><br> <input class="button" type="button" onClick="multiplyBy()" Value="LVL" />`
          html+=`<div ID="rsesult"> </div>`

          html += `<div ID="Effi">` 
          html+= `<div class="Efficantcy"><b>Efficantcy</b></div>`
          html+= `<div class="tai-effi">tai % </div>`
          html+= `<div class="nin-effi">nin effi% </div>`
          html+= `<div class="buki-effi">buki effi %</div>`
          html+= `<div class="Stam-effi">stamina effi %</div>`
          html+= `<div class="ele-effi">ele effi %</div>`
          html+= `<div class="gen-effi">Gen effi%</div>`
          html+= `<div class= "atk-effi">N/A</div>`
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
         
          

          html += `</div>`;
          html +=`<div class=is-off">is off pos</div>`
          html +=`<div class=Y-N">Yes or No</div>`
          html +=`<div class=offpos">Offpos</div>`
          html +=`<div class=Pen"></div>`
          html +=`<div class=penalty"> pen %</div>`
          
          html +=`<div class=penalty"> pen %</div>`
                
  
           html +=`<div class="grid-container"onclick="updateViewItem()">`
           html +=`<div class="ItemTg1">Item1</div>`
           html +=`<div class="item1"onclick="">Item 1 EQ</div>` 
           html +=`<div class="ItemTg2">Item2</div>`
           html +=`<div class="Item2">Item 2</div>`
           html +=`<div class="ItemTg3">item3</div>`
           html +=`<div class="Item3">Item 3</div>`
           html +=`<div class="ItemTg"></div>`
           html +=`<div class="ItemEq"></div>`
        
  
        selectResult.innerHTML =  html;

    }
    }

}