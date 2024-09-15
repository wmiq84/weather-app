class Weather {
	constructor() {
		this.location = '';
		this.weatherData = null;
	}

	async getData(location) {
		const response = await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=DH37DCV6NUHAXW2ZLM59CMNTE`
		);
		this.weatherData = await response.json();
		console.log(this.weatherData);

		// gets vital weather details
		const { temp, humidity, precip, windSpeed } =
			this.weatherData.currentConditions;

		return {
			temp,
			humidity,
			precip,
			windSpeed,
		};
	}
}

const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('#output');

button.addEventListener('click', async () => {
	const inputText = input.value;
	const weatherInstance = new Weather();
	const weatherOutput = await weatherInstance.getData(inputText);

	output.textContent = `Temperature: ${weatherOutput.temp}F, Humidity: ${weatherOutput.humidity}%, Precipitation: ${weatherOutput.precip} inches, Wind Speed: ${weatherOutput.windSpeed} mph`;
});
