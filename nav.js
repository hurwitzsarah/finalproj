document.querySelectorAll('.tablink').forEach (tab =>
    {
        if(tab.href === window.location.href){
            console.log("the link of the tab you clicked on is the same link that the window is currently showing")
            tab.setAttribute('aria-current', 'page')
            console.log("this tab is now the current page")
        }
    }

)
// foreach allows you to loop through each thing









// let aboutTab = document.getElementById("#about").innerHTML;
// let bandTab = document.getElementById("#band").innerHTML;
// let musicTab = document.getElementById("#music").innerHTML;

// var navList = document.getElementById("#nav");
// var navTabs = navList.getElementsByClassName("tab");

// document.addEventListener("click", navFunction);

// for (let i = 0; i < navTabs.length; i++) {
//     navTabs[i].addEventListener("click", navFunction(){
//     let currentTab = document.getElementsByClassName("active");
//     console.log("getting currentTab");
//     if (currentTab.length !== 0){ 
//         console.log(currentTab[0] + "is currently active");
//         currentTab[0].className = currentTab[0].className.replace(" active", "");
//         console.log("getting rid of active tab");
//     }
//     else{
//         this.className += " active";
//         console.log("made this the active tab");
//     }
    
// // });
// // }

// var header = document.getElementById("#nav");
// var btns = header.getElementsByClassName("tab");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" active", "");
//   }
//   this.className += " active";
//   });
// }


// document.getElementById("#about").addEventListener("click", function() {
//     console.log("about tab selected");
//     let current = document.getElementsByClassName("active");
//     console.log(current);
//     if (current.length > 0) {
//         for (let i = 0; i < current.length; i++) {
//         console.log("another tab is active");
//         current[0].className = current[0].className.replace("active", "");
//         console.log("removed active class from active tab");}
//     }
// 	else{
//         document.getElementById("#about").className = "active";
//         console.log("made about tab active");
//     }
// });

// document.getElementById("#band").addEventListener("click", function() {
//     console.log("band tab selected");
//     let current = document.getElementsByClassName("active");
//     console.log(current);
//     if (current.length > 0) {
//         for (let i = 0; i < current.length; i++) {
//             console.log("another tab is active");
//             current[0].className = current[0].className.replace("active", "");
//             console.log("removed active class from active tab");}
//         }
// 	else{
//         document.getElementById("#about").className = "active";
//         console.log("made about tab active");
//     }
// 	document.getElementById("#band").className = "active";
// 	console.log("made band tab active");
// });

// document.getElementById("#music").addEventListener("click", function() {
//     console.log("music tab selected");
//     let current = document.getElementsByClassName("active");
//     console.log(current);
//     if (current.length > 0) {
//         for (let i = 0; i < current.length; i++) {
//             console.log("another tab is active");
//             current[0].className = current[0].className.replace("active", "");
//             console.log("removed active class from active tab");}
//         }
// 	else{
//         document.getElementById("#about").className = "active";
//         console.log("made about tab active");
//     }
// 	document.getElementById("#music").className = "active";
// 	console.log("made music tab active");
// });