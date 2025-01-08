document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    $("#loader").fadeOut("slow");
    document.body.classList.remove("hide-scroll");
  }, 1000);

  const buttonAlert = document.querySelectorAll(".buttonAlert");

  buttonAlert.forEach((button) => {
    button.addEventListener("click", function () {
      $(".alert").removeClass("hide");
      $(".alert").addClass("show");
      setTimeout(function () {
        $(".alert").removeClass("show");
        $(".alert").addClass("hide");
        return (window.location.href = "shopping/shopping.html");
      }, 2500);
    });
  });

  $(".close-btnAlert").click(function () {
    $(".alert").removeClass("show");
    $(".alert").addClass("hide");
  });

  let nextButton = document.getElementById("next");
  let prevButton = document.getElementById("prev");
  let carousel = document.querySelector(".carousel");
  let listHTML = document.querySelector(".carousel .list");
  let seeMoreButtons = document.querySelectorAll(".seeMore");
  let backButton = document.getElementById("back");

  nextButton.onclick = function () {
    showSlider("next");
  };
  prevButton.onclick = function () {
    showSlider("prev");
  };

  let unAcceppClick;
  const showSlider = (type) => {
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";

    carousel.classList.remove("next", "prev");
    let items = document.querySelectorAll(".carousel .list .item");
    if (type === "next") {
      listHTML.appendChild(items[0]);
      carousel.classList.add("next");
    } else {
      listHTML.prepend(items[items.length - 1]);
      carousel.classList.add("prev");
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
      nextButton.style.pointerEvents = "auto";
      prevButton.style.pointerEvents = "auto";
    }, 2000);
  };

  seeMoreButtons.forEach((button) => {
    button.onclick = function () {
      const registerForm = button
        .closest(".item")
        .querySelector(".register-form");
      const loginForm = button.closest(".item").querySelector(".Login-form");

      // Toggle Register Form
      if (registerForm) {
        if (registerForm.classList.contains("expand")) {
          registerForm.classList.remove("expand");
          registerForm.classList.add("shrink");
        } else {
          registerForm.classList.remove("shrink");
          registerForm.classList.add("expand");
        }
      }

      if (loginForm) {
        if (loginForm.classList.contains("expand")) {
          loginForm.classList.remove("expand");
          loginForm.classList.add("shrink");
        } else {
          loginForm.classList.remove("shrink");
          loginForm.classList.add("expand");
        }
      }

      carousel.classList.add("showDetail");
    };
  });

  backButton.onclick = function () {
    carousel.classList.remove("showDetail");

    const registerForms = document.querySelectorAll(".register-form");
    const loginForms = document.querySelectorAll(".Login-form");

    registerForms.forEach((registerForm) => {
      if (registerForm.classList.contains("expand")) {
        registerForm.classList.remove("expand");
        registerForm.classList.add("shrink");
      }
    });

    loginForms.forEach((loginForm) => {
      if (loginForm.classList.contains("expand")) {
        loginForm.classList.remove("expand");
        loginForm.classList.add("shrink");
      }
    });
  };
});
