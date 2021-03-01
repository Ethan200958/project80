var arraytoputstuffin = [];
function getParagraph1() {

     
    for(var a = 1; a <= 6; a++) {
        arraytoputstuffin.push(document.getElementById("para1_input_box_" + a).value);
    }

     arraytoputstuffin.join(". ");
    document.getElementById("showParagraph1").innerHTML = arraytoputstuffin.join(". ");
}
 
function getParagraph2() {
     
    for(var e = 7; e <= 12; e++) {
        arraytoputstuffin.push(document.getElementById("para2_input_box_" + e).value);
    }

     arraytoputstuffin.join(". ");
    document.getElementById("showParagraph2").innerHTML = arraytoputstuffin.join(". ");
}