const api_url = "https://sheetdb.io/api/v1/6lmkthf76fddi";

// getting today's date and date stored on last visit
var t_date = new Date().toLocaleDateString("de-DE");
var l_date = localStorage.date;
const check = String(localStorage.data);

// Checking for data in cache (LS) and cheecking whether the user is visiting on the same day or some other
if (check == "undefined" || l_date != t_date) {
    getData();
} else {
    data = JSON.parse(localStorage.getItem("data") || "[]");
    load();
}

// gets the data from the API
async function getData() {
    const response = await fetch(api_url);
    let temp = await response.json();
    localStorage.setItem("data", JSON.stringify(temp));
    load();
}

// Uses the data and hydrates the page
function load() {
    let data = JSON.parse(localStorage.getItem("data") || "[]");

    if (data.length > 0) {
        const main = document.getElementById("main");
        const loader = document.getElementById("loader");
        loader.style.display = "none";
        main.style.display = "block";
        localStorage.date = t_date;
    } else {
        alert(
            "The server threw an error. Contact the store owner immediately."
        );
    }
    // these are declared to ensure that only 5 products of each categories are displayed 
    let a = 0;
    let b = 0;
    let c = 0;

    // Main categories
    for (i = 0; i < data.length; i++) {
        // Creating a new div
        div = document.createElement("div");
        div.id = `display${i}`;
        div.classList.add("card");

        // Adding them according to their categories
        if (`${data[i]["p_cat"]}` == "Fastners" && a < 5) {
            document.getElementById("Fastners").appendChild(div);
            a = a + 1;
        } else if (`${data[i]["p_cat"]}` == "Paints" && b < 5) {
            document.getElementById("Paints").appendChild(div);
            b = b + 1;
        } else if (`${data[i]["p_cat"]}` == "Electrical" && c < 5) {
            document.getElementById("Electrical").appendChild(div);
            c = c + 1;
        }

        div.innerHTML = `<div class="store-container"><div class="store"><img src="${data[i]["p_img"]}" ><h3>${data[i]["p_name"]}</h3> </div><div class="description box"><div class="des">${data[i]["p_description"]}<button id='${i}' onclick="hit('${i}')" class="atc">Add to cart</button></div></div>`;
    }

    let d = 0;

    // Latest
    for (j = data.length - 1; j >= 0; j--) {
        div = document.createElement("div");
        div.id = `display${j}`;
        div.classList.add("card");
        if (d < 5) {
            document.getElementById("Latest").appendChild(div);
            div.innerHTML = `<div class="store-container"><div class="store"><img src="${data[j]["p_img"]}" style="border-radius:45px"><h3>${data[j]["p_name"]}</h3> </div><div class="description add"><div class="des">${data[j]["p_description"]}<button id='${j}' onclick="hit('${j}')" class="atc">Add to cart</button></div></div>`;
            d = d + 1;
        }
    }

    let e = 0;

    // Top picks
    for (k = data.length - 1; k >= 0; k--) {
        div = document.createElement("div");
        div.id = `display${k}`;
        div.classList.add("card");
        if (data[k]["p_spc"] == "yes" && e < 5) {
            document.getElementById("Top-Picks").appendChild(div);
            div.innerHTML = `<div class="store-container"><div class="store"><img src="${data[k]["p_img"]}" class="spc-img"><h3>${data[k]["p_name"]}</h3> </div><div class="description"><div class="des">${data[k]["p_description"]}<button id='${k}' onclick="hit('${k}')" class="atc">Add to cart</button></div></div>`;
            e = e + 1;
        }
    }

}

