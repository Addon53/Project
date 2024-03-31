// Для переключения между вкладками на одной странице
function openTab(tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

// Для перехода на другую страницу с церквями или монастырями
document.querySelector("#indexBtn").addEventListener("click", function() {
    window.location.href = "index.html";
});

document.querySelector("#homeBtn").addEventListener("click", function() {
    window.location.href = "home.html";
});