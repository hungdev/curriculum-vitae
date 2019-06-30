import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import "antd/dist/antd.css";
import './MainProfile.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Row style={{ height: '100%' }}>
        <Col>
          <img src={require('../assets/bg.jpg')} alt='background-profile' className='background-profile' />
          <Row className='row-clip-path'>
            <Col className='left-clip-path' />
            <Col className='right-clip-path' />
          </Row>
        </Col>
        <Col className='warp-avatar'>
          <img src={require('../assets/profile.png')} alt='avatar' className='avatar-profile' />
        </Col>
        <Row style={{ paddingTop: 60, justifyContent: 'center', alignItems: 'center' }}>
          <Col className='profile-name'>
            Cee Vu
          </Col>
          <Col className='skill-name'>
            React, React Native, Nodejs Developer
          </Col>
          <Col className='row-social'>
            <Icon type="facebook" className='icon-style' onClick={() => window.open('https://fb.com/hungvu.net')} />
            <Icon type="github" className='icon-style' onClick={() => window.open('https://github.com/hungdev')} />
            <Icon type="skype" className='icon-style' onClick={() => window.open('skype:live:hungns126_2?chat')} />
            <Icon type="dribbble" className='icon-style' />
            <Icon type="twitter" className='icon-style' />
          </Col>
        </Row>
        <Row className='row-cv-profile'>
          <Col className='col-bottom-profile' onClick={() => window.open('https://drive.google.com/file/d/1arCAgdW9c9UE6OBdXwCWd-Ax3d2wDKPK/view?usp=sharing')}>
            <Col style={{ color: 'black', textAlign: 'center' }}>Download CV</Col>
            <Icon type="download" className='icon-style' />
          </Col>
          <Col className='contact-bottom-profile' onClick={() => this.props.onContact()}>
            <Col style={{ color: 'black', textAlign: 'center' }}>Contact Me</Col>
            <Icon type="swap-right" className='icon-style' />
          </Col>
        </Row>
      </Row>
    );
  }
}

export default App;
