document.addEventListener("click", (e) => {
  const toggle = document.getElementsByClassName("page-nav__toggle")[0];
  if (!e.target.closest('.page-nav__list') && e.target !== toggle && e.target.parentNode !== toggle) {
    document.getElementsByClassName("page-nav__list")[0].classList.remove('show');
  }
});
document.getElementsByClassName("page-nav__toggle")[0].addEventListener("click", (e) => {
  document.getElementsByClassName("page-nav__list")[0].classList.toggle("show");
});

const mySiema = new Siema({
  selector: '.slider-items',
  duration: 200,
  easing: 'cubic-bezier',
  perPage: 1,
  startIndex: 0,
  draggable: false,
//  draggable: true,
//  multipleDrag: true,
  threshold: 20,
  loop: true,
  onInit: () => {},
  onChange: updateNav,
});

$(".btn-nav").on("click", function() {
  var $this = $(this),
    btnIndex = $this.data("index");

  mySiema.goTo(btnIndex);
  updateNav();
});



function updateNav() {
  $(".btn-nav").removeClass("active");
  $("[data-index='" + mySiema.currentSlide + "']").addClass("active");
}

setInterval(() => mySiema.next(), 5000)

///////

//'stats__key'

var updateTimer = function(className) {
  var cells = document.getElementsByClassName(className);
  for (var i = 0; i < cells.length; i++) {
    var count = Number(cells[i].innerHTML);
		cells[i].innerHTML = count + 1;}
};

setInterval(() => {updateTimer('js-stats__key-1')}, 2000);
setInterval(() => {updateTimer('js-stats__key-2')}, 4000);
setInterval(() => {updateTimer('js-stats__key-3')}, 1000);
setInterval(() => {updateTimer('js-stats__key-4')}, 5000);
