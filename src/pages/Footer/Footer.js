import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";
export default function Footer() {
  return (
    <footer id="footer">
      <div>
        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={3}>
              <h4>TIỆM HOA LA VIE EST BELLE</h4>{" "}
              <p>
                Địa chỉ: 91/1 Nguyễn Hữu Cảnh, Phường 22, Quận Bình Thạnh, TPHCM
                Hotline: 0919 89 79 69
              </p>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <h4>CHÍNH SÁCH</h4>
              <ul>
                <li>
                  <a>Chính sách vận chuyển</a>
                </li>
                <li>
                  <a>Chính sách bảo mật</a>
                </li>
                <li>
                  <a>Quy định &amp; Chính sách</a>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={3}>
              <h4>HỖ TRỢ</h4>
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
              <h4>FACEBOOK</h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div></div>
    </footer>
  );
}
