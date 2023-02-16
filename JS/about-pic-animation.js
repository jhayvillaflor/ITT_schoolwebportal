// function to toggle the classes 'off' and add the desired class (piclong1, piclong2, piclong3, piclong4)
const addRemoveClass = (clickedClass, newClass, id) => {
  // toggle the class 'off' for the clicked element
  $(clickedClass).toggleClass("off");

  // hide all ID details
  $("[id^=details]").hide(100);

  // show the corresponding ID details
  $(`#${id}`).show(200);

  // find all elements with class '.piclong1', '.piclong2', '.piclong3', '.piclong4'
  // that are 2 levels up from the clicked element and remove the current class
  // then add the desired class (newClass)
  $(clickedClass)
    .parents()
    .eq(2)
    .find(".piclong1, .piclong2, .piclong3, .piclong4")
    .removeClass("piclong1 piclong2 piclong3 piclong4")
    .addClass(newClass);

  // find all elements with class 'off' that are within the same parent as the clicked element
  // and remove the class 'off'
  var current = $(clickedClass).parent().find(".off");
  current
    .removeClass("off")
    .removeClass("animate-right ")
    .addClass("animate-right");

  // add the class 'off' to the clicked element
  $(clickedClass).addClass("off").fadeOut();

  // append the elements with class 'off' to the end of the parent of the clicked element
  $(clickedClass).parent().append(current);
};

// an array of objects to store the clicked class, the new class to be added, and the corresponding ID details
const classes = [
  { clicked: ".pic1", new: "piclong1", id: "details1" },
  { clicked: ".pic2", new: "piclong2", id: "details2" },
  { clicked: ".pic3", new: "piclong3", id: "details3" },
  { clicked: ".pic4", new: "piclong4", id: "details4" },
];

// loop through the classes array and add click event to each class
classes.forEach((c) => {
  $(c.clicked).click(() => addRemoveClass(c.clicked, c.new, c.id));
});
