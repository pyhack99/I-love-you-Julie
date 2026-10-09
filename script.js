
/* =========================================
   100 GRUNDE TIL, AT JEG ELSKER DIG
   Interaktioner og kærlighedsbeskeder
========================================= */

const reasons = [
  "Dit smil kan gøre selv min dårligste dag bedre.",
  "Din latter er en af mine yndlingslyde.",
  "Du får mig til at føle mig elsket.",
  "Jeg kan være helt mig selv sammen med dig.",
  "Du gør almindelige øjeblikke særlige.",
  "Jeg elsker den måde, du ser på mig.",
  "Du får mig til at smile uden at prøve.",
  "Jeg elsker at høre om din dag.",
  "Du er smuk, også når du ikke selv synes det.",
  "Du får mit hjerte til at slå lidt hurtigere.",

  "Jeg kan snakke med dig i timevis.",
  "Du gør selv stilhed hyggelig.",
  "Jeg elsker dine små særheder.",
  "Du får mig til at føle mig tryg.",
  "Jeg elsker, når du sender mig beskeder.",
  "Du er den, jeg har lyst til at fortælle alt.",
  "Jeg elsker dine kram.",
  "Du kan få mig til at grine, når jeg har brug for det.",
  "Jeg elsker din stemme.",
  "Jeg savner dig, selv kort efter vi har sagt farvel.",

  "Du er sødere, end du selv tror.",
  "Jeg elsker, når du fortæller mig noget, du brænder for.",
  "Du får mig til at glæde mig til fremtiden.",
  "Jeg elsker dine komplimenter.",
  "Du gør mig stolt.",
  "Jeg elsker de små ting, du husker om mig.",
  "Du er min yndlingsnotifikation.",
  "Jeg elsker at lære nye ting om dig.",
  "Du får mig til at føle, at jeg betyder noget.",
  "Jeg elsker, når vi bare laver ingenting sammen.",

  "Jeg elsker dine øjne.",
  "Du har en helt særlig plads i mit hjerte.",
  "Jeg elsker, når du driller mig på den søde måde.",
  "Du gør mig glad bare ved at være her.",
  "Jeg elsker, at vi har vores egne små jokes.",
  "Du er en af mine yndlingspersoner i verden.",
  "Jeg elsker at tænke på vores minder.",
  "Du gør afstand lidt lettere at holde ud.",
  "Jeg elsker, når du fortæller mig, at du savner mig.",
  "Du får mig til at føle mig heldig.",

  "Jeg elsker din personlighed.",
  "Jeg elsker, at du er dig.",
  "Du er smuk på flere måder, end du ved.",
  "Jeg elsker, når du er begejstret for noget.",
  "Du gør mine dage lysere.",
  "Jeg elsker, når vi griner over ingenting.",
  "Jeg elsker dine godmorgenbeskeder.",
  "Jeg elsker dine godnatbeskeder.",
  "Du er værd at gøre en ekstra indsats for.",
  "Jeg elsker at bruge min tid på dig.",

  "Du får mig til at føle sommerfugle i maven.",
  "Jeg elsker, når du fortæller mig om dine drømme.",
  "Du inspirerer mig til at være en bedre person.",
  "Jeg elsker, når du viser din fjollede side.",
  "Jeg elsker de øjeblikke, hvor vi glemmer tiden.",
  "Du gør selv en helt almindelig dag til noget særligt.",
  "Jeg elsker, når du tager dig tid til mig.",
  "Du er en, jeg gerne vil skabe minder med.",
  "Jeg elsker din måde at vise omsorg på.",
  "Jeg elsker, at jeg kan glæde mig til at se dig.",

  "Du fortjener at blive værdsat hver eneste dag.",
  "Jeg elsker, når du er stolt af noget, du har gjort.",
  "Du gør mit liv lidt mere farverigt.",
  "Jeg elsker vores små samtaler sent om aftenen.",
  "Jeg elsker, når du fortæller mig noget personligt.",
  "Du betyder mere for mig, end jeg altid får sagt.",
  "Jeg elsker at se dig være glad.",
  "Du er smuk, selv når du ikke prøver.",
  "Jeg elsker, at vi kan være fjollede sammen.",
  "Jeg elsker tanken om alle de minder, vi mangler at skabe.",

  "Du får mig til at føle mig tæt på dig, selv på afstand.",
  "Jeg elsker, når vi deler vores yndlingsting.",
  "Du gør kærlighed til noget, jeg kan mærke.",
  "Jeg elsker dine små reaktioner på ting.",
  "Du er en, jeg gerne vil lære endnu bedre at kende.",
  "Jeg elsker, når du åbner op over for mig.",
  "Du gør mig glad på måder, du måske ikke opdager.",
  "Jeg elsker, når vi har noget at glæde os til sammen.",
  "Jeg elsker den følelse, jeg får, når jeg tænker på dig.",
  "Du er ikke nødt til at være perfekt for mig.",

  "Jeg elsker, at vi er vores helt egne mennesker.",
  "Jeg elsker at støtte dig i det, der betyder noget for dig.",
  "Du fortjener al den kærlighed, du giver andre.",
  "Jeg elsker de øjeblikke, hvor du bare er helt afslappet.",
  "Jeg elsker, når vi opdager noget nyt sammen.",
  "Du gør det lettere at være ærlig om mine følelser.",
  "Jeg elsker, at der altid er mere at lære om dig.",
  "Jeg vil gerne være der for dig på de svære dage.",
  "Jeg elsker alt det, der gør dig til netop dig.",
  "Jeg ville vælge at lære dig at kende igen.",

  "Jeg elsker vores historie, som den er lige nu.",
  "Jeg glæder mig til flere grin og flere minder.",
  "Jeg elsker, at jeg kan fortælle dig, at jeg savner dig.",
  "Du er vigtig for mig, også på de helt almindelige dage.",
  "Jeg elsker at forestille mig vores næste eventyr.",
  "Du fortjener at føle dig elsket uden at skulle spørge.",
  "Jeg elsker, at jeg kan glæde mig til endnu en dag med dig.",
  "Jeg vil altid gerne lære nye sider af dig at kende.",
  "Jeg elsker dig for mere, end en liste kan forklare.",
  "Og den vigtigste grund? Du er dig. Og det er nok. ♡"
];

