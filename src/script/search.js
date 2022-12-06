let len;
function searchbar() {
    setTimeout(function () { searchbar() }, 500)
    data_search = JSON.parse(localStorage.getItem("data") || "[]");
    search = document.getElementById("search").value
    var check = search.toLowerCase().trim()
    if (check != "") {
        var main = document.getElementById("main-content")
        main.style.display = "none"
        for (q = 0; q < data_search.length; q++) {
            if (len != check.length) {
                if (document.getElementById(`display-search${q}`) != null) {
                    document.getElementById(`display-search${q}`).parentNode.removeChild(document.getElementById(`display-search${q}`))
                }
            }
            if (data_search[q]['p_name'].toLowerCase().slice(0, check.length) == check && document.getElementById(`display-search${q}`) == null) {
                div = document.createElement("div");
                div.id = `display-search${q}`;
                div.classList.add("card");
                document.getElementById("search-display").appendChild(div);
                div.innerHTML = `<div class="store-container"><div class="store"><img src="${data_search[q]["p_img"]}" ><h3>${data_search[q]["p_name"]}</h3> </div><div class="description box"><div class="des">${data_search[q]["p_description"]}<button id='${q}' onclick="hit('${q}')" class="atc">Add to cart</button></div></div>`
            }
        }
        len = check.length
    }
    else {
        for (q = 0; q < data_search.length; q++) {
            if (document.getElementById(`display-search${q}`) != null) {
                document.getElementById(`display-search${q}`).parentNode.removeChild(document.getElementById(`display-search${q}`))
            }
        }
        var main = document.getElementById("main-content")
        main.style.display = "block"
    }
}
searchbar()