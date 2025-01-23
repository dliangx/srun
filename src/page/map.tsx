import React, { useEffect, useRef } from 'react';
import AMapLoader from '@amap/amap-jsapi-loader';
import {
  checkPermissions,
  requestPermissions,
  getCurrentPosition,
  watchPosition,
  Position,
} from '@tauri-apps/plugin-geolocation';


const MMap = () => {
  const [map, setMap] = React.useState<AMap.Map | null>(null);
  const mapContainer = useRef(null);
  const [pos, setPos] = React.useState<Position | null>(null);

  async function convertGPSToAMapCoords(lng: number, lat: number) {
    return new Promise<[ lng: number, lat: number ]>((resolve, reject) => {
      AMap.convertFrom([lng, lat], 'gps', (status: string, result: any) => {
        if (status === 'complete' && result.info === 'ok') {
          const { lng, lat } = result.locations[0];
          resolve([ lng, lat ]);
        } else {
          reject(
            new Error('Failed to convert GPS coordinates to AMap coordinates')
          );
        }
      });
    });
  }

  async function getPos() {
    let permissions = await checkPermissions();
    if (
      permissions.location === 'prompt' ||
      permissions.location === 'prompt-with-rationale'
    ) {
      permissions = await requestPermissions(['location']);
    }
    if (permissions.location === 'granted') {
      let pos = await getCurrentPosition();
      console.log(pos);
      map?.setFitView([
        new AMap.Marker({
          position: [pos.coords.longitude, pos.coords.latitude],
        }),
      ]);
      setPos(pos);
      await watchPosition(
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
        async (pos) => {
          console.log(pos);
          if (pos) {
            const transPos = convertGPSToAMapCoords(pos.coords.longitude,pos.coords.latitude)
            console.log(transPos)
            map?.setFitView([
              new AMap.Marker({
                position: [pos.coords.longitude, pos.coords.latitude],
              }),
            ]);
            setPos(pos);
          }
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
          zoom: 19,
          expandZoomRange: true,
          zooms: [3, 21],
          center: [114.305393, 30.593099], // Wuhan GPS coordinates
        });

        setMap(map);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (map) {
      getPos();
    }
  }, [map]);

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
