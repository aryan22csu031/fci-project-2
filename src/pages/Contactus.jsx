/* eslint-disable react/no-unescaped-entities */
function Contactus() {
  return (
    <div className="flex flex-col items-center p-10 bg-gray-80 min-h-screen">
      {/* Contact Section Code */}
      <section className="w-full max-w-5xl mt-16">
        <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Let's talk</h2>
        <p className="text-gray-600 mb-8 text-center md:text-left">
          We collaborate with thousands of creators,
          <br /> entrepreneurs, and complete legends.
        </p>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Contact Info Code */}
          <div className="flex flex-col space-y-8 w-full md:w-1/2 items-center md:items-start">
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <span className="text-gray-800">
                {/*SVG Email Icon */}
                <svg
                  width="26"
                  height="26"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13 21 6.01V6H3zm18 12V8.07L12.53 14.53a1 1 0 01-1.06 0L3 8.07V18h18z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold">Our email</h3>
                <p>hello@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <span className="text-gray-800">
                {/*SVG Phone Icon */}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.48 2.53.75 3.88.75a1 1 0 011 1v3.67a1 1 0 01-1 1A17 17 0 013 5.67a1 1 0 011-1H7.67a1 1 0 011 1c0 1.35.27 2.67.75 3.88a1 1 0 01-.27 1.11l-2.2 2.2z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold">Call us</h3>
                <p>+123 456 7892</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <span className="text-gray-800">
                {/* SVG Location Icon */}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
              </span>
              <div>
                <h3 className="text-xl font-semibold">Find us</h3>
                <a
                  href="https://maps.google.com?q=New+York+City"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Google Maps
                </a>
              </div>
            </div>
            {/* Social Media Links Code */}
            <div className="flex space-x-4 mt-4 justify-center">
              <a href="#facebook" className="text-xl text-gray-800">
                {/*SVG Facebook Icon */}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.91 3.57 8.99 8.21 9.84v-6.98h-2.5v-2.86h2.5v-2.2c0-2.48 1.5-3.84 3.72-3.84 1.06 0 1.97.08 2.23.11v2.58h-1.53c-1.2 0-1.43.57-1.43 1.4v1.86h2.85l-.37 2.86h-2.48v6.98c4.64-.85 8.21-4.93 8.21-9.84 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
              <a href="#instagram" className="text-xl text-gray-800">
                {/*SVG Instagram Icon */}
                <svg
                  width="26"
                  height="26"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2a3.75 3.75 0 00-3.75 3.75v8.5A3.75 3.75 0 007.75 20.5h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm4.75-3a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </a>
              <a href="#linkedin" className="text-xl text-gray-800">
                {/*SVG LinkedIn Icon */}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 9h4v12H3V9zm7.5 0h3.75v1.69h.05a4.1 4.1 0 013.69-2.03c3.95 0 4.67 2.59 4.67 5.96V21h-4v-4.95c0-1.18-.02-2.7-1.65-2.7-1.66 0-1.91 1.3-1.91 2.64V21h-4V9z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Form Code */}
          <form className="w-full md:w-1/2 bg-gray-300 shadow-md rounded-lg p-8 space-y-6 relative -top-10">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="First name"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-md"
            >
              Send message
            </button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="flex justify-center mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
