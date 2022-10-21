var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    async function getData() {
        const api_url = "https://sheetdb.io/api/v1/rqdrbx6lcpktk"
        const response = await fetch(api_url)
        const data = await response.json()
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("sheetdb-form")),
        })
            .then((response) => response.json())
            .then((html) => {
                document.getElementById("verified").innerHTML = "Data Submitted Successfully";
            });
    }
    getData()
})
