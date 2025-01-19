import React, { useEffect, useRef } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import {
  checkPermissions,
  requestPermissions,
  getCurrentPosition,
  watchPosition,
} from '@tauri-apps/plugin-geolocation';

let permissions = await checkPermissions();
if (
  permissions.location === 'prompt' ||
  permissions.location === 'prompt-with-rationale'
) {
  permissions = await requestPermissions(['location']);
}



if (permissions.location === 'granted') {
  const pos = await getCurrentPosition();
  console.log(pos);

  await watchPosition(
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    (pos) => {
      console.log(pos);
    }
  );
}

const MMap = () => {
  const [map, setMap] = React.useState<AMap.Map | null>(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    AMapLoader.load({
      key: '0f012d1d7b59235920991711ee67ddd6',
      version: '2.0',
      plugins: [],
    })
      .then((AMap) => {
        const map = new AMap.Map(mapContainer.current, {
          zoom: 3.5,
          expandZoomRange: true,
          zooms: [3, 21],
          center: [116.397428, 39.90923],
        });

        setMap(map);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (map) {
      map.on('click', (e) => {
        console.log(e);
      });
    }
  });

  return (
    <div ref={mapContainer} style={{ width: '100%', height: '100%' }}></div>
  );
};

export default MMap;
