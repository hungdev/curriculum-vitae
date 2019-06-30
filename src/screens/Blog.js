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

  render() {
    return (
      <div className='about-container'>
        <Row >
          <Col className='txt-about-me'>Blog</Col>
        </Row>
        <Row style={{ padding: 20, borderStyle: 'solid', borderColor: '#ccc', borderWidth: 1 }}>
          Not public
        </Row>

      </div>

    );
  }
}

export default About;
