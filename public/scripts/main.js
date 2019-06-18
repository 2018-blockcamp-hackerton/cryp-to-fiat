
onload = function() {

    var switchButton = document.querySelector(".switch-button");
    var switchCheckbox = document.querySelector(".switch-checkbox");
    var navBg = document.querySelector(".nav-bg");
    var sendForm = document.querySelector("#send-form");
    var receiveForm = document.querySelector("#receive-form");
    var background = document.querySelector(".background");
    switchButton.addEventListener("click", function() {
        if (switchCheckbox.checked == true) {
            navBg.classList.add("nav-bg-on");

            sendForm.classList.add("display-none");
            receiveForm.classList.remove("display-none");
            background.style.backgroundImage = "url('../public/images/logo/blue-main-logo.svg')";
        } else {
            navBg.classList.remove("nav-bg-on");

            sendForm.classList.remove("display-none");
            receiveForm.classList.add("display-none");
            background.style.backgroundImage = "url('../public/images/logo/main-logo.svg')";
        }
    });

    function changeEventHandler(event) {
        // You can use “this” to refer to the selected element.
        if(!event.target.value) {
            alert('Please Select One');
        } else {
            (document.querySelector("#lookup")).textContent = event.target.value;
        }
    }
    document.querySelector('select[name="lookup-coin"]').onchange = changeEventHandler;
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(
        elems, {
        onOpenStart : function() {
            (document.querySelector(".menu-open")).checked = true;
        },
        onCloseStart: function () {
            (document.querySelector(".menu-open")).checked = false;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});