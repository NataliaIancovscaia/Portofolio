import { Col } from "react-bootstrap"
export const ProjectCard = ({title,description,imgUrl,link}) => {
  return (
    <Col  sm={10} md={6}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >

        <div className="proj-imgbx">
            <img src={imgUrl}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>

            </div>

        </div>
      </a>
    </Col>
  )
}
