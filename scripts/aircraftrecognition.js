
//Count number of clicks on Next button - code from Code Institute Local Storage module
//3function questionCounter() {
// set questionCounter variable to the contents of "counter" or 1 if "counter" doesn't exist yet
//3let questionCounter = sessionStorage.getItem("counter") || 0;
// increment questionCounter and store it in sessionStorage with the name "counter"
//3 sessionStorage.setItem("counter", ++questionCounter);
//console.log("counter")
// pb1.setItem(pb1, ++questionCounter);
//}

// function showCounter() {
// set currentCounter variable to the contents of "counter" or 1 if "counter" doesn't exist yet
// let currentCounter = sessionStorage.getItem("counter") || 1;
// display the current count in an alert
//3console.log("You clicked the button: " + questionCounter + " times.");
// }
//function incrementCounter() {
// set currentCounter variable to the contents of "counter" or 0 if "counter" doesn't exist yet
// let currentCounter = sessionStorage.getItem("counter") || 0;
// increment currentCounter and store it in sessionStorage with the name "counter"
// sessionStorage.setItem("counter", ++currentCounter);
//}
//function showCounter() {
// set currentCounter variable to the contents of "counter" or 0 if "counter" doesn't exist yet
//let currentCounter = sessionStorage.getItem("counter") || 0;
// display the current count in an alert
//for (let count = 1; count <= 10; count++) {
// (count);

//}
//alert("You clicked the button: " + currentCounter + " times.");
//3}

//Clear count from previous quiz
//2function start(){
//Progress bar - Code from https://www.youtube.com/watch?v=QxQRtwAtqKE
//2class progressBar {
//2constructor(element, initialValue = 0) {
// set questionCounter variable to the contents of "counter" or 0 if "counter" doesn't exist yet
//2this.valueElem = element.querySelector('.progress-bar-value');
// increment questionCounter and store it in sessionStorage with the name "counter"
//2this.fillElem = element.querySelector('.progress-bar-fill');
//0this.setValue(initialValue);
//2}
//0setValue(newValue) {
//0 if (newValue < 0) {
//0   newValue = 0;
//0 }
//0 if (newValue > 100) {
//0    newValue = 100;
//0 }
//0this.value = newValue;
//0 this.update();
//0 }
//0update() {
//0const percentage = this.value + '0%'; //50%, 60%, etc.

//0  this.fillElem.style.width = percentage;
//0this.valueElem.textContent = percentage;
//0}
//0 }
//2}
//2const pb1 = new progressBar(document.querySelector('.progress-bar'), sessionStorage.getItem("counter"))


// $("#start").on("click", function () {
//2$(".hide").hide();
//2sessionStorage.clear();
//2let questionCounter = sessionStorage.getItem("counter") || 0;
//2sessionStorage.setItem("counter", ++questionCounter);
//sessionStorage.setItem("counter", ++questionCounter);
//2console.log("####questionCounter is: " + questionCounter);
// });
//2}
//$("#start").on("click", function () {  
//4function incrementProgress() {
//Progress Bar - Code from https://www.youtube.com/watch?v=vXwk9tq4Voc
//4 var progressBar = $('.progress-bar');
//4 var progressNumber = 0;

//$('.progressBar')+=10;
//$('.progressBar').css('width', progressNumber + '%');

//progressBar.css('width').progressNumber + '%';
//}
//progressBar.attr('aria-valuenow', progressNumber)
//4 progressNumber += 10;
//4progressBar.css('width', progressNumber + '%');
//4console.log("incrementProgress called with progressNumber:" + progressNumber)
//4}

//$(document).ready(function () {
//$("#start").on("click", function () {
//5 let progressBar = $('.progress-bar');
// set progressCounter variable to the contents of "counter" or 0 if "counter" doesn't exist yet
//let progressCounter = sessionStorage.getItem("counter") || 0;
// increment progressCounter and store it in sessionStorage with the name "counter"
//sessionStorage.setItem("counter", ++progressCounter);
//let value = parseInt(document.getElementsByClassName('.progress-bar').width, 10)
//5let value = parseInt($(".progress-bar").css('width', 'value', 10));
//5value = isNaN(value) ? 0 : value;
//5 value +=10;
//let progressCounter = 0;
//progressCounter += 10;
//5progressBar.css('width', value + '%');
//5console.log("Progress Bar value:" + value)



