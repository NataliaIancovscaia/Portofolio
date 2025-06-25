import { Container, Row,Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter from "../assets/img/Skills.jpg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <section className='skill' id="skills"> 
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>
                Skills
              </h2>
              <p>
                I am a motivated and detail-oriented professional with strong problem-solving abilities and a passion for continuous learning. 
              </p>
              <Carousel responsive={responsive}
                        infinite={true}
                        className='skill-slider'>

                  <div className='item'>
                    <img src={meter} alt="Image" />
                    <h5>HTML,CSS</h5>
                  </div>    

                  <div className='item'>
                    <img src={meter} alt="Image" />
                    <h5>Frameworks : Bootstrap, ReactJS</h5>
                  </div>  

                  <div className='item'>
                    <img src={meter} alt="Image" />
                    <h5>Responsive Design</h5>
                  </div>  

                  <div className='item'>
                    <img src={meter} alt="Image" />
                    <h5>Testning,  UI design</h5>
                  </div>  
               </Carousel>


            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp}/>
      


    </section>
  )
}
