//Function for displaying quiz questions, alternative options and answers 
function randomAircraft() {
    $(document).ready(function () {
        //Array for images on results page
        var resultImages = [["single-aerobatic-aircraft", "1point.png"]];
        //Array for aircraft used in previous questions.  It is located outside the Next click function so it does not refresh.
        //var aircraftUsed = [];
        //

        //Reset score to 0
        // $("#score")[0].innerHTML = "0"

        let count = document.getElementById("sr-only").innerText

        $("#next, #start").click(function () {

            var aircraftUsed = [];

            if ((this).innerHTML === "Next") {
                $(this).attr('disabled', true);
                count++ ; //Increment count
                $('.progress-bar').css('width', count + '0%'); //Increase width of progress bar fill width by incremented count
                $("#sr-only").text(count); //Display count in progress bar
            }
            else {
                count = 0;
                $('.progress-bar').css('width', document.getElementById("sr-only").innerText + '0%'); //Reset progress bar fill width
            }
            //console.log("What is count", count)
            //console.log("What is sr-only innerText:", document.getElementById("sr-only").innerText);
            // console.log("Does count === 1", count === 1)
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
            //console.log("Count by If statement:", count, "score:", $("#score")[0].innerHTML)

            if (count === 11 && $("#score")[0].innerHTML === "1") {
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
                    document.getElementById("score").innerText++
                }

                else if (aircraftChosen2[0] === imageChosen[0]) {
                    // console.log("Ans1 - aircraftChosen2:", aircraftChosen2[0]);
                    //console.log("Ans1 - imageChosen:", imageChosen[0]);
                    $(".correct2").show();
                    $(".incorrect1").show();
                }
                else if (aircraftChosen3[0] === imageChosen[0]) {
                    // console.log("Ans1 - aircraftChosen3:", aircraftChosen3[0]);
                    //console.log("Ans1 - imageChosen:", imageChosen[0]);
                    $(".correct3").show();
                    $(".incorrect1").show();
                }
                else {
                    (aircraftChosen4[0] === imageChosen[0])
                    // console.log("Ans1 - aircraftChosen4:", aircraftChosen4[0]);
                    // console.log("Ans1 - imageChosen:", imageChosen[0]);
                    $(".correct4").show();
                    $(".incorrect1").show();
                }
                // $('.answer').attr("disabled", true);
                $('#next').attr('disabled', null);
            });

            $("#answer2").off("click").one("click", function () {

                if (aircraftChosen2[0] === imageChosen[0]) {
                    // console.log("Ans2 - aircraftChosen2:", aircraftChosen2[0]);
                    $(".correct2").show();
                    document.getElementById("score").innerText++
                }
                else if (aircraftChosen1[0] === imageChosen[0]) {
                    // console.log("Ans2 - aircraftChosen1:", aircraftChosen1[0]);
                    $(".correct1").show();
                    $(".incorrect2").show();
                }
                else if (aircraftChosen3[0] === imageChosen[0]) {
                    // console.log("Ans2 - aircraftChosen3:", aircraftChosen3[0]);
                    $(".correct3").show();
                    $(".incorrect2").show();
                }
                else {
                    (aircraftChosen4[0] === imageChosen[0])
                    $(".correct4").show();
                    $(".incorrect2").show();
                }
                //$('.answer').attr("disabled", true);
                $('#next').attr('disabled', null);
            });

            $("#answer3").off("click").one("click", function () {
                if (aircraftChosen3[0] === imageChosen[0]) {
                    //console.log("Ans3 - aircraftChosen3:", aircraftChosen3[0]);
                    //  console.log(imageChosen[0]);
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
                // $('.answer').attr("disabled", true);
                $('#next').attr('disabled', null);
            });


            $("#answer4").off("click").one("click", function () {
                if (aircraftChosen4[0] === imageChosen[0]) {
                    $(".correct4").show();
                    document.getElementById("score").innerText++
                    //console.log("Ans4 - aircraftChosen4:", aircraftChosen4[0]);
                    //console.log("#score")
                    $('#next').attr('disabled', null);
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
                    (aircraftChosen3[0] === imageChosen[0])
                    $(".correct3").show();
                    $(".incorrect4").show();
                }
                //$('.answer').attr("disabled", true);
                $('#next').attr('disabled', null);
            });



            //Push answer to aircraftUsed so it cannot be used again in current quiz
            aircraftUsed.push(imageChosen);
            //return aircraftUsed
            // sessionStorage.setItem("previousAnswer", JSON.stringify(imageChosen));
            //sessionStorage.setItem('aircraftUsed1', JSON.stringify(aircraftUsed));
            console.log("count:", count)
            if (count === 1) {
                sessionStorage.setItem('aircraftUsed1', JSON.stringify(aircraftUsed));
                //sessionStorage.getItem('aircraftUsed1', JSON.stringify(aircraftUsed));
                //var aircraftUsed1 = sessionStorage.getItem('aircraftUsed1', JSON.stringify(aircraftUsed));
                //var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed1 = sessionStorage.getItem('aircraftUsed1');
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                // var aircraftUsed3 = JSON.parse(aircraftUsed1)
                console.log("var aircraftUsed1", aircraftUsed1)
                //console.log("var aircraftUsed3", aircraftUsed3)
                //console.log("JSON parse aircraftUsed2", JSON.parse(aircraftUsed1))
            }
            else if (count === 2) {

                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                //var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed1 = sessionStorage.getItem('aircraftUsed1');
                //var aircraftUsed4 = JSON.parse(aircraftUsed2)
                //var aircraftUsedAll = JSON.parse(aircraftUsed1).concat(JSON.parse(aircraftUsed2));
                console.log("var aircraftUsed2", aircraftUsed2)

                aircraftUsed3 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed1))
                console.log("aircraftUsed3:", aircraftUsed3)

                sessionStorage.setItem('aircraftUsed3', JSON.stringify(aircraftUsed3));
                //console.log("var aircraftUsed4", JSON.parse(aircraftUsed2))
                //console.log("var aircraftUsed4", aircraftUsed4)
                //console.log("var aircraftUsedAll", aircraftUsedAll)
            } else if (count === 3) {
                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed3 = sessionStorage.getItem('aircraftUsed3');
                aircraftUsed4 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed3))
                console.log("aircraftUsed4:", aircraftUsed4)
                sessionStorage.setItem('aircraftUsed4', JSON.stringify(aircraftUsed4));

            } else if (count === 4) {
                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed4 = sessionStorage.getItem('aircraftUsed4');
                aircraftUsed5 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed4))
                console.log("aircraftUsed5:", aircraftUsed5)
                sessionStorage.setItem('aircraftUsed5', JSON.stringify(aircraftUsed5));

            } else if (count === 5) {
                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed5 = sessionStorage.getItem('aircraftUsed5');
                aircraftUsed6 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed5))
                console.log("aircraftUsed6:", aircraftUsed6)
                sessionStorage.setItem('aircraftUsed6', JSON.stringify(aircraftUsed6));

            } else if (count === 6) {
                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed6 = sessionStorage.getItem('aircraftUsed6');
                aircraftUsed7 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed6))
                console.log("aircraftUsed7:", aircraftUsed7)
                sessionStorage.setItem('aircraftUsed7', JSON.stringify(aircraftUsed7));

            } else if (count === 7) {
                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed7 = sessionStorage.getItem('aircraftUsed7');
                aircraftUsed8 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed7))
                console.log("aircraftUsed8:", aircraftUsed8)
                sessionStorage.setItem('aircraftUsed8', JSON.stringify(aircraftUsed8));

            } else if (count === 8) {
                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed8 = sessionStorage.getItem('aircraftUsed8');
                aircraftUsed9 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed8))
                console.log("aircraftUsed9:", aircraftUsed9)
                sessionStorage.setItem('aircraftUsed9', JSON.stringify(aircraftUsed9));

            } else if (count === 9) {
                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed9 = sessionStorage.getItem('aircraftUsed9');
                aircraftUsed10 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed9))
                console.log("aircraftUsed10:", aircraftUsed10)
                sessionStorage.setItem('aircraftUsed10', JSON.stringify(aircraftUsed10));

            } else if (count === 10) {
                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed10 = sessionStorage.getItem('aircraftUsed10');
                aircraftUsed11 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed10))
                console.log("aircraftUsed11:", aircraftUsed11)
                sessionStorage.setItem('aircraftUsed11', JSON.stringify(aircraftUsed11));

            } else if (count === 11) {
                sessionStorage.setItem('aircraftUsed2', JSON.stringify(aircraftUsed));
                var aircraftUsed2 = sessionStorage.getItem('aircraftUsed2');
                var aircraftUsed11 = sessionStorage.getItem('aircraftUsed11');
                aircraftUsed12 = JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed11))
                console.log("aircraftUsed12:", aircraftUsed12)
                sessionStorage.setItem('aircraftUsed12', JSON.stringify(aircraftUsed12));
            }
            //console.log('aicraftUsed1Stringify:', JSON.stringify(aircraftUsed));
            //aircraftUsed5 = aircraftUsed4.concat(aircraftUsed3)

            //console.log("Concat:", JSON.parse(aircraftUsed2).concat(JSON.parse(aircraftUsed1)));
            //console.log("Concat:", aircraftUsed3.concat(aircraftUsed4));
            //if (count === 1) {
                //console.log("Concat:", aircraftUsed1.concat(aircraftUsed2));
              //  console.log("Non-Concat aicraftUsed1 If:", aircraftUsed1);
               // console.log("Non-Concat aicraftUsed2 If:", aircraftUsed2);
           // } else if (count ===2) {
             //   console.log("Non-Concat aicraftUsed1 Else If:", aircraftUsed1);
              //  console.log("Non-Concat aicraftUsed2 Else If:", aircraftUsed2);
          //  } else {
              //  console.log("Non-Concat aicraftUsed1 Else:", aircraftUsed1);
               // console.log("Non-Concat aicraftUsed2 Else:", aircraftUsed2);
            //}
            // console.log("aircraftAvailable", aircraftAvailable);
            // console.log("images array after image push", images);
            // console.log("aircraftUsed:", aircraftUsed)

        }//block this
        )
    });

    //};
}

//function b(){
    //var result = randomAircraft();
   // console.log("result:", result);
//}
//console.log("b:", b)