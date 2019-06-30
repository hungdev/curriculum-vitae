import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import "antd/dist/antd.css";
import './About.css';
import Slider from "react-slick";
import CommentContent from '../components/CommentContent'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: "slick-dots",
  autoplay: true
};


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='about-container'>
        <Row >
          <Col className='txt-about-me'>About Me</Col>
        </Row>
        <Row style={{ padding: 20, borderStyle: 'solid', borderColor: '#ccc', borderWidth: 1 }}>
          <Col>
            I am Hung Vu, I am reactjs, react native developer from Ha Noi, Viet Nam. I have rich experience in website, mobile coding and building and customization. I love to talk with you about my unique.
          </Col>
          <Row style={{ display: 'flex', flexDirection: 'row' }}>
            <Row style={{ display: 'flex', flexDirection: 'row', marginTop: 20, flex: 1 }}>
              <Col style={{ fontWeight: 500, textTransform: 'uppercase' }}>AGE.....</Col>
              <Col style={{ color: 'grey' }}>25</Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', marginTop: 20, flex: 1 }}>
              <Col style={{ fontWeight: 500, textTransform: 'uppercase' }}> RESIDENCE .....</Col>
              <Col style={{ color: 'grey' }}>Việt Nam</Col>
            </Row>
          </Row>
          <Row style={{ display: 'flex', flexDirection: 'row' }}>
            <Row style={{ display: 'flex', flexDirection: 'row', marginTop: 5, flex: 1 }}>
              <Col style={{ fontWeight: 500, textTransform: 'uppercase' }}>FREELANCE.....</Col>
              <Col style={{ color: 'grey' }}>Available</Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', marginTop: 5, flex: 1 }}>
              <Col style={{ fontWeight: 500, textTransform: 'uppercase' }}> ADDRESS .....</Col>
              <Col style={{ color: 'grey' }}>Lê Văn Lương</Col>
            </Row>
          </Row>
        </Row>
        <Row >
          <Col className='txt-about-me mar-top-header'>Testimonials</Col>
        </Row>
        <Slider {...settings}>
          <CommentContent />
          <CommentContent />
          <CommentContent />
          <CommentContent />
        </Slider>
      </div>

    );
  }
}

export default About;
