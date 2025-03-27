import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      process.env.REACT_APP_WEB3FORMS_ACCESS_KEY.toString()
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      event.target.reset(); // Clear all input fields
    } else {
      setStatus("Failed to send message. Please try again.");
    }
    setShowStatus(true);
    setTimeout(() => setShowStatus(false), 3000); // Hide status message after 3 seconds
  }

  return (
    <>
      <section
        id="contact"
        className="mt-30 from-blue-500 to-blue-950 bg-gradient-to-t py-1 "
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center mb-9 lg:space-x-8">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-white">
            <h1 className="text-white mt-16 mt-5 text-5xl mb-4 font-light">
              CONTACT ME
            </h1>
            <p className="text-center lg:text-left text-lg mb-8">
              You can contact me at{" "}
              <a
                href="mailto:andrew.w.krasuski@gmail.com"
                className="underline text-white"
              >
                andrew.w.krasuski@gmail.com
              </a>
              , or here.
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col text-white space-y-4 w-full max-w-lg"
            >
              <div>
                <h3 className="text-white text-left">Name</h3>
                <input
                  type="text"
                  name="name"
                  className="text-black p-2 rounded w-full"
                  minLength={10}
                  maxLength={20}
                  required
                />
              </div>
              <div>
                <h3 className="text-white text-left">Email</h3>
                <input
                  type="email"
                  name="email"
                  className="text-black p-2 rounded w-full"
                  minLength={10}
                  maxLength={50}
                  required
                />
              </div>
              <div>
                <h3 className="text-white text-left">Message</h3>
                <textarea
                  name="message"
                  className="text-black p-2 h-56 rounded w-full"
                  minLength={10}
                  maxLength={300}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center bg-transparent border border-white transition-all duration-200 hover:bg-blue-600 hover:bg-opacity-50 hover:shadow-2xl"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full max-w-sm aspect-square flex justify-center items-center mt-6 lg:mt-0 bg-white rounded-full shadow-md p-4">
  <img
    src="/gifs/laptop.gif"
    alt="Laptop with code on the screen and coffee cup gif"
    className="max-w-full max-h-full"
  />
</div>



        </div>

        {showStatus && (
          <div
            className={`fixed bottom-4 right-4 p-4 rounded shadow-lg ${
              status.includes("successfully") ? "bg-green-500" : "bg-red-500"
            } text-white transition-transform transform ${
              showStatus ? "translate-y-0" : "translate-y-full"
            } ease-in-out duration-300`}
          >
            {status}
          </div>
        )}
      </section>
    </>
  );
}
