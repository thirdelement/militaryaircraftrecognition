
//Count number of clicks on Next button - code from Code Institute Local Storage module
function questionCounter() {
    // set questionCounter variable to the contents of "counter" or 1 if "counter" doesn't exist yet
    let questionCounter = sessionStorage.getItem("counter") || 0;
    // increment questionCounter and store it in sessionStorage with the name "counter"
    sessionStorage.setItem("counter", ++questionCounter);
    //console.log("counter")
    // pb1.setItem(pb1, ++questionCounter);
    //}

    // function showCounter() {
    // set currentCounter variable to the contents of "counter" or 1 if "counter" doesn't exist yet
    // let currentCounter = sessionStorage.getItem("counter") || 1;
    // display the current count in an alert
    console.log("You clicked the button: " + questionCounter + " times.");
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
}

  //Clear count from previous quiz
  function start(){
        $("#start").on("click", function () {
            sessionStorage.clear();
            let questionCounter = sessionStorage.getItem("counter") || 0;
            sessionStorage.setItem("counter", ++questionCounter);
            //sessionStorage.setItem("counter", ++questionCounter);
            console.log("####questionCounter is: " + questionCounter);
        });
        }

//Function for displaying quiz questions, alternative options and answers 
function randomAircraft() {
    $(document).ready(function () {
      
        //Hide correct & incorrect checks from previous question
        $("#next").click(function () {
            $(".hide").hide();

            //Progress bar - Code from https://www.youtube.com/watch?v=QxQRtwAtqKE
            class progressBar {
                constructor(element, initialValue = 0) {
                    this.valueElem = element.querySelector('.progress-bar-value');
                    this.fillElem = element.querySelector('.progress-bar-fill');
                    this.setValue(initialValue);
                }
                setValue(newValue) {
                    if (newValue < 0) {
                        newValue = 0;
                    }
                    if (newValue > 100) {
                        newValue = 100;
                    }
                    this.value = newValue;
                    this.update();
                }
                update() {
                    const percentage = this.value + '0%'; //50%, 60%, etc.

                    this.fillElem.style.width = percentage;
                    this.valueElem.textContent = percentage;
                }
            }
            const pb1 = new progressBar(document.querySelector('.progress-bar'), sessionStorage.getItem("counter"))
        });


        let aircraft = [["F-35 Lightning II", "<img src='assets/images/f35.png'  alt='F35 Lightning II' />"],
        ["F-22 Raptor", "<img src='assets/images/f22.png'  alt='F22 Raptor' />"],
        ["F/A-18 Hornet", "<img src='assets/images/fa18.png'  alt='F/A-18 Hornet' />"],
        ["Chengdu J-10", "<img src='assets/images/j10.png'  alt='Chengdu J-10' />"]]

        let images = []

        //Remove existing elements in images array
        images.splice(0, 4);
        console.log("After clearing images:", images);
        console.log("Aircraft array:", aircraft);

        //Randomly select aircraft from array
        let aircraftToUse1 = Math.floor(Math.random() * aircraft.length);
        let aircraftChosen1 = aircraft[aircraftToUse1];

        //Push to images array
        images.push(aircraftChosen1);
        console.log("After pushing first ac to images:", images);

        //Remove selected aircraft from array
        aircraft.splice(aircraftToUse1, 1);
        console.log("Aircraft array after first splice:", aircraft);

        //Randomly select another aircraft from array
        let aircraftToUse2 = Math.floor(Math.random() * aircraft.length);
        let aircraftChosen2 = aircraft[aircraftToUse2];

        //Push to images array
        images.push(aircraftChosen2);
        console.log("After pushing 2nd ac to images:", images);

        //Remove another aircraft from array
        aircraft.splice(aircraftToUse2, 1);
        console.log("Aircraft array after 2nd splice:", aircraft);

        //Randomly select another aircraft from array
        let aircraftToUse3 = Math.floor(Math.random() * aircraft.length);
        let aircraftChosen3 = aircraft[aircraftToUse3];

        //Push to images array
        images.push(aircraftChosen3);
        console.log("After pushing 3rd ac to images:", images);

        //Remove a third aircraft from array
        aircraft.splice(aircraftToUse3, 1);
        console.log("Aircraft array after 3rd splice:", aircraft);

        //Randomly select another aircraft from array
        let aircraftToUse4 = Math.floor(Math.random() * aircraft.length);
        let aircraftChosen4 = aircraft[aircraftToUse4];

        //Push to images array
        images.push(aircraftChosen4);
        console.log("After pushing 4th ac to images:", images);

        //Remove a third aircraft from array
        aircraft.splice(aircraftToUse4, 1);
        console.log("Aircraft array after 4th splice:", aircraft);

        // Add aircraft image to paragraph element
        //document.getElementById("demo").innerHTML = aircraftChosen1[1];

        // Add aircraft name to button
        document.getElementById("answer1").innerHTML = aircraftChosen1[0];
        console.log("Answer1:", document.getElementById("answer1").innerHTML);
        // Add aircraft name to button
        document.getElementById("answer2").innerHTML = aircraftChosen2[0];
        console.log("Answer2:", aircraftChosen2[0]);
        // Add aircraft name to button
        document.getElementById("answer3").innerHTML = aircraftChosen3[0];
        console.log("Answer3:", aircraftChosen3[0]);
        // Add aircraft name to button
        document.getElementById("answer4").innerHTML = aircraftChosen4[0];
        console.log("Answer4:", aircraftChosen4[0]);

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
                //document.getElementById("demo").innerHTML = imageChosen[1];
                //checkcorrect.style.display = "inline"
                //document.getElementById("correct1").innerHTML 
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
