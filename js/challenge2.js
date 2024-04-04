document.querySelector("#sameAddress").addEventListener("click", function() {
    if (this.checked) {
        console.log(document.getElementById("bill").textContent);
        // document.getElementById("home").textContent = document.getElementById("bill").innerHTML;
    }
    else {
        document.getElementById("home").style.display = "block";
    }
})
