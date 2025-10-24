function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "cfd1t35o8f8b68dcafb73c36e0439c16";
  let prompt = `User insructions: Generate an English poem about ${instructionsInput.value}`;
  let context = `You are a romantic poem expert and love to write short poems. The mission is to generate a 4 line poem in basic HTML and separate each line with a <br /> and do not include a title, don't show HTML and back ticks. Make sure to follow the users instructions. Sign the poem with '"SheCodes AI"' inside a <strong> element`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
  // build an API URl, call the API, display generated poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
