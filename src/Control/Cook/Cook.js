// Import React packages.
import { Component } from 'react';

// Include React-Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Include app componnets
import Deck from './Deck/Deck';
import TimerList from './Timers/TimerList';
import CreateTimer from './Timers/CreateTimer';
import Image from './Image/Image';
import Twitter from './Twitter/Twitter';
import Probe from './Probe/Probe';
import Toggles from './Toggles/Toggles';
import Producers from './Producers/Producers';

class Cook extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col lg>
            <Deck socket={this.props.socket} />
          </Col>
          <Col lg>
            <TimerList socket={this.props.socket} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateTimer socket={this.props.socket} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Image socket={this.props.socket} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Twitter socket={this.props.socket} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Probe socket={this.props.socket} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Toggles socket={this.props.socket} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Producers socket={this.props.socket} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cook;
