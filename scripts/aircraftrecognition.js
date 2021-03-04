$("#reset").on("click", function () {
    $(document).ready(function () {
        // sessionStorage.clear();
        if (document.getElementById("sr-only").innerText > 0) {
            return document.getElementById("sr-only").innerText = 0;
            $('.progress-bar').css('width', document.getElementById("sr-only").innerText + '0%'); //Reset progress bar fill width
            //$("#sr-only").text(count); //Reset display count in progress bar
            //var aircraftUsed = [];
        }
    });
});

//Function for displaying quiz questions, alternative options and answers 
function randomAircraft() {
    $(document).ready(function () {
        //Array for images on results page
        var resultImages = [["single-aerobatic-aircraft", "1point.png"]];
        //Array for aircraft used in previous questions.  It is located outside the Next click function so it does not refresh.
        var aircraftUsed = [];

        //Reset score to 0
        $("#score")[0].innerHTML = "0"

        //Increment progress bar by 10% on each Next button click.  Code ideas from https://www.youtube.com/watch?v=vXwk9tq4Voc & Stack Overflow
        let count = document.getElementById("sr-only").innerText

        next.onclick = function () {
            //function runScore(){
            //When count reaches 10 return count to 0
            if (count === 10) {
                //return count = 0;
            } else {
                count++; //Increment count
                $('.progress-bar').css('width', count + '0%'); //Increase width of progress bar fill width by incremented count
                $("#sr-only").text(count); //Display count in progress bar
            }
        }

        $("#next").click(function () {
            // $(document).ready(function () {
            //function runQuiz() {

            $(this).attr('disabled', true);
            $(".hide").hide();

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

            aircraftUsed.forEach(function (a) {
                hash[getKey(a)] = true;
            });

            aircraftAvailable = aircraft.filter(function (a) {
                return !hash[getKey(a)];
            });

            //Images array for keeping quiz round potential answers which are added to buttons 
            let images = [];
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

            //Randomly select another aircraft from array
            let aircraftToUse4 = Math.floor(Math.random() * aircraftAvailable.length);
            let aircraftChosen4 = aircraftAvailable[aircraftToUse4];

            //Push to images array
            images.push(aircraftChosen4);

            //Remove a fourth aircraft from array
            aircraftAvailable.splice(aircraftToUse4, 1);

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
            var imageChosen = images[imageToUse];
            //console.log("Count:", count, "score:", $("#score")[0].innerHTML)
            // console.log("1point image:", 'alt', resultImages[0]).attr('src', 'assets/images/' + resultImages[0],)
            //console.log('alt', resultImages[0][0],'"<img src=',"assets/images/" + resultImages[0][1],'/>"')
            //console.log(count === 10, $("#score")[0].innerHTML === "1")
            //console.log(".answer", $(".answer"))
            if (count === 10 && $("#score")[0].innerHTML === "1") {

                $("#aircraftImage").attr('alt', resultImages[0][0]).attr('src', 'assets/images/' + resultImages[0][1]);
                $(".answer, #question").hide();
                $("#onePoint").show();

            } else {

                //Add alt and src tags for aircraft image
                $('#aircraftImage').attr('alt', imageChosen[1]).attr('src', 'assets/images/' + imageChosen[1]);
                //console.log('alt', imageChosen[1],'"<img src=',"assets/images/" + imageChosen[1],'/>"')
            }

            //answer button with off click to turn off event handlers from previous question rounds
            $("#answer1").off("click").one("click", function () {

                if (aircraftChosen1[0] === imageChosen[0]) {
                    // console.log("Ans1 - aircraftChosen1:", aircraftChosen1[0]);
                    $(".correct1").show();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    document.getElementById("score").innerText++
                }

                else if (aircraftChosen2[0] === imageChosen[0]) {
                    // console.log("Ans1 - aircraftChosen2:", aircraftChosen2[0]);
                    //console.log("Ans1 - imageChosen:", imageChosen[0]);
                    $(".correct2").show();
                    $(".incorrect1").show();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".incorrect3").hide();
                    $(".correct3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                }
                else if (aircraftChosen3[0] === imageChosen[0]) {
                    // console.log("Ans1 - aircraftChosen3:", aircraftChosen3[0]);
                    //console.log("Ans1 - imageChosen:", imageChosen[0]);
                    $(".correct3").show();
                    $(".incorrect1").show();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct2").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                }
                else {
                    (aircraftChosen4[0] === imageChosen[0])
                    // console.log("Ans1 - aircraftChosen4:", aircraftChosen4[0]);
                    // console.log("Ans1 - imageChosen:", imageChosen[0]);
                    $(".correct4").show();
                    $(".incorrect1").show();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".incorrect4").hide();
                }
                // $('.answer').attr("disabled", true);
                $('#next').attr('disabled', null);
            });

            $("#answer2").off("click").one("click", function () {

                if (aircraftChosen2[0] === imageChosen[0]) {
                    // console.log("Ans2 - aircraftChosen2:", aircraftChosen2[0]);
                    $(".correct2").show();
                    $(".correct1").hide();
                    $(".incorrect1").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    document.getElementById("score").innerText++
                }
                else if (aircraftChosen1[0] === imageChosen[0]) {
                    // console.log("Ans2 - aircraftChosen1:", aircraftChosen1[0]);
                    $(".correct1").show();
                    $(".incorrect2").show();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect3").hide();
                    $(".correct3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                }
                else if (aircraftChosen3[0] === imageChosen[0]) {
                    // console.log("Ans2 - aircraftChosen3:", aircraftChosen3[0]);
                    $(".correct3").show();
                    $(".incorrect2").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".correct2").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                }
                else {
                    (aircraftChosen4[0] === imageChosen[0])
                    $(".correct4").show();
                    $(".incorrect2").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".correct2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".incorrect4").hide();
                    //console.log("Ans2 - aircraftChosen4:", aircraftChosen4[0]);
                }
                //$('.answer').attr("disabled", true);
                $('#next').attr('disabled', null);
            });

            $("#answer3").off("click").one("click", function () {
                if (aircraftChosen3[0] === imageChosen[0]) {
                    //console.log("Ans3 - aircraftChosen3:", aircraftChosen3[0]);
                    //  console.log(imageChosen[0]);
                    $(".correct3").show();
                    $(".correct1").hide();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    document.getElementById("score").innerText++
                }
                else if (aircraftChosen1[0] === imageChosen[0]) {
                    $(".correct1").show();
                    $(".incorrect3").show();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    //console.log("Ans3 - aircraftChosen1:", aircraftChosen1[0]);
                }
                else if (aircraftChosen2[0] === imageChosen[0]) {
                    $(".correct2").show();
                    $(".incorrect3").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    //console.log("Ans3 - aircraftChosen2:", aircraftChosen2[0]);
                }
                else {
                    (aircraftChosen4[0] === imageChosen[0])
                    $(".correct4").show();
                    $(".incorrect3").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct2").hide();
                    $(".correct3").hide();
                    $(".incorrect4").hide();
                    //console.log("Ans3 - aircraftChosen4:", aircraftChosen4[0]);
                }
                // $('.answer').attr("disabled", true);
                $('#next').attr('disabled', null);
            });


            $("#answer4").off("click").one("click", function () {
                if (aircraftChosen4[0] === imageChosen[0]) {
                    $(".correct4").show();
                    $(".correct1").hide();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".incorrect3").hide();
                    $(".correct3").hide();
                    $(".incorrect4").hide();

                    document.getElementById("score").innerText++
                    //console.log("Ans4 - aircraftChosen4:", aircraftChosen4[0]);
                    //console.log("#score")
                    $('#next').attr('disabled', null);
                }
                else if (aircraftChosen1[0] === imageChosen[0]) {
                    $(".correct1").show();
                    $(".incorrect4").show();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    // console.log("Ans4 - aircraftChosen1:", aircraftChosen1[0]);
                }
                else if (aircraftChosen2[0] === imageChosen[0]) {
                    $(".correct2").show();
                    $(".incorrect4").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    // console.log("Ans4 - aircraftChosen2:", aircraftChosen2[0]);
                }
                else {
                    (aircraftChosen3[0] === imageChosen[0])
                    $(".correct3").show();
                    $(".incorrect4").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct2").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    // console.log("Ans4 - aircraftChosen3:", aircraftChosen3[0]);
                }
                //$('.answer').attr("disabled", true);
                $('#next').attr('disabled', null);
            });

            //aircraftUsed = aircraft.filter()
            aircraftUsed.push(imageChosen);
            console.log("aircraftAvailable", aircraftAvailable);
            console.log("images array after image push", images);
            console.log("aircraftUsed:", aircraftUsed)

            // $("#answer4").off("click")
            // $('#next').attr('disabled', null);
            //-un-block this//} 
            // });

        }//block this

        )


    });

    //};
}
