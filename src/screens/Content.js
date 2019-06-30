import React, { Component } from 'react';
import '../App.scss';
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import MainProfile from './MainProfile'
import About from './About'
import Contact from './Contact'
import Resume from './Resume'
import Works from './Works'
import Blog from './Blog'
import ControlBox from './ControlBox'
import './Content.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isView: 'about'
    };
  }

  switchView() {
    const { isView } = this.state
    switch (isView) {
      case 'about':
        return <About />
      case 'resume':
        return <Resume />
      case 'work':
        return <Works />
      case 'blog':
        return <Blog />
      case 'contact':
        return <Contact />

      default:
        return <About />
    }
  }

  render() {
    return (
      <Row type='flex' >
        <Col className='control-box'>
          <ControlBox onChangeView={(isView) => this.setState({ isView })} />
        </Col>
        <Col style={styles.profile} className='card'>
          <MainProfile onContact={() => this.setState({ isView: 'contact' })} />
        </Col>
        <Col style={styles.about}>
          {this.switchView()}
        </Col>
      </Row>
    );
  }
}

export default App;

const styles = {
  profile: {
    height: '600px', width: 500, backgroundColor: 'white',
    borderRadius: 5, borderWidth: 1,
    // borderStyle: 'solid',
    overflow: 'hidden', flexWrap: 'wrap',
  },
  about: {
    height: '600px', width: 550, paddingTop: 20, paddingBottom: 20,
    display: 'flex'
  }
}