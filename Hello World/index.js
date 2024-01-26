const nav = document.querySelector(".nav-items");
const navItems = nav.querySelectorAll(".nav-item");
const navRail = document.querySelector(".nav-rail");

navItems.forEach((item, index) => {
	item.addEventListener("mouseover", () => {
		navRail.style.setProperty("--index", index + 1);
	});

	item.addEventListener("click", () => {
		navItems.forEach((item, index) => {
			item.classList.remove("dot");
		});
		item.classList.add("dot");
	});
});
