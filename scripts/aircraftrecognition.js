//Function to initiate, progress and start over quiz
$("#next").click(function () {

    //Array for holding images presented at end of quiz with score
    let resultImages = [["single-aerobatic-aircraft", "1point.png"],
    ["Patrouille Swiss - Two F5e Tiger II", "2points.png"],
    ["Nellis AFB - Three classic Sabers", "3points.png"],
    ["SanFrancisco - Four Blue Angel F/A-18 Hornets", "4points.png"],
    ["Five Blue Impulse T4s", "5points.png"],
    ["Six PLAAF J10s", "6points.png"],
    ["Seven Smoke Squadron T-6s", "7points.png"],
    ["Patrouille De France Eight Alpha Jets", "8points.png"],
    ["Nine Red Arrow Hawks", "9points.png"],
    ["Ten Frecce Tricolori Aermacchi MB-339-A", "10points.png"],
    ["empty-sky", "0points.png"]
    ];

    //Declare count variable for Next button clicks
    let count = document.getElementById("sr-only").innerText

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

    //Hide answer button check, cross marks & startImage; show progress bar and answer buttons
    initRound();

    //Declare variable for array for answer from first question round
    let aircraftUsed = [];

    //Declare variable for sessionStorage array for answers from subsequent rounds
    var aircraftSession = JSON.parse(sessionStorage.getItem('aircraftSession'));

    //Function to compare aircraft and usedAircraft arrays and return to difference to aircraftAvailable array.  Code from https://stackoverflow.com/questions/46998798/comparing-2d-arrays-finding-unique-items
    function getKey(array) {
        return [0, 1]
            .map(function (i) { return array[i]; })
            .join('|');
    }

    //Array code format from https://stackoverflow.com/questions/66413208/how-can-i-stop-an-if-condition-comparing-two-array-items-from-being-met-by-pre?noredirect=1#comment117411539_66413208
    let aircraft = [["F-35 Lightning II", "f35.png"],
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

    //Generate key from aircraftUsed array
    if (count === 1) {
        aircraftUsed.forEach(function (a) {
            hash[getKey(a)] = true;
        });
    } else {
        aircraftSession.forEach(function (a) {
            hash[getKey(a)] = true;
        });
    }

    //Filter aircraft array by checking hash table and add items to aircraftAvailable
    aircraftAvailable = aircraft.filter(function (a) {
        return !hash[getKey(a)];
    });

    //Images array for keeping quiz round potential answers which are added to buttons 
    let images = [];

    //Randomly select an aircraft from array - Code from: https://stackoverflow.com/questions/14422233/how-do-you-select-a-random-variable-within-a-function-in-javascript
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

    // Add names to buttons
    $("#answer1-span").text(aircraftChosen1[0]);
    $("#answer2-span").text(aircraftChosen2[0]);
    $("#answer3-span").text(aircraftChosen3[0]);
    $("#answer4-span").text(aircraftChosen4[0]);

    //Rename the Next button to Start over if count is 11
    if (count === 11) {
        $("#next").text("Start over");
    }
    else {
        $("#next").text("Next");
    }

    //Select random image from images array for display in HTML
    let imageToUse = Math.floor(Math.random() * images.length);
    let imageChosen = images[imageToUse];

    //Change answer button colour on hover 
    buttonColor();

    //If count is 11 display results images & text
    if (count === 11 && $("#score").text() === "1") {
        $("#aircraftImage").attr('alt', resultImages[0][0]).attr('src', 'assets/images/' + resultImages[0][1]).show();
        $("#onePoint").show();
        //Hide items for score page, disable Next button, reset count and score
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "2") {
        $("#aircraftImage").attr('alt', resultImages[1][0]).attr('src', 'assets/images/' + resultImages[1][1]).show();
        $("#twoPoints").show();
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "3") {
        $("#aircraftImage").attr('alt', resultImages[2][0]).attr('src', 'assets/images/' + resultImages[2][1]).show();
        $("#threePoints").show();
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "4") {
        $("#aircraftImage").attr('alt', resultImages[3][0]).attr('src', 'assets/images/' + resultImages[3][1]).show();
        $("#fourPoints").show();
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "5") {
        $("#aircraftImage").attr('alt', resultImages[4][0]).attr('src', 'assets/images/' + resultImages[4][1]).show();
        $("#fivePoints").show();
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "6") {
        $("#aircraftImage").attr('alt', resultImages[5][0]).attr('src', 'assets/images/' + resultImages[5][1]).show();
        $("#sixPoints").show();
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "7") {
        $("#aircraftImage").attr('alt', resultImages[6][0]).attr('src', 'assets/images/' + resultImages[6][1]).show();
        $("#sevenPoints").show();
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "8") {
        $("#aircraftImage").attr('alt', resultImages[7][0]).attr('src', 'assets/images/' + resultImages[7][1]).show();
        $("#eightPoints").show();
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "9") {
        $("#aircraftImage").attr('alt', resultImages[8][0]).attr('src', 'assets/images/' + resultImages[8][1]).show();
        $("#ninePoints").show();
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "10") {
        $("#aircraftImage").attr('alt', resultImages[9][0]).attr('src', 'assets/images/' + resultImages[9][1]).show();
        $("#tenPoints").show();
        scorePage();
    }
    else if (count === 11 && $("#score").text() === "0") {
        $("#aircraftImage").attr('alt', resultImages[10][0]).attr('src', 'assets/images/' + resultImages[10][1]).show();
        $("#zeroPoints").show();
        scorePage();
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
            (aircraftChosen4[0] === imageChosen[0]);
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
            (aircraftChosen4[0] === imageChosen[0]);
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
            (aircraftChosen4[0] === imageChosen[0]);
            $(".correct4").show();
            $(".incorrect3").show();
        }
        $('#next').attr('disabled', null);
    });

    $("#answer4").off("click").one("click", function () {
        if (aircraftChosen4[0] === imageChosen[0]) {
            $(".correct4").show();
            document.getElementById("score").innerText++
        }
        else if (aircraftChosen1[0] === imageChosen[0]) {
            $(".correct1").show();
            $(".incorrect4").show();
        }
        else if (aircraftChosen2[0] === imageChosen[0]) {
            $(".correct2").show();
            $(".incorrect4").show();
        }
        else {
            (aircraftChosen3[0] === imageChosen[0]);
            $(".correct3").show();
            $(".incorrect4").show();
        }
        $('#next').attr('disabled', null);
    });

    //Push answer to aircraftUsed so it cannot be used again in current quiz
    aircraftUsed.push(imageChosen);

    //If count is 1 store aircraftUsed array in sessionStorage
    if (count === 1) {
        sessionStorage.setItem('aircraftSession', JSON.stringify(aircraftUsed));
        let aircraftSession = sessionStorage.getItem('aircraftSession');
    }
    //Else concat aircraftUsed arrays to add to aircraft in sessionStorage
    else {
        sessionStorage.setItem('aircraftSession1', JSON.stringify(aircraftUsed));

        let aircraftSession1 = sessionStorage.getItem('aircraftSession1');
        let aircraftSession = sessionStorage.getItem('aircraftSession');

        aircraftSession = JSON.parse(aircraftSession1).concat(JSON.parse(aircraftSession));
        sessionStorage.setItem('aircraftSession', JSON.stringify(aircraftSession));
    }
}
);

//Hide answer button check, cross marks & startImage; show progress bar and answer buttons
function initRound() {
    $(".hide, #startImage, #welcome, .resultComment").hide();
    $(".answer, .progress").show();
}

//On score page, hide answer buttons and progress bar, disable Next button, reset count and score
function scorePage() {
    $(".answer, .progress").hide();
    $('#next').attr('disabled', null);
    $("#sr-only").text(0);
    $("#score").text(0);
}

//Change answer button colour on hover 
//Code from Code Institute - Interactive Frontend module, JQuery Library, JQuery Events, Method Chaining - Challenge 1  
function buttonColor() {
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
}