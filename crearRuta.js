lang="es"
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

    // Menú Hamburguesa

    const selectNav = document.querySelector('.nav');
    const selectButton = document.querySelector('.close-button');
    
    document.querySelector('#bars').addEventListener('click', () => {
        setTimeout(function() {
            selectNav.classList.toggle('visiblenav');
        }, 160);
    });
    
    document.querySelector('.close-button').addEventListener('click', () => {
        selectNav.classList.remove('visiblenav');
    });

    function toggleInput() {
        var textDisplay = document.getElementById("displayText");
        var textInput = document.getElementById("textInput");

        if (textInput.style.display === "none") {
            textInput.style.display = "inline";
            textInput.value = textDisplay.textContent;
            textDisplay.style.display = "none";
        } else {
            textInput.style.display = "none";
            textDisplay.style.display = "inline";
            textDisplay.textContent = textInput.value;
        }
    }