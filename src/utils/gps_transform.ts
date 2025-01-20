// 常量定义
const PI = 3.14159265358979324;
const a = 6378245.0; // 长半轴
const ee = 0.00669342162296594323; // 偏心率平方

// 判断是否在中国范围内
function outOfChina(lat: number, lon: number): boolean {
    return (
        lon < 72.004 ||
        lon > 137.8347 ||
        lat < 0.8293 ||
        lat > 55.8271
    );
}

// WGS-84转GCJ-02
function wgs84ToGcj02(lat: number, lon: number): [number, number] {
    if (outOfChina(lat, lon)) {
        return [lon, lat];
    }

    const dlat = transformLat(lon - 105.0, lat - 35.0);
    const dlon = transformLon(lon - 105.0, lat - 35.0);
    const radlat = (lat / 180.0) * PI;
    const magic = Math.sin(radlat);
    const magic2 = 1 - ee * magic * magic;
    const sqrtmagic2 = Math.sqrt(magic2);

    const x = (lon * a * Math.cos(radlat)) / sqrtmagic2;
    const y = (lat * a * Math.sin(radlat)) / sqrtmagic2;

    const x0 = x - dlon;
    const y0 = y - dlat;

    const lat0 = ((y0 / a) * Math.sqrt(1 - ee)) / Math.sqrt(1 - ee * (y0 / a) * (y0 / a));
    const lon0 = (x0 / a) / Math.cos(lat0);

    return [
        lon0 * 180.0 / PI,
        lat0 * 180.0 / PI
    ];
}

// 辅助函数
function transformLat(x: number, y: number): number {
    let ret =
        -100.0 +
        2.0 * x +
        3.0 * y +
        0.2 * y * y +
        0.1 * x * y +
        0.2 * Math.sqrt(Math.abs(x));
    ret +=
        ((20.0 * Math.sin(6.0 * x * PI) +
            20.0 * Math.sin(2.0 * x * PI)) *
            2.0) /
        3.0;
    ret +=
        ((20.0 * Math.sin(y * PI) +
            40.0 * Math.sin((y / 3.0) * PI)) *
            2.0) /
        3.0;
    ret +=
        ((160.0 * Math.sin((y / 12.0) * PI) +
            320 * Math.sin((y * PI) / 30.0)) *
            2.0) /
        3.0;
    return ret;
}

function transformLon(x: number, y: number): number {
    let ret =
        300.0 +
        x +
        2.0 * y +
        0.1 * x * x +
        0.1 * x * y +
        0.1 * Math.sqrt(Math.abs(x));
    ret +=
        ((20.0 * Math.sin(6.0 * x * PI) +
            20.0 * Math.sin(2.0 * x * PI)) *
            2.0) /
        3.0;
    ret +=
        ((20.0 * Math.sin(x * PI) +
            40.0 * Math.sin((x / 3.0) * PI)) *
            2.0) /
        3.0;
    ret +=
        ((150.0 * Math.sin((x / 12.0) * PI) +
            300.0 * Math.sin((x / 30.0) * PI)) *
            2.0) /
        3.0;
    return ret;
}

export default wgs84ToGcj02 ;
