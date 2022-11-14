const body = document.querySelector("body");
const toggleMenu = document.querySelectorAll(".toggle-menu");
const menu = document.querySelector(".mobileNav");
const openIcon = document.querySelector("#open");
const closeIcon = document.querySelector("#close");
const headerText = document.querySelector(".animate-text");
const h2ctn = document.querySelector(".h2Ctn");
const mobileLinks = document.querySelectorAll(".mobileNavBtn");

toggleMenu.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      menu.classList.contains("fade-in") &&
      body.classList.contains("no-scroll")
    ) {
      menu.classList.remove("fade-in");
      body.classList.remove("no-scroll");
      menu.classList.add("fade-out");
      closeIcon.classList.add("d-none");
      openIcon.classList.remove("d-none");
    } else {
      menu.classList.remove("fade-out");
      menu.classList.add("fade-in");
      body.classList.add("no-scroll");
      closeIcon.classList.remove("d-none");
      openIcon.classList.add("d-none");
    }
  });
});

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("fade-in");
    body.classList.remove("no-scroll");
    menu.classList.add("fade-out");
    closeIcon.classList.add("d-none");
    openIcon.classList.remove("d-none");
  });
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

if (screen.width <= 639) {
  root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
}

const wordArray = ["analysis", "tracking", "management"];
let time = 10000;

let displayWords = (arr) => {
  h2ctn.innerHTML = "";
  h2ctn.innerHTML += `
    <h2 class="flex flex-col items-center text-3xl font-bold heroSection__header">The fastest way for startups to do any <span class="animate-text fade-in-text">${arr[0]}</span></h2>
    `;

  setTimeout(() => {
    h2ctn.innerHTML = "";
    h2ctn.innerHTML += `
        <h2 class="flex flex-col items-center text-3xl font-bold heroSection__header">The fastest way for startups to do any <span class="animate-text fade-in-text">${arr[1]}</span></h2>
        `;
  }, 5000);

  setTimeout(() => {
    h2ctn.innerHTML = "";
    h2ctn.innerHTML += `
        <h2 class="flex flex-col items-center text-3xl font-bold heroSection__header">The fastest way for startups to do any <span class="animate-text fade-in-text">${arr[2]}</span></h2>
        `;
  }, 10000);
};

displayWords(wordArray);

setInterval(() => {
  displayWords(wordArray);
}, time * 1.6);





let monthlyActive = true
const monthlySubBtn = document.querySelector('.monthly')
const annuallySubBtn = document.querySelector('.annually')
const span = document.querySelector('#priceSpan')
const prices = document.querySelectorAll('.price')
const switchBtns = [monthlySubBtn, annuallySubBtn]
let percentageValues = []
let amounts = []

let calculatePercent = (percent, num) => {
  return (percent / 100) * num;
}

let updateUI = (val1, val2, val3) => {
  prices[0].innerHTML = `$${val1}`
  prices[1].innerHTML = `$${val2}`
  prices[2].innerHTML = `$${val3}`
}


prices.forEach(price => {
  let amount = price.getAttribute('amount')
  percentageValues.push(calculatePercent(20, amount))
})


prices.forEach(price => {
  amounts.push(price.getAttribute('amount'))
})


let minusValues = () => {
  for (let i = 0; i < 3; i++) {
    amounts[i] -= percentageValues[i]
  }
}

let addValues = () => {
  for (let i = 0; i < 3; i++) {
    amounts[i] += percentageValues[i]
  }
}


switchBtns.map(button => {
  button.addEventListener('click', (e) => {
    if (monthlyActive && e.target !== switchBtns[0]) {
      monthlySubBtn.classList.remove('active')
      annuallySubBtn.classList.add('active')
      span.style.left = '100px'
      minusValues()
      updateUI(amounts[0],amounts[1],amounts[2])
      monthlyActive = !monthlyActive
    } else if (!monthlyActive && e.target !== switchBtns[1]) {
      monthlySubBtn.classList.add('active')
      annuallySubBtn.classList.remove('active')
      span.style.left = '5px'
      addValues()
      updateUI(amounts[0],amounts[1],amounts[2])
      monthlyActive = !monthlyActive
    }
  })
})