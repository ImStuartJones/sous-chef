import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Deck from './Deck/Deck';
import ActiveTimers from './Timers/ActiveTimers';
import CreateTimer from './Timers/CreateTimer';
import Image from './Image/Image';
import Twitter from './Twitter/Twitter';
import Probe from './Probe/Probe';
import Toggles from './Toggles/Toggles';
import Producers from './Producers/Producers';

function Cook() {
  return (
    <Container fluid>
      <Row>
        <Col lg>
          <Deck />
        </Col>
        <Col lg>
          <ActiveTimers />
        </Col>
      </Row>
      <Row>
        <Col>
          <CreateTimer />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image />
        </Col>
      </Row>
      <Row>
        <Col>
          <Twitter />
        </Col>
      </Row>
      <Row>
        <Col>
          <Probe />
        </Col>
      </Row>
      <Row>
        <Col>
          <Toggles />
        </Col>
      </Row>
      <Row>
        <Col>
          <Producers />
        </Col>
      </Row>
    </Container>
  );
}

export default Cook;