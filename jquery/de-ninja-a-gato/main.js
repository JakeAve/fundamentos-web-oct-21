// manera 1

$("img").click(function () {
  const src = $(this).attr("src");
  const altSrc = $(this).attr("data-alt-src");
  $(this).attr("src", altSrc);
  $(this).attr("data-alt-src", src);
});

// manera 2

// function cambiarImg() {
//   const src = $(this).attr("src");
//   const altSrc = $(this).attr("data-alt-src");
//   $(this).attr("src", altSrc);
//   $(this).attr("data-alt-src", src);
// }

// $("img").click(cambiarImg);

// manera 3 (natural/native)

// document.querySelectorAll("img").forEach((img) => {
//   img.addEventListener("click", (e) => {
//     const elem = e.target;
//     const src = elem.src;
//     const altSrc = elem.getAttribute("data-alt-src");
//     elem.src = altSrc;
//     elem.setAttribute("data-alt-src", src);
//   });
// });
