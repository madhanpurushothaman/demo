const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("E-mail");
const password = document.getElementById("password");
const conform_password = document.getElementById("conform_password");


/**
 * Event listener for form submit button
 */
document.getElementById("submit-button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("entered");
  checkInputs();
  console.log(flag);
  if (!flag) {
    var x = document.getElementById("form");
    for (i = 0; i < x.length; i++) {
      x[i].parentElement.classList.remove("success");
    }
    document.getElementById("form").reset();

    document.querySelector(".bg-modal").style.display = "none";
    document.getElementById("toast").classList.add("toast-visible");

    document.querySelector(".bg-modal").style.display = "none";
    window.removeEventListener("scroll", noScroll);
    setTimeout(() => {
      document.getElementById("toast").classList.remove("toast-visible");
    }, 3000);
  }
  const username = document.getElementById("username");
  const email = document.getElementById("E-mail");
  const password = document.getElementById("password");
  const conform_password = document.getElementById("conform_password");
});

/**
 * popup expansion for rows
 */

function expand(a) {
  var z;
  let p = document.getElementsByClassName("popup-box-grow")[0];
  if (p) {
    p.className = a.className.replace("popup-box-grow", "");
    p.children[0].children[0].src = localStorage.getItem(z);
  }
  a.className += " popup-box-grow";
  localStorage.setItem(z, a.children[0].children[0].src);
  a.children[0].children[0].src = a.children[0].children[0].alt;
}


/**
 * popup function
 */
function popup() {
  popup_content = document.getElementById("index-0");
  document.querySelector(".popup-box").style.display = "flex";
  window.addEventListener("mouseup", (event) => {
    console.log("hello");
    var a = event.target;
    var element = [];
    while (a) {
      element.unshift(a);
      a = a.parentNode;
    }
    if (!element.includes(popup_content.parentNode)) {
      document.querySelector(".popup-box").style.display = "none";
    }
  });
}



/**
 * modal function for ticket
 */
function modal() {
  console.log("modal icon clicked ttttt");
  document.querySelector(".bg-modal").style.display = "flex";
  var modal_content = document.getElementById("form-container");
  console.log("qweer");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
  window.addEventListener("mouseup", (event) => {
    var a = event.target;
    console.log(a);
    var els = [];
    while (a) {
      els.unshift(a);
      a = a.parentNode;
    }
    console.log(els);
    if (!els.includes(modal_content.parentNode)) {
      console.log("close");
      window.removeEventListener("scroll", noScroll);
      document.querySelector(".bg-modal").style.display = "none";
    }
  });
}


/**
 * Event listener for pop up box
 */
document.getElementById("popup-button").addEventListener("clcik", (e) => {
  e.preventDefault();

  console.log("Notification icon clicked");
  document.getElementById("popup").style.display = "flex";
});

var flag = true;

/**
 * To validate the input text in the form
 */
function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const conform_passwordValue = conform_password.value.trim();
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (usernameValue === "") {
    flag = true;
    SetErrorFor(username, " Username is required");
  } else {
    flag = false;
    setSuccessfor(username);
  }

  if (emailValue === "") {
    flag = true;
    SetErrorFor(email, " Email is required");
  } else if (!reg.test(emailValue)) {
    flag = true;
    SetErrorFor(email, " Email is wrong ");
  } else {
    flag = false;
    setSuccessfor(email);
  }

  if (passwordValue === "") {
    flag = true;
    SetErrorFor(password, " password required");
  } else if (passwordValue.length < 6 || passwordValue.length > 15) {
    flag = true;
    console.log(passwordValue.length);
    SetErrorFor(password, " password is less than 6 charcater");
  } else {
    flag = false;
    setSuccessfor(password);
  }

  if (conform_passwordValue === "") {
    flag = true;
    SetErrorFor(conform_password, " confirm password required");
  } else if (passwordValue != conform_passwordValue) {
    console.log("meow");
    flag = true;
    SetErrorFor(conform_password, " conform-password is not matching");
  } else if (
    conform_passwordValue.length < 6 ||
    conform_passwordValue.length > 15
  ) {
    flag = true;
    SetErrorFor(conform_password, " password is less than 6 charcater");
  } else {
    flag = false;
    setSuccessfor(conform_password);
  }
}


/**
 *
 * @param {*Each input text in form } input
 * @param {* To display error messages} message
 */
function SetErrorFor(input, message) {
  console.log("entered into seterrorfor method");
  const formcontrol = input.parentElement;
  console.log(formcontrol);
  const small = formcontrol.querySelector("small");
  small.innerText = message;
  formcontrol.className = "form-control error";
}
/**
 *
 * @param {*Each input text in form } input
 */
function setSuccessfor(input) {
  console.log("meow");
  const formcontrol = input.parentElement;
  formcontrol.className = " form-control success";
}

//** To rest the form */
function Reset() {
  var x = document.getElementById("form");
  for (i = 0; i < x.length; i++) {
    x[i].parentElement.classList.remove("success");
  }
  document.getElementById("form").reset();
}


