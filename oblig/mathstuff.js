
function Add() {
    let val01, val02, val03, val04, val05, val06, val07, val08, val09, val10, val11, val12, val13, val14, val15 ,val16 ,val17, val18, val19, val20;

    val01 = parseInt(document.getElementById("S01").value);
    if (isNaN(val01) == true) {
        val01 = 0;
    }

    val02 = parseInt(document.getElementById("S02").value);
    if (isNaN(val02) == true) {
        val02 = 0;
    }

    val03 = parseInt(document.getElementById("S03").value);
    if (isNaN(val03) == true) {
        val03 = 0;
    }

    val04 = parseInt(document.getElementById("S04").value);
    if (isNaN(val04) == true) {
        val04 = 0;
    }
    val05 = parseInt(document.getElementById("S05").value);
    if (isNaN(val05) == true) {
        val05 = 0;
    }
    val06 = parseInt(document.getElementById("S06").value);
    if (isNaN(val06) == true) {
        val06 = 0;
    }
    val07 = parseInt(document.getElementById("S07").value);
    if (isNaN(val07) == true) {
        val07 = 0;
    }
    val08 = parseInt(document.getElementById("S08").value);
    if (isNaN(val08) == true) {
        val08 = 0;
    }
    val09 = parseInt(document.getElementById("S09").value);
    if (isNaN(val09) == true) {
        val09= 0;
    }
    val10 = parseInt(document.getElementById("S10").value);
    if (isNaN(val10) == true) {
        val10 = 0;
    }
    val11 = parseInt(document.getElementById("S11").value);
    if (isNaN(val11) == true) {
        val11 = 0;
    }
    val12 = parseInt(document.getElementById("S12").value);
    if (isNaN(val12) == true) {
        val12 = 0;
    }
    val13 = parseInt(document.getElementById("S13").value);
    if (isNaN(val13) == true) {
        val13 = 0;
    }
    val14 = parseInt(document.getElementById("S14").value);
    if (isNaN(val14) == true) {
        val14 = 0;
    }
    val15 = parseInt(document.getElementById("S15").value);
    if (isNaN(val16) == true) {
        val15 = 0;
    }
    val16 = parseInt(document.getElementById("S16").value);
    if (isNaN(val16) == true) {
        val16 = 0;
    }
    val17 = parseInt(document.getElementById("S17").value);
    if (isNaN(val17) == true) {
        val17 = 0;
    }
    val18 = parseInt(document.getElementById("S18").value);
    if (isNaN(val18) == true) {
        val18 = 0;
    }
    val19 = parseInt(document.getElementById("S19").value);
    if (isNaN(val19) == true) {
        val19 = 0;
    }
    val20 = parseInt(document.getElementById("S20").value);
    if (isNaN(val20) == true) {
        val20 = 0;
    }


    document.getElementById("txtTotal").value = val01 + val02 + val03 + val04 + val05 + val06 + val07 + val08 + val09 + val10 + val11 + val12 + val13 + val14 + val15 + val16 + val17 + val18 + val19 + val20 ;
}

