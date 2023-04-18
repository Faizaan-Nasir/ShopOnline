var form = document.getElementById("sheetdb-form");
const url = "https://sheetdb.io/api/v1/6lmkthf76fddi"
async function submitData(url) {
    fetch(url, {
        method: "POST",
        body: new FormData(form),
    })
        .then((response) => response.json())
        .then((jsonRes) => {
            // Checking if the request was successful
            if (jsonRes.status == "201") {
                document.getElementById("verified").innerHTML = "Data Submitted Successfully";
            }
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitData();
});
