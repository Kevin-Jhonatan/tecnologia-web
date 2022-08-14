$(document).ready(function () {
  var activo = true;
  $(".btn-menu").on("click", function () {
    //intercalar los iconos
    $(".btn-menu i").toggleClass("fa-times");

    //animacion
    if (activo) {
      $(".list-container").animate(
        {
          left: "0px",
        },
        500
      );
      activo = false;
    } else {
      activo = true;
      $(".list-container").animate(
        {
          left: "-100%",
        },
        500
      );
      activo = true;
    }
  });

  var enlaces = document.querySelectorAll(".list li a");
  enlaces.forEach((element) => {
    element.addEventListener("click", (event) => {
      enlaces.forEach((link) => {
        link.classList.remove("activo");
      });

      event.target.classList.add("activo");
    });
  });
});
