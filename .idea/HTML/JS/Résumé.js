function OnOff_1() {
    console.log(document.getElementById("sous-partie1").style.display);
    if (document.getElementById("sous-partie1").style.display == "none" || document.getElementById("question_1").style.display == "")
        document.getElementById("sous-partie1").style.display = "block";
    else
        document.getElementById("sous-partie1").style.display = "none";
}