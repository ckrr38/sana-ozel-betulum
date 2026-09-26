const heartsContainer = document.querySelector(".hearts");
const sparklesContainer = document.querySelector(".sparkles");


/* =========================
   UÇAN KALPLER
========================= */

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

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

    heart.style.opacity =
        Math.random() * .5 + .2;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 550);


/* =========================
   PARILTILAR
========================= */

function createSparkle() {

    if (!sparklesContainer) return;

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        Math.random() * 100 + "%";

    sparkle.style.animationDelay =
        Math.random() * 2 + "s";

    sparklesContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2500);
}

setInterval(createSparkle, 700);


/* =========================
   SAYFA GEÇİŞİ
========================= */

function nextPage() {

    const pageTwo =
        document.querySelector(".page-two");

    if (!pageTwo) return;

    pageTwo.scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   MEKTUP
========================= */

function openLetter() {

    const letter =
        document.getElementById("letterContent");

    if (!letter) return;

    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {

        setTimeout(() => {

            letter.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 150);
    }
}


/* =========================
   SÜRPRİZ
========================= */

function openSurprise() {

    const surprise =
        document.getElementById("surpriseContent");

    if (!surprise) return;

    surprise.classList.toggle("show");

    if (surprise.classList.contains("show")) {

        for (let i = 0; i < 12; i++) {

            setTimeout(() => {
                createHeart();
            }, i * 100);

        }

        setTimeout(() => {

            surprise.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 150);
    }
}


/* =========================
   KARTLARIN GİRİŞ ANİMASYONU
========================= */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =========================
   EKRANA DOKUNUNCA KALP
========================= */

document.addEventListener("click", function(event) {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";
    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    heart.style.pointerEvents = "none";
    heart.style.zIndex = "100";

    heart.style.fontSize = "18px";
    heart.style.color = "white";

    heart.style.animation =
        "touchHeart 1s ease forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

});


/* =========================
   DOKUNMA ANİMASYONU
========================= */

const touchStyle =
document.createElement("style");

touchStyle.innerHTML = `

@keyframes touchHeart {

    0% {
        opacity: 0;
        transform:
            translate(-50%, -50%)
            scale(.5);
    }

    20% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform:
            translate(-50%, -130px)
            scale(1.4);
    }

}
`;

document.head.appendChild(touchStyle);


/* =========================
   TELEFON DOKUNUŞU
========================= */

document.addEventListener(
    "touchstart",
    function() {},
    { passive: true }
);
