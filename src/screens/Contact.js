import React, { Component } from 'react';
import { Row, Col, Icon, Input, message } from 'antd';
import "antd/dist/antd.css";
import './About.css';
import Slider from "react-slick";
import CommentContent from '../components/CommentContent'
import Map from '../components/Map'
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: "slick-dots"
};


class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      message: ''
    };
  }

  render() {
    const { subject, message, name } = this.state
    return (
      <div className='about-container'>
        <Row >
          <Col className='txt-about-me'>Get in Touch</Col>
        </Row>
        <Row style={{ padding: 20, borderStyle: 'solid', borderColor: '#ccc', borderWidth: 1 }}>
          <Col>
            <Map />
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
          <Col className='txt-about-me mar-top-header'>Contact Form</Col>
        </Row>
        <Row style={{ padding: 20, borderStyle: 'solid', borderColor: '#ccc', borderWidth: 1 }}>
          <Row style={{ display: 'flex', flexDirection: 'row' }}>
            <Col xl={10}>
              <Input placeholder="Full Name"
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
            </Col>
            <Col xl={10} offset={4}>
              <Input placeholder="Subject"
                onChange={e => this.setState({ subject: e.target.value })}
                value={this.state.subject}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Input.TextArea placeholder="Your Message" style={{ height: 100 }}
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            />
          </Row>
          <Col className='send-message-contact'>
            <a href={`mailto:${process.env.REACT_APP_MY_MAIL}?Subject=${subject}&body=Hi Hung! Im ${name} \n ${message}`} style={{ color: 'black' }}>Send Message</a>
            <Icon type="swap-right" className='icon-style' />
          </Col>
        </Row>
      </div>

    );
  }
}

export default About;
