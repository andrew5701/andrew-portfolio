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
    <section id="aboutme">
      <div className="mb-5">
        <div className="mt-5 text-center text-pretty">
          <h1>
            <div className="text-white">About Me</div>
          </h1>
        </div>

        <div className=" items-center justify-center w-full  place-content-evenly md:items-start md:space-x-10">
          <p className="mb-5 text-left ml-5 text-white justify-cente px-20">
            A few words that describe me are passionate, hardworking, and
            dedicated. I am a software engineer with a strong background in
            Java, Python, and SQL. I have experience in developing web
            applications using HTML, CSS, and JavaScript. I am also familiar
            with version control systems like Git. I am excited to continue learning and growing as a
            software engineer.
          </p>

          <div className="justify-center">
            <div className="grid gap-4 p-5 bg-gray-800 rounded-lg shadow-lg grid-rows-3 grid-cols-3 justify-center">
              <div className="flex flex-col items-center justify-center p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#F44336"
                    d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
                  ></path>
                  <path
                    fill="#F44336"
                    d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
                  ></path>
                  <g>
                    <path
                      fill="#1565C0"
                      d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                    ></path>
                    <path
                      fill="#1565C0"
                      d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                    ></path>
                  </g>
                </svg>
                <span className="mt-2 text-sm font-semibold">Java</span>
              </div>

              <div className="flex flex-col items-center justify-center p-1 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#0277BD"
                    d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                  ></path>
                  <path
                    fill="#FFC107"
                    d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                  ></path>
                </svg>
                <span className="mt-2 text-sm font-semibold">Python</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#283593"
                    fill-rule="evenodd"
                    d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#5c6bc0"
                    fill-rule="evenodd"
                    d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#3949ab"
                    fill-rule="evenodd"
                    d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="mt-2 text-sm font-semibold">C</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                </svg>
                <span className="mt-2 text-sm font-semibold">Git</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md">
                <DiMsqlServer size={50} style={{ color: "#28A745" }} />
                <span className="mt-2 text-sm font-semibold">
                  MS SQL Server
                </span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md">
                <SiKotlin size={50} style={{ color: "#7F52FF" }} />
                <span className="mt-2 text-sm font-semibold">Kotlin</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md">
                <FaHtml5 size={50} style={{ color: "#E34F26" }} />
                <span className="mt-2 text-sm font-semibold">HTML</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md">
                <FaJs size={50} style={{ color: "#F7DF1E" }} />
                <span className="mt-2 text-sm font-semibold">JavaScript</span>
              </div>

              <div className="flex flex-col items-center justify-center p-3 transition-all rounded bg-slate-200 hover:bg-slate-300 hover:shadow-md">
                <FaCss3Alt size={50} style={{ color: "#1572B6" }} />
                <span className="mt-2 text-sm font-semibold">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default AboutMe;
