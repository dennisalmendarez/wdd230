document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    var content = 	"\u00A9" + currentYear + " Dennis Almendarez" + " Florida"
    document.getElementById("year").textContent = content;

    var lastModified = new Date(document.lastModified);
    var formattedDate = lastModified.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit", second: "numeric"});
    document.getElementById("lastmodified").textContent = "Last Modified: " + formattedDate;
});

