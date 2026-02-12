// ================= TESTIMONIAL AUTO SLIDER =================
const wrapper = document.getElementById("testimonialWrapper");
const testimonials = document.querySelectorAll(".testimonial");

let index = 0;

function slideTestimonials() {
  index++;
  if (index >= testimonials.length) {
    index = 0;
  }
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideTestimonials, 4000);


// ================= CONTACT FORM =================
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
  contactForm.reset();
});
