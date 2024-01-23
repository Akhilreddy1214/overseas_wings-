//                                         <---------------------arrow up ---------------->
const arrowUp = document.getElementById("goToTopButton");

arrowUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var goToTopButton = document.getElementById("goToTopButton");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      goToTopButton.classList.add("visible");
    } else {
      goToTopButton.classList.remove("visible");
    }
  });
});
//                              <---------------------------fixed header -------------------------------->
window.onscroll = function () {
  var header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
};

//                                          <----------form prevent deafult------------------>
function submitForm(event) {
  event.preventDefault();

  var education = document.getElementById("education").value;
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var country = document.getElementById("country").value;
  var intake = document.getElementById("intake").value;
}

//                                                        <.........      whatsaap icon------->
function redirectToWhatsApp() {
  var phoneNumber = "";

  var message = "Hello, I have a question!";

  var whatsappUrl =
    "https://wa.me/" + phoneNumber + "/?text=" + encodeURIComponent(message);

  window.location.href = whatsappUrl;
}

//                                                             <-----navbar menu toggle---->
document.addEventListener("DOMContentLoaded", function () {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarNav = document.getElementById("navbarNav");

  var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navbarToggler.click();
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (
      window.innerWidth <= 768 &&
      navbarNav.classList.contains("show") &&
      !navbarNav.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      navbarToggler.click();
    }
  });

  navbarToggler.addEventListener("click", function () {
    if (!navbarNav.classList.contains("show")) {
      document.addEventListener("click", collapseNavbarOnClickOutside);
    } else {
      document.removeEventListener("click", collapseNavbarOnClickOutside);
    }
  });

  function collapseNavbarOnClickOutside(event) {
    if (
      !navbarNav.contains(event.target) &&
      !navbarToggler.contains(event.target)
    ) {
      navbarToggler.click();
      document.removeEventListener("click", collapseNavbarOnClickOutside);
    }
  }
});

//          <-----------------------------REMOVE MENU ITEM----------------------------------->

document.addEventListener("DOMContentLoaded", function () {
  function removeBlogMenuItem() {
    var menu = document.querySelector(".menunav");

    if (menu) {
      for (var i = 0; i < menu.children.length; i++) {
        var listItem = menu.children[i];

        if (
          listItem.textContent.trim().toUpperCase() === "BLOG" ||
          listItem.textContent.trim().toUpperCase() === "OUR SERVICE FEE"
        ) {
          listItem.remove();

          return;
        }
      }

      console.log("BLOG not found in the menu.");
    } else {
      console.log("Menu element not found.");
    }
  }

  removeBlogMenuItem();
});

document.addEventListener("DOMContentLoaded", function () {
  var listItems = document.querySelectorAll(
    ".navbar-nav.menunav .nav-item.dropdown ul.dropdown-menu li a.dropdown-item"
  );

  var changes = [
    { oldText: "Ph.D(DOCTORAL)", newText: "DOCTORATE" },
    { oldText: "USA", newText: "UNITED STATES" },
    { oldText: "UK", newText: "UNITED KINGDOM" },
    { oldText: "SWEEDEN", newText: "SWEDEN" },
    { oldText: "Our Services", newText: "Services" },
  ];

  if (listItems) {
    listItems.forEach(function (item) {
      changes.forEach(function (change) {
        if (item.textContent.trim() === change.oldText) {
          item.textContent = change.newText;
        }
      });
    });
  }
});



