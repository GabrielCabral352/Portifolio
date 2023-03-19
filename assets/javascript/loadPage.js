
jQuery.ajaxSetup({ async: false });
$.get("./pages/header.html", '', function (data) { $("#body_section").append(data); });
$.get("./pages/home.html", '', function (data) { $("#body_section").append(data); });
jQuery.ajaxSetup({ async: true });
const pages = ["./pages/home.html", "./pages/about.html"];

function rebuildPage(){
    document.querySelectorAll(".__nav_item").forEach(function (item, idx) {
        item.addEventListener('click', function () {
            console.log(idx)
            document.getElementById("body_section").innerHTML = ""
            jQuery.ajaxSetup({ async: false });
            $.get("./pages/header.html", '', function (data) { $("#body_section").append(data); });
            $.get(pages[idx], '', function (data) { $("#body_section").append(data); });
            jQuery.ajaxSetup({ async: true });
            rebuildPage()
        });
    }); 
}