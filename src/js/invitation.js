const passwordInput = document.getElementById('inputPassword');
if (passwordInput) {
  passwordInput.value = window.localStorage.getItem('password');
  const signinForm = document.getElementById('signin');
  signinForm.onsubmit = (e) => {
    e.preventDefault();
    const password = passwordInput.value;
    try {
      const data = JSON.parse(CryptoJS.AES.decrypt(payload, password).toString(CryptoJS.enc.Utf8));
      document.title = data.title;
      document.body.className = '';
      signinForm.parentNode.removeChild(signinForm);

      document.getElementById('invitation').appendChild(domJSON.toDOM(data.invitation));

      const confetti = new ConfettiGenerator({
        "target":"confetti-holder",
        "max":"80",
        "size":"1",
        "animate":true,
        "props":["circle","square","triangle","line"],
        "colors":[[165,104,246],[230,61,135],[0,199,228],[253,214,126]],
        "clock":"25",
        "rotate":true,
        "start_from_edge":true,
        "respawn":true
      });
      confetti.render();
      window.localStorage.setItem('password', password);
    } catch(e) {
      document.getElementById('iconSignin').className = 'fa fa-exclamation fa-6 error';
    }
  };
}
