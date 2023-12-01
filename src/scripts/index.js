
const container = document.getElementById("technologies-container");

	const topicsJSON = {
		webTechnologies: [
			{
				tech: "HTML",
				description:
					"HTML (HyperText Markup Language) is the standard markup language for creating web pages.",
				usage: "Defines the structure and content of web pages.",
				href: "/html/",
				thumbnail: "/assets/img/html5.svg",
			},
			{
				tech: "CSS",
				description:
					"CSS (Cascading Style Sheets) is used for styling HTML elements on web pages.",
				usage: "Controls the presentation, layout, and design of web pages.",
				href: "/css/",
				thumbnail: "/assets/img/css3.svg",
			},
			{
				tech: "JavaScript",
				description:
					"JavaScript is a scripting language used to create dynamic and interactive web content.",
				usage: "Adds interactivity, manipulates content, and enhances user experience.",
				href: "/js/",
				thumbnail: "/assets/img/javascript.svg",
			},
			{
				tech: "Accesibility",
				description:
					"Accesibility is important in web development. It refers to creating websites and applications that can be used by everyone, including people with disabilities.",
				usage: "Ensures equal access and usability for all users.",
				href: "/accesibility/",
				thumbnail: "/assets/img/accesibility.svg",
			},
		],
	};

	topicsJSON.webTechnologies.forEach(
		({ tech, description, usage, href, thumbnail }) => {
			const cardDiv = document.createElement("div");
			cardDiv.innerHTML = `
        
			<a class="dark:bg-[#3C4D67] dark:hover:bg-[#199AFC] bg-[#F3F4F6] hover:bg-[#FFFBFF] transition duration-300 flex gap-10 items-center  text-stone-50 font-semibold card shadow-lg rounded-lg p-5 mb-5" href="${href}">
				<img src="${thumbnail}" class="card-img-top" alt="${description}" width="50" height="50"> 
				<h2 class="card-title text-xl dark:text-stone-200 text-[#7e7e7e] ">${tech}</h2>
			</a>

		

    `;

			container.appendChild(cardDiv);
		},
	);