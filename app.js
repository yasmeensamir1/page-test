const faqs = document.querySelectorAll(".freq");

faqs.forEach((freq) => {
	freq.addEventListener("click", () => {
	freq.classList.toggle("active");

	});
});