import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../images/ExampleCarouselImage.jpg';
import '../App.css';

function ProjectShowcase() {
  const style = {
    container: {
      position: 'relative',
      display: 'inline-block',
    },
    background: {
      backgroundColor: '#90EE90', // Replace with your desired color
      height: '10px', // Adjust the height as needed
      width: '50%',
      position: 'absolute',
      top: '0', // Positions the rectangle at the top of the container
      left: '0',
      zIndex: '0', // Ensure this is behind the text
    }
  };



  return (


    <section id="projects">

    <div className='  text-center  text-pretty '>
    <h1 style={style.container}>
      <div style={{color: 'white'}}>
      Projects
      </div>
      <div style={style.background}></div>
    </h1>
    </div>


    <div>
    <Carousel className='custom-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Rate My Professor CCSU</h3>
          <p>Write and view reviews for professors
            from CCSU. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    </section>


  );
}

export default ProjectShowcase;
