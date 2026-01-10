
const iconsWorkExperience = [
    "devicon-python-plain colored",
    "devicon-javascript-plain colored",

    "devicon-css3-plain colored",
    "devicon-html5-plain colored",
    "devicon-github-original colored",
    "devicon-azuresqldatabase-plain colored",
]

const iconsProffecient = [
    "devicon-django-plain colored",
    "devicon-react-original colored",
    "devicon-typescript-plain colored",

]

const iconsHaveExperience = [
    "devicon-vuejs-plain colored",
    "devicon-csharp-plain colored",
    "devicon-unity-plain colored",
    "devicon-matlab-plain colored",
    "devicon-d3js-plain colored",
    "devicon-kotlin-plain colored",
    "devicon-figma-plain colored",

]

const icons = [].concat(iconsWorkExperience, iconsProffecient, iconsHaveExperience);

function createSkillsSection(iconClasses) {

    iconClasses.forEach(className => {
        const icon = document.createElement("i");
        icon.className = className + " colored";
        // document.getElementByClass("section__skills")
        document.querySelector(".section__skills").appendChild(icon);

    });

}

const iconsLists = [iconsWorkExperience, iconsProffecient, iconsHaveExperience];

function createTechnicalSkillsSection(iconsLists) {
    const levels = [
        { label: "Professional experience", class: "level-pro" },
        { label: "Proficient", class: "level-prof" },
        { label: "Have experience", class: "level-exp" }
    ];

    const container = document.querySelector(".skills__list");

    // Loop through the three sub-lists
    iconsLists.forEach((iconList, index) => {
        const { label, class: levelClass } = levels[index];

        // Loop through items inside each sublist
        iconList.forEach(iconClass => {
            const card = createSkillCards(iconClass, label, levelClass);
            container.appendChild(card);
        });
    });

    createSkillsHideButton(container)
}


function createSkillCards(iconClass, label, levelClass) {
    // Special-case name overrides
    const overrides = {
        css3: "CSS3",
        html5: "HTML5",
        azuresqldatabase: "SQL",
        csharp: "C#"
    };

    // Extract the skill name from the devicon class
    const match = iconClass.match(/devicon-([a-zA-Z0-9]+)-/);
    const rawName = match ? match[1] : "unknown";

    // Apply override if available, otherwise default capitalization
    const skillName = overrides[rawName.toLowerCase()]
        ? overrides[rawName.toLowerCase()]
        : rawName.charAt(0).toUpperCase() + rawName.slice(1);

    // Create wrapper
    const skillDiv = document.createElement("div");
    const className = label == "Have experience" ? "skill hidden-skill" : "skill";
    skillDiv.className = className;

    // Insert HTML
    skillDiv.innerHTML = `
        <i class="${iconClass}"></i>
        <span class="skill__name">${skillName}</span>
        <span class="skill__level-label">${label}</span>
        <div class="skill__bar">
            <div class="skill__fill ${levelClass}"></div>
        </div>
    `;

    return skillDiv;
}

function createSkillsHideButton(container) {

    const buttonHide = document.createElement("button");
    buttonHide.className = "skills-toggle";
    buttonHide.innerHTML = "Show more skills";
    buttonHide.addEventListener("click", function () {
        const hiddenSkills = document.querySelectorAll(".hidden-skill");
        const isHidden = hiddenSkills[0].style.display === "none" || hiddenSkills[0].style.display === "";

        hiddenSkills.forEach(skill => {
            skill.style.display = isHidden ? "flex" : "none";
        });

        this.textContent = isHidden ? "Show fewer skills" : "Show more skills";
    });
    container.appendChild(buttonHide);
};


createSkillsSection(icons);
createTechnicalSkillsSection(iconsLists);


const projects = [
    {
        link: "schedule.html",
        img: "img_Leo/schedule_thumbnail.jpg",
        text: "Django | Python | Web"
    },
    {
        link: "climateArt.html",
        img: "img_Leo/climateAR1_thumbnail.jpg",
        text: "C# | Git | Unity"
    },
    {
        link: "macroPhighters.html",
        img: "img_Leo/macroPhighter_thumbnail.jpg",
        text: "C# | Git | Unity"
    },
    {
        link: "infoViz.html",
        img: "img_Leo/staffiz_thumbnail.jpg",
        text: "D3js | React | Web"
    },
    {
        link: "arthello.html",
        img: "img_Leo/arthello_thumbnail.jpg",
        text: "C# | Unity"
    },
    {
        link: "heardWhen.html",
        img: "img_Leo/heard_when_thumbnail.jpg",
        text: "Git | Vue | Web"
    },

    {
        link: "fretTrainer.html",
        img: "img_Leo/wip.png",
        text: "Git | React | Web"
    }
];

const portfolioContainer = document.getElementById("portfolio");

projects.forEach(project => {
    const item = document.createElement("a");
    item.href = project.link;
    item.className = "portfolio__item";

    item.innerHTML = `
        <div class="portfolio__overlay">
            <img src="${project.img}" alt="" class="portfolio__img">
            <div class="overlay__text">${project.text}</div>
        </div>
    `;

    portfolioContainer.appendChild(item);
});