//** function to find parenetElement for closing popups and modal */
function parentElement(element) {
  var a = element.target;
  var els = [];
  while (a) {
    els.unshift(a);
    a = a.parentNode;
  }
}

//toggle class for sidebar
function togglebar() {
  document.getElementById("sidebar").classList.toggle("active");
}
//line-clamp activate 
function expand1(a) {
  if (a.className.includes("child-2 child-2-grow")) {
    a.className = a.className.replace("child-2-grow", "");
    a.children[1].children[0].classList.remove("line-clamp-activate");
  } else {
    let b = document.getElementsByClassName("child-2-grow")[0];
    if (b) {
      b.className = a.className.replace("child-2-grow", "");
      b.children[1].children[0].classList.remove("line-clamp-activate");
    }
    a.classList.add("child-2-grow");
    console.log(a.children[1].children[0].classList.add("line-clamp-activate"));
  }
}

function row_expansion(m) {
  console.log("Entered row expansion function");
  console.log("clicked row  " + m.className);
  l = document.getElementsByClassName(" row_expansion")[0];
  console.log(l);
  if (l) l.className = m.className.replace(" row_expansion", "");
  m.className += " row_expansion";
  console.log("hello" + m);
}
//function for issuetable row expansion
function change1(c) {
  var content = c.parentElement.nextElementSibling;
  if (c.parentElement.className.includes("remove-border")) {
    c.parentElement.classList.remove("remove-border");
    content.style.display = "none";
  } else {
    k = document.getElementsByClassName("remove-border")[0];
    if (k) {
      k.classList.remove("remove-border");
      k.nextElementSibling.style.display = "none";
    }
    c.parentElement.classList.add("remove-border");
    content.style.display = "block";
  }
}
//function for sidebar colour change
function change(a) {
  console.log(a);
  var alt2;
  console.log(a.classList.contains("sidemenu-color"));
  console.log(a.children[0].children[0].src);
  let v = document.getElementsByClassName(" sidemenu-color")[0];
  if (v) {
    v.className = a.className.replace(" sidemenu-color", "");
    v.children[0].children[0].src = localStorage.getItem(alt2);
  }
  a.className += " sidemenu-color";
  localStorage.setItem(alt2, a.children[0].children[0].src);
  a.children[0].children[0].src = a.children[0].children[0].alt;
}
//  function for frequencytrend animation 
function frequencyTrend() {
  document
    .getElementById("bg-modal-frequency-trend")
    .classList.remove("bg-modal-frequency-trend-close");
 

  document.querySelector(".bg-modal-frequency-trend").style.display = "flex";
  document.querySelector(".sidemenu").classList.add("modal-modification");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
  var modal_frequency_trend = document.getElementById(
    "modal-frequency-trend-box"
  );
  var bg_modal_frequency_trend = document.getElementById(
    "bg-modal-frequency-trend"
  );
  var bg_modal_frequency_trend_content = document.getElementById(
    "modal-frequency-trend-box"
  );

  window.addEventListener("mouseup", (event) => {
    console.log("clicked in the window ");
    var a = event.target;
    var els = [];
    while (a) {
      els.unshift(a);
      a = a.parentNode;
    }
    console.log(els);
    if (!els.includes(bg_modal_frequency_trend_content.parentNode)) {
      // bg_modal_frequency_trend_content.classList.add("out");
      // bg_modal_frequency_trend.classList.add("out1");
      console.log(bg_modal_frequency_trend);
      document
        .getElementById("bg-modal-frequency-trend")
        .classList.add("bg-modal-frequency-trend-close");
      window.removeEventListener("scroll", noScroll);
    }
  });
}
//function for scroll event
function noScroll() {
  window.scrollTo(0, 0);
}

form.addEventListener("submit", (e) => {
  console.log("cicked submit");

  if (!flag) {
    console.log("entered to reset");
    setTimeout(Reset, 2000);
  }
  document.getElementById("toast").classList.add("toast-visible");
  console.log(document.getElementById("toast"));
  document.querySelector(".bg-modal").style.display = "none";

  setTimeout(() => {
    document.getElementById("toast").classList.remove("toast-visible");
  }, 3000);
});


//function for submit button for form
function submit() {
  const form = document.getElementById("form");
  console.log("form");
  console.log("modal icon clicked");
  document.querySelector(".bg-modal").style.display = "flex";
  document.querySelector(".sidemenu").classList.add("modal-modification");
  var modal_content = document.getElementById("form-container");
  window.scrollTo(0, 0);
  window.addEventListener("scroll", noScroll);
  document.getElementById("toast").classList.add("toast-visible");
  console.log(document.getElementById("toast"));
  document.querySelector(".bg-modal").style.display = "none";

  setTimeout(() => {
    document.getElementById("toast").classList.remove("toast-visible");
  }, 3000);
  window.addEventListener("mouseup", (event) => {
    console.log("clicked in the window ");
    var a = event.target;
    var els = [];
    while (a) {
      els.unshift(a);
      a = a.parentNode;
    }
    console.log(els);

    if (!els.includes(modal_content.parentNode)) {
      document.querySelector(".bg-modal").style.display = "none";
    }
  });
}
