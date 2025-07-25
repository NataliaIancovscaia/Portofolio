import { Row,Container, Col } from "react-bootstrap"
import headerImage from "../assets/img/images.jpeg"
import { useState,useEffect } from "react"

export const Banner = () => {
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const  toRotate=["Front End Developer","Web Design","JavaScript Developer","Creative Problem Solver"];
    const [text,setText]=useState("");
    const [delta,setDelta]=useState(300-Math.random()*100)
    const period=2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta);

        return  ()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let  updatedText=isDeleting ?fullText.substring(0,text.length-1)
                                    :fullText.substring(0,text.length+1)
        setText(updatedText) ;

        if (isDeleting) {
            setDelta(prevDelta=>prevDelta/2)
        }
        if (!isDeleting&& updatedText===fullText) {
            setIsDeleting(true);
            setDelta(period)

        } else if (isDeleting&& updatedText===""){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);

        }

    }

return (
 <section className='banner' id='home'>
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
             <span className="tagline">
                Welcome to my Portofolio
             </span>
             <h1>
                Hi  I'm Natalia <br/> 
                 <span className="wrap">
                     {text}
                 </span>
             </h1>
             <p> who enjoys building clean, responsive, 
                 and user-friendly websites. I work with HTML, CSS, JavaScript,
                 and React to bring designs to life and create smooth user 
                 experiences. This portfolio highlights some of my recent work 
                 and the skills I'm proud to bring to each project.
            </p>
           

               
            </Col>

            <Col xs={12} md={6} xl={5}>
              <img src={headerImage} alt="Header Image"/>
            </Col>

        </Row>
    </Container>

</section>
  )
}
