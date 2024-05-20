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
    <>
      <section id="aboutme" className="py-10">
        <div className="text-center text-pretty">
          <h1 className="text-white text-4xl font-bold">About Me</h1>
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-8">
          <p className="mb-5 text-left text-white px-5 lg:px-20 max-w-4xl">
            A few words that describe me are passionate, hardworking, and
            dedicated. I am a software engineer with a strong background in
            Java, Python, and SQL. I have experience in developing web
            applications using HTML, CSS, and JavaScript. I am also familiar
            with version control systems like Git. I am excited to continue
            learning and growing as a software engineer.
          </p>

          <div className="grid gap-4 p-5 bg-gray-800 rounded-lg shadow-lg grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <a
              href="https://www.java.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md no-underline text-current"
            >
              <FaJava size={50} style={{ color: "#007396" }} />
              <span className="mt-2 text-sm font-semibold text-current">Java</span>
            </a>

            <a
              href="https://www.python.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md no-underline text-current"
            >
              <FaPython size={50} style={{ color: "#3776AB" }} />
              <span className="mt-2 text-sm font-semibold text-current">Python</span>
            </a>

            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md no-underline text-current"
            >
              <FaReact size={50} style={{ color: "#61DAFB" }} />
              <span className="mt-2 text-sm font-semibold text-current">React</span>
            </a>

            <a
              href="https://www.microsoft.com/en-us/sql-server"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md no-underline text-current"
            >
              <DiMsqlServer size={50} style={{ color: "#CC2927" }} />
              <span className="mt-2 text-sm font-semibold text-current">MS SQL Server</span>
            </a>

            <a
              href="https://kotlinlang.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md no-underline text-current"
            >
              <SiKotlin size={50} style={{ color: "#7F52FF" }} />
              <span className="mt-2 text-sm font-semibold text-current">Kotlin</span>
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md no-underline text-current"
            >
              <FaHtml5 size={50} style={{ color: "#E34F26" }} />
              <span className="mt-2 text-sm font-semibold text-current">HTML</span>
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md no-underline text-current"
            >
              <FaJs size={50} style={{ color: "#F7DF1E" }} />
              <span className="mt-2 text-sm font-semibold text-current">JavaScript</span>
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center w-32 h-32 p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md no-underline text-current"
            >
              <FaCss3Alt size={50} style={{ color: "#1572B6" }} />
              <span className="mt-2 text-sm font-semibold text-current">CSS</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
