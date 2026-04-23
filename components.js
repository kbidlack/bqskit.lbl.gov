/**
 * BQSKit shared layout components.
 *
 * Defines two custom elements:
 *   <site-nav>    — top navigation bar
 *   <site-footer> — page footer
 *
 * Both accept an optional `base` attribute for pages in subdirectories.
 * Root pages:  <site-nav></site-nav>
 * blog/ pages: <site-nav base=".."></site-nav>
 *
 * This file must be loaded synchronously (no defer/async) so the elements
 * are defined before the browser parses them in the body.
 */

(function () {
    class SiteNav extends HTMLElement {
        connectedCallback() {
            const b = this.getAttribute("base") || ".";
            this.innerHTML = `
<nav class="site-nav">
    <a class="nav-brand" href="${b}">
        <img src="${b}/assets/BQSKit_header-1.png" alt="BQSKit logo" class="nav-brand-logo" />
        <span class="nav-site-name">Berkeley Quantum Synthesis Toolkit</span>
    </a>
    <div class="nav-links">
        <a href="${b}">Home</a>
        <a href="${b}/about" class="hide-sm">About</a>
        <a href="${b}/research" class="hide-sm">Research</a>
        <a href="${b}/blog" class="hide-sm">Blog</a>
        <a href="https://bqskit.readthedocs.io/en/latest/" target="_blank" class="hide-sm">Docs</a>
        <a href="https://github.com/BQSKit" target="_blank" class="hide-sm">GitHub</a>
        <a class="nav-cta btn" href="https://github.com/BQSKit/bqskit-tutorial" target="_blank">Get Started</a>
    </div>
</nav>`;
        }
    }

    class SiteFooter extends HTMLElement {
        connectedCallback() {
            const b = this.getAttribute("base") || ".";
            this.innerHTML = `
<footer class="site-footer">
    <div class="footer-inner">
        <div>
            <div class="footer-brand-name">BQSKit</div>
            <div class="footer-brand-desc">
                Berkeley Quantum Synthesis Toolkit — a portable, extensible quantum
                compiler framework from Lawrence Berkeley National Laboratory.
            </div>
            <div class="footer-license">BSD License · Free &amp; Open Source</div>
        </div>
        <div>
            <div class="footer-col-title">Resources</div>
            <div class="footer-links">
                <a href="https://bqskit.readthedocs.io/en/latest/" target="_blank">Documentation</a>
                <a href="https://github.com/BQSKit/bqskit" target="_blank">GitHub</a>
                <a href="https://github.com/BQSKit/bqskit/issues" target="_blank">Issue Tracker</a>
                <a href="https://pypi.org/project/bqskit/" target="_blank">PyPI</a>
            </div>
        </div>
        <div>
            <div class="footer-col-title">Site</div>
            <div class="footer-links">
                <a href="${b}">Home</a>
                <a href="${b}/about">About Us</a>
                <a href="${b}/research">Research &amp; Publications</a>
                <a href="${b}/blog">Blog</a>
            </div>
        </div>
        <div>
            <div class="footer-col-title">Contact</div>
            <div class="footer-links">
                <a href="https://www.lbl.gov" target="_blank">LBNL</a>
                <a href="https://www.lbl.gov/disclaimers/" target="_blank">Privacy &amp; Security</a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="footer-bottom-text">
            © Lawrence Berkeley National Laboratory · U.S. Department of Energy,
            Office of Science, Advanced Scientific Computing Research
        </div>
        <div class="footer-bottom-right">
            <a href="https://www.lbl.gov" target="_blank" class="footer-lbl-logo">
                <img src="${b}/assets/LBL_logos_bitmap/6_BL_Horiz_Rev_rgb.png" alt="Lawrence Berkeley National Laboratory" />
            </a>
            <div class="footer-bottom-text">
                <a href="https://www.lbl.gov/disclaimers/" target="_blank" style="color:inherit">Privacy &amp; Security Notice</a>
            </div>
        </div>
    </div>
</footer>`;
        }
    }

    customElements.define("site-nav", SiteNav);
    customElements.define("site-footer", SiteFooter);
})();
