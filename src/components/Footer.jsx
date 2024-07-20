import React from "react";

function Footer() {
  return (
    <footer className="footer bg-base-300 text-base-content p-10 font-extralight textarea-md">
      <div className="grid grid-cols-3 gap-8">
        {/* Services */}
        <div>
          <h6 className="footer-title">Services</h6>
          <ul className="list-none">
            <li>
              <a href="#" className="link link-hover">
                Branding
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Design
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Marketing
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Advertisement
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title">Company</h6>
          <ul className="list-none">
            <li>
              <a href="#" className="link link-hover">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Press kit
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="footer-title">Legal</h6>
          <ul className="list-none">
            <li>
              <a href="#" className="link link-hover">
                Terms of use
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="link link-hover">
                Cookie policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-8">
        <h6 className="footer-title">Newsletter</h6>
        <form>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join flex items-center">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
                aria-label="Email Address"
              />
              <button className="btn btn-primary join-item" type="submit">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
