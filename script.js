class Weather {
	constructor() {
		this.weatherData = null;
	}

	async getData() {
		const response = await fetch(
			'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=DH37DCV6NUHAXW2ZLM59CMNTE'
		);
		this.weatherData = await response.json();
		console.log(this.weatherData);

        // gets vital weather details
		const { temp, humidity, precip, windSpeed } =
			this.weatherData.currentConditions;

		console.log(temp, humidity, precip, windSpeed);

		return {
			temp,
			humidity,
			precip,
			windSpeed,
		};
	}
}

const weatherInstance = new Weather();
weatherInstance.getData();
