import { Col, Container, Row, Tab } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";
import  colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { Nav} from "react-bootstrap";

export const Projects = () => {
    const projectshtml=[
       
        {title:"HTML/CSS",
         discription:"Portofolio Spa-Salon" ,
         imgUrl:projImg2,
        },
        {title:"HTML/CSS",
         discription:"Nyhetsbyran" ,
         imgUrl:projImg3,
        },
    ]
    

    const projectsjs=[
        {title:"JS",
         discription:"Film site" ,
         imgUrl:projImg1,
        },
        {title:"JS",
         discription:"Portofolio Spa-Salon" ,
         imgUrl:projImg2,
        },
      
    ]
    const projectsnode=[
        {title:"NodeJs",
         discription:"Film site" ,
         imgUrl:projImg1,
        },
        {title:"NodeJs",
         discription:"Portofolio Spa-Salon" ,
         imgUrl:projImg2,
        },
        
    ]
    const projectsreact=[
        {title:"React",
         discription:"Film site" ,
         imgUrl:projImg1,
        },
        {title:"React",
         discription:"Portofolio Spa-Salon" ,
         imgUrl:projImg2,
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

                    <Tab.Pane  eventKey="fourth">
                       
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

                  </Tab.Content>
             </Tab.Container>
            </Col>
        </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>

  </section>
  )
}
