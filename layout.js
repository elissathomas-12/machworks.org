// Shared nav HTML — injected by each page
const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">MachWorks</a>
  <ul class="nav-links" id="nav-links">
    <li><a href="index.html">Home</a></li>
    <li class="dropdown">
      <span>People ▾</span>
      <ul class="dropdown-menu">
        <li><a href="leadership.html">Our Leadership</a></li>
        <li><a href="team.html">Our Team</a></li>
      </ul>
    </li>
    <li class="dropdown">
      <span>Aircraft ▾</span>
      <ul class="dropdown-menu">
        <li><a href="icarus.html">ICARUS</a></li>
        <li><a href="prometheus.html">PROMETHEUS</a></li>
      </ul>
    </li>
    <li><a href="lab.html">Our Lab</a></li>
    <li><a href="software.html">Software</a></li>
    <li class="dropdown">
      <span>Sponsor ▾</span>
      <ul class="dropdown-menu">
        <li><a href="sponsors.html">Current Sponsors</a></li>
        <li><a href="sponsor-us.html">Sponsor Us</a></li>
      </ul>
    </li>
    <li><a href="contact.html" class="btn btn-primary" style="padding:0.45rem 1rem;font-size:0.78rem;">Contact</a></li>
  </ul>
  <div class="hamburger" id="hamburger">
    <span></span><span></span><span></span>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer>
  <span class="footer-logo">MachWorks</span>
  <span class="footer-copy">© 2026 MachWorks at Virginia Tech · All rights reserved.</span>
  <nav class="footer-links">
    <a href="https://www.instagram.com/machworksvt/" target="_blank">Instagram</a>
    <a href="https://www.linkedin.com/company/machworks" target="_blank">LinkedIn</a>
    <a href="https://www.youtube.com/@MachWorks" target="_blank">YouTube</a>
    <a href="contact.html">Contact</a>
  </nav>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  const navMount = document.getElementById('nav-mount');
  if (navMount) navMount.innerHTML = NAV_HTML;
  const footerMount = document.getElementById('footer-mount');
  if (footerMount) footerMount.innerHTML = FOOTER_HTML;
});
