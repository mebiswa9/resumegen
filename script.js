"use strict"
function addWe() {
    console.log("welcome");
    let newNode = document.createElement("textarea");
    newNode.classList.add("fc");
    newNode.classList.add("wefield");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Type Your Work Experiences");
    let add = document.getElementById("addwe");
    document.getElementById("we").insertBefore(newNode, add)

}
function addAq() {
    console.log("welcome");
    let newNode = document.createElement("textarea");
    newNode.classList.add("fc");
    newNode.classList.add("aqfield");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Type Your Academic Qualification");
    let add = document.getElementById("addaq");
    document.getElementById("aq").insertBefore(newNode, add)
}
function weDlt() {
    let add = document.getElementById("we");
    add.removeChild(add.children[1]);
}
function aqDlt() {
    let add = document.getElementById("aq");
    add.removeChild(add.children[1]);
}
function genCv() {//
    //setting img
    let file = document.getElementById("img").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        document.getElementById("imgt").src = reader.result;
    }
    
     
    //setting name to object
    document.getElementById("nt").innerHTML = document.getElementById("name").value;
    document.getElementById("n2t").innerHTML = document.getElementById("name").value;
    document.getElementById("pht").innerHTML = document.getElementById("ph").value;
    document.getElementById("adrst").innerHTML = document.getElementById("adrs").value;
    document.getElementById("emt").innerHTML = document.getElementById("em").value;
    document.getElementById("fbt").innerHTML = document.getElementById("fb").value;
    document.getElementById("ldt").innerHTML = document.getElementById("ld").value;
    document.getElementById("ght").innerHTML = document.getElementById("gh").value;
    document.getElementById("objt").innerHTML = document.getElementById("obj").value;
    //setting Work Experiences
    let workExp = document.getElementsByClassName("wefield");
    let string = "";
    for (let e of workExp) {
           string = string + `<li> ${e.value} </li>`
        }
    document.getElementById("wet").innerHTML = string;
        //setting Academic Qualification
    let academicQualification = document.getElementsByClassName("aqfield"); let string1 = "";
    for (let e of academicQualification) {
        string1 = string1 + `<li>${e.value}</li>`
    }
    document.getElementById("aqt").innerHTML = string1;

    document.getElementById("container").style.display = "none";
    document.getElementById("page2").style.display = "block";
    

}
// how to print
function printCv() {
 
     window.print();
}
