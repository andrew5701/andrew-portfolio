import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white p-4 text-center">
      <div className="flex justify-center">
        <a href="#home" className="m-2 border-white border-double ">
          <FaArrowUp className="text-white" size={45} />
        </a>
      </div>
      
      <div className="flex justify-center">
       <p className="-mb-3"> © 2030 Andrew Krasuski All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
