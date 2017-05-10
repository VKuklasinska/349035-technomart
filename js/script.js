      var link = document.querySelector(".contact-btn");
      var popup = document.querySelector(".modal-content-write-us");
      var close = popup.querySelector(".close-btn");
      var form = popup.querySelector("form");
      var login = popup.querySelector("[name=user-name]");
      var mail = popup.querySelector("[name=email]");
      var loginStorage = localStorage.getItem("name");
      var mailStorage = localStorage.getItem("mail");
      var message = popup.querySelector("textarea");
      var overlay = document.querySelector(".modal-overlay");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        if (loginStorage) {
          login.value = loginStorage;
          mail.focus();
        } else {
          login.focus();
        }
        if (mailStorage) {
          mail.value = mailStorage;
          message.focus();
        } else {
          mail.focus();
        }
        if (!loginStorage && !mailStorage) {
          login.focus();
        }
        overlay.classList.add("modal-overlay-show");
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("modal-overlay-show");
      });

      form.addEventListener("submit", function(event) {
        if (!login.value || !mail.value || !message.value) {
          event.preventDefault();
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("login", login.value);
          localStorage.setItem("mail", mail.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
            overlay.classList.remove("modal-overlay-show");
          }
        }
      });

// Для карты

      var mapOpen = document.querySelector(".js-open-map");
      var mapPopup = document.querySelector(".modal-content-map");
      var mapClose = mapPopup.querySelector(".close-btn");
      var mapOverlay = document.querySelector(".modal-overlay");

      mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
        mapOverlay.classList.add("modal-overlay-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
        mapOverlay.classList.remove("modal-overlay-show");
      });

      // mapOverlay.addEventListener("click", function(event) {
      //   event.preventDefault();
      //   mapPopup.classList.remove("modal-content-show");
      //   mapOverlay.classList.remove("modal-overlay-show");
      // });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
            mapOverlay.classList.remove("modal-overlay-show");
          }
        }
      });

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
