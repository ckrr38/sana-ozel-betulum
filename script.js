const heartsContainer = document.querySelector(".hearts");


function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "♥";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (Math.random() * 15 + 10) + "px";

    heart.style.setProperty(
        "--move",
        (Math.random() * 160 - 80) + "px"
    );

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);
}


setInterval(createHeart, 500);


function nextPage() {

    const pageTwo =
        document.querySelector(".page-two");

    pageTwo.scrollIntoView({
        behavior: "smooth"
    });

}


document.addEventListener(
    "touchstart",
    function() {},
    { passive: true }
);
