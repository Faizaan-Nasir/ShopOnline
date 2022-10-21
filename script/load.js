const api_url = "https://sheetdb.io/api/v1/rqdrbx6lcpktk"
async function getData() {
    const response = await fetch(api_url)
    const data = await response.json()
    for (i = 0; i < data.length; i++) {
        div = document.createElement("div");
        div.id = `display${i}`
        div.style.margin = "20px"
        document.getElementById("display").appendChild(div);
        document.getElementById(`display${i}`).innerHTML = `<div class="store"><img src="${data[i]['p_img']}"><h2>${data[i]['p_name']}</h2>${data[i]['p_description']}</div>`
    }
}
