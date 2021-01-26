import {
  Container,
  Jumbotron,
  Popover,
  OverlayTrigger,
  Button,
} from "react-bootstrap";
import "./events.css";

const ongoing_1 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">HackerRank</Popover.Title>
    <Popover.Content>
      This is <strong>coding</strong> contest link.
    </Popover.Content>
  </Popover>
);
const OngoingLink_1 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={ongoing_1}>
    <Button variant="success">Coding Competition</Button>
  </OverlayTrigger>
);
const ongoing_2 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Tech Quiz Competition</Popover.Title>
    <Popover.Content>
      This is <strong>Tech Quiz</strong> contest link.
    </Popover.Content>
  </Popover>
);
const OngoingLink_2 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={ongoing_2}>
    <Button variant="success">Tech Quiz Competition</Button>
  </OverlayTrigger>
);
const ongoing_3 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Web Design</Popover.Title>
    <Popover.Content>
      This is <strong>Web Design</strong> contest link.
    </Popover.Content>
  </Popover>
);
const OngoingLink_3 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={ongoing_3}>
    <Button variant="success">Web Design Competition</Button>
  </OverlayTrigger>
);
const ongoing_4 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Debugging</Popover.Title>
    <Popover.Content>
      This is <strong>Debugging</strong> contest link.
    </Popover.Content>
  </Popover>
);
const OngoingLink_4 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={ongoing_4}>
    <Button variant="success">Debugging</Button>
  </OverlayTrigger>
);
const upcoming_1 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Tencent Games</Popover.Title>
    <Popover.Content>
      This is <strong>Tencent Games</strong> contest link.
    </Popover.Content>
  </Popover>
);
const UpcomingLink_1 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={upcoming_1}>
    <Button variant="success">Tencent Games</Button>
  </OverlayTrigger>
);
const upcoming_2 = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">HackerRank</Popover.Title>
    <Popover.Content>
      This is <strong>coding</strong> contest link.
    </Popover.Content>
  </Popover>
);
const UpcomingLink_2 = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={upcoming_2}>
    <Button variant="success">Coding Competition</Button>
  </OverlayTrigger>
);
const events = () => {
  return (
    <Container fluid>
      {"  "}
      <Jumbotron fluid>
        <h2>Ongoing Events</h2>
        <br></br>
        <ul class="no-bullets">
          <li class="center">
            <OngoingLink_1 />
          </li>
          <li class="center">
            <OngoingLink_2 />
          </li>
          <li class="center">
            <OngoingLink_3 />
          </li>
          <li class="center">
            <OngoingLink_4 />
          </li>
        </ul>
      </Jumbotron>
      <Jumbotron fluid>
        <h2>Upcoming Events</h2>
        <br></br>
        <ul class="no-bullets">
          <li class="center">
            <UpcomingLink_1 />
          </li>
          <li class="center">
            <UpcomingLink_2 />
          </li>
        </ul>
      </Jumbotron>
    </Container>
  );
};
export default events;
