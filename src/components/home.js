import React from "react";
import photo from '../images/photo.jpg';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
  <>
  <section id='home'>
  <div className="lg:max-w-lg lg:w-full pt-20 md:w-1/2 w-5/6 items-center justify-center flex m-auto">
          <img
            className="object-cover object-center rounded-full shadow border-double border-4 border-white mt-20 "
            alt="Andrew Krasuski Professional Photo"
            src={photo}
            width={'220px'}
            height={'220px'}
          />
        </div>
      <div className="items-center">
        <div className="items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center">

        
            <div className='pb-10 pt-2' style={{color: '#7FFFD4', fontSize: '3rem'}}>Welcome!</div> I'm <strong>Andrew Krasuski</strong>. <strong>Aspiring Software Engineer</strong>
          
          </h1>



        <div className='flex pb-4 justify-center gap-3 justify-center items-center' style={{textDecoration: 'none'}}>


        <a style={{textDecoration: 'none'}} class="group bg-blue-400 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-blue-900 active:scale-105 transition" href="#contact" title="Contact me">
            Contact me here
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-transform duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
            </svg>
        </a>

        <a style={{textDecoration: 'none'}} class="group text-white bg-blue-400 hover:bg-blue-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack" href="./src/Andrew_Krasuski_Resume.pdf" download="Andrew_Krasuski_Resume.pdf" title="Download Resume">
            Download Resume
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="opacity-60 group-hover:opacity-100 group-hover:translate-y-1 transition-transform duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </a>


            <a class="mr-3 p-4 hover:bg-blue-900 bg-blue-600 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack " href="https://www.linkedin.com/in/andrew-krasuski/" target="_blank">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                </path>
              </svg>
            </a>
          </div>
     
          
        </div>
        
      </div>
      </section>
      </>
  );
}