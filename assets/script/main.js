const skillsContainer = document.getElementById("skills-container");

const layout = document.getElementsByClassName("layout")[0];

const pageNav = document.getElementById("page-nav");

const overlay = document.getElementById("overlay");

// Function to add a skill to the skills container
function AddSkill(skillName, skillPercentage) {
    const liSkill = document.createElement("li");

    // Creating HTML for the skill item
    liSkill.innerHTML = "<li> <div class='skill'> <div class='skill-information'> <p class='skill-name'> " + skillName + " </p> <p class='skill-percentage'> " + skillPercentage + "% </p> </div> <div class='range-slider'> <div class='range-slider-track' style='width:" + skillPercentage + "%'></div> </div> </div> </li>";

    // Appending the skill item to the skills container
    skillsContainer.appendChild(liSkill);
}

// Adding individual skills using AddSkill function
AddSkill("C#", 95);

AddSkill("Java", 90);

AddSkill("Asp.Net", 80);

AddSkill("PHP", 100);

AddSkill("Microsoft Sql Server", 100);

AddSkill("MySql", 100);

AddSkill("HTML", 100);

AddSkill("CSS", 85);

AddSkill("Javascript", 90);

AddSkill("Android Studio", 100);

AddSkill("Full-Stack Development", 100);

AddSkill("WinForms Applications Development", 100);

AddSkill("C", 60);

AddSkill("C++", 65);

AddSkill("React.Js", 85);

AddSkill("Node.Js", 85);

// Function to open the navigation
function OpenNav() {
    layout.style.overflowY = "hidden";
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    pageNav.style.left = "0";
}

// Function to hide the navigation
function HideNav() {
    layout.style.overflowY = "auto";
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    pageNav.style.left = "-" + (pageNav.offsetWidth + 10) +"px";
}
