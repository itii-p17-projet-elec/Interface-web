import React from "react";
import {
  Container,
  Col,
  Row
} from "reactstrap";
//import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends React.Component {
  render() {
    return (
       <footer>
        <Container>
            <Row>
                <Col align='center'>
                <a href="https://github.com/itii-p17-projet-elec"><i className="fa fa-github fa-lg mt-4"></i><br />github</a>
                </Col>
            </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
