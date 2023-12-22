import { Col } from "react-bootstrap";

const SingleFIlm = (props) => (
  <Col className="mb-3 mb-xl-0">
    <img className="w-100 h-100 pointer-cursor " src={props.Url} alt={props.Title}></img>
  </Col>
);
export default SingleFIlm;
