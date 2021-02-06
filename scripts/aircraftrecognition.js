$(".correct-answer").click(function () {
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

function displayAircraft1() {
    // $(f35.name).show();
    //console.log(f35)
    document.getElementById("demo").innerHTML = f35.image
    document.getElementById("demo").innerHTML = f22.image
    document.getElementById("demo").innerHTML = fa18.image
}

//$(".correct-answer").click(function(){
//console.log(f35)
//});

function randomAircraft() {
    var aircraft = [["F-35 Lightning II", "<img src='assets/images/f35.png'  alt='F35 Lightning II' />"], 
    ["F-22 Raptor", "<img src='assets/images/f22.png'  alt='F22 Raptor' />"], 
    ["F/A-18 Hornet", "<img src='assets/images/fa18.png'  alt='F/A-18 Hornet' />"], 
    ["Chengdu J-10", "<img src='assets/images/j10.png'  alt='Chengdu J-10' />"]]
    aircraftToUse1 = aircraft[Math.floor(Math.random() * aircraft.length)];
    aircraftToUse2 = aircraft[Math.floor(Math.random() * (aircraft.length - aircraftToUse1))];

    // do something with the selected value
    document.getElementById("demo").innerHTML = aircraftToUse1[1];
    document.getElementById("incorrect-answer1").innerHTML = aircraftToUse1[0];
    
    //while(aircraftToUse2 !== aircraftToUse1){
    document.getElementById("incorrect-answer2").innerHTML = aircraftToUse2[0];
    };


// Code from https://stackoverflow.com/questions/14422233/how-do-you-select-a-random-variable-within-a-function-in-javascript