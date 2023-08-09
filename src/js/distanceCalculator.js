export function calculateDistance(lat1, lon1) {
    let lat2 = 39.589209;
    let lon2 = -0.333610;
    const radioTierra = 6371; // Radio de la Tierra en kilómetros

    // Convertir las coordenadas a radianes
    const latRad1 = (lat1 * Math.PI) / 180;
    const lonRad1 = (lon1 * Math.PI) / 180;
    const latRad2 = (lat2 * Math.PI) / 180;
    const lonRad2 = (lon2 * Math.PI) / 180;

    // Diferencias entre las coordenadas
    const dLat = latRad2 - latRad1;
    const dLon = lonRad2 - lonRad1;

    // Fórmula de la distancia haversine
    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Calcular la distancia
    const distancia = radioTierra * c;

    return distancia.toFixed(1);
}

export function coord(data){
    let arrayData = data
    let arrayCordenates = []
    arrayData.forEach(obj => {
        let coordinates = obj.coordinates ?? '0,0'
        let coordinatesSplit = coordinates.split(",")
        arrayCordenates.push({
            lat: coordinatesSplit[0],
            lon: coordinatesSplit[1],
        })
    });
    return arrayCordenates
}
