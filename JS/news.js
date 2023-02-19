$(document).ready(function () {
  $(".content").hide();
  $(".see-more").click(function () {
    $(this).parent().find(".content").show(200);
    $(this).hide();
    $(this).parent().find(".see-less").show();
  });
  $(".see-less").click(function () {
    $(this).parent().find(".content").hide(200);
    $(this).hide();
    $(this).parent().find(".see-more").show();
  });
});

// nav bar
const hamburgerSection = document.querySelector(".hamburger-section");
const navBarMobile = document.querySelector(".nav-bar-mobile");

hamburgerSection.addEventListener("click", function () {
  navBarMobile.classList.toggle("show");
});

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// Toggle function for each dropdown menu
function toggleDropdown(dropdown) {
  const dropdownSection = document.querySelector(`.${dropdown}`);
  const dropdownToggle = dropdownSection.querySelector(".toggle-link");

  dropdownToggle.addEventListener("click", () => {
    dropdownSection.classList.toggle("active");
    dropdownToggle.classList.toggle("active");
  });
}

// Call the toggle function for each dropdown menu
toggleDropdown("academic");
toggleDropdown("extracurricularActivities");
toggleDropdown("resources");

// nav button
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => toggle.classList.toggle("active"));