const grid = document.getElementById("reasons-grid");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const progressBar = document.getElementById("progress-bar");
const randomButton = document.getElementById("random-button");
const randomResult = document.getElementById("random-result");
const toast = document.getElementById("toast");

const openedReasons = new Set();
const icons = ["♡", "♥", "✧", "❀", "ღ", "୨୧"];

let toastTimeout;

/* Create all 100 interactive cards */

function createCards() {
  const fragment = document.createDocumentFragment();

  reasons.forEach((reason, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "reason-card";
    card.dataset.index = index;
    card.setAttribute("aria-expanded", "false");

    const number = document.createElement("span");
    number.className = "reason-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const icon = document.createElement("span");
    icon.className = "reason-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = icons[index % icons.length];

    const label = document.createElement("span");
    label.className = "reason-label";
    label.textContent = "Tryk for at åbne";

    card.append(number, icon, label);

    card.addEventListener("click", () => {
      toggleCard(card, index);
    });

    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
}

/* Open or close an individual card */

function toggleCard(card, index) {
  const isOpen = card.classList.contains("is-open");
  const icon = card.querySelector(".reason-icon");
  const label = card.querySelector(".reason-label");

  if (isOpen) {
    card.classList.remove("is-open");
    card.setAttribute("aria-expanded", "false");
    icon.textContent = icons[index % icons.length];
    label.textContent = "Tryk for at åbne";
    openedReasons.delete(index);
  } else {
    card.classList.add("is-open");
    card.setAttribute("aria-expanded", "true");
    icon.textContent = "♡";
    label.textContent = reasons[index];
    openedReasons.add(index);
  }

  updateProgress();
}

/* Update the progress indicator */

function updateProgress() {
  const count = openedReasons.size;
  const percentage = (count / reasons.length) * 100;

  progressText.textContent = `${count} / ${reasons.length}`;
  progressFill.style.width = `${percentage}%`;
  progressBar.setAttribute("aria-valuenow", count);

  if (count === reasons.length) {
    showToast("Du har åbnet alle 100 beskeder. Sender dig et kæmpe kram ♡");
  }
}

/* Show a random love message */

function showRandomReason() {
  const index = Math.floor(Math.random() * reasons.length);
  const message = reasons[index];

  randomResult.textContent = `“${message}”`;

  // Open the matching card as well.
  const card = grid.querySelector(`[data-index="${index}"]`);

  if (card && !card.classList.contains("is-open")) {
    toggleCard(card, index);
  }

  // Give the selected card a subtle visual highlight.
  if (card) {
    card.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "center"
    });

    card.animate(
      [
        { boxShadow: "0 0 0 0 rgba(184, 94, 119, 0)" },
        { boxShadow: "0 0 0 5px rgba(184, 94, 119, 0.18)" },
        { boxShadow: "0 0 0 0 rgba(184, 94, 119, 0)" }
      ],
      { duration: 900, easing: "ease-out" }
    );
  }
}

/* Small notification */

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");

  window.clearTimeout(toastTimeout);

  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 3500);
}

/* Start the website */

randomButton.addEventListener("click", showRandomReason);

createCards();
updateProgress();