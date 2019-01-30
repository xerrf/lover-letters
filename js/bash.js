$(document).ready(function() {

    console.log("In bash.js");
    
    //variables
    var counter = 1;
    $("p").hide();
    $("p#1").show();
    $("#1>.text").hide();



    //functions
    function enter() {
        counter++;
        let prev = counter - 1;
        let next = counter + 1;
        //console.log(counter + " " + prev + " " + next);
        console.log(counter);
        if (counter < 7) {
            if (prev > 0) {
                $("#" + prev + ">.text").show();
            }
            $("#" + counter).show();
            $("#" + counter + ">.text").hide();
        }
        else if (counter == 7) {
            for (i=0; i<5; i++) {
                $("#"+counter).show();
                counter++;
            }
            counter = 20;
        }

    }

    //event listeners
    $(document).keypress(function(e) {
        if (e.which==13) {
            console.log("input recieved");
            enter();
        }
    });
   
});