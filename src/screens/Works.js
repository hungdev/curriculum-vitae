import React, { Component } from 'react';
import { Row, Col, Card, Icon, Avatar } from 'antd';
import "antd/dist/antd.css";
import './Works.css';
import StackGrid from "react-stack-grid";
import projects from './data/projects'

const { Meta } = Card;

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderPrj(e, v) {
    return (
      <Row key={v + 1} className='card-work' style={{ display: 'flex', marginBottom: 20, ...e.style }}>
        <Col >
          <img
            alt="example"
            src={e.image}
            style={{ height: 200, width: 'auto', marginRight: 20 }}
          />
        </Col>
        <Col>
          <Col className='name-prj' onClick={() => window.open(e.src)}>{e.name}</Col>
          <Col>{e.detail}</Col>
          <Col onClick={() => window.open(e.src)} className='src-code'>{e.src}</Col>
        </Col>

      </Row>
    )
  }

  render() {
    return (
      <div className='about-container'>
        <Row >
          <Col className='txt-about-me'>Community Projects</Col>
        </Row>
        <Row style={{ padding: 20, borderStyle: 'solid', borderColor: '#ccc', borderWidth: 1 }}>
          {projects.map((e, v) => (this.renderPrj(e, v)))}
        </Row>

      </div>

    );
  }
}

export default About;
