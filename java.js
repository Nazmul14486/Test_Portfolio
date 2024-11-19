// var len = document.querySelectorAll(".tab-links").length;
// var previous = null;

// for (var i = 0; i < len;i++){
//     document.querySelectorAll(".tab-links")[i].addEventListener("click", function(){
//         var key = this.innerHTML;
//         activeLink(key);
//     });
// }

// function activeLink(key){
//     if(key == "Skills"){
//         adding("skill");
//     }
//     else if(key == "Experience"){
//         adding("experience");


//     } else if(key == "Education"){
//         adding("education");

//     }
// }

// function adding(current){
//     document.getElementById(current).classList.add("active");
    
//     previous = document.getElementById(current);
// }

var tabLinks = document.querySelectorAll(".tab-links");
var tabContents = document.querySelectorAll(".tab-contain");

// Add event listeners to all the tab links using a for loop
for (var i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", function () {
    
    // Remove the active class from all tab links and tab contents
    for (var j = 0; j < tabLinks.length; j++) {
      tabLinks[j].classList.remove("active-link");
      tabContents[j].classList.remove("active");
    }

    // Add the active class to the clicked tab link
    this.classList.add("active");
    this.classList.add("active-link");


    // Extract the target content id (Skills -> skill, Experience -> experience, etc.)
    var key = this.innerHTML;
    // "Skills" becomes "skill"

    if(key == "Skills"){
            document.getElementById("skills").classList.add("active");
            }
    else if(key == "Experience"){
                document.getElementById("experience").classList.add("active");
        
        } 
    else if(key == "Education"){
                document.getElementById("education").classList.add("active");
            }
    
    // Add the active class to the corresponding content by ID
  });
}

