const api_url = "https://sheetdb.io/api/v1/6lmkthf76fddi"

async function getData() {
    const response = await fetch(api_url)
    const data = await response.json()
    if (data.length >= 0) {
        const main = document.getElementById("main")
        const loader = document.getElementById("loader")
        loader.style.display = "none"
        main.style.display = "block"
    }
    else {
        alert("The sserver threw an error. Contact the store owner immediately.")
    }
    var a = 0
    var b = 0
    var c = 0
    for (i = 0; i < data.length; i++) {
        div = document.createElement("div");
        div.id = `display${i}`
        div.style.marginLeft = "2%"
        div.style.marginRight = "2%"
        div.style.marginBottom = "2%"
        div.style.marginTop = "1%"
        if (`${data[i]['p_cat']}` == "Fastners" && a < 5) {
            document.getElementById("Fastners").appendChild(div);
            document.getElementById(`display${i}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[i]['p_img']}"><h3>${data[i]['p_name']}</h3> </div>`
            a = a + 1
        }
        else if (`${data[i]['p_cat']}` == "Paints" && b < 5) {
            document.getElementById("Paints").appendChild(div);
            document.getElementById(`display${i}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[i]['p_img']}"><h3>${data[i]['p_name']}</h3> </div>`
            b = b + 1
        }
        else if (`${data[i]['p_cat']}` == "Electrical" && c < 5) {
            document.getElementById("Electrical").appendChild(div);
            document.getElementById(`display${i}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[i]['p_img']}"><h3>${data[i]['p_name']}</h3> </div>`
            c = c + 1
        }
    }
    var d = 0
    for (j = data.length - 1; j >= 0; j--) {
        div = document.createElement("div");
        div.id = `display${j}`
        div.style.marginLeft = "2%"
        div.style.marginRight = "2%"
        div.style.marginBottom = "4%"
        if (d < 5) {
            document.getElementById("Latest").appendChild(div);
            document.getElementById(`display${j}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[j]['p_img']}" class="latest-img"><h3>${data[j]['p_name']}</h3> </div>`
            d = d + 1
        }
    }
    e = 0
    for (k = data.length - 1; k >= 0; k--) {
        div = document.createElement("div");
        div.id = `display${k}`
        div.style.marginLeft = "2%"
        div.style.marginRight = "2%"
        div.style.marginBottom = "4%"
        if (data[k]['p_spc'] == "yes" && e < 5) {
            document.getElementById("Top-Picks").appendChild(div);
            document.getElementById(`display${k}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[k]['p_img']}" class="spc-img"><h3>${data[k]['p_name']}</h3> </div>`
            e = e + 1
        }
    }
}
