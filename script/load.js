const api_url = "https://sheetdb.io/api/v1/rqdrbx6lcpktk"
async function getData() {
    const response = await fetch(api_url)
    const data = await response.json()
    var a = 0
    var b = 0
    var c = 0
    for (i = 0; i < data.length; i++) {
        div = document.createElement("div");
        div.id = `display${i}`
        div.style.marginLeft = "2.5%"
        div.style.marginRight = "2.5%"
        if (`${data[i]['p_cat']}` == "Fastners" && a < 4) {
            document.getElementById("Fastners").appendChild(div);
            document.getElementById(`display${i}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[i]['p_img']}"><h3>${data[i]['p_name']}</h3> </div>`
            a = a + 1
        }
        else if (`${data[i]['p_cat']}` == "Paints" && b < 4) {
            document.getElementById("Paints").appendChild(div);
            document.getElementById(`display${i}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[i]['p_img']}"><h3>${data[i]['p_name']}</h3> </div>`
            b = b + 1
        }
        else if (`${data[i]['p_cat']}` == "Electrical" && c < 4) {
            document.getElementById("Electrical").appendChild(div);
            document.getElementById(`display${i}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[i]['p_img']}"><h3>${data[i]['p_name']}</h3> </div>`
            c = c + 1
        }
    }
}