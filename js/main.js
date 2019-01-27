$(document).ready(function() {

    console.log("In main.js");

    function anchor(uri) {
        window.location=uri;
    }

    //makes the bash div a link
    $("#bashLink").click(function() {
        anchor("bash.html");
    });

    $("#gitLink").click(function() {
        anchor("git.html");
    });

    $("#githubLink").click(function() {
        anchor("github.html");
    });
});