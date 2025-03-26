document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-tertiary");

  // Example pricelist data
  const pricelistData = {
    content1: {
      image: "images/roses.jpg",
      heading: "Roses",
      items: ["Roses", "Freedom", "color", "Starting price: xxx"],
    },
    content2: {
      image: "images/focal.jpg",
      heading: "Focal Flowers",
      items: ["Focal Flowers", "Focal", "color", "Starting price: xxx"],
    },
    content3: {
      image: "images/filler.jpg",
      heading: "Filler Flowers",
      items: ["Filler Flowers", "Filler", "color", "Starting price: xxx"],
    },
    content4: {
      image: "images/greens.jpg",
      heading: "Greens",
      items: ["Greens", "Greens", "color", "Starting price: xxx"],
    },
    content5: {
      image: "images/mixed.jpg",
      heading: "Mixed Boxes",
      items: ["Mixed Boxes", "Boxes", "color", "Starting price: xxx"],
    },
  };

  const updateContent = (listType) => {
    const data = pricelistData[listType];
    if (!data) return;

    // Highlight the active button
    buttons.forEach((btn) => {
      if (btn.dataset.list === listType) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update image
    const image = document.getElementById("pricelist-image");
    image.src = data.image;

    // Update heading
    const heading = document.getElementById("pricelist-heading");
    heading.textContent = data.heading;

    // Update item list
    const itemsContainer = document.getElementById("pricelist-items");
    itemsContainer.innerHTML = "";
    data.items.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      itemsContainer.appendChild(p);
    });
  };

  // Set default content to content1 on page load
  updateContent("content1");

  // Add click listeners
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const listType = btn.dataset.list;
      updateContent(listType);
    });
  });
});
