import { Container } from "react-bootstrap";
import NetflixActionBar from "./NetflixActionBar";
import NetflixRow from "./NetflixRow";
import NetflixFooter from "./NetflixFooter";

const NetflixContainer = () => (
  <Container fluid className="px-4" style={{ backgroundColor: "#221f1f" }}>
    <NetflixActionBar />
    <NetflixRow />
    <NetflixFooter />
  </Container>
);

export default NetflixContainer;
