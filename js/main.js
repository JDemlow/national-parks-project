// $(window).scroll(function () {
//   $(".logo img").css("opacity", 1 - $(window).scrollTop() / 250);
// });

const btn = document.querySelector("#menu-btn");
const overlay = document.querySelector("#overlay");
const menu = document.querySelector("#mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute("data-target");
      // Get current counter value
      const c = +counter.innerText;
      //   create an increment
      const increment = target / 100;
      // if counter is less than target, add increment
      if (c < target) {
        // round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}

// fetch request

document.querySelector("#clicker").addEventListener("click", runEvent);
document.querySelector("#clicker").addEventListener("click", removeHidden);
function removeHidden() {
  const hiddenElement = document.querySelectorAll(".hidden");
  hiddenElement.forEach((element) => {
    element.classList.remove("hidden");
  });
}

function runEvent() {
  let parkCode = [
    "RIRA",
    "ROCR",
    "ROMO",
    "ROWI",
    "RORI",
    "ROLA",
    "RUCA",
    "SAHI",
    "SAGU",
    "SACN",
    "SACR",
    "SAPA",
    "SAGA",
    "SAMA",
    "SAPU",
    "SARI",
    "SAAN",
    "SAFR",
    "SAMO",
    "SAJU",
    "SAJH",
    "SEKI",
    "SAND",
    "SARA",
    "SAIR",
    "SCBL",
    "SEMO",
    "SHEN",
    "SHIL",
    "SITK",
    "SLBE",
    "SPAR",
    "STLI",
    "STEA",
    "STGE",
    "STRI",
    "STON",
    "SUCR",
    "TAPR",
    "THKO",
    "THRO",
    "THRB",
    "THIS",
    "EDIS",
    "THJE",
    "THST",
    "TICA",
    "TIMU",
    "TONT",
    "TULE",
    "TUSK",
    "TUMA",
    "TUPE",
    "TUAI",
    "TUIN",
    "SEMO",
    "TUZI",
    "ULSG",
    "UPDE",
    "VALL",
    "VAFO",
    "VAMA",
    "VICK",
    "VIVE",
    "VIIS",
    "VICR",
    "VOYA",
    "WACO",
    "WACA",
    "WAPA",
    "WAMO",
    "WABA",
    "WEFA",
    "WHIS",
    "PRPA",
    "WHSA",
    "WHMI",
    "WIHO",
    "WICR",
    "WICA",
    "WOTR",
    "WORI",
    "NAWO",
    "WRST",
    "WRST",
    "WRBR",
    "WUPA",
    "YELL",
    "YOSE",
    "YUHO",
    "YUCH",
    "ZION",
  ];
  function getRandomIndex(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

    return item;
  }

  let code = getRandomIndex(parkCode);

  const h4 = document.querySelector("h4");
  const description = document.querySelector("#description");
  const section_a = document.querySelector(".section-a");
  const section_b = document.querySelector(".section-b");
  const title = section_a.querySelector("h2");
  const apiKey = "jdEWk3QGcTgbnY6IgXfDDMf5jwcPePjgpx6R8PhN";

  fetch(
    `https://developer.nps.gov/api/v1/parks?parkCode=${code}&api_key=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.data[0].description);
      section_a.style.backgroundImage = `url(${data.data[0].images[0].url})`;
      section_b.style.backgroundImage = `url(${data.data[0].images[1].url})`;
      document.querySelector("#description").innerText =
        data.data[0].description;
      h4.innerText = "Learn About";

      title.innerText = data.data[0].fullName;
    })
    .catch((err) => {
      console.log(`Error ${err}`);
    });
}

// window.addEventListener("scroll", scrollHandler);

// let fade = document.getElementById("fade");

// function fadeOutOnScroll(element) {
//   if (!element) {
//     return;
//   }

//   let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
//   let elementHeight = element.offsetHeight;
//   let scrollTop = document.documentElement.scrollTop;

//   let opacity = 1;

//   if (scrollTop > distanceToTop) {
//     opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
//   }

//   if (opacity >= 0) {
//     element.style.opacity = opacity;
//   }
// }

// function scrollHandler() {
//   fadeOutOnScroll(fade);
// }
