$("#reset").on("click", function () {
    $(document).ready(function () {
        // sessionStorage.clear();
        if (document.getElementById("sr-only").innerText > 0) {
            return document.getElementById("sr-only").innerText = 0;
            $('.progress-bar').css('width', document.getElementById("sr-only").innerText + '0%'); //Reset progress bar fill width
            //$("#sr-only").text(count); //Reset display count in progress bar
        }
    });
});



//Function for displaying quiz questions, alternative options and answers 
function randomAircraft() {
    $(document).ready(function () {

        //Increment progress bar by 10% on each Next button click.  Code ideas from https://www.youtube.com/watch?v=vXwk9tq4Voc & Stack Overflow
        let count = document.getElementById("sr-only").innerText
        //let next = document.getElementById("next");
        //let reset = document.getElementById("reset");
        next.onclick = function () {
            //When count reaches 10 clear sessionStorage and return count to 0
            if (count === 10) {
                return count = 0;
            } else {
                count++; //Increment count
                $('.progress-bar').css('width', count + '0%'); //Increase width of progress bar fill width by incremented count
                $("#sr-only").text(count); //Display count in progress bar
            }
        }


        //Array for aircraft used in previous questions.  It is located outside the Next click function so it does not refresh.
        var aircraftUsed = [];
        //console.log("aircraftUsed before Next:", aircraftUsed)
        //console.log("aircraftAvailable before Next:", aircraftAvailable);
        //Hide correct & incorrect checks from previous question
        $("#next").click(function () {

            $(".hide").hide();
        
        //Function to compare aircraft and usedAircraft arrays and return to difference to aircraftAvailable array.  Code from https://stackoverflow.com/questions/46998798/comparing-2d-arrays-finding-unique-items
            function getKey(array) {
                return [0, 1]
                    .map(function (i) { return array[i]; })
                    .join('|');
            }

            var aircraft = [["F-35 Lightning II", "<img src='assets/images/f35.png'  alt='F35 Lightning II' />"],
            ["F-22 Raptor", "<img src='assets/images/f22.png'  alt='F22 Raptor' />"],
            ["F/A-18 Hornet", "<img src='assets/images/fa18.png'  alt='F/A-18 Hornet' />"],
            ["Chengdu J-10", "<img src='assets/images/j10.png'  alt='Chengdu J-10' />"],
            ["Chengdu J-20", "<img src='assets/images/j20.png'  alt='Chengdu J-20' />"],
            ["A-10 Thunderbolt II", "<img src='assets/images/a10.png'  alt='A-10 Thunderbolt II' />"],
            ["A400M Atlas", "<img src='assets/images/a400.png'  alt='A400M Atlas' />"],
            ["Beriev A-50 (MAINSTAY)", "<img src='assets/images/a50.png'  alt='Beriev A-50 (MAINSTAY)' />"],
            ["C-130 Hercules", "<img src='assets/images/c130.png'  alt='C-130 Hercules' />"],
            ["C-17 Globemaster III", "<img src='assets/images/c17.png'  alt='C-17 Globemaster III' />"],
            ["Dassault Rafale", "<img src='assets/images/rafale.png'  alt='Dassault Rafale' />"],
            ["F-15 Eagle", "<img src='assets/images/f15.png'  alt='F-15 Eagle' />"],
            ["F-16 Fighting Falcon", "<img src='assets/images/f16.png'  alt='F-16 Fighting Falcon' />"],
            ["IL-76 (CANDID)", "<img src='assets/images/il76.png'  alt='Ilyushin IL-76 (CANDID)' />"],
            ["MiG-31 (FOXHOUND)", "<img src='assets/images/mig31.png'  alt='MiG-31 (FOXHOUND)' />"],
            ["MQ-9 Reaper", "<img src='assets/images/mq9.png'  alt='MQ-9 Reaper' />"],
            ["Su-27 (FLANKER)", "<img src='assets/images/su27.png'  alt='Sukhoi Su-27 (FLANKER)' />"],
            ["Tu-160 (BLACKJACK)", "<img src='assets/images/tu160.png'  alt='Tu-160 (BLACKJACK)' />"],
            ["Tu-22M (BACKFIRE)", "<img src='assets/images/tu22m.png'  alt='Tu-22M (BACKFIRE)' />"],
            ["Tu-95 (BEAR)", "<img src='assets/images/tu95.png'  alt='Tu-95 (BEAR)' />"]],
                


                hash = Object.create(null),

                aircraftAvailable = [];
            

            aircraftUsed.forEach(function (a) {
                hash[getKey(a)] = true;
            });

            aircraftAvailable = aircraft.filter(function (a) {
                return !hash[getKey(a)];
            });

            

            let images = [];
            console.log("aircraftAvailable after Next:", aircraftAvailable);
            //console.log("aircraftUsed after let:", aircraftUsed);

            //Remove existing elements in images array
            // images.splice(0, 4);
            //Remote aircraft used in previous questions from aircraft array
            // aircraft.splice(sessionStorage.getItem("aircraftUsed"))
            //console.log("After clearing images:", images);
            //console.log("Aircraft array:", aircraft);

            //Randomly select aircraft from array
            //function checkAircraft(unused) {
            //return unused != aircraftUsed;
            //}

            //function filteraircraft() {
            //console.log("Unused ac:", aircraft.filter(checkAircraft));
            // }

            let aircraftToUse1 = Math.floor(Math.random() * aircraftAvailable.length);
            let aircraftChosen1 = aircraftAvailable[aircraftToUse1];

            //Push to images array
            images.push(aircraftChosen1);
            console.log("images after pushing first ac:", images);

            //Remove selected aircraft from array - Code from: https://stackoverflow.com/questions/57059564/how-to-exclude-an-array-element-from-a-random-pick
            aircraftAvailable.splice(aircraftToUse1, 1);
            console.log("aircraftAvailable array after 1st splice:", aircraftAvailable);

            //Randomly select another aircraft from array
            let aircraftToUse2 = Math.floor(Math.random() * aircraftAvailable.length);
            let aircraftChosen2 = aircraftAvailable[aircraftToUse2];

            //Push to images array
            images.push(aircraftChosen2);
            //console.log("After pushing 2nd ac to images:", images);

            //Remove another aircraft from array
            aircraftAvailable.splice(aircraftToUse2, 1);
            //console.log("Aircraft array after 2nd splice:", aircraft);

            //Randomly select another aircraft from array
            let aircraftToUse3 = Math.floor(Math.random() * aircraftAvailable.length);
            let aircraftChosen3 = aircraftAvailable[aircraftToUse3];

            //Push to images array
            images.push(aircraftChosen3);
            //console.log("After pushing 3rd ac to images:", images);

            //Remove a third aircraft from array
            aircraft.splice(aircraftToUse3, 1);
            // console.log("Aircraft array after 3rd splice:", aircraft);

            //Randomly select another aircraft from array
            let aircraftToUse4 = Math.floor(Math.random() * aircraftAvailable.length);
            let aircraftChosen4 = aircraftAvailable[aircraftToUse4];

            //Push to images array
            images.push(aircraftChosen4);
            //console.log("After pushing 4th ac to images:", images);

            //Remove a fourth aircraft from array
            aircraftAvailable.splice(aircraftToUse4, 1);
            //console.log("Aircraft array after 4th splice:", aircraft);

            // Add aircraft image to paragraph element
            //document.getElementById("demo").innerHTML = aircraftChosen1[1];

            // Add aircraft name to button
            document.getElementById("answer1").innerHTML = aircraftChosen1[0];
            //console.log("Answer1:", document.getElementById("answer1").innerHTML);
            // Add aircraft name to button
            document.getElementById("answer2").innerHTML = aircraftChosen2[0];
            //console.log("Answer2:", aircraftChosen2[0]);
            // Add aircraft name to button
            document.getElementById("answer3").innerHTML = aircraftChosen3[0];
            //console.log("Answer3:", aircraftChosen3[0]);
            // Add aircraft name to button
            document.getElementById("answer4").innerHTML = aircraftChosen4[0];
            // console.log("Answer4:", aircraftChosen4[0]);

            //Select random image from images array and display in HTML
            let imageToUse = Math.floor(Math.random() * images.length);
            var imageChosen = images[imageToUse];
            document.getElementById("demo").innerHTML = imageChosen[1];


            //0aircraftUsed.push(imageChosen);

            //console.log("aircraftUsed after image push:", aircraftUsed);
            //0 localStorage.setItem("aircraftUsed", JSON.stringify(aircraftUsed))
            //0let storedAircraft = JSON.parse(localStorage.getItem("aircraftUsed"));
            //console.log("localStorage aircraftUsed:", storedAircraft);
            //0  var i;
            //0console.log("local storage");
            //0or (i = 0; i < localStorage.length; i++) {
            //0console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
            //0}


            //from just below here
            $("#answer1").one("click", function () {
                //let checkcorrect = document.getElementById("correct1");
                // let checkincorrect = document.getElementById("incorrect1");
                if (aircraftChosen1[0] === imageChosen[0]) {
                    //console.log("Aircraft1:", aircraftChosen1[0]);
                    //console.log("Image chosen:", imageChosen[0]);
                    $(".correct1").show();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    ++document.getElementById("score").innerText
                    //console.log(document.getElementById("score").innerText)
                }
                else if (aircraftChosen2[0] == imageChosen[0]) {
                    //console.log("Aircraft2:", aircraftChosen2[0]);
                    //console.log("Image chosen:", imageChosen[0]);
                    $(".correct2").show();
                    $(".incorrect1").show();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".incorrect3").hide();
                    $(".correct3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    //checkincorrect.style.display = "inline"
                    //document.getElementById("correct2").innerHTML 
                    //document.getElementsByClassName("incorrect1").innerHTML 
                }
                else if (aircraftChosen3[0] == imageChosen[0]) {
                   // console.log("Aircraft3:", aircraftChosen3[0]);
                   // console.log("Image chosen:", imageChosen[0]);
                    $(".correct3").show();
                    $(".incorrect1").show();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct2").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    //$(".correct3").show();
                    //$(".incorrect1").show();
                    //checkincorrect.style.display = "inline"
                    //document.getElementsByClassName("correct3").innerHTML 
                    //document.getElementsByClassName("incorrect1").innerHTML
                }
                else {
                    (aircraftChosen4[0] === imageChosen[0])
                   // console.log("Aircraft4:", aircraftChosen4[0]);
                   // console.log("Image chosen:", imageChosen[0]);
                    $(".correct4").show();
                    $(".incorrect1").show();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".incorrect4").hide();
                    //$(".correct4").show();
                    //$(".incorrect1").show();
                    //checkincorrect.style.display = "inline"
                    // document.getElementsByClassName("correct4").innerHTML 
                    // document.getElementsByClassName("incorrect1").innerHTML
                }
            });

            //$("#answer2").click(function () {
                $("#answer2").one("click", function () {
                if (aircraftChosen2[0] === imageChosen[0]) {
                   // console.log(aircraftChosen2[0]);
                   // console.log(imageChosen[0]);
                    $(".correct2").show();
                    $(".correct1").hide();
                    $(".incorrect1").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    ++document.getElementById("score").innerText
                   // console.log(document.getElementById("score").innerText)
                }
                else if (aircraftChosen1[0] == imageChosen[0]) {
                    $(".correct1").show();
                    $(".incorrect2").show();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect3").hide();
                    $(".correct3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                }
                else if (aircraftChosen3[0] == imageChosen[0]) {
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
                    (aircraftChosen4[0] == imageChosen[0])
                    $(".correct4").show();
                    $(".incorrect2").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".correct2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".incorrect4").hide();
                }
            });

            $("#answer3").one("click", function () {
                if (aircraftChosen3[0] === imageChosen[0]) {
                   // console.log(aircraftChosen3[0]);
                  //  console.log(imageChosen[0]);
                    $(".correct3").show();
                    $(".correct1").hide();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    ++document.getElementById("score").innerText
                   // console.log(document.getElementById("score").innerText)
                }
                else if (aircraftChosen1[0] == imageChosen[0]) {
                    $(".correct1").show();
                    $(".incorrect3").show();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                }
                else if (aircraftChosen2[0] == imageChosen[0]) {
                    $(".correct2").show();
                    $(".incorrect3").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                }
                else {
                    (aircraftChosen4[0] == imageChosen[0])
                    $(".correct4").show();
                    $(".incorrect3").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct2").hide();
                    $(".correct3").hide();
                    $(".incorrect4").hide();
                }
            });

            $("#answer4").one("click", function () {
                if (aircraftChosen4[0] === imageChosen[0]) {
                   // console.log(aircraftChosen4[0]);
                   // console.log(imageChosen[0]);
                    $(".correct4").show();
                    $(".correct1").hide();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".incorrect3").hide();
                    $(".correct3").hide();
                    $(".incorrect4").hide();
                    ++document.getElementById("score").innerText
                    //console.log(document.getElementById("score").innerText)
                }
                else if (aircraftChosen1[0] == imageChosen[0]) {
                    $(".correct1").show();
                    $(".incorrect4").show();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                }
                else if (aircraftChosen2[0] == imageChosen[0]) {
                    $(".correct2").show();
                    $(".incorrect4").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                }
                else {
                    (aircraftChosen3[0] == imageChosen[0])
                    $(".correct3").show();
                    $(".incorrect4").show();
                    $(".incorrect1").hide();
                    $(".correct1").hide();
                    $(".incorrect2").hide();
                    $(".correct2").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                }
            });
            //aircraftUsed = aircraft.filter()
            aircraftUsed.push(imageChosen);
            console.log("aircraftUsed array after image push:", aircraftUsed);
            console.log("images array after image push", images);
            console.log("aircraftUsed:", aircraftUsed)
        });
        //here
    }

    )

};

//function removeUsedAircraft(){
    //let aircraftUsed = [];

            //sessionStorage.setItem("aircraftUsed", JSON.stringify(aircraftUsed))
            //let storedAircraft = JSON.parse(sessionStorage.getItem("aircraftUsed"));
            //console.log("sessionStorage aircraftUsed:", storedAircraft);
            //var i;
            //console.log("session storage");
//for (i = 0; i < sessionStorage.length; i++) {
    //console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");


