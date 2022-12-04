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