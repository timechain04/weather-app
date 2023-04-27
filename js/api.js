export const getWeatherData = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5a783ea9443b148c8e383b7e9038f329&lang=en&units=metric`
        );

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}