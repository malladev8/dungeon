let currentAdventure = 0;

// Cache DOM references
const coverImage = document.getElementById("coverImage");
const title = document.getElementById("title");
const genre = document.getElementById("genre");
const tagline = document.getElementById("tagline");

const synopsis = document.getElementById("synopsis");
const levels = document.getElementById("levels");
const length = document.getElementById("length");
const themes = document.getElementById("themes");
const warnings = document.getElementById("warnings");
const recommended = document.getElementById("recommended");

const learnMore = document.getElementById("learnMore");
const details = document.querySelector(".details");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

function loadAdventure(index)
{
    const adventure = adventures[index];

    coverImage.src = adventure.cover;
    coverImage.alt = adventure.title;

    title.textContent = adventure.title;
    genre.textContent = adventure.genre;
    tagline.textContent = adventure.tagline;

    synopsis.textContent = adventure.synopsis;
    levels.textContent = adventure.levels;
    length.textContent = adventure.length;
    themes.textContent = adventure.themes;
    warnings.textContent = adventure.warnings;
    recommended.textContent = adventure.recommended;
}

function nextAdventure()
{
    currentAdventure++;

    if (currentAdventure >= adventures.length)
        currentAdventure = 0;

    loadAdventure(currentAdventure);
}

function previousAdventure()
{
    currentAdventure--;

    if (currentAdventure < 0)
        currentAdventure = adventures.length - 1;

    loadAdventure(currentAdventure);
}

nextButton.addEventListener("click", nextAdventure);
prevButton.addEventListener("click", previousAdventure);

learnMore.addEventListener("click", () =>
{
    details.classList.toggle("hidden");

    learnMore.textContent =
        details.classList.contains("hidden")
            ? "Learn More"
            : "Show Less";
});

loadAdventure(currentAdventure);