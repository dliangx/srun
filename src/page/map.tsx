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
    const url = 'https://restapi.amap.com/v3/assistant/coordinate/convert';
    const params = new URLSearchParams({
      locations: `${lng},${lat}`,
      coordsys: 'gps',
      key: '2f885069bed27bb2f4d656cdd5f22dd7', // Replace with your actual AMap API key
    });

    try {
      const response = await fetch(`${url}?${params.toString()}`);
      const data = await response.json();
      if (data.status === '1' && data.locations) {
        const [convertedLng, convertedLat] = data.locations.split(',');
        return [parseFloat(convertedLng), parseFloat(convertedLat)];
      } else {
        throw new Error(
          'Failed to convert GPS coordinates to AMap coordinates'
        );
      }
    } catch (error) {
      throw new Error('Failed to convert GPS coordinates to AMap coordinates');
    }
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
      convertGPSToAMapCoords(pos.coords.longitude, pos.coords.latitude).then(
        (res) => {
          map?.setCenter([res[0], res[1]]);

        }
      );

      setPos(pos);
      await watchPosition(
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
        async (pos) => {
          console.log(pos);

          setPos(pos);
          if (pos) {
            await convertGPSToAMapCoords(
              pos.coords.longitude,
              pos.coords.latitude
            ).then((res) => {
              console.log(res);
              map?.setFitView([
                new AMap.Marker({
                  position: [res[0], res[1]],
                }),
              ]);
            });
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
