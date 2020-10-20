$(document).ready(function () {
	// BEGIN DOCUMENT READY

	$(".submit-btn").click(function () {
		if (
			$("#genre-select").val() !== "Placeholder" &&
			$("#day-select").val() !== "Placeholder"
		) {
			$(".main-container").fadeOut("transition", function () {
				$(".results-container").fadeIn("transition");
			});
			createCard();
			// storeUserAvailablity();
		} else {
			return;
		}
	});

	var apiData = [];

	function createCard() {
		getDistance();
		getProfile();
	}

	function getProfile() {
		var howMany = 3;
		var settings = {
			async: true,
			crossDomain: true,
			url: `https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?count=${howMany}&gender=b&maxage=40&minage=30&cc=all&email=gmail.com&pwlen=12&ip=a&phone=l%252Ct%252Co&uuid=false&lic=false&color=false&seed=helloworld&images=false&format=json`,
			method: "GET",
			headers: {
				"x-rapidapi-host":
					"dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com",
				"x-rapidapi-key": "8c4125cdbemshdba67e2bb378a61p125770jsn3f9a853ecd06",
			},
		};
		$.ajax(settings).then(function (response) {
			//store each response into array apiData
			for (var i = 0; i < response.length; i++) {
				var profile = {
					image: response[i].image,
					firstname: response[i].firstname,
					lastname: response[i].lastname,
					username: response[i].username,
					availablity: $("#day-select").val(),
					descriptionText: randomText(),
					genre: $("#genre-select").val(),
					email: response[i].email,
					address:
						response[i].location.street.number +
						" " +
						response[i].location.street.name +
						", " +
						response[i].location.city +
						", Germany",
					location: "",
				};
				apiData.push(profile);
				// moved locationData
			}
			console.log(apiData);

			//maved createCard()
		});
	}

	function randomText() {
		var ipsumUrl = `https://litipsum.com/api/1/json/`;

		$.ajax({
			url: ipsumUrl,
			method: "GET",
		}).then(function (result) {
			var descriptionText = result.text[0];
			var trimmedString = descriptionText.split(" ");

			trimmedString.length > 20 ? (trimmedString.length = 20) : null;
			trimmedString = trimmedString.join(" ");

			$(`.description`).text(trimmedString);
		});
	}

	function getDistance() {}

	// END DOCUMENT READY
});
