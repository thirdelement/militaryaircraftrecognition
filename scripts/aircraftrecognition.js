//$("#answer1").click(function () {
//  $(".correct").show();
//});

//$("#answer2").click(function () {
// $(".incorrect1").show();
//$(".correct").show();
//});

//$("#answer3").click(function () {
//   $(".incorrect2").show();
// $(".correct").show();
//});
//$("#answer4").click(function () {
// $(".incorrect3").show();
// $(".correct").show();
//});

//function Aircraft(name, image, description) {
//this.name = name;
//this.image = image;
//this.description = description;
//};

//let f35 = new Aircraft("F-35 Lightning II", "<img src='assets/images/f35.png'  alt='F35 Lightning II' />", "Role: Multi-role stealth fighter/nWing: High-mounted, trapezoidal/nEngine: Air intakes attached to fuselage under wing, single exhaust/nFuselage: Pointed nose, bubble canopy, rectangular mid-section/nTail: High mounted, trapezoidal flats, two canted swept tail fins");
//let f22 = new Aircraft("F-22 Ratpor", "<img src='assets/images/f22.png'  alt='F22 Raptor' />", "Role: Air Superiority stealth fighter/nWing: High-mounted, semi-delta with curved trailing edge/nEngine: Air intakes attached to fuselage under wing, twin exhaust/nFuselage: Pointed nose, bubble canopy, rectangular mid-section/nTail: High mounted, swept flats, two canted trapezoidal tail fins");
//let fa18 = new Aircraft("F/A-18 Hornet", "<img src='assets/images/fa18.png'  alt='F/A-18 Hornet' />", "Role: Multi-role Fighter/Attack aircraft/nWing: Mid-mounted, backward tapered, LEX under canopy/nEngine: Single air intake against fuselage under each wing, twin exhaust/nFuselage: Slender, pointed nose, bubble canopy /nTail: Mid mounted, back-tapered flats, two canted back-tapered tail fins");
///let j10 = new Aircraft("Chengdu J-10", "<img src='assets/images/j10.png'  alt='Chengdu J-10' />", "Role: Fighter/nWing: Mid-mounted, delta, canards either side of canopy/nEngine: Rectangular air intake under fuselage, single exhaust/nFuselage: Tubular with pointed nose, bubble canopy /nTail: Low mounted, equally-tapered flats with negative slant, one swept tail fin with square tip");


