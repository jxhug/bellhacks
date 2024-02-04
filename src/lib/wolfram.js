// @ts-ignore
export function fetchDist(point1Lat, point1Lon, point2Lat, point2Lon) {
    fetch(`https://api.wolframalpha.com/v2/query?input=distancebetween(${point1Lat},${point1Lon})and(${point2Lat},${point2Lon})&format=plaintext&output=JSON&appid=QKRURU-KQW98X783E`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Check if the query was successful
            console.log(data.queryresult)
            const distancePod = data.queryresult.pods.find(( /** @type {{ id: string; }} */ pod) => pod.id === 'Result');

            if (distancePod && distancePod.numsubpods > 0) {
                const distanceText = distancePod.subpods[0].plaintext;

                // Extract numeric value from the end of the string
                const numericValue = distanceText.split('≈')[1].trim();

                if (!isNaN(numericValue)) {
                    const distanceValue = parseFloat(numericValue);
                    console.log('Numeric Distance Value:', distanceValue);
                } else {
                    console.error('No numeric value found in the distance text.');
                }
            } else {
                console.error('No distance information found in the "Result" pod.');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}