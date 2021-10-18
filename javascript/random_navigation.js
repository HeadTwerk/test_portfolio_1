var sites=[
    'html/home.html',
    'html/about.html',
    'html/hobbies.html',
    'html/contact.html',
]
function randomNaviagate(currentLocation){
    var THELISTOFSITESTHATISNOTTHECURRENTSITEYOUGETITQUESTIONMARK = sites.filter(
        function(val, i, arr){
            return !currentLocation.includes(val);
        }
    );
    var randInt =   Math.random() * THELISTOFSITESTHATISNOTTHECURRENTSITEYOUGETITQUESTIONMARK.length;
    randInt = parseInt(randInt, 10);
    var link = "../" + THELISTOFSITESTHATISNOTTHECURRENTSITEYOUGETITQUESTIONMARK[randInt];
    return link;
}

window.onload = function(){
    const navibutton = document.getElementById("top-navigator")
    navibutton.addEventListener('click', ()=>{
        // document.write("---on click event listened---\n")
        var currentLocation = document.location.href
        document.location = randomNaviagate(currentLocation)
    })

}

