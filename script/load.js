const api_url = "https://sheetdb.io/api/v1/rqdrbx6lcpktk"
async function getData() {
    const response = await fetch(api_url)
    const data = await response.json()
    for (i = 0; i < data.length; i++) {
        div = document.createElement("div");
        div.id = `display${i}`
        div.style.margin = "20px"
        if (`${data[i]['p_cat']}` == "Fastners") {
            document.getElementById("Fastners").appendChild(div);
            document.getElementById(`display${i}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[i]['p_img']}"><h3>${data[i]['p_name']}</h3><div class="description">${data[i]['p_description']}</div></div>`
        }
        else if (`${data[i]['p_cat']}` == "Paints") {
            document.getElementById("Paints").appendChild(div);
            document.getElementById(`display${i}`).innerHTML = `<div class="store" onhover="show()"><img src="${data[i]['p_img']}"><h3>${data[i]['p_name']}</h3><div class="description">${data[i]['p_description']}</div></div>`
        }
    }
}