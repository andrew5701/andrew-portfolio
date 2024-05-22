import {
  FaJava,
  FaPython,
  FaHtml5,
  FaJs,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

function AboutMe() {
  return (
    <section id="aboutme" className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-white text-3xl sm:text-4xl font-extrabold mb-4">About Me</h1>
      </div>

      <div className="flex flex-col items-center justify-center w-full mt-8">
        <p className="mb-5 text-left text-white px-5 lg:px-20 max-w-2xl text-base sm:text-lg">
          A few words that describe me are passionate, hardworking, and dedicated. I am a software engineer with a strong background in Java, Python, and SQL. I have experience in developing web applications using HTML, CSS, and JavaScript. I am also familiar with version control systems like Git. I am excited to continue learning and growing as a software engineer.
        </p>

        <div className="grid gap-6 p-5 bg-gray-800 rounded-lg shadow-lg grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {[
            { href: "https://www.java.com", icon: <FaJava size={50} style={{ color: "#007396" }} />, label: "Java" },
            { href: "https://www.python.org", icon: <FaPython size={50} style={{ color: "#3776AB" }} />, label: "Python" },
            { href: "https://reactjs.org", icon: <FaReact size={50} style={{ color: "#61DAFB" }} />, label: "React" },
            { href: "https://www.microsoft.com/en-us/sql-server", icon: <DiMsqlServer size={50} style={{ color: "#CC2927" }} />, label: "MS SQL Server" },
            { href: "https://kotlinlang.org", icon: <SiKotlin size={50} style={{ color: "#7F52FF" }} />, label: "Kotlin" },
            { href: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: <FaHtml5 size={50} style={{ color: "#E34F26" }} />, label: "HTML" },
            { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: <FaJs size={50} style={{ color: "#F7DF1E" }} />, label: "JavaScript" },
            { href: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: <FaCss3Alt size={50} style={{ color: "#1572B6" }} />, label: "CSS" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-full h-32 p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md no-underline text-current"
            >
              {item.icon}
              <span className="mt-2 text-sm font-semibold text-current">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
