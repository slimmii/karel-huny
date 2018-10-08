import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, StreetViewPanorama } from "react-google-maps"

let colors = [
    '#ff3300',
    '#ff3800',
    '#ff4500',
    '#ff4700',
    '#ff5200',
    '#ff5300',
    '#ff5d00',
    '#ff5d00',
    '#ff6600',
    '#ff6500',
    '#ff6f00',
    '#ff6d00',
    '#ff7600',
    '#ff7300',
    '#ff7c00',
    '#ff7900',
    '#ff8200',
    '#ff7e00',
    '#ff8700',
    '#ff8300',
    '#ff8d0b',
    '#ff8912',
    '#ff921d',
    '#ff8e21',
    '#ff9829',
    '#ff932c',
    '#ff9d33',
    '#ff9836',
    '#ffa23c',
    '#ff9d3f',
    '#ffa645',
    '#ffa148',
    '#ffaa4d',
    '#ffa54f',
    '#ffae54',
    '#ffa957',
    '#ffb25b',
    '#ffad5e',
    '#ffb662',
    '#ffb165',
    '#ffb969',
    '#ffb46b',
    '#ffbd6f',
    '#ffb872',
    '#ffc076',
    '#ffbb78',
    '#ffc37c',
    '#ffbe7e',
    '#ffc682',
    '#ffc184',
    '#ffc987',
    '#ffc489',
    '#ffcb8d',
    '#ffc78f',
    '#ffce92',
    '#ffc994',
    '#ffd097',
    '#ffcc99',
    '#ffd39c',
    '#ffce9f',
    '#ffd5a1',
    '#ffd1a3',
    '#ffd7a6',
    '#ffd3a8',
    '#ffd9ab',
    '#ffd5ad',
    '#ffdbaf',
    '#ffd7b1',
    '#ffddb4',
    '#ffd9b6',
    '#ffdfb8',
    '#ffdbba',
    '#ffe1bc',
    '#ffddbe',
    '#ffe2c0',
    '#ffdfc2',
    '#ffe4c4',
    '#ffe1c6',
    '#ffe5c8',
    '#ffe3ca',
    '#ffe7cc',
    '#ffe4ce',
    '#ffe8d0',
    '#ffe6d2',
    '#ffead3',
    '#ffe8d5',
    '#ffebd7',
    '#ffe9d9',
    '#ffedda',
    '#ffebdc',
    '#ffeede',
    '#ffece0',
    '#ffefe1',
    '#ffeee3',
    '#fff0e4',
    '#ffefe6',
    '#fff1e7',
    '#fff0e9',
    '#fff3ea',
    '#fff2ec',
    '#fff4ed',
    '#fff3ef',
    '#fff5f0',
    '#fff4f2',
    '#fff6f3',
    '#fff5f5',
    '#fff7f5',
    '#fff6f8',
    '#fff8f8',
    '#fff8fb',
    '#fff9fb',
    '#fff9fd',
    '#fff9fd',
    '#fef9ff',
    '#fefaff',
    '#fcf7ff',
    '#fcf8ff',
    '#f9f6ff',
    '#faf7ff',
    '#f7f5ff',
    '#f7f5ff',
    '#f5f3ff',
    '#f5f4ff',
    '#f3f2ff',
    '#f3f3ff',
    '#f0f1ff',
    '#f1f1ff',
    '#eff0ff',
    '#eff0ff',
    '#edefff',
    '#eeefff',
    '#ebeeff',
    '#eceeff',
    '#e9edff',
    '#eaedff',
    '#e7ecff',
    '#e9ecff',
    '#e6ebff',
    '#e7eaff',
    '#e4eaff',
    '#e5e9ff',
    '#e3e9ff',
    '#e4e9ff',
    '#e1e8ff',
    '#e3e8ff',
    '#e0e7ff',
    '#e1e7ff',
    '#dee6ff',
    '#e0e6ff',
    '#dde6ff',
    '#dfe5ff',
    '#dce5ff',
    '#dde4ff',
    '#dae4ff',
    '#dce3ff',
    '#d9e3ff',
    '#dbe2ff',
    '#d8e3ff',
    '#dae2ff',
    '#d7e2ff',
    '#d9e1ff',
    '#d6e1ff',
    '#d8e0ff',
    '#d4e1ff',
    '#d7dfff',
    '#d3e0ff',
    '#d6dfff',
    '#d2dfff',
    '#d5deff',
    '#d1dfff',
    '#d4ddff',
    '#d0deff',
    '#d3ddff',
    '#cfddff',
    '#d2dcff',
    '#cfddff',
    '#d1dcff',
    '#cedcff',
    '#d0dbff',
    '#cddcff',
    '#cfdaff',
    '#ccdbff',
    '#cfdaff',
    '#cbdbff',
    '#ced9ff',
    '#cadaff',
    '#cdd9ff',
    '#c9daff',
    '#ccd8ff',
    '#c9d9ff',
    '#ccd8ff',
    '#c8d9ff',
    '#cbd7ff',
    '#c7d8ff',
    '#cad7ff',
    '#c7d8ff',
    '#cad6ff',
    '#c6d8ff',
    '#c9d6ff',
    '#c5d7ff',
    '#c8d5ff',
    '#c4d7ff',
    '#c8d5ff',
    '#c4d6ff',
    '#c7d4ff',
    '#c3d6ff',
    '#c6d4ff',
    '#c3d6ff',
    '#c6d4ff',
    '#c2d5ff',
    '#c5d3ff',
    '#c1d5ff',
    '#c5d3ff',
    '#c1d4ff',
    '#c4d2ff',
    '#c0d4ff',
    '#c4d2ff',
    '#c0d4ff',
    '#c3d2ff',
    '#bfd3ff',
    '#c3d1ff',
    '#bfd3ff',
    '#c2d1ff',
    '#bed3ff',
    '#c2d0ff',
    '#bed2ff',
    '#c1d0ff',
    '#bdd2ff',
    '#c1d0ff',
    '#bdd2ff',
    '#c0cfff',
    '#bcd2ff',
    '#c0cfff',
    '#bcd1ff',
    '#bfcfff',
    '#bbd1ff',
    '#bfceff',
    '#bbd1ff',
    '#beceff',
    '#bad0ff',
    '#beceff',
    '#bad0ff',
    '#beceff',
    '#b9d0ff',
    '#bdcdff',
    '#b9d0ff',
    '#bdcdff',
    '#b9cfff',
    '#bccdff',
    '#b8cfff',
    '#bcccff',
    '#b8cfff',
    '#bcccff',
    '#b7cfff',
    '#bbccff',
    '#b7ceff',
    '#bbccff',
    '#b7ceff',
    '#bbcbff',
    '#b6ceff',
    '#bacbff',
    '#b6ceff',
    '#bacbff',
    '#b6cdff',
    '#bacbff',
    '#b5cdff',
    '#b9caff',
    '#b5cdff',
    '#b9caff',
    '#b5cdff',
    '#b9caff',
    '#b4cdff',
    '#b8caff',
    '#b4ccff',
    '#b8c9ff',
    '#b4ccff',
    '#b8c9ff',
    '#b3ccff',
    '#b8c9ff',
    '#b3ccff',
    '#b7c9ff',
    '#b3ccff',
    '#b7c9ff',
    '#b2cbff',
    '#b7c8ff',
    '#b2cbff',
    '#b6c8ff',
    '#b2cbff',
    '#b6c8ff',
    '#b2cbff',
    '#b6c8ff',
    '#b1cbff',
    '#b6c8ff',
    '#b1caff',
    '#b5c7ff',
    '#b1caff',
    '#b5c7ff',
    '#b1caff',
    '#b5c7ff',
    '#b0caff',
    '#b5c7ff',
    '#b0caff',
    '#b4c7ff',
    '#b0caff',
    '#b4c6ff',
    '#afc9ff',
    '#b4c6ff',
    '#afc9ff',
    '#b4c6ff',
    '#afc9ff',
    '#b3c6ff',
    '#afc9ff',
    '#b3c6ff',
    '#afc9ff',
    '#b3c6ff',
    '#aec9ff',
    '#b3c5ff',
    '#aec9ff',
    '#b3c5ff',
    '#aec8ff',
    '#b2c5ff',
    '#aec8ff',
    '#b2c5ff',
    '#adc8ff',
    '#b2c5ff',
    '#adc8ff',
    '#b2c5ff',
    '#adc8ff',
    '#b2c4ff',
    '#adc8ff',
    '#b1c4ff',
    '#adc8ff',
    '#b1c4ff',
    '#acc7ff',
    '#b1c4ff',
    '#acc7ff',
    '#b1c4ff',
    '#acc7ff',
    '#b1c4ff',
    '#acc7ff',
    '#b0c4ff',
    '#acc7ff',
    '#b0c3ff',
    '#abc7ff',
    '#b0c3ff',
    '#abc7ff',
    '#b0c3ff',
    '#abc7ff',
    '#b0c3ff',
    '#abc6ff',
    '#b0c3ff',
    '#abc6ff',
    '#afc3ff',
    '#aac6ff',
    '#afc3ff',
    '#aac6ff',
    '#afc2ff',
    '#aac6ff',
    '#afc2ff',
    '#aac6ff',
    '#afc2ff',
    '#aac6ff',
    '#afc2ff',
    '#aac6ff',
    '#aec2ff',
    '#a9c6ff',
    '#aec2ff',
    '#a9c5ff',
    '#aec2ff',
    '#a9c5ff',
    '#aec2ff',
    '#a9c5ff',
    '#aec2ff',
    '#a9c5ff',
    '#aec1ff',
    '#a9c5ff',
    '#aec1ff',
    '#a9c5ff',
    '#adc1ff',
    '#a8c5ff',
    '#adc1ff',
    '#a8c5ff',
    '#adc1ff',
    '#a8c5ff',
    '#adc1ff',
    '#a8c5ff',
    '#adc1ff',
    '#a8c4ff',
    '#adc1ff',
    '#a8c4ff',
    '#adc1ff',
    '#a8c4ff',
    '#adc0ff',
    '#a7c4ff',
    '#acc0ff',
    '#a7c4ff',
    '#acc0ff',
    '#a7c4ff',
    '#acc0ff',
    '#a7c4ff',
    '#acc0ff',
    '#a7c4ff',
    '#acc0ff',
    '#a7c4ff',
    '#acc0ff',
    '#a7c4ff',
    '#acc0ff',
    '#a6c4ff',
    '#acc0ff',
    '#a6c3ff',
    '#abc0ff',
    '#a6c3ff',
    '#abc0ff',
    '#a6c3ff',
    '#abbfff',
    '#a6c3ff',
    '#abbfff',
    '#a6c3ff',
    '#abbfff',
    '#a6c3ff',
    '#abbfff',
    '#a6c3ff',
    '#abbfff',
    '#a5c3ff',
    '#abbfff',
    '#a5c3ff',
    '#abbfff',
    '#a5c3ff',
    '#aabfff',
    '#a5c3ff',
    '#aabfff',
    '#a5c3ff',
    '#aabfff',
    '#a5c3ff',
    '#aabfff',
    '#a5c2ff',
    '#aabeff',
    '#a5c2ff',
    '#aabeff',
    '#a5c2ff',
    '#aabeff',
    '#a4c2ff',
    '#aabeff',
    '#a4c2ff',
    '#aabeff',
    '#a4c2ff',
    '#aabeff',
    '#a4c2ff',
    '#a9beff',
    '#a4c2ff',
    '#a9beff',
    '#a4c2ff',
    '#a9beff',
    '#a4c2ff',
    '#a9beff',
    '#a4c2ff',
    '#a9beff',
    '#a4c2ff',
    '#a9beff',
    '#a4c2ff',
    '#a9beff',
    '#a3c2ff',
    '#a9beff',
    '#a3c2ff',
    '#a9bdff',
    '#a3c1ff',
    '#a9bdff',
    '#a3c1ff',
    '#a9bdff',
    '#a3c1ff',
    '#a8bdff',
    '#a3c1ff',
    '#a8bdff',
    '#a3c1ff',
    '#a8bdff',
    '#a3c1ff',
    '#a8bdff',
    '#a3c1ff',
    '#a8bdff',
    '#a3c1ff',
    '#a8bdff',
    '#a3c1ff',
    '#a8bdff',
    '#a2c1ff',
    '#a8bdff',
    '#a2c1ff',
    '#a8bdff',
    '#a2c1ff',
    '#a8bdff',
    '#a2c1ff',
    '#a8bdff',
    '#a2c1ff',
    '#a8bdff',
    '#a2c1ff',
    '#a7bcff',
    '#a2c1ff',
    '#a7bcff',
    '#a2c1ff',
    '#a7bcff',
    '#a2c0ff',
    '#a7bcff',
    '#a2c0ff',
    '#a7bcff',
    '#a2c0ff',
    '#a7bcff',
    '#a2c0ff',
    '#a7bcff',
    '#a2c0ff',
    '#a7bcff',
    '#a1c0ff',
    '#a7bcff',
    '#a1c0ff',
    '#a7bcff',
    '#a1c0ff',
    '#a7bcff',
    '#a1c0ff',
    '#a7bcff',
    '#a1c0ff',
    '#a7bcff',
    '#a1c0ff',
    '#a7bcff',
    '#a1c0ff',
    '#a6bcff',
    '#a1c0ff',
    '#a6bcff',
    '#a1c0ff',
    '#a6bcff',
    '#a1c0ff',
    '#a6bbff',
    '#a1c0ff',
    '#a6bbff',
    '#a1c0ff',
    '#a6bbff',
    '#a1c0ff',
    '#a6bbff',
    '#a1c0ff',
    '#a6bbff',
    '#a0c0ff',
    '#a6bbff',
    '#a0c0ff',
    '#a6bbff',
    '#a0bfff',
    '#a6bbff',
    '#a0bfff',
    '#a6bbff',
    '#a0bfff',
    '#a6bbff',
    '#a0bfff',
    '#a6bbff',
    '#a0bfff',
    '#a6bbff',
    '#a0bfff',
    '#a6bbff',
    '#a0bfff',
    '#a5bbff',
    '#a0bfff',
    '#a5bbff',
    '#a0bfff',
    '#a5bbff',
    '#a0bfff',
    '#a5bbff',
    '#a0bfff',
    '#a5bbff',
    '#a0bfff',
    '#a5bbff',
    '#a0bfff',
    '#a5bbff',
    '#9fbfff',
    '#a5bbff',
    '#9fbfff',
    '#a5baff',
    '#9fbfff',
    '#a5baff',
    '#9fbfff',
    '#a5baff',
    '#9fbfff',
    '#a5baff',
    '#9fbfff',
    '#a5baff',
    '#9fbfff',
    '#a5baff',
    '#9fbfff',
    '#a5baff',
    '#9fbfff',
    '#a5baff',
    '#9fbfff',
    '#a5baff',
    '#9fbfff',
    '#a5baff',
    '#9fbeff',
    '#a5baff',
    '#9fbeff',
    '#a4baff',
    '#9fbeff',
    '#a4baff',
    '#9fbeff',
    '#a4baff',
    '#9fbeff',
    '#a4baff',
    '#9fbeff',
    '#a4baff',
    '#9fbeff',
    '#a4baff',
    '#9ebeff',
    '#a4baff',
    '#9ebeff',
    '#a4baff',
    '#9ebeff',
    '#a4baff',
    '#9ebeff',
    '#a4baff',
    '#9ebeff',
    '#a4baff',
    '#9ebeff',
    '#a4baff',
    '#9ebeff',
    '#a4baff',
    '#9ebeff',
    '#a4baff',
    '#9ebeff',
    '#a4b9ff',
    '#9ebeff',
    '#a4b9ff',
    '#9ebeff',
    '#a4b9ff',
    '#9ebeff',
    '#a4b9ff',
    '#9ebeff',
    '#a4b9ff',
    '#9ebeff',
    '#a4b9ff',
    '#9ebeff',
    '#a4b9ff',
    '#9ebeff',
    '#a3b9ff',
    '#9ebeff',
    '#a3b9ff',
    '#9ebeff',
    '#a3b9ff',
    '#9ebeff',
    '#a3b9ff',
    '#9ebeff',
    '#a3b9ff',
    '#9ebeff',
    '#a3b9ff',
    '#9dbeff',
    '#a3b9ff',
    '#9dbeff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b9ff',
    '#9dbdff',
    '#a3b8ff',
    '#9dbdff',
    '#a3b8ff',
    '#9dbdff',
    '#a2b8ff',
    '#9dbdff',
    '#a2b8ff',
    '#9dbdff',
    '#a2b8ff',
    '#9dbdff',
    '#a2b8ff',
    '#9dbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbdff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a2b8ff',
    '#9cbcff',
    '#a1b8ff',
    '#9cbcff',
    '#a1b8ff',
    '#9bbcff',
    '#a1b8ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
    '#a1b7ff',
    '#9bbcff',
]

