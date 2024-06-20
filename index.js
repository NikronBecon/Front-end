document.getElementById('emailForm').addEventListener('submit', showImage);

async function showImage(event) {
    event.preventDefault(); 

    const email = document.getElementById('e-mail').value;
    const id = await getComicId(email);
    const data = JSON.stringify(await getComicImage(id));
    localStorage.setItem('userInput', data);
    window.location.href = 'XKCDcomic.html';
}

async function getComicImage(id){
    const urlImage = new URL("https://fwd.innopolis.university/api/comic");
    const paramsId = new URLSearchParams();
    paramsId.append("id", id);
    urlImage.search = paramsId.toString();
    const urlImageWithParams = urlImage.toString();

    const responseImage = await fetch(urlImageWithParams);
    const data = await responseImage.json();
    console.log(data);
    return data;
}

async function getComicId(email) {
    const urlId = new URL("https://fwd.innopolis.university/api/hw2");
    const paramsEmail = new URLSearchParams();
    paramsEmail.append("email", email);
    urlId.search = paramsEmail.toString();
    const urlIdWithParams = urlId.toString();

    const responseId = await fetch(urlIdWithParams);
    const id = await responseId.json();
    return id;
}
