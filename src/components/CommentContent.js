import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import "antd/dist/antd.css";
import './CommentContent.css';

class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Row className='row-quote'>
          <img src={require('../assets/quote.svg')} alt='open-quote' className='open-quote' />
          <Col className='feed-back'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </Col>
          <img src={require('../assets/quote.svg')} alt='close-quote' className='close-quote' />
        </Row>
        <Row style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 20 }}>
          <Col className='warp-avatar-user-comment'>
            <img src={require('../assets/man1.jpg')} alt='background-profile' className='avatar-user-comment' />
          </Col>
        </Row>
        <Col style={{ textAlign: 'center', fontSize: 20, fontWeight: 500, color: '#323232', marginTop: 15 }}>
          Maya Van
        </Col>
        <Col style={{ textAlign: 'center', fontSize: 15, fontWeight: 400, color: '#999' }}>
          Project manager
        </Col>
      </div>

    );
  }
}

export default About;
