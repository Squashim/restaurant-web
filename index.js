const menuToggle = document.querySelector(".toggle");
const icon = document.querySelector(".fas.fa-bars");
const menu = document.querySelector(".menu");
const navBar = document.querySelector("#nav");

const foodSection = document.querySelector("#about-food");
const offerSection = document.querySelector("#oferta");
const contactSection = document.querySelector("#contact");
const mainSection = document.querySelector("#main-sec");

const sections = [mainSection, foodSection, offerSection, contactSection];

const list = document.querySelectorAll(".item");

if (document.URL.endsWith("/gallery.html")) {
	window.onscroll = () => {
		if (
			document.body.scrollTop >= 100 ||
			document.documentElement.scrollTop >= 100
		) {
			navBar.classList.add("active");
			menu.classList.remove("active");
			icon.classList.value = "fas fa-bars";
		} else {
			navBar.classList.remove("active");
		}
	};
} else {
	window.onscroll = () => {
		if (
			document.body.scrollTop >= 100 ||
			document.documentElement.scrollTop >= 100
		) {
			navBar.classList.add("active");
			menu.classList.remove("active");
			icon.classList.value = "fas fa-bars";
		} else {
			navBar.classList.remove("active");
		}
		let current = "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			if (scrollY >= sectionTop) {
				current = section.getAttribute("id");
			}
			if (scrollY + 1000 >= document.body.scrollHeight) {
				current = "contact";
			}
		});
		list.forEach((li) => {
			li.classList.remove("active");
			if (li.classList.contains(current)) {
				li.classList.add("active");
			}
		});
	};

	const swiper = new Swiper(".swiper", {
		speed: 1500,
		autoplay: {
			delay: 8000,
		},
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
		},
	});
}

menuToggle.addEventListener("click", () => {
	if (icon.classList.value == "fas fa-bars") {
		icon.classList.value = "fas fa-close";
	} else {
		icon.classList.value = "fas fa-bars";
	}
	menu.classList.toggle("active");
});

window.addEventListener("resize", () => {
	if (window.innerWidth >= 800) {
		menu.classList.remove("active");
		icon.classList.value = "fas fa-bars";
	}
});
