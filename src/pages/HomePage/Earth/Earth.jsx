import { useRef } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import * as topojson from 'topojson-client';

import landTopology from "../../../assets/earth/land_10m.json"
import pointsData from '../../../assets/earth/random-locations.json';
import texture from '../../../assets/earth/texture.jpg';

const min = 1000;
const max = 4000;
const sliceData = pointsData.sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(20, 90);

const arcsData = sliceData.map(() => {
    const randStart = Math.floor(Math.random() * sliceData.length);
    const randEnd = Math.floor(Math.random() * sliceData.length);
    const randTime = Math.floor(Math.random() * (max - min + 1) + min);
    return {
        startLat: sliceData[randStart].lat,
        startLng: sliceData[randStart].lng,
        endLat: sliceData[randEnd].lat,
        endLng: sliceData[randEnd].lng,
        time: randTime,
        color: ['#ffffff00', '#faf7e6', '#ffffff00'],
    };
});

const EarthComponent = () => {
    const globeRef = useRef(null);

    const globeReady = () => {
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().enableZoom = false;

            globeRef.current.pointOfView({
                lat: 19.054339351561637,
                lng: -50.421161072148465,
                altitude: window.innerWidth > 1000 ? 1.8 : 5,
            });
        }
    };

    console.log(window.innerWidth)

    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

    // Gen random data
    const N = 30;
    const gData = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: 7 + Math.random() * 30,
        color: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'][Math.round(Math.random() * 3)],
        label : 'test'
    }));
    return (
        <div className='cursor-move'>
            <Globe
                ref={globeRef}
                onGlobeReady={globeReady}
                backgroundColor='#FFFFFF'
                rendererConfig={{ antialias: true, alpha: true }}
                globeMaterial={
                    new THREE.MeshPhongMaterial({
                        color: '#1a2033',
                        // opacity: 0.95,
                        // transparent: true,
                    })
                }
                atmosphereColor='#FFFFFF'
                atmosphereAltitude={0.5}
                htmlElementsData={gData}
                htmlElement={d => {
                    const el = document.createElement('div');
                    el.innerHTML = markerSvg;
                    el.style.color = d.color;
                    el.style.width = `${d.size}px`;

                    el.style['pointer-events'] = 'auto';
                    el.style.cursor = 'pointer';
                    el.onclick = () => console.info(d);
                    return el;
                }}
                // pointsMerge={true}
                // pointsData={pointsData}
                // pointAltitude={0.01}
                // pointRadius={0.2}
                // pointResolution={5}
                // pointColor={() => '#eed31f'}
                arcsData={arcsData}
                arcAltitudeAutoScale={0.3}
                arcColor='color'
                arcStroke={0.5}
                arcDashGap={2}
                arcDashAnimateTime='time'
                polygonsData={topojson.feature(landTopology, landTopology.objects.land).features}
                polygonSideColor={() => '#00000000'}
                polygonCapMaterial={
                    new THREE.MeshPhongMaterial({
                        color: '#5090cd',
                        side: THREE.DoubleSide,
                        map: new THREE.TextureLoader().load(texture),
                    })
                }
                polygonAltitude={0.01}
                // customLayerData={[...Array(500).keys()].map(() => ({
                //   lat: (Math.random() - 1) * 360,
                //   lng: (Math.random() - 1) * 360,
                //   altitude: Math.random() * 2,
                //   size: Math.random() * 0.4,
                //   color: '#faadfd',
                // }))}
                customThreeObject={(sliceData) => {
                    const { size, color } = sliceData;
                    return new THREE.Mesh(new THREE.SphereGeometry(size), new THREE.MeshBasicMaterial({ color }));
                }}
                customThreeObjectUpdate={(obj, sliceData) => {
                    const { lat, lng, altitude } = sliceData;
                    return Object.assign(obj.position, globeRef.current?.getCoords(lat, lng, altitude));
                }}
            />
        </div>
    );
};

export default EarthComponent;