export default function Geoposition(data) {
    return {
        latitude: data.latitude,
        longitude: data.longitude,
        city: data.name,
        country: data.country
    };
}
