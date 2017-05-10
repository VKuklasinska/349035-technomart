      var overlay = document.querySelector(".modal-overlay");

// Для корзины

      var cartOpenList = document.querySelectorAll(".bookmark");
      var cartPopup = document.querySelector(".modal-content-cart");
      var cartClose = cartPopup.querySelector(".close-btn");

      for (var iList = 0; iList < cartOpenList.length; iList++) {
        cartOpenList[iList].addEventListener("click", function(event) {
          event.preventDefault();
          cartPopup.classList.add("modal-content-show");
          overlay.classList.add("modal-overlay-show");
        });
      }

      cartClose.addEventListener("click", function(event) {
        event.preventDefault();
        cartPopup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (cartPopup.classList.contains("modal-content-show")) {
            cartPopup.classList.remove("modal-content-show");
            overlay.classList.remove("modal-overlay-show");
          }
        }
      });
