import React, { useEffect, useRef } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import {
  checkPermissions,
  requestPermissions,
  getCurrentPosition,
  watchPosition,
  Position,
} from '@tauri-apps/plugin-geolocation';

let permissions = await checkPermissions();
if (
  permissions.location === 'prompt' ||
  permissions.location === 'prompt-with-rationale'
) {
  permissions = await requestPermissions(['location']);
}

const MMap = () => {
  const [map, setMap] = React.useState<AMap.Map | null>(null);
  const mapContainer = useRef(null);
  const [pos, setPos] = React.useState<Position | null>(null);

  async function getPos() {
    if (permissions.location === 'granted') {
      let pos = await getCurrentPosition();
      console.log(pos);

      setPos(pos);
      await watchPosition(
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
        async (pos) => {
          console.log(pos);
          map?.getSize();
        }
      );
    }
  }

  useEffect(() => {
    AMapLoader.load({
      key: '0f012d1d7b59235920991711ee67ddd6',
      version: '2.0',
      plugins: ['AMap.ConvertCoord'],
    })
      .then((AMap) => {
        const map = new AMap.Map(mapContainer.current, {
          zoom: 17,
          expandZoomRange: true,
          zooms: [3, 21],
          center: [pos?.coords.longitude, pos?.coords.latitude],
        });
        
        setMap(map);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [pos]);

  useEffect(() => {
    getPos();
  }, []);

  return (
    <div ref={mapContainer} style={{ width: '100%', height: '100%' }}>
      {pos && (
        <div
          style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 1001 }}
        >
          <p>Latitude: {pos.coords.latitude}</p>
          <p>Longitude: {pos.coords.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default MMap;
