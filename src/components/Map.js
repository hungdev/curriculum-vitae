import React, { Component } from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import LocationDetail from './LocationDetail';
//21.002621, 105.801189
const officePosition = {
  lat: 21.002621,
  lng: 105.801189
};

/*
 * Config map
 */
const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={officePosition}
  >
    <Marker
      position={officePosition}
      onMouseOver={props.onMouseOverHandle}
      onMouseOut={props.onMouseOutHandle}
      onClick={props.onClickHandle}
    >
      {(props.isMouseOver || props.isShowInfo)
        && <InfoWindow onCloseClick={props.onCloseClick}>
          <LocationDetail />
        </InfoWindow>}
    </Marker>
  </GoogleMap>));


class MapAddress extends Component {
  constructor(props) {
    super(props);
    this.state = { isMouseOver: false, isShowInfo: false };
    this.onSetMouseOver = this.onSetMouseOver.bind(this);
    this.onSetMouseOut = this.onSetMouseOut.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
  }

  onSetMouseOver() {
    this.setState({ isMouseOver: true });
  }

  onSetMouseOut() {
    this.setState({ isMouseOver: false });
  }

  onClickHandle() {
    const { isShowInfo } = this.state;
    if (isShowInfo) {
      return this.setState({ isShowInfo: !isShowInfo, isMouseOver: false });
    }
    this.setState({ isShowInfo: !isShowInfo });
  }

  onCloseClick() {
    const { isShowInfo } = this.state;
    this.setState({ isShowInfo: !isShowInfo });
  }

  render() {
    const { isMouseOver, isShowInfo } = this.state;
    return (
      <div>
        <MapWithAMarker
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&v=3&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '200px' }} />}
          mapElement={
            <div style={{
              height: '100%',
              borderTopRightRadius: '10px',
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '10px',
            }} />}
          onMouseOverHandle={this.onSetMouseOver}
          onMouseOutHandle={this.onSetMouseOut}
          onClickHandle={this.onClickHandle}
          isMouseOver={isMouseOver}
          isShowInfo={isShowInfo}
          onCloseClick={this.onCloseClick}
        />
      </div>
    );
  }
}

export default MapAddress;
