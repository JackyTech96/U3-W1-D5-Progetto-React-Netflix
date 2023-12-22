import { Col } from "react-bootstrap";

const SingleFIlm = (props) => (
  <Col>
    <img className="w-100" src={props.Url} alt={props.Title}></img>
  </Col>
);
export default SingleFIlm;
