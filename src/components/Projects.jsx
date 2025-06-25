import { Col, Container, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import  colorSharp2 from "../assets/img/color-sharp2.png";
import html1 from "../assets/img/news.png";
import html2 from "../assets/img/spa.png";
import react1 from "../assets/img/react1.png";
import react2 from "../assets/img/react2.png";
import java1 from "../assets/img/spel.png";
import java2 from "../assets/img/butik.png";
import node1 from "../assets/img/node.png";
import node2 from "../assets/img/virus.png";


import { Nav} from "react-bootstrap";

export const Projects = () => {
    const projectshtml=[
       
        {title:"HTML/CSS",
         description:" Portofolio to Spa-Salon" ,
         imgUrl:html2,
         link: "https://github.com/NataliaIancovscaia/HTML-Portofolio-SpaSalon" ,
        },
        {title:"HTML/CSS",
         description:"Nyhetsbyran . Web page for news " ,
         imgUrl:html1,
         link:"https://github.com/NataliaIancovscaia/HTML-project-Nyhetsbyran"
        },
    ]
    

    const projectsjs=[
        {title:"JS",
         description:"Candy boutique. Together with 2 classmates,  created a simple online store where you can add products to the cart and then 'proceed to checkout' to place an order." ,
         imgUrl:java1,
         link:"https://github.com/NataliaIancovscaia/Javascript-Onlineshop-Godisbutik",
        },
        {title:"JS",
         description:"Quiz game. Create a simple 'Quiz game' where you can to guess the name of a classmate." ,
         imgUrl:java2,
         link:"https://github.com/NataliaIancovscaia/Javascript-Quiz-game--Who-is-this-",
        },
      
    ]
    const projectsnode=[
        {title:"NodeJs",
         description:"Create a REST API with authentication that will serve as the backend for a future photo app." ,
         imgUrl:node1,
         link:"https://github.com/NataliaIancovscaia/Backend-f-r-en-framtida-foto-app"
        },
        {title:"NodeJs",
         description:"Together with 2 classmates create a simple 2-player real-time game where the goal is to click on a virus as quickly as possible to eradicate it, and points are awarded to the player who has the fastest reaction time." ,
         imgUrl:node2,
         link:"https://github.com/NataliaIancovscaia/Node-.js-2-player-realtids-spel",
        },
        
    ]
    const projectsreact=[
        {title:"React",
         description:"Create an encyclopedia for Star Wars - a web application where you can search, browse, and navigate between characters and movies from the Star Wars universe." ,
         imgUrl:react1,
         link:"https://github.com/NataliaIancovscaia/React-Swapi-",
        },
        {title:"React",
         description:"Create an interface to TMDB where you can:watch new releases, popular, and top movies (Sweden/USA),filter by genres,open a movie - see info and actors,open an actor - see their movies" ,
         imgUrl:react2,
         link:"https://github.com/NataliaIancovscaia/React-Movie-Gallery"
        },
        
    ]

  return (
  <section className="project" id="projects">
    <Container>
        <Row>
            <Col>
            <h2>Projects</h2>
            <p>   Here is a selection of projects that demonstrate my skills
                  in software development, problem-solving, and user-focused
                  design. Each project reflects my passion for building 
                  functional, efficient, and engaging digital solutions using 
                  modern technologies.</p>

             <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                       <Nav.Item>
                          <Nav.Link eventKey="first">HTML/CSS</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                           <Nav.Link eventKey="second">Javascript</Nav.Link>
                       </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">NodeJS</Nav.Link>
                       </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="fourth">React</Nav.Link>
                       </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane  eventKey="first">
                        <Row>
                            {
                                projectshtml.map((project,index)=>{
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}/>
                                )

                                })
                            }

                        </Row>

                    </Tab.Pane >
                    
                    <Tab.Pane  eventKey="second">
                        <Row>
                            {
                                projectsjs.map((project,index)=>{
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}/>
                                )

                                })
                            }

                        </Row>

                    </Tab.Pane >


                    <Tab.Pane  eventKey="third">
                       
                          <Row>
                            {
                                projectsnode.map((project,index)=>{
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}/>
                                )

                                })
                            }

                        </Row>                 

                    </Tab.Pane >

                    
                    <Tab.Pane  eventKey="fourth">
                       
                          <Row>
                            {
                                projectsreact.map((project,index)=>{
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}/>
                                )

                                })
                            }

                        </Row>                 

                    </Tab.Pane >

                  </Tab.Content>
             </Tab.Container>
            </Col>
        </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>

  </section>
  )
}
