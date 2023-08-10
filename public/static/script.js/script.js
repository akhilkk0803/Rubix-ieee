jQuery(document).ready(function ($) {
  var $form_modal = $(".user-modal"),
    $form_login = $form_modal.find("#login"),
    $form_signup = $form_modal.find("#signup"),
    $form_forgot_password = $form_modal.find("#reset-password"),
    $form_modal_tab = $(".switcher"),
    $tab_login = $form_modal_tab.children("li").eq(0).children("a"),
    $tab_signup = $form_modal_tab.children("li").eq(1).children("a"),
    $forgot_password_link = $form_login.find(".form-bottom-message a"),
    $back_to_login_link = $form_forgot_password.find(".form-bottom-message a"),
    $main_nav = $(".main-nav");

  //open modal
  $main_nav.on("click", function (event) {
    if ($(event.target).is($main_nav)) {
      // on mobile open the submenu
      $(this).children("ul").toggleClass("is-visible");
    } else {
      // on mobile close submenu
      $main_nav.children("ul").removeClass("is-visible");
      //show modal layer
      $form_modal.addClass("is-visible");
      //show the selected form
      $(event.target).is(".signup") ? signup_selected() : login_selected();
    }
  });

  //close modal
  $(".user-modal").on("click", function (event) {
    if ($(event.target).is($form_modal) || $(event.target).is(".close-form")) {
      $form_modal.removeClass("is-visible");
    }
  });
  //close modal when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == "27") {
      $form_modal.removeClass("is-visible");
    }
  });

  //switch from a tab to another
  $form_modal_tab.on("click", function (event) {
    event.preventDefault();
    $(event.target).is($tab_login) ? login_selected() : signup_selected();
  });

  //hide or show password
  $(".hide-password").on("click", function () {
    var $this = $(this),
      $password_field = $this.prev("input");

    "password" == $password_field.attr("type")
      ? $password_field.attr("type", "text")
      : $password_field.attr("type", "password");
    "Show" == $this.text() ? $this.text("Hide") : $this.text("Show");
    //focus and move cursor to the end of input field
    $password_field.putCursorAtEnd();
  });

  //show forgot-password form
  $forgot_password_link.on("click", function (event) {
    event.preventDefault();
    forgot_password_selected();
  });

  //back to login from the forgot-password form
  $back_to_login_link.on("click", function (event) {
    event.preventDefault();
    login_selected();
  });

  function login_selected() {
    $form_login.addClass("is-selected");
    $form_signup.removeClass("is-selected");
    $form_forgot_password.removeClass("is-selected");
    $tab_login.addClass("selected");
    $tab_signup.removeClass("selected");
  }

  function signup_selected() {
    $form_login.removeClass("is-selected");
    $form_signup.addClass("is-selected");
    $form_forgot_password.removeClass("is-selected");
    $tab_login.removeClass("selected");
    $tab_signup.addClass("selected");
  }

  function forgot_password_selected() {
    $form_login.removeClass("is-selected");
    $form_signup.removeClass("is-selected");
    $form_forgot_password.addClass("is-selected");
  }

  //REMOVE THIS - it's just to show error messages
  $form_login.find('input[type="submit"]').on("click", function (event) {
    event.preventDefault();
    $form_login
      .find('input[type="email"]')
      .toggleClass("has-error")
      .next("span")
      .toggleClass("is-visible");
  });
  $form_signup.find('input[type="submit"]').on("click", function (event) {
    event.preventDefault();
    $form_signup
      .find('input[type="email"]')
      .toggleClass("has-error")
      .next("span")
      .toggleClass("is-visible");
  });

  //IE9 placeholder fallback
  //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
  if (!Modernizr.input.placeholder) {
    $("[placeholder]")
      .focus(function () {
        var input = $(this);
        if (input.val() == input.attr("placeholder")) {
          input.val("");
        }
      })
      .blur(function () {
        var input = $(this);
        if (input.val() == "" || input.val() == input.attr("placeholder")) {
          input.val(input.attr("placeholder"));
        }
      })
      .blur();
    $("[placeholder]")
      .parents("form")
      .submit(function () {
        $(this)
          .find("[placeholder]")
          .each(function () {
            var input = $(this);
            if (input.val() == input.attr("placeholder")) {
              input.val("");
            }
          });
      });
  }
});

//credits https://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function () {
  return this.each(function () {
    // If this function exists...
    if (this.setSelectionRange) {
      // ... then use it (Doesn't work in IE)
      // Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      var len = $(this).val().length * 2;
      this.setSelectionRange(len, len);
    } else {
      // ... otherwise replace the contents with itself
      // (Doesn't work in Google Chrome)
      $(this).val($(this).val());
    }
  });
};
import firebase from "./firebase";

document.addEventListener("DOMContentLoaded", function () {
  const userModal = document.querySelector(".user-modal");
  const signinForm = document.getElementById("login");
  const signupForm = document.getElementById("signup");
  const resetPasswordForm = document.getElementById("reset-password");
  const closeButtons = document.querySelectorAll(".close-form");
  const signinButton = document.querySelector(".signin");
  const signupButton = document.querySelector(".signup");
  const switcherLinks = document.querySelectorAll(".switcher a");
  const errorMsgs = document.querySelectorAll(".error-message");

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      userModal.classList.remove("is-visible");
      errorMsgs.forEach((msg) => {
        msg.textContent = "";
      });
    });
  });

  signinButton.addEventListener("click", (e) => {
    e.preventDefault();
    userModal.classList.add("is-visible");
    signinForm.style.display = "block";
    signupForm.style.display = "none";
    resetPasswordForm.style.display = "none";
  });

  signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    userModal.classList.add("is-visible");
    signinForm.style.display = "none";
    signupForm.style.display = "block";
    resetPasswordForm.style.display = "none";
  });

  switcherLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      if (link.textContent === "Sign in") {
        signinForm.style.display = "block";
        signupForm.style.display = "none";
        resetPasswordForm.style.display = "none";
      } else {
        signinForm.style.display = "none";
        signupForm.style.display = "block";
        resetPasswordForm.style.display = "none";
      }
    });
  });

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // You can redirect or show success message here
    } catch (error) {
      errorMsgs[0].textContent = error.message;
    }
  };

  const signUpWithEmailAndPassword = async (email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // You can redirect or show success message here
    } catch (error) {
      errorMsgs[1].textContent = error.message;
    }
  };

  const loginForm = document.querySelector("#login .form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
    signInWithEmailAndPassword(email, password);
  });

  const signupFormElement = document.querySelector("#signup .form");
  signupFormElement.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    signUpWithEmailAndPassword(email, password);
  });
});
