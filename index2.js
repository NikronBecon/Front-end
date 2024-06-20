document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem('userInput'));
    console.log(data);
    const alt = data.alt;
    const img = data.img;
    const safe_title = data.safe_title;
    const day = data.day;
    const month = data.month;
    const year = data.year;
    document.getElementById("XKCDimg").src = img;
    document.getElementById("XKCDimg").alt = alt;
    console.log(safe_title);
    document.getElementById("imageTitle").innerText = safe_title;
    const date = new Date(year, month, day);
    const formattedDate = date.toLocaleDateString();
    document.getElementById("imageDate").textContent = formattedDate;
});







