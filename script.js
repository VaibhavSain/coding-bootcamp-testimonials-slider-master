

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");


nextBtn.addEventListener("click",() => {
document.getElementById("main1").style.display = "none";
document.getElementById("main2").style.display = "block";

document.getElementById("pro1").style.display = "none";
document.getElementById("pro2").style.display = "block";

document.getElementById("name1").style.display = "none";
document.getElementById("name2").style.display = "block";
});

prevBtn.addEventListener("click",() => {
    location.reload();
});