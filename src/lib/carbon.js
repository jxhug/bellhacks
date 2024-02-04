export function getCarbonOffset(dist) {
    // Request body
    const requestBody = {
        type: 'vehicle',
        distance_unit: 'mi',
        distance_value: dist,
        vehicle_model_id: '7268a9b7-17e8-4c8d-acca-57059252afe9'
    };

    const url = 'https://www.carboninterface.com/api/v1/estimates';
    const apiKey = 'gPy7TMvfIQynOBNC45gg';
    // Fetch request options
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    };

    // Fetch request
    fetch(url, requestOptions)
        .then(data => {
            console.log('API Response:', data);
        })
        .catch(error => console.error('Error making API request:', error)); {}
}