import React, { Component } from 'react';
import { Row, Col, Timeline } from 'antd';
import "antd/dist/antd.css";
import './Timeline.css';

class About extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { elements } = this.props;
    return (
      <div>
        <Timeline>
          {
            elements && elements.map((e, i) => {
              return (
                <Timeline.Item key={i}>
                  <div className='time-timeline'>{e.time}</div>
                  <div className='position-timeline'>{e.position}</div>
                  <div className='place-timeline'>{e.place}</div>
                  <div className='detail-timeline'>{e.detail}</div>
                </Timeline.Item>
              )
            })
          }
        </Timeline>
      </div>

    );
  }
}

export default About;
