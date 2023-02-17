const circles = [$("#circle1"), $("#circle2"), $("#circle3")];
const names = [$("#name1"), $("#name2"), $("#name3")];
const pics = [$("#pic2"), $("#pic4"), $("#pic6")];
const skills = [$("#skill1"), $("#skill2"), $("#skill3")];

circles.forEach((circle) => {
  circle.on("click", function () {
    // Remove hideLangSa from the clicked circle and add it to others
    circles.forEach((otherCircle) => {
      if (otherCircle !== circle) {
        otherCircle.removeClass("hideLngSa");
      }
    });
    circle.addClass("hideLngSa");

    // Determine which elements to hide and show
    let index = circles.indexOf(circle);
    let elementsToShow = [names[index], pics[index], skills[index]];
    let elementsToHide = [...names, ...pics, ...skills].filter(
      (el) => !elementsToShow.includes(el)
    );

    // Add and remove classes to the associated elements
    elementsToShow.forEach((el) => {
      el.fadeIn(500);
    });
    elementsToHide.forEach((el) => {
      el.fadeOut(500);
    });
  });
});

// progressbar
let progressBars = document.querySelectorAll(".progress-bar");
progressBars.forEach((progressBar) => {
  let max = parseInt(progressBar.getAttribute("aria-valuemax"));
  let value = parseInt(progressBar.getAttribute("aria-valuenow"));
  let percentage = Math.floor((value / max) * 100);
  let width = 0;

  const animateProgressBar = () => {
    if (width >= percentage) {
      clearInterval(animation);
      return;
    } else {
      width++;
      progressBar.style.width = `${width}%`;
      progressBar.innerHTML = `${width}%`;
    }
  };

  let animation = setInterval(animateProgressBar, 20);
});
