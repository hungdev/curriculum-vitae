import React, { Component } from 'react';
import '../App.scss';
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import './Resume.css';
import { IoIosBriefcase, IoIosSchool, IoIosCode, IoMdGlobe } from "react-icons/io";
import elements from './data/timeline'
import Timeline from '../components/Timeline'
import Skill from '../components/Skill'

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='resume-container'>
        <Row >
          <Col className='txt-resume'>Resume</Col>
        </Row>
        <Row className='detail-cv'>
          <Col style={{ flex: 1 }}>
            <Row className='header-detail-cv'>
              <Col><IoIosBriefcase size={25} color='#78cc6d' style={{ marginRight: 10 }} /></Col>
              <Col>EXPERIENCE</Col>
            </Row>
            <Row style={{ paddingRight: 10 }}>
              <Timeline elements={elements} />
            </Row>
          </Col>
          <Col style={{ flex: 1 }}>
            <Row className='header-detail-cv'>
              <Col><IoIosSchool size={25} color='#78cc6d' style={{ marginRight: 10, marginLeft: 10 }} /></Col>
              <Col>EDUCATION</Col>
            </Row>
            <Row style={{ paddingRight: 10 }}>
              <Timeline elements={elements} />
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: 40 }} >
          <Col className='txt-resume'>My Skills</Col>
        </Row>
        <Row className='detail-cv'>
          <Col style={{ flex: 1 }}>
            <Row className='header-detail-cv'>
              <Col><IoIosCode size={25} color='#78cc6d' style={{ marginRight: 10, marginLeft: 10 }} /></Col>
              <Col>CODING</Col>
            </Row>
            <Row style={{ paddingRight: 40 }}>
              <Skill percentage={'90%'} label='React Native' />
              <Skill percentage={'80%'} label='React JS' style={{ marginTop: 20 }} />
              <Skill percentage={'50%'} label='Node JS' style={{ marginTop: 20 }} />
              <Skill percentage={'60%'} label='Html / Css' style={{ marginTop: 20 }} />
              <Skill percentage={'60%'} label='CI / CD' style={{ marginTop: 20 }} />
            </Row>
          </Col>
          <Col style={{ flex: 1 }}>
            <Row className='header-detail-cv'>
              <Col><IoMdGlobe size={25} color='#78cc6d' style={{ marginRight: 10, marginLeft: 10 }} /></Col>
              <Col>PERSONAL</Col>
            </Row>
            <Row style={{ paddingRight: 40 }}>
              <Skill percentage={'90%'} label='Communication' />
              <Skill percentage={'80%'} label='Organization' style={{ marginTop: 20 }} />
              <Skill percentage={'80%'} label='Team Player' style={{ marginTop: 20 }} />
              <Skill percentage={'70%'} label='Creativity' style={{ marginTop: 20 }} />
              <Skill percentage={'60%'} label='Social' style={{ marginTop: 20 }} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Resume;

