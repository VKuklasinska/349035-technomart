
      var link = document.querySelector(".contact-btn");
      var popup = document.querySelector(".modal-content-write-us");
      var close = popup.querySelector(".close-btn");
      var form = popup.querySelector("form");
      var name = popup.querySelector("[name=user-name]");
      var mail = popup.querySelector("[name=email]");
      var storage = localStorage.getItem("name");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        name.focus();
        if (storage) {
          name.value = storage;
          mail.focus();
        } else {
          name.focus();
        }
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
      });

      form.addEventListener("submit", function(event) {
        if (!name.value || !mail.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        } else {
          localStorage.setItem("Name", name.value);
        }
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            popup.classList.remove("modal-error");
          }
        }
      });

// Для карты

      var mapOpen = document.querySelector(".js-open-map");
      var mapPopup = document.querySelector(".modal-content-map");
      var mapClose = mapPopup.querySelector(".close-btn");

      mapOpen.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.add("modal-content-show");
      });

      mapClose.addEventListener("click", function(event) {
        event.preventDefault();
        mapPopup.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (mapPopup.classList.contains("modal-content-show")) {
            mapPopup.classList.remove("modal-content-show");
          }
        }
      });

// Для корзины

      var cartOpen = document.querySelector(".bookmark");
      var cartPopup = document.querySelector(".modal-content-cart");
      var cartClose = cartPopup.querySelector(".close-btn");

      cartOpen.addEventListener("click", function(event) {
        event.preventDefault();
        cartPopup.classList.add("modal-content-show");
      });

      cartClose.addEventListener("click", function(event) {
        event.preventDefault();
        cartPopup.classList.remove("modal-content-show");
      });

      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (cartPopup.classList.contains("modal-content-show")) {
            cartPopup.classList.remove("modal-content-show");
          }
        }
      });
