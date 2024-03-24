const albList = document.getElementById("albumPage");
const malangAlb = document.getElementById("malangAlb");
const malangCard = document.getElementById("malangCard");
const backBtn = document.getElementById("back");

malangCard.addEventListener("click", showAlbum);
backBtn.addEventListener("click", closeAlbum);

function showAlbum() {
    malangAlb.classList.remove("hide");
    albList.classList.add("hide");
}

function closeAlbum() {
    malangAlb.classList.add("hide");
    albList.classList.remove("hide");
}