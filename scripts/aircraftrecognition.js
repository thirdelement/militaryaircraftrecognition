//$(".correct-answer").click(function(){
    // $(".correct").show();
//});

$(".incorrect-answer1").click(function(){
     $(".incorrect1").show();
     $(".correct").show();
});

$(".incorrect-answer2").click(function(){
     $(".incorrect2").show();
     $(".correct").show();
});
$(".incorrect-answer3").click(function(){
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
let fa18 = new Aircraft("F/A-18 Hornet", "<img src='assets/images/fa18.png'  alt='F/A-18 Hornet' />", "Role: Multi-role Fighter/Attack aircraft/nWing: Mid-mounted, backward tapered, LEX under canopy/nEngine: Single air intake against fuselage under each wing, twin exhaust/nFuselage: Pointed nose, bubble canopy, slender mid-section/nTail: Mid mounted, back-tapered flats, two canted back-tapered tail fins");

function displayAircraft(){
    return f35
}

function displayAircraft1(){
 // $(f35.name).show();
 //console.log(f35)
 document.getElementById("demo").innerHTML=f35.image
 document.getElementById("demo").innerHTML=f22.image
 document.getElementById("demo").innerHTML=fa18.image
}

$(".correct-answer").click(function(){
    console.log(f35)
});