# react-leaflet-semicircle

[![](https://img.shields.io/npm/v/react-leaflet-semicircle.svg?style=flat-square)](http://npmjs.com/package/react-leaflet-semicircle)
[![](https://img.shields.io/npm/dt/react-leaflet-semicircle.svg?style=flat-square)](http://npmjs.com/package/react-leaflet-semicircle)
[![](https://img.shields.io/github/license/clementallen/react-leaflet-semicircle.svg?style=flat-square)](https://github.com/clementallen/react-leaflet-semicircle)
[![](https://img.shields.io/david/clementallen/react-leaflet-semicircle.svg?style=flat-square)](https://david-dm.org/clementallen/react-leaflet-semicircle)
[![](https://img.shields.io/david/dev/clementallen/react-leaflet-semicircle.svg?style=flat-square)](https://david-dm.org/clementallen/react-leaflet-semicircle?type=dev)
[![](https://img.shields.io/codeclimate/coverage/clementallen/react-leaflet-semicircle.svg?style=flat-square)](https://codeclimate.com/github/clementallen/react-leaflet-semicircle)
[![](https://img.shields.io/codeclimate/maintainability/clementallen/react-leaflet-semicircle.svg?style=flat-square)](https://codeclimate.com/github/clementallen/react-leaflet-semicircle)
[![Greenkeeper badge](https://img.shields.io/badge/Greenkeeper-enabled-brightgreen.svg?style=flat-square)](https://greenkeeper.io/)

React wrapper of [leaflet-semicircle](https://github.com/jieter/Leaflet-semicircle)
for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

Semicircle vector layers for [Leaflet](https://leafletjs.com) maps. Extends [L.Circle](http://leafletjs.com/reference.html#circle) and [L.CircleMarker](http://leafletjs.com/reference.html#circlemarker).

_Tested with Leaflet 1.4.0 and React-Leaflet 2.1.4_

## Installation

```bash
npm install react-leaflet-semicircle --save
```

## Usage

### Complete example with react-leaflet

```javascript
import { Map, TileLayer } from 'react-leaflet';
import { SemiCircle, SemiCircleMarker } from 'react-leaflet-semicircle';

<Map center={[51.505, -0.09]} zoom={13}>
    <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <SemiCircle
        position={[51.505, -0.09]}
        radius={2000}
        startAngle={90}
        stopAngle={180}
    />
    <SemiCircleMarker
        position={[51.505, -0.09]}
        radius={20}
        startAngle={90}
        stopAngle={180}
    />
</Map>;
```

### \<SemiCircle />

```javascript
<SemiCircle
    position={[51.505, -0.09]}
    radius={2000}
    startAngle={90}
    stopAngle={180}
/>
```

#### Props

| Name                    | Type                                      | Example           | Description                                     |
| ----------------------- | ----------------------------------------- | ----------------- | ----------------------------------------------- |
| position [**required**] | L.LatLng[] **or** Array\[number, number\] | \[51.505, -0.09\] | Latitude and Longitude of the semicircle center |
| radius [**required**]   | number                                    | 2000              | Radius of the semicircle in metres              |
| startAngle              | number                                    | 90                | Starting bearing of the semicircle              |
| stopAngle               | number                                    | 180               | Ending bearing of the semicircle                |

**All other options from L.Circle are also supported. [View them here](https://leafletjs.com/reference#circle)**

### \<SemiCircleMarker />

```javascript
<SemiCircleMarker position={[51.505, -0.09]} startAngle={90} stopAngle={180} />
```

#### Props

| Name                    | Type                                      | Example           | Description                                           |
| ----------------------- | ----------------------------------------- | ----------------- | ----------------------------------------------------- |
| position [**required**] | L.LatLng[] **or** Array\[number, number\] | \[51.505, -0.09\] | Latitude and Longitude of the semicirclemarker center |
| startAngle              | number                                    | 90                | Starting bearing of the semicirclemarker              |
| stopAngle               | number                                    | 180               | Ending bearing of the semicirclemarker                |

**All other options from L.CircleMarker are also supported. [View them here](https://leafletjs.com/reference#circlemarker)**

### Component methods

Each component comes with methods that can be accessed via [React Refs](https://reactjs.org/docs/refs-and-the-dom.html).

#### Setup

```javascript
this.semiCircleRef = React.createRef();

// ----

<SemiCircle
    position={[51.505, -0.09]}
    radius={2000}
    startAngle={90}
    stopAngle={180}
    ref={this.semiCircleRef}
/>;
```

#### setDirection(direction, size)

Use `setDirection(direction, size)` to display a semicircle of `size` degrees at `direction`.

```javascript
this.semiCircleRef.current.setDirection(90, 90);
```

#### setStartAngle(angle)

Set the start angle of the semicircle to `angle`

```javascript
this.semiCircleRef.current.setStartAngle(90);
```

#### setStopAngle(angle)

Set the stop angle of the semicircle to `angle`

```javascript
this.semiCircleRef.current.setStopAngle(90);
```
