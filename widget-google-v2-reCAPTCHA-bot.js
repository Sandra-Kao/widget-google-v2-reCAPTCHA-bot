const randerTokenCallback = function (token) {
  document.querySelector("#token").innerText = token;
};

// 2. Specify your onload callback function.
// This function will get called when all the dependencies have loaded.
window.onloadCallback = function () {
  // 3. Your onload callback function must be defined before the reCAPTCHA API loads.
  // To ensure there are no race conditions
  // When your callback is executed, you can call the grecaptcha.render method
  grecaptcha.render(document.querySelector("#robot"), {
    // test site key from https://developers.google.com/recaptcha/docs/faq
    sitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
    theme: "dark", // or light
    size: "compact", // or normal
    hl: "en", // Optional. Forces the widget to render in a specific language. Auto-detects the user's language if unspecified.
    tabindex: "3", // Optional. The tabindex of the widget and challenge. If other elements in your page use tabindex, it should be set to make user navigation easier.
    callback: function (token) {
      randerTokenCallback(token);
    }
  });
};
