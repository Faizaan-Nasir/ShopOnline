if (localStorage.favourite == undefined) {
    localStorage.favourite = "{}"
}
let fav = JSON.parse(`[${localStorage.favourite}]`)
let data = JSON.parse(localStorage.getItem("data") || "[]");
for (j = 1; j < fav.length; j++) {
    for (i = 0; i <= data.length; i++) {
        if (fav[j]['p_id'] == String(i)) {
            let div = document.createElement("div");
            div.id = `display${i}`;
            div.classList.add("card");
            document.getElementById("display-cart").appendChild(div)
            div.innerHTML = `<div class="store-container"><div class="store"><img src="${data[i]["p_img"]}" ><h3>${data[i]["p_name"]}</h3> </div><div class="description box"><div class="des">${data[i]["p_description"]}</div></div>`
        }
    }
}

if (localStorage.favourite == "{}") {
    document.getElementById("display-cart").innerHTML = "Nothing to show here, whatever you add to your cart will be shown here!"
}