//});
//});

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
        let count = document.getElementById("sr-only").innerText;
        //console.log("sr-only is:" +document.getElementById("sr-only").innerText);
        //let count = $("#score");
        let next = document.getElementById("next");
        let reset = document.getElementById("reset");
        //let next = $("#next");
        next.onclick = function () {
            //When count reaches 10 clear sessionStorage and return count to 0
            if (count === 10) {
                //sessionStorage.clear();
                return count = 0;
            } else {
                count++; //Increment count
                $('.progress-bar').css('width', count + '0%'); //Increase width of progress bar fill width by incremented count
                $("#sr-only").text(count); //Display count in progress bar
            }
        }
        //8reset.onclick = function () {
        //8if (count > 0) {
        //sessionStorage.clear();
        //8console.log("Reset button If statement activated: Yes")
        //return document.getElementById("score").innerText = 0;
        // return count === 0;
        // $('.progress-bar').css('width', count === 0 + '0%'); //Reset progress bar fill width
        // $("#sr-only").text(count); //Reset display count in progress bar
        //8}
        //8console.log("Reset button If statement activated: No")
        //8}


        //Hide correct & incorrect checks from previous question
        $("#next").click(function () {
            $(".hide").hide();

            //6 var count = 0;
            //6 var button = document.getElementById("next");
            //6 function countProgress() {
            //6 count += 10;	       
            //6 $('.progress-bar').css('width', count + '%');
            //6 }

            //Progress bar - Code from https://www.youtube.com/watch?v=QxQRtwAtqKE
            //1class progressBar {
            //1constructor(element, initialValue = 0) {
            //1this.valueElem = element.querySelector('.progress-bar-value');
            //1this.fillElem = element.querySelector('.progress-bar-fill');
            //1this.setValue(initialValue);
            //1}
            //1setValue(newValue) {
            //1if (newValue < 0) {
            //1newValue = 0;
            //1}
            //1if (newValue > 100) {
            //1newValue = 100;
            //1}
            //1this.value = newValue;
            //1this.update();
            //1}
            //1update() {
            //1const percentage = this.value + '0%'; //50%, 60%, etc.

            //1this.fillElem.style.width = percentage;
            //1this.valueElem.textContent = percentage;
            //1}
            //1}
            //1var pb1 = new progressBar(document.querySelector('.progress-bar'), sessionStorage.getItem("counter"))
            //1});


            let aircraft = [["F-35 Lightning II", "<img src='assets/images/f35.png'  alt='F35 Lightning II' />"],
            ["F-22 Raptor", "<img src='assets/images/f22.png'  alt='F22 Raptor' />"],
            ["F/A-18 Hornet", "<img src='assets/images/fa18.png'  alt='F/A-18 Hornet' />"],
            ["Chengdu J-10", "<img src='assets/images/j10.png'  alt='Chengdu J-10' />"],
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
            ["MQ-9 Reaper", "<img src='assets/images/f15.png'  alt='MQ-9 Reaper' />"],
            ["Su-27 (FLANKER)", "<img src='assets/images/su27.png'  alt='Sukhoi Su-27 (FLANKER)' />"],
            ["Tu-160 (BLACKJACK)", "<img src='assets/images/tu160.png'  alt='Tu-160 (BLACKJACK)' />"],
            ["Tu-22M (BACKFIRE)", "<img src='assets/images/tu22m.png'  alt='Tu-22M (BACKFIRE)' />"],
            ["Tu-95 (BEAR)", "<img src='assets/images/tu95.png'  alt='Tu-95 (BEAR)' />"]]

            let images = []

            //Remove existing elements in images array
            images.splice(0, 4);
            //console.log("After clearing images:", images);
            //console.log("Aircraft array:", aircraft);

            //Randomly select aircraft from array
            let aircraftToUse1 = Math.floor(Math.random() * aircraft.length);
            let aircraftChosen1 = aircraft[aircraftToUse1];

            //Push to images array
            images.push(aircraftChosen1);
            //console.log("After pushing first ac to images:", images);

            //Remove selected aircraft from array
            aircraft.splice(aircraftToUse1, 1);
            //console.log("Aircraft array after first splice:", aircraft);

            //Randomly select another aircraft from array
            let aircraftToUse2 = Math.floor(Math.random() * aircraft.length);
            let aircraftChosen2 = aircraft[aircraftToUse2];

            //Push to images array
            images.push(aircraftChosen2);
            //console.log("After pushing 2nd ac to images:", images);

            //Remove another aircraft from array
            aircraft.splice(aircraftToUse2, 1);
            //console.log("Aircraft array after 2nd splice:", aircraft);

            //Randomly select another aircraft from array
            let aircraftToUse3 = Math.floor(Math.random() * aircraft.length);
            let aircraftChosen3 = aircraft[aircraftToUse3];

            //Push to images array
            images.push(aircraftChosen3);
            //console.log("After pushing 3rd ac to images:", images);

            //Remove a third aircraft from array
            aircraft.splice(aircraftToUse3, 1);
            //console.log("Aircraft array after 3rd splice:", aircraft);

            //Randomly select another aircraft from array
            let aircraftToUse4 = Math.floor(Math.random() * aircraft.length);
            let aircraftChosen4 = aircraft[aircraftToUse4];

            //Push to images array
            images.push(aircraftChosen4);
            //console.log("After pushing 4th ac to images:", images);

            //Remove a third aircraft from array
            aircraft.splice(aircraftToUse4, 1);
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
            let imageChosen = images[imageToUse];
            document.getElementById("demo").innerHTML = imageChosen[1];

            // Code for randomly selecting from array from: https://stackoverflow.com/questions/57059564/how-to-exclude-an-array-element-from-a-random-pick

            $("#answer1").click(function () {
                //let checkcorrect = document.getElementById("correct1");
                // let checkincorrect = document.getElementById("incorrect1");
                if (aircraftChosen1[0] == imageChosen[0]) {
                    console.log("Aircraft1:", aircraftChosen1[0]);
                    console.log("Image chosen:", imageChosen[0]);
                    $(".correct1").show();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    ++document.getElementById("score").innerText
                    //document.getElementById("score").innerText = score;
                    //score++;
                    //console.log(score);
                    // el = document.getElementById("score");
                    //scoreCount = el.innerText 
                    console.log(document.getElementById("score").innerText)
                    //$("#score").text = score;
                    //score++;
                    //console.log(score);
                    //$("#score").html++

                    // set scoreCounter variable to the contents of "score" or 0 if "score" doesn't exist yet
                    //0let scoreCounter = sessionStorage.getItem("score") || 0;
                    // increment scoreCounter and store it in sessionStorage with the name "score"
                    //0sessionStorage.setItem("score", ++scoreCounter);
                    //document.getElementById("demo").innerHTML = imageChosen[1];
                    //checkcorrect.style.display = "inline"
                    //document.getElementById("correct1").innerHTML 
                    //$("#score").html("score");
                    //alert("You clicked the button: " + scoreCounter + " times.");
                    //0console.log("Your score is " + scoreCounter);
                    //$("#score").innerText("scoreCounter");
                    //document.getElementById("score").innerHTML = scoreCounter;
                    //0$("#score").html(scoreCounter);
                }
                else if (aircraftChosen2[0] == imageChosen[0]) {
                    console.log("Aircraft2:", aircraftChosen2[0]);
                    console.log("Image chosen:", imageChosen[0]);
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
                    console.log("Aircraft3:", aircraftChosen3[0]);
                    console.log("Image chosen:", imageChosen[0]);
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
                    (aircraftChosen4[0] == imageChosen[0])
                    console.log("Aircraft4:", aircraftChosen4[0]);
                    console.log("Image chosen:", imageChosen[0]);
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

            $("#answer2").click(function () {
                if (aircraftChosen2[0] == imageChosen[0]) {
                    console.log(aircraftChosen2[0]);
                    console.log(imageChosen[0]);
                    $(".correct2").show();
                    $(".correct1").hide();
                    $(".incorrect1").hide();
                    $(".incorrect2").hide();
                    $(".correct3").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    ++document.getElementById("score").innerText
                    console.log(document.getElementById("score").innerText)
                    //$("#score").text++;
                    //console.log($("#score").text);
                    //$("#score").text = score;
                    // score++;
                    //console.log(score);
                    // set scoreCounter variable to the contents of "score" or 0 if "score" doesn't exist yet
                    //0let scoreCounter = sessionStorage.getItem("score") || 0;
                    // increment scoreCounter and store it in sessionStorage with the name "score"
                    //0sessionStorage.setItem("score", ++scoreCounter);
                    //0console.log("Your score is" + scoreCounter);
                    //0$("#score").html(scoreCounter);
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

            $("#answer3").click(function () {
                if (aircraftChosen3[0] == imageChosen[0]) {
                    console.log(aircraftChosen3[0]);
                    console.log(imageChosen[0]);
                    $(".correct3").show();
                    $(".correct1").hide();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".incorrect3").hide();
                    $(".correct4").hide();
                    $(".incorrect4").hide();
                    ++document.getElementById("score").innerText
                    console.log(document.getElementById("score").innerText)
                    //$("#score").text++;
                    //console.log($("#score").text);
                    //$("#score").text = score;
                    //score++;
                    //console.log(score);
                    // set scoreCounter variable to the contents of "score" or 0 if "score" doesn't exist yet
                    //0let scoreCounter = sessionStorage.getItem("score") || 0;
                    // increment scoreCounter and store it in sessionStorage with the name "score"
                    //0sessionStorage.setItem("score", ++scoreCounter);
                    //0console.log("Your score is" + scoreCounter);
                    //0$("#score").html(scoreCounter);
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

            $("#answer4").click(function () {
                if (aircraftChosen4[0] == imageChosen[0]) {
                    console.log(aircraftChosen4[0]);
                    console.log(imageChosen[0]);
                    $(".correct4").show();
                    $(".correct1").hide();
                    $(".incorrect1").hide();
                    $(".correct2").hide();
                    $(".incorrect2").hide();
                    $(".incorrect3").hide();
                    $(".correct3").hide();
                    $(".incorrect4").hide();
                    ++document.getElementById("score").innerText
                    console.log(document.getElementById("score").innerText)
                    //$("#score").text++;
                    //console.log($("#score").text);
                    // $("#score").text = score;
                    //score++;
                    //console.log(score);
                    // set scoreCounter variable to the contents of "score" or 0 if "score" doesn't exist yet
                    //0let scoreCounter = sessionStorage.getItem("score") || 0;
                    // increment scoreCounter and store it in sessionStorage with the name "score"
                    //0sessionStorage.setItem("score", ++scoreCounter);
                    //0console.log("Your score is" + scoreCounter);
                    //0$("#score").html(scoreCounter);
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
        });
    }
    )
};
