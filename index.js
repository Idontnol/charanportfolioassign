const projects = [
    {
        title: "Fact Spectrum",
        image:"./project-1.png",
        demoLink: "https://factsspectrum.netlify.app/",
        description: "A website to share interesting facts among the community."
    },
    {
        title: "Dandeli Trip Zone",
        image:"./project-4.png",
        demoLink: "http://dandelitripzone.com/",
        description: "A website I created for a tourism service that showcases various packages, destinations, and activities."
    },
    {
        title: "File Manager",
        image:"./project-3.png",
        demoLink: "https://filesyncpro.vercel.app/",
        description: "A file management app that helps users sync and manage their files easily with a modern interface."
    },
    {
        title: "Glimps",
        image:"./project-2.png",
        demoLink: "https://glimps.netlify.app/",
        description: "A webiste to generate your favourite images"
    },
    
    {
        title: "Glimps",
        image:"./project-2.png",
        demoLink: "https://glimps.netlify.app/",
        description: "A webiste to generate your favourite images"
    }
];

const roles = ["Frontend Developer", "Full Stack Developer", "Backend Developer", "Web Developer"];
const rolesTextElement = document.querySelector(".roles-text");
let currentRoleIndex = 0;
let typingIndex = 0;

function typeEffect() {
    // Get the current role text
    const currentText = roles[currentRoleIndex];

    // Typing speed (in milliseconds)
    const typingSpeed = 100;

    const type = () => {
        if (typingIndex < currentText.length) {
            rolesTextElement.textContent += currentText.charAt(typingIndex);
            typingIndex++;
            setTimeout(type, typingSpeed);
        } else {
            // Wait before starting to erase
            setTimeout(eraseEffect, 1000);
        }
    };
    type();
}

function eraseEffect() {
    // Erasing speed (in milliseconds)
    const erasingSpeed = 50;

    const erase = () => {
        const currentText = roles[currentRoleIndex];

        if (typingIndex > 0) {
            rolesTextElement.textContent = rolesTextElement.textContent.slice(0, -1);
            typingIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            // Move to the next role
            currentRoleIndex = (currentRoleIndex + 1) % roles.length; // Loop back to the first role
            typingIndex = 0; // Reset typingIndex for the next role
            setTimeout(typeEffect, 500); // Start typing the next role after a pause
        }
    };
    erase();
}

// Start the typing effect
typeEffect();


const scrollToSection = (id) => {
    const element = document.getElementById(id);
    let offset=100;
    if (element) {
        const viewportHeight = window.innerHeight;
        // if(id!=="home" && id!=="resorts"){
        //     offset = viewportHeight * 0.10;
        // }
       
      window.scrollTo({
        top: element.offsetTop -offset,
        behavior: 'smooth',
      });
    }
  };
  const navMobileMenu = document.getElementById("navMobileMenu");
const menuIcon = document.getElementById("menuIcon");

navMobileMenu.addEventListener("click", () => {
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});

const renderProjects=()=> {
    const projectContainer = document.getElementById("my-projects");

    projects.forEach(project => {

        const cardLink = document.createElement("a");
        cardLink.href = project.demoLink; 
        cardLink.target = "_blank"; 
        cardLink.className = "card-link"; 
        //  card element
        const card = document.createElement("div");
        card.className = "card-block";

        // image element
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title;
        img.className = "card-image";

        const overlay = document.createElement("div");
        overlay.className = "overlay"; 

        // title element
        const title = document.createElement("h2");
        title.className = "card-title";
        title.textContent = project.title;
        // title.appendChild();

        //  description element
        const description = document.createElement("p");
        description.className = "card-description";
        description.textContent = project.description;

        overlay.appendChild(title);
        overlay.appendChild(description);

        // Append elements to card
        card.appendChild(img);
        card.appendChild(overlay);
        cardLink.appendChild(card);

        // Append card to project container
        projectContainer.appendChild(cardLink);
    });
}
document.addEventListener("DOMContentLoaded", renderProjects);