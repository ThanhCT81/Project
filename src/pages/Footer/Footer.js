import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
import T from "./T.png";
import { GrHome } from "react-icons/gr";
import { GoMail } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
export default function Footer() {
  return (
    <footer id="footer">
      <div>
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={3}>
              <img src={T} style={{ width: "100px" }} />
              <p></p>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <h4>Contact Us</h4>
              <ul>
                <li className="address">
                  <GrHome />
                  <a>Chính sách vận chuyển</a>
                </li>
                <li className="email">
                  <GoMail />
                  <a>Chính sách bảo mật</a>
                </li>
                <li className="phone">
                  <BsTelephone />
                  <a>Quy định &amp; Chính sách</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <h4>Information</h4>
              <ul>
                <li>
                  <a>Liên hệ</a>
                </li>
                <li>
                  <a>Giới thiệu</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <h4>Follow US</h4>
              <div class="social_icon">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div></div>
    </footer>
  );
}
