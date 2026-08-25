/* ============================================================
   ENAN'S PORTFOLIO — script.js
   ============================================================
   JavaScript handles BEHAVIOR — things that happen in response
   to the user doing something (clicking, scrolling, etc).
   HTML = structure, CSS = looks, JS = actions.
   ============================================================ */

// STEP 1: Grab references to the elements we need to control.
// document.getElementById(...) finds the element whose id="..."
// matches, so we can read/change it with JS.
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('site-nav');

// STEP 2: Listen for clicks on the hamburger button.
// addEventListener(event, function) says: "when this event
// happens, run this function."
navToggle.addEventListener('click', () => {
  // .classList.toggle('open') adds the 'open' class if it's
  // missing, or removes it if it's already there. Our CSS
  // (.nav.open { display: flex; }) reacts to that class.
  siteNav.classList.toggle('open');

  // This updates aria-expanded so screen readers know whether
  // the menu is open or closed — an accessibility nicety.
  const isOpen = siteNav.classList.contains('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// STEP 3: Close the mobile menu automatically after tapping a link.
// Without this, the menu would stay open and cover the section
// you just navigated to.
const navLinks = siteNav.querySelectorAll('a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// STEP 4: Little "copied!" confirmation when someone clicks the email.
// Not required, but a nice, tiny touch of interactivity.
const emailLink = document.querySelector('.email-link');
if (emailLink) {
  emailLink.addEventListener('click', (event) => {
    event.preventDefault(); // stop it from immediately opening a mail app
    navigator.clipboard.writeText('support@hydrospec.info').then(() => {
      const original = emailLink.textContent;
      emailLink.textContent = 'COPIED TO CLIPBOARD!';
      setTimeout(() => {
        emailLink.textContent = original;
      }, 1500);
    });
  });
}
