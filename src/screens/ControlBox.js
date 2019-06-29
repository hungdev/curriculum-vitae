import React, { Component } from 'react';
import '../App.scss';
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import './ControlBox.css'
import { IoMdPerson, IoMdListBox, IoIosBrush, IoIosAt, IoMdBeer } from "react-icons/io";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  onChangeView(view) {
    const { onChangeView } = this.props;
    if (onChangeView) onChangeView(view);
  }

  render() {
    return (
      <Row className='control-box-container'>
        <Col className='op-control' onClick={() => this.onChangeView('about')}>
          <IoMdPerson size={22} color='#78cc6d' />
          <Col style={{ fontSize: 12 }}>ABOUT</Col>
        </Col>
        <Col className='op-control' onClick={() => this.onChangeView('resume')}>
          <IoMdListBox size={22} color='#78cc6d' />
          <Col style={{ fontSize: 12 }}>RESUME</Col>
        </Col>
        <Col className='op-control' onClick={() => this.onChangeView('work')}>
          <IoIosBrush size={22} color='#78cc6d' />
          <Col style={{ fontSize: 12 }}>WORKS</Col>
        </Col>
        <Col className='op-control' onClick={() => this.onChangeView('blog')}>
          <IoMdBeer size={22} color='#78cc6d' />
          <Col style={{ fontSize: 12 }}>BLOG</Col>
        </Col>
        <Col className='op-control' onClick={() => this.onChangeView('contact')}>
          <IoIosAt size={22} color='#78cc6d' />
          <Col style={{ fontSize: 12 }}>CONTACT</Col>
        </Col>
      </Row>
    );
  }
}

export default App;
