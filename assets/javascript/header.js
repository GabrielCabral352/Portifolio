
let items =document.querySelectorAll(".__nav_item")

document.querySelectorAll(".__nav_item").forEach(function (item, idx) {
    item.addEventListener('click', function () {
        
        items.forEach(function(item2, idx2){
            if(document.activeElement.tabIndex === idx2 +1){
                item2.classList.add("__selected");
                item2.firstChild.classList.add("__selected_text")
            }else{
                item2.classList.remove("__selected");
                item2.firstChild.classList.remove("__selected_text")
            }
        })
        
    });
}); 
