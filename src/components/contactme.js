import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY.toString());

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
      <section id="contact">
        <h1 className="text-white mt-16 text-5xl"> Contact Me</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-white space-y-4"
        >
          <div className="w-1/2 min-w-1/2 mx-auto">
            <h3 className="text-white text-left">Name</h3>
            <input
              type="text"
              name="name"
              className="text-black p-2 rounded w-full"
              minLength={10}
              maxLength={20}
              required
            />
            <h3 className="text-white text-left">Email</h3>
            <input
              type="email"
              name="email"
              className="text-black p-2 rounded w-full"
              minLength={10}
              maxLength={50}
              required
            />
            <h3 className="text-white text-left">Subject</h3>
            <input
              type="text"
              name="subject"
              className="text-black p-2 rounded w-full"
              minLength={10}
              maxLength={30}
              required
            />
            <h3 className="text-white text-left">Message</h3>
            <textarea
              name="message"
              className="text-black p-2 h-56 rounded w-full"
              minLength={10}
              maxLength={300}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 mb-40 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send Message
            </button>
          </div>
        </form>
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