//function displayAircraft() {
//return f35
//}

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
    let aircraft = [["F-35 Lightning II", "<img src='assets/images/f35.png'  alt='F35 Lightning II' />"],
    ["F-22 Raptor", "<img src='assets/images/f22.png'  alt='F22 Raptor' />"],
    ["F/A-18 Hornet", "<img src='assets/images/fa18.png'  alt='F/A-18 Hornet' />"],
    ["Chengdu J-10", "<img src='assets/images/j10.png'  alt='Chengdu J-10' />"]]

    let images = []

    //Hide correct & incorrect checks from previous question
    $("#next").click(function () {
        //$(".correct1", ".correct2",".correct3", ".correct4", ".incorrect1", ".incorrect2", ".incorrect3", ".incorrect4").hide();
        $(".hide").hide();
        //$(".incorrect2").hide();
    });


    //Randomly select aircraft from array
    let aircraftToUse1 = Math.floor(Math.random() * aircraft.length);
    let aircraftChosen1 = aircraft[aircraftToUse1];

    //Push to images array
    images.push(aircraftChosen1);

    //Remove selected aircraft from array
    aircraft.splice(aircraftToUse1, 1);

    //Randomly select another aircraft from array
    let aircraftToUse2 = Math.floor(Math.random() * aircraft.length);
    let aircraftChosen2 = aircraft[aircraftToUse2];

    //Push to images array
    images.push(aircraftChosen2);

    //Remove another aircraft from array
    aircraft.splice(aircraftToUse2, 1);

    //Randomly select another aircraft from array
    let aircraftToUse3 = Math.floor(Math.random() * aircraft.length);
    let aircraftChosen3 = aircraft[aircraftToUse3];

    //Push to images array
    images.push(aircraftChosen3);

    //Remove a third aircraft from array
    aircraft.splice(aircraftToUse3, 1);

    //Randomly select another aircraft from array
    let aircraftToUse4 = Math.floor(Math.random() * aircraft.length);
    let aircraftChosen4 = aircraft[aircraftToUse4];

    //Push to images array
    images.push(aircraftChosen4);

    //Remove a third aircraft from array
    aircraft.splice(aircraftToUse4, 1);

    // Add aircraft image to paragraph element
    //document.getElementById("demo").innerHTML = aircraftChosen1[1];

    // Add aircraft name to button
    document.getElementById("answer1").innerHTML = aircraftChosen1[0];

    // Add aircraft name to button
    document.getElementById("answer2").innerHTML = aircraftChosen2[0];

    // Add aircraft name to button
    document.getElementById("answer3").innerHTML = aircraftChosen3[0];

    // Add aircraft name to button
    document.getElementById("answer4").innerHTML = aircraftChosen4[0];

    //Select random image from images array and display in HTML
    let imageToUse = Math.floor(Math.random() * images.length);
    let imageChosen = images[imageToUse];
    document.getElementById("demo").innerHTML = imageChosen[1];

    // Code for randomly selecting from array from: https://stackoverflow.com/questions/57059564/how-to-exclude-an-array-element-from-a-random-pick

    $("#answer1").click(function () {
        if (aircraftChosen1[0] == imageChosen[0]) {
            console.log(aircraftChosen1[0]);
            console.log(imageChosen[0]);
            $(".correct1").show();
        }
        else if (aircraftChosen2[0] == imageChosen[0]) {
            $(".correct2").show();
            $(".incorrect1").show();
        }
        else if (aircraftChosen3[0] == imageChosen[0]) {
            $(".correct3").show();
            $(".incorrect1").show();
        }
        else {
            (aircraftChosen4[0] == imageChosen[0])
            $(".correct4").show();
            $(".incorrect1").show();
        }
    });

    $("#answer2").click(function () {
        if (aircraftChosen2[0] == imageChosen[0]) {
            console.log(aircraftChosen2[0]);
            console.log(imageChosen[0]);
            $(".correct2").show();
        }
        else if (aircraftChosen1[0] == imageChosen[0]) {
            $(".correct1").show();
            $(".incorrect2").show();
        }
        else if (aircraftChosen3[0] == imageChosen[0]) {
            $(".correct3").show();
            $(".incorrect2").show();
        }
        else {
            (aircraftChosen4[0] == imageChosen[0])
            $(".correct4").show();
            $(".incorrect2").show();
        }
    });

    $("#answer3").click(function () {
        if (aircraftChosen3[0] == imageChosen[0]) {
            console.log(aircraftChosen3[0]);
            console.log(imageChosen[0]);
            $(".correct3").show();
        }
        else if (aircraftChosen1[0] == imageChosen[0]) {
            $(".correct1").show();
            $(".incorrect3").show();
        }
        else if (aircraftChosen2[0] == imageChosen[0]) {
            $(".correct2").show();
            $(".incorrect3").show();
        }
        else {
            (aircraftChosen4[0] == imageChosen[0])
            $(".correct4").show();
            $(".incorrect3").show();
        }
    });

    $("#answer4").click(function () {
        if (aircraftChosen4[0] == imageChosen[0]) {
            console.log(aircraftChosen4[0]);
            console.log(imageChosen[0]);
            $(".correct4").show();
        }
        else if (aircraftChosen1[0] == imageChosen[0]) {
            $(".correct1").show();
            $(".incorrect4").show();
        }
        else if (aircraftChosen2[0] == imageChosen[0]) {
            $(".correct2").show();
            $(".incorrect4").show();
        }
        else {
            (aircraftChosen3[0] == imageChosen[0])
            $(".correct3").show();
            $(".incorrect4").show();
        }
    });
};

//function answer(){
    //if 
    //var images = ["aircraftChosen1", "aircraftChosen2", "aircraftChosen3", "aircraftChosen4"]
    //let imageToUse = Math.floor(Math.random() * images.length);
    //let imageChosen = images[imageToUse];
    //document.getElementById("demo").innerHTML = imageChosen[1];
//};