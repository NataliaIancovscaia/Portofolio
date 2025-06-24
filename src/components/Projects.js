import { Col, Container, Row, Tab } from "react-bootstrap"


export const Projects = () => {
    const projects=[
        {title:"Bisness",
         discription:"Design" ,
         imgUrl:ProImg1,
        },
        {title:"Bisness",
         discription:"Design" ,
         imgUrl:ProImg1,
        },
        {title:"Bisness",
         discription:"Design" ,
         imgUrl:ProImg1,
        },
    ]
  return (
  <section className="project" id="project">
    <Container>
        <Row>
            <Col>
            <h2>Projects</h2>
            <p>Projjjjjjjjjjjjjjjedh</p>

             <Tab.Container id="projects-tabs" default activeKey="first">
                 <Nav variant="pills" defaultActiveKey="/home">
                       <Nav.Item>
                          <Nav.Link eventKey="first">Tab1</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                           <Nav.Link eventKey="second">Tab2</Nav.Link>
                       </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab3</Nav.Link>
                       </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane  eventKey="first">
                        <Row>
                            {
                                projects.map((projects,index)=>{
                                    return (
                                        <p>{Projects.title}</p>
                                )

                                })
                            }

                        </Row>

                    </Tab.Pane >
                    <Tab.Pane  eventKey="first">
                        <Row>
                            {
                                projects.map((projects,index)=>{
                                    return (
                                        <p>{Projects.title}</p>
                                )

                                })
                            }

                        </Row>

                    </Tab.Pane >
                    <Tab.Pane  eventKey="second">
                        Lohgjkkjh

                    </Tab.Pane >

                    <Tab.Pane  eventKey="third">
                       
                           Lorennhivhbk                    

                    </Tab.Pane >

                  </Tab.Content>
             </Tab.Container>
            </Col>
        </Row>
    </Container>

  </section>
  )
}
