import { FaGraduationCap, FaSuitcase } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
return(

  <section id='experience' >
  <h1 className='text-4xl text-center font-light mt-20 text-white font-bold mt-8'>MY EXPERIENCE</h1>
<VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="January 2024 - May 2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGraduationCap />}
    dateClassName="text-white font-bold size-2xl" 
  >
    
    <h3 className="vertical-timeline-element-title">Central Connecticut State University</h3>
    <h4 className="vertical-timeline-element-subtitle">Master's in Software Engineering</h4>
    <p className="vertical-timeline-element-subtitle"> GPA: 4.00</p>
    <p>
    ABET accredited.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="January 2019 - December 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaGraduationCap />}
    dateClassName="text-white font-bold size-2xl" 
  >
    
    <h3 className="vertical-timeline-element-title">Central Connecticut State University</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor's in Computer Science Honors</h4>
    <p className="vertical-timeline-element-subtitle"> GPA: 3.41</p>
    <p>
    ABET accredited.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May 2023 - July 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSuitcase />}
    dateClassName="text-white font-bold size-2xl" 
  >
    
    <h3 className="vertical-timeline-element-title">Infosys</h3>
    <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
    <p>
    Worked in a team to create a artificial intelligence system for a client.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="January 2023 - May 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSuitcase />}
    dateClassName="text-white font-bold size-2xl" 
  >
    
    <h3 className="vertical-timeline-element-title">Jobs For Humanity</h3>
    <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
    <p>
    Engineered a job mailing system for disadvantaged individuals. 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="June 2022 - July 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSuitcase />}
    dateClassName="text-white font-bold size-2xl" 
  >
    
    <h3 className="vertical-timeline-element-title">APS Technology</h3>
    <h4 className="vertical-timeline-element-subtitle">I.T. Intern</h4>
    <p>
    Worked on various tasks within the I.T. department. I learned how to troubleshoot computer issues and how to work with a team to solve problems.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="July 2021 - September 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSuitcase />}
    dateClassName="text-white font-bold size-2xl" 
  >
    
    <h3 className="vertical-timeline-element-title">Fosdick Fulfillment</h3>
    <h4 className="vertical-timeline-element-subtitle">Customer Service Representative</h4>
    <p>
    Provided customer service to customers who had questions about their orders. I learned how to use a computer system to track orders and how to handle irate customers.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="January 2020 - November 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSuitcase />}
    dateClassName="text-white font-bold size-2xl" 
  >

    <h3 className="vertical-timeline-element-title">Subway</h3>
    <h4 className="vertical-timeline-element-subtitle">Sandwich Artist</h4>
    <p>
      My first work experience. I learned how to make sandwiches and how to work with customers. I also learned how to work with a team and how to work under pressure.
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
</section>
);
};

export default Experience;
