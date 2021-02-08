$("correct-answer").click(function () {
    $(".correct").show();
});

$(".incorrect-answer1").click(function () {
    $(".incorrect1").show();
    $(".correct").show();
});

$(".incorrect-answer2").click(function () {
    $(".incorrect2").show();
    $(".correct").show();
});
$(".incorrect-answer3").click(function () {
    $(".incorrect3").show();
    $(".correct").show();
});

function Aircraft(name, image, description) {
    this.name = name;
    this.image = image;
    this.description = description;
};

let f35 = new Aircraft("F-35 Lightning II", "<img src='assets/images/f35.png'  alt='F35 Lightning II' />", "Role: Multi-role stealth fighter/nWing: High-mounted, trapezoidal/nEngine: Air intakes attached to fuselage under wing, single exhaust/nFuselage: Pointed nose, bubble canopy, rectangular mid-section/nTail: High mounted, trapezoidal flats, two canted swept tail fins");
let f22 = new Aircraft("F-22 Ratpor", "<img src='assets/images/f22.png'  alt='F22 Raptor' />", "Role: Air Superiority stealth fighter/nWing: High-mounted, semi-delta with curved trailing edge/nEngine: Air intakes attached to fuselage under wing, twin exhaust/nFuselage: Pointed nose, bubble canopy, rectangular mid-section/nTail: High mounted, swept flats, two canted trapezoidal tail fins");
let fa18 = new Aircraft("F/A-18 Hornet", "<img src='assets/images/fa18.png'  alt='F/A-18 Hornet' />", "Role: Multi-role Fighter/Attack aircraft/nWing: Mid-mounted, backward tapered, LEX under canopy/nEngine: Single air intake against fuselage under each wing, twin exhaust/nFuselage: Slender, pointed nose, bubble canopy /nTail: Mid mounted, back-tapered flats, two canted back-tapered tail fins");
let j10 = new Aircraft("Chengdu J-10", "<img src='assets/images/j10.png'  alt='Chengdu J-10' />", "Role: Fighter/nWing: Mid-mounted, delta, canards either side of canopy/nEngine: Rectangular air intake under fuselage, single exhaust/nFuselage: Tubular with pointed nose, bubble canopy /nTail: Low mounted, equally-tapered flats with negative slant, one swept tail fin with square tip");


function displayAircraft() {
    return f35
}

//function displayAircraft1() {
    // $(f35.name).show();
    //console.log(f35)
    //document.getElementById("demo").innerHTML = f35.image
    //document.getElementById("demo").innerHTML = f22.image
    //document.getElementById("demo").innerHTML = fa18.image
//}

//$(".correct-answer").click(function(){
//console.log(f35)
//});

function randomAircraft() {
    var aircraft = [["F-35 Lightning II", "<img src='assets/images/f35.png'  alt='F35 Lightning II' />"], 
    ["F-22 Raptor", "<img src='assets/images/f22.png'  alt='F22 Raptor' />"], 
    ["F/A-18 Hornet", "<img src='assets/images/fa18.png'  alt='F/A-18 Hornet' />"], 
    ["Chengdu J-10", "<img src='assets/images/j10.png'  alt='Chengdu J-10' />"]]

    //Randomly select aircraft from array
    let aircraftToUse1 = Math.floor(Math.random() * aircraft.length);
    let aircraftChosen1 = aircraft[aircraftToUse1];

    //Remove selected aircraft from array
    aircraft.splice(aircraftToUse1, 1); 

    //Randomly select another aircraft from array
    let aircraftToUse2 = Math.floor(Math.random() * aircraft.length);
    let aircraftChosen2 = aircraft[aircraftToUse2];

    //Remove another aircraft from array
    aircraft.splice(aircraftToUse2, 1); 

    //Randomly select another aircraft from array
    let aircraftToUse3 = Math.floor(Math.random() * aircraft.length);
    let aircraftChosen3 = aircraft[aircraftToUse3];

    //Remove a third aircraft from array
    aircraft.splice(aircraftToUse3, 1); 

    //Randomly select another aircraft from array
    let aircraftToUse4 = Math.floor(Math.random() * aircraft.length);
    let aircraftChosen4 = aircraft[aircraftToUse4];

    //Remove a third aircraft from array
    aircraft.splice(aircraftToUse4, 1); 

    // Add aircraft image to paragraph element
    document.getElementById("demo").innerHTML = aircraftChosen1[1];

    // Add aircraft name to button
    document.getElementById("correct-answer").innerHTML = aircraftChosen1[0];
    
    // Add aircraft name to button
    document.getElementById("incorrect-answer1").innerHTML = aircraftChosen2[0];
    
    // Add aircraft name to button
    document.getElementById("incorrect-answer2").innerHTML = aircraftChosen3[0];
    
     // Add aircraft name to button
    document.getElementById("incorrect-answer3").innerHTML = aircraftChosen4[0];
    };
// Code for randomly selecting from array from: https://stackoverflow.com/questions/57059564/how-to-exclude-an-array-element-from-a-random-pick