function calcCrow(lat1, lon1, lat2, lon2)
{
    var R = 6371; // km
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value)
{
    return Value * Math.PI / 180;
}

class StreetViewMap extends Component {
    state = {
        distance: 0
    }

    positionChanged = () => {
        let lat = this.streetview.getChildContext().__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.position.lat();
        let lng = this.streetview.getChildContext().__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.position.lng();

        let distance = calcCrow(lat, lng, 51.231665, 4.412390);

        let color = colors[Math.round(colors.length * (distance / 12))];

        this.props.onDistance({distance, color});

    };
    render() {
        return <GoogleMap><StreetViewPanorama defaultOptions={{ disableDefaultUI: true}} ref={(ref) => {this.streetview = ref; }} defaultPosition={{  lat: 51.179642, lng: 4.367964  }} visible={true} onPositionChanged={this.positionChanged}/></GoogleMap>;

    }
};

const MyMapComponent = withScriptjs(withGoogleMap(StreetViewMap));

const Congrats = (props) => {
    return <React.Fragment><div style={{padding: 20, borderWidth:1 , borderColor: 'black', boxShadow: '2px 2px black', position: 'absolute', pointerEvents: 'none', zIndex: 105, left:0, right:0, top:0, bottom:0, margin:'auto', width: 300, height:200, backgroundColor: 'white'}}>
        <b>Congrats</b> You have found the mysterious dungeon you are being held in {props.steps} steps. The question is... how do you get out. Maybe this code will help you:<br/><br/><div style={{fontSize: 30}}>AQUA69</div> <br/>No idea where to type it though :/
    </div></React.Fragment>;
}

