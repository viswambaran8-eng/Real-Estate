const projects = [
  {
    id: 1,
    title: "Skyline Residency",
    location: "Mumbai",
    price: "₹2.5 Cr",
    type: "apartment",
    image: "./Assets/p1_11zon_11zon.webp",
  },
  {
    id: 2,
    title: "Palm Grove Villas",
    location: "Bangalore",
    price: "₹3.8 Cr",
    type: "villa",
    image: "./Assets/p2_11zon_11zon.webp",
  },
  {
    id: 3,
    title: "Ocean Pearl Heights",
    location: "Chennai",
    price: "₹1.9 Cr",
    type: "apartment",
    image: "./Assets/p3_11zon_11zon.webp",
  },
  {
    id: 4,
    title: "Green Valley Township",
    location: "Hyderabad",
    price: "₹1.2 Cr",
    type: "villa",
    image: "./Assets/p4_11zon_11zon.webp",
  },
  {
    id: 5,
    title: "Royal Garden Enclave",
    location: "Delhi",
    price: "₹4.5 Cr",
    type: "apartment",
    image: "./Assets/p5_11zon_11zon.webp",
  },
  {
    id: 6,
    title: "Sunset Boulevard",
    location: "Pune",
    price: "₹95 Lakh",
    type: "villa",
    image: "./Assets/p6_11zon_11zon.webp",
  },
  {
    id: 7,
    title: "Elite Park Towers",
    location: "Kochi",
    price: "₹1.4 Cr",
    type: "apartment",
    image: "./Assets/p7_11zon_11zon.webp",
  },
  {
    id: 8,
    title: "Grand Marina Villas",
    location: "Goa",
    price: "₹5.2 Cr",
    type: "villa",
    image: "./Assets/p8_11zon_11zon.webp",
  },
  {
    id: 9,
    title: "Metro Business Hub",
    location: "Noida",
    price: "₹6 Cr",
    type: "commercial",
    image: "./Assets/p9_11zon_11zon.webp",
  },
  {
    id: 10,
    title: "Corporate Square",
    location: "Gurgaon",
    price: "₹8 Cr",
    type: "commercial",
    image: "./Assets/p10_11zon_11zon.webp",
  },
  {
    id: 11,
    title: "City Center Plaza",
    location: "Ahmedabad",
    price: "₹3.1 Cr",
    type: "commercial",
    image: "./Assets/p11_11zon_11zon.webp",
  },
  {
    id: 12,
    title: "Lakeside Apartments",
    location: "Kolkata",
    price: "₹1.8 Cr",
    type: "apartment",
    image: "./Assets/p12_11zon_11zon.webp",
  },
];

const grid = document.getElementById("projectsGrid");
const filterBtns = document.querySelectorAll(".filter-btn");

function displayProjects(filter) {
  grid.innerHTML = "";

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.type === filter);

  filtered.forEach((project) => {
    grid.innerHTML += `
      <div class="project-card">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <div class="project-location">${project.location}</div>
          <div class="project-price">${project.price}</div>
            <a href="./error.html" class="project-type-link">
                <div class="project-type">${project.type.toUpperCase()}</div>
            </a>
        </div>
      </div>
    `;
  });
}

displayProjects("all");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");
    displayProjects(btn.dataset.filter);
  });
});
