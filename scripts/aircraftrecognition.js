$("#next").click(function () {

    //Array for holding images presented at end of quiz with score
    var resultImages = [["F35A-through-binoculars", "binos.png"], ["single-aerobatic-aircraft", "1point.png"]];

    //Declare count variable for Next button clicks
    let count = document.getElementById("sr-only").innerText
    console.log("count before prog bar:", count)
    
    //Clear sessionStorage from previous rounds
    if (count === 0) {
        sessionStorage.clear();
    }


    
    //Disable Next button and remove classes until answer selected
    $(this).attr('disabled', true).removeClass("add-border").removeClass("next-change-color");
    
    count++; //Increment count
    $('.progress-bar').css('width', count + '0%'); //Increase width of progress bar fill width by incremented count
    $("#sr-only").text(count); //Display count in progress bar
    //If count is 11 display 10 in progress bar at end of quiz
    if (count === 11) {
        $("#sr-only").text(10);
    }

    //Hide answer button check, cross marks & startImage
    $(".hide").hide();
    $("#startImage").hide();

    console.log("aircraftUsed13 Before VAR", aircraftUsed13)
    //Declare variable for array for answer from first question round
    var aircraftUsed = [];

    //Declare variable for sessionStorage array for answers from subsequent rounds
    var aircraftUsed13 = JSON.parse(sessionStorage.getItem('aircraftUsed13'));
    console.log("aircraftUsed13 After VAR", aircraftUsed13)

    //Function to compare aircraft and usedAircraft arrays and return to difference to aircraftAvailable array.  Code from https://stackoverflow.com/questions/46998798/comparing-2d-arrays-finding-unique-items
    function getKey(array) {
        return [0, 1]
            .map(function (i) { return array[i]; })
            .join('|');
    }

    //Array code format from https://stackoverflow.com/questions/66413208/how-can-i-stop-an-if-condition-comparing-two-array-items-from-being-met-by-pre?noredirect=1#comment117411539_66413208
    var aircraft = [["F-35 Lightning II", "f35.png"],
    ["F-22 Raptor", "f22.png"],
    ["F/A-18 Hornet", "fa18.png"],
    ["Chengdu J-10", "j10.png"],
    ["Chengdu J-20", "j20.png"],
    ["A-10 Thunderbolt II", "a10.png"],
    ["A400M Atlas", "a400.png"],
    ["Beriev A-50 (MAINSTAY)", "a50.png"],
    ["C-130 Hercules", "c130.png"],
    ["C-17 Globemaster III", "c17.png"],
    ["Dassault Rafale", "rafale.png"],
    ["F-15 Eagle", "f15.png"],
    ["F-16 Fighting Falcon", "f16.png"],
    ["IL-76 (CANDID)", "il76.png"],
    ["MiG-31 (FOXHOUND)", "mig31.png"],
    ["MQ-9 Reaper", "mq9.png"],
    ["Su-27 (FLANKER)", "su27.png"],
    ["Tu-160 (BLACKJACK)", "tu160.png"],
    ["Tu-22M (BACKFIRE)", "tu22m.png"],
    ["Tu-95 (BEAR)", "tu95.png"]
    ]

    hash = Object.create(null),

        aircraftAvailable = [];
    console.log("aircraftAvailable", aircraftAvailable)
    console.log("aircraftUsed Next:", aircraftUsed)

    if (count === 1) {
        aircraftUsed.forEach(function (a) {
            hash[getKey(a)] = true;
        });
    } else {
        aircraftUsed13.forEach(function (a) {
            hash[getKey(a)] = true;
        });
        console.log("aircraftUsed13 COMPARE FNCTIN:", aircraftUsed13)
    }

    aircraftAvailable = aircraft.filter(function (a) {
        return !hash[getKey(a)];
    });

    //Images array for keeping quiz round potential answers which are added to buttons 
    let images = [];

    //Randomly select an aircraft from array
    let aircraftToUse1 = Math.floor(Math.random() * aircraftAvailable.length);
    let aircraftChosen1 = aircraftAvailable[aircraftToUse1];

    //Push to images array
    images.push(aircraftChosen1);

    //Remove selected aircraft from array - Code from: https://stackoverflow.com/questions/57059564/how-to-exclude-an-array-element-from-a-random-pick
    aircraftAvailable.splice(aircraftToUse1, 1);

    //Randomly select another aircraft from array
    let aircraftToUse2 = Math.floor(Math.random() * aircraftAvailable.length);
    let aircraftChosen2 = aircraftAvailable[aircraftToUse2];

    //Push to images array
    images.push(aircraftChosen2);

    //Remove another aircraft from array
    aircraftAvailable.splice(aircraftToUse2, 1);

    //Randomly select another aircraft from array
    let aircraftToUse3 = Math.floor(Math.random() * aircraftAvailable.length);
    let aircraftChosen3 = aircraftAvailable[aircraftToUse3];

    //Push to images array
    images.push(aircraftChosen3);

    //Remove a third aircraft from array
    aircraftAvailable.splice(aircraftToUse3, 1);

    //Randomly select a fourth aircraft from array
    let aircraftToUse4 = Math.floor(Math.random() * aircraftAvailable.length);
    let aircraftChosen4 = aircraftAvailable[aircraftToUse4];

    //Push to images array
    images.push(aircraftChosen4);

    //Remove a fourth aircraft from array
    aircraftAvailable.splice(aircraftToUse4, 1);

    // Add aircraft names to buttons
    $("#answer1-span").text(aircraftChosen1[0])
    $("#answer2-span").text(aircraftChosen2[0])
    $("#answer3-span").text(aircraftChosen3[0])
    $("#answer4-span").text(aircraftChosen4[0])

    //Select random image from images array for display in HTML
    let imageToUse = Math.floor(Math.random() * images.length);
    var imageChosen = images[imageToUse];

    //Change answer button colour on hover 
    //Code from Code Institute - Interactive Frontend module, JQuery Library, JQuery Events, Method Chaining - Challenge 1   
    $("#answer1").mouseenter(function () {
        $("#answer1").addClass("change-color").addClass("make-border");
    });

    $("#answer1").mouseleave(function () {
        $("#answer1").removeClass("add-border").removeClass("change-color");
    });

    $("#answer2").mouseenter(function () {
        $("#answer2").addClass("change-color").addClass("add-border");
    });

    $("#answer2").mouseleave(function () {
        $("#answer2").removeClass("add-border").removeClass("change-color");
    });

    $("#answer3").mouseenter(function () {
        $("#answer3").addClass("change-color").addClass("add-border");
    });

    $("#answer3").mouseleave(function () {
        $("#answer3").removeClass("add-border").removeClass("change-color");
    });

    $("#answer4").mouseenter(function () {
        $("#answer4").addClass("change-color").addClass("add-border");
    });

    $("#answer4").mouseleave(function () {
        $("#answer4").removeClass("add-border").removeClass("change-color");
    });

    $("#next").mouseenter(function () {
        $("#next").addClass("next-change-color").addClass("add-border");
    });

    $("#next").mouseleave(function () {
        $("#next").removeClass("add-border").removeClass("next-change-color");
    });

    //If count is 11 display results images & text
    if (count === 11 && $("#score")[0].innerHTML === "1") {
        $("#aircraftImage").attr('alt', resultImages[0][0]).attr('src', 'assets/images/' + resultImages[0][1]).show();
        $(".answer, #question").hide();
        $("#onePoint").show();
    }
    else {
        //Display imageChosen
        $('#aircraftImage').attr('alt', imageChosen[1]).attr('src', 'assets/images/' + imageChosen[1]).show();
    }

    //Answer button with off click to turn off event handlers from previous question rounds
    $("#answer1").off("click").one("click", function () {

        if (aircraftChosen1[0] === imageChosen[0]) {
            $(".correct1").show();
            document.getElementById("score").innerText++
        }

        else if (aircraftChosen2[0] === imageChosen[0]) {
            $(".correct2").show();
            $(".incorrect1").show();
        }
        else if (aircraftChosen3[0] === imageChosen[0]) {
            $(".correct3").show();
            $(".incorrect1").show();
        }
        else {
            (aircraftChosen4[0] === imageChosen[0])
            $(".correct4").show();
            $(".incorrect1").show();
        }
        //Re-enable Next button
        $('#next').attr('disabled', null);
    });

    $("#answer2").off("click").one("click", function () {

        if (aircraftChosen2[0] === imageChosen[0]) {
            $(".correct2").show();
            document.getElementById("score").innerText++
        }
        else if (aircraftChosen1[0] === imageChosen[0]) {
            $(".correct1").show();
            $(".incorrect2").show();
        }
        else if (aircraftChosen3[0] === imageChosen[0]) {
            $(".correct3").show();
            $(".incorrect2").show();
        }
        else {
            (aircraftChosen4[0] === imageChosen[0])
            $(".correct4").show();
            $(".incorrect2").show();
        }
        $('#next').attr('disabled', null);
    });

    $("#answer3").off("click").one("click", function () {
        if (aircraftChosen3[0] === imageChosen[0]) {
            $(".correct3").show();
            document.getElementById("score").innerText++
        }
        else if (aircraftChosen1[0] === imageChosen[0]) {
            $(".correct1").show();
            $(".incorrect3").show();
        }
        else if (aircraftChosen2[0] === imageChosen[0]) {
            $(".correct2").show();
            $(".incorrect3").show();
        }
        else {
            (aircraftChosen4[0] === imageChosen[0])
            $(".correct4").show();
            $(".incorrect3").show();
        }
        $('#next').attr('disabled', null);
    });


    $("#answer4").off("click").one("click", function () {
        if (aircraftChosen4[0] === imageChosen[0]) {
            $(".correct4").show();
            document.getElementById("score").innerText++
            console.log("correct4:", $(".correct4").html);
            console.log("correct4 JS:", document.getElementsByClassName("correct4"));
            console.log("correct4 JQ",$(".correct4"))

        }
        else if (aircraftChosen1[0] === imageChosen[0]) {
            $(".correct1").show();
            $(".incorrect4").show();
            console.log("correct1 JQ",$(".correct1"))
            console.log("incorrect4:", $(".incorrect4").html);
            console.log("incorrect4 JS:", document.getElementsByClassName("incorrect4"));
        }
        else if (aircraftChosen2[0] === imageChosen[0]) {
            $(".correct2").show();
            $(".incorrect4").show();
            console.log("correct2 JQ",$(".correct2"))
            console.log("incorrect4:", $(".incorrect4").html);
            console.log("incorrect4 JS:", document.getElementsByClassName("incorrect4"));
        }
        else {
            (aircraftChosen3[0] === imageChosen[0])
            $(".correct3").show();
            $(".incorrect4").show();
            console.log("correct3 JQ",$(".correct3"))
            console.log("incorrect4:", $(".incorrect4").html);
            console.log("incorrect4 JS:", document.getElementsByClassName("incorrect4"));
        }
        $('#next').attr('disabled', null);
    });

    //Push answer to aircraftUsed so it cannot be used again in current quiz
    aircraftUsed.push(imageChosen);

    console.log("count:", count)

    //If count is 1 store aircraftUsed array in sessionStorage
    if (count === 1) {
        sessionStorage.setItem('aircraftUsed13', JSON.stringify(aircraftUsed));
        var aircraftUsed13 = sessionStorage.getItem('aircraftUsed13');
        console.log("aircraftUsed13 IF", JSON.parse(aircraftUsed13))
    }
    //Else concat aircraftUsed arrays to add to aircraft in sessionStorage
    else {
        sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
        var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
        var aircraftUsed13 = sessionStorage.getItem('aircraftUsed13');
        console.log("aircraftUsed2 Else", aircraftUsed2)
        aircraftUsed13 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed13))
        console.log("aircraftUsed13 Else:", aircraftUsed13)
        sessionStorage.setItem('aircraftUsed13', JSON.stringify(aircraftUsed13));
    }
    console.log("aircraftUsed13 After Else:", aircraftUsed13)
}
)

//$("#answer").hover(function() {
 //$("#answer").css("background", "lightblue");
//} );  

