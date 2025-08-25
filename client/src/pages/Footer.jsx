import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#151A23] text-gray-200 pt-12 pb-4 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 pb-8">
          {/* Logo and tagline */}
          <div className="flex flex-col gap-4 md:w-1/3">
            <div className="flex items-center gap-2">
              <img
                src={Logo}
                alt="Meet My Mentor Logo"
                className="h-10 w-auto"
              />
            </div>
            <div className="text-sm mt-2">
              Helping Creators Monetize Their Creation
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=100093118134095"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
                </svg>
              </a>
              <a
                href="https://x.com/Meet_My_Mentor"
                aria-label="Twitter"
                className="hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.542.929-.855 2.01-.855 3.17 0 2.188 1.115 4.118 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0 0 24 4.557z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full md:w-2/3 justify-between">
            <div>
              <div className="font-semibold mb-3">Join Now</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    className="hover:text-white"
                    onClick={() => (window.location.href = "/signup")}
                  >
                    Sign Up
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-white"
                    onClick={() => (window.location.href = "/login")}
                  >
                    Log In
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-white"
                    onClick={() => (window.location.href = "/mentorsignup")}
                  >
                    Become a Mentor
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Important Links</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    className="hover:text-white"
                    onClick={() => (window.location.href = "/explore")}
                  >
                    Explore Mentors
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-white"
                    onClick={() => (window.location.href = "/contactus")}
                  >
                    Contact-Us
                  </button>
                </li>
                <li>
                  <button className="hover:text-white">Write</button>
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3">Legal</div>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    className="hover:text-white"
                    onClick={() =>
                      (window.location.href = "/termsandconditions")
                    }
                  >
                    Terms and Conditions
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-white"
                    onClick={() => (window.location.href = "/privacypolicy")}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-white"
                    onClick={() =>
                      (window.location.href = "/cancellationpolicy")
                    }
                  >
                    Cancellation Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="text-center text-xs text-gray-400 pb-2">
          © 2023 NOVUM CLARIUM INVESTMENTS AND VENTURES PRIVATE LIMITED. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