const Intro = (props) => {
    return <React.Fragment><div style={{padding: 20, borderWidth:1 , borderColor: 'black', boxShadow: '2px 2px black', position: 'absolute', zIndex: 105, left:0, right:0, top:0, bottom:0, margin:'auto', width: 300, height:100, backgroundColor: 'white'}}>
        <b>Lbh unir gb svaq gur ybpngvba jurer lbh'er orvat uryq! Bayl gura jr pna oernx gur pbqr!</b>
        <br/><br/><button onClick={props.onClose}>PYBFR</button>
    </div></React.Fragment>;
}

class Step1 extends Component {

    state = {
        color: '#abc7ff',
        distance: undefined,
        indication: 'MOVE',
        steps: 0,
        intro: true
    }

    onDistance = ({distance, color})=> {
        let indication = '';
        if (distance === undefined) {
            return;
        }
        if (distance > this.state.distance) {
            indication = 'COLDER';
        }
        if (distance < this.state.distance) {
            indication = 'WARMER';
        }

        this.setState({distance, color, indication, steps: this.state.steps+1});
    }

    render() {

        return <div style={{ height: `100%`, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
            {this.state.intro && <Intro onClose={() => { this.setState({intro: false})}}/>}

            <MyMapComponent
                isMarkerShown
                onDistance={this.onDistance}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkFiWLMwlsTM97psRxTa5ytzxHuXwHEDU&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%`, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />}
                containerElement={<div style={{ height: `100%`, width: '100%', position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />}
                mapElement={<div style={{ height: `100%`, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />}
            />

            <div style={{position: 'absolute', pointerEvents: 'none', zIndex: 100, top: 0, bottom: 0, left: 0, right: 0,backgroundColor: this.state.color + '44' }} />
            {(this.state.distance > 0.003) && <div style={{position: 'absolute', pointerEvents: 'none', zIndex: 102, top: 0, left: 0, right:0, textAlign: 'center', backgroundColor: this.state.indication === 'WARMER' ? 'red' : 'blue',fontSize: 50, color: 'white', textShadow: '2px 2px black'}}>
                {this.state.indication} ±{Math.round(this.state.distance)}km
            </div>}
            {(this.state.distance < 0.003) && <Congrats steps={this.state.steps}/>}
        }


        </div>
    }
}


const Step1WithMap = withScriptjs(withGoogleMap(Step1));


class App extends Component {
  render() {
    return (
      <div style={{height: '100vh'}}>
        <Step1/>
      </div>
    );
  }
}

export default App;
