import CandleHero from "../assets/img/candle-hero.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Slider() {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col>
            <div className="hero-container">
              <div className="hero-text-wrapper">
                <div>
                  <h1 className="hero-text">FEEL GOOD FOR THE HOLIDAYS!</h1>
                  <a className="hero-btn">Shop Now</a>
                </div>
              </div>
              <div className="hero-image-wrapper">
                <img src={CandleHero} className="hero-img"></img>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Slider;