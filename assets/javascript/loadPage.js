
jQuery.ajaxSetup({ async: false });
$.get("./pages/header.html", '', function (data) { $("#body_section").append(data); });
$.get("./pages/home.html", '', function (data) { $("#content").append(data); });
jQuery.ajaxSetup({ async: true });
const pages = [
    "./pages/home.html", 
    "./pages/about.html", 
    "./pages/skills.html", 
    "./pages/education.html", 
    "./pages/work.html", 
    "./pages/experience.html",
    "./pages/contact.html"
];

function rebuildPage(){
    document.querySelectorAll(".__nav_item").forEach(function (item, idx) {
        item.addEventListener('click', function () {
            document.getElementById("content").innerHTML = ""
            jQuery.ajaxSetup({ async: false });
            $.get(pages[idx], '', function (data) { $("#content").append(data); });
            jQuery.ajaxSetup({ async: true });
        });
    }); 
}


function redirectAbout(){
    document.getElementById("about").click()
}