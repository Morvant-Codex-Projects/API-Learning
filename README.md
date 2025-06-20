# Postman API Collections Lab Assignment Objective

Use Postman to explore real-world APIs by:

- Creating multiple collections with organized GET requests

- Using collection variables for base URLs

- Practicing request formatting and response inspection

- (Bonus) Working with an API that requires an API key and configuring authentication

## Requirements

## Part 1: Create 5 Collections with GET Requests

1. Choose 5 public APIs that support GET requests. Example APIs include: Pokémon API, SpaceX API, Cat Facts, The Dog API, OpenWeatherMap, etc.

2. For each API:

- Create a new Postman Collection and name it after the API.

- Set the base URL as a collection variable (e.g., {{baseUrl}}) and use it in all requests.

- Create at least 2 GET requests per collection:

  - One general endpoint (e.g., /list, /all)

  - One specific endpoint (e.g., /item/1, /pokemon/pikachu)

3. Confirm that:

- Each request returns a valid response (HTTP 200)

- You can see meaningful data in the response body

- You understand the headers and status codes involved

## Example: Pokémon API

- Collection Name: Pokémon API

- Variable: baseUrl = https://pokeapi.co/api/v2

- Requests:

  - GET {{baseUrl}}/pokemon

  - GET {{baseUrl}}/pokemon/charizard

## Bonus Challenge: Authenticated API Collection

- Create one additional collection that uses an API requiring an API key.

## Examples:

- OpenWeatherMap

- TheDogAPI

- NewsAPI

## Steps:

1. Set the base URL as a collection variable.

2. Store the API key as another collection variable (e.g., {{apiKey}}).

3. Configure Authorization or Headers at the collection level:

    - Example: Add a header Authorization: Bearer {{apiKey}}

    - Or include the key in the query string: ?api_key={{apiKey}}

4. Create at least two authenticated GET requests.

## Submission Instructions

1. Export all five (or six, if doing the bonus) collections from Postman.

2. Submit a .zip folder containing:

    - All exported collections

    - A README.md or .txt file that includes:

      - The name of each API used

      - A brief description of what each API does

      - For the bonus: how you configured authentication

## Grading Rubric

|Task                                      |Points|
|----------------------------------------------|------|
|5 Collections created                         |  25  |
|At least 2 working GET requests per API       |  25  |
|Uses {{baseUrl}} variable correctly           |  15  |
|Responses successfully retrieved and readable |  15  |
|Collections exported and submitted correctly  |  10  |
|Bonus: Auth API configured securely           | +10  |

## Public API Suggestions

|API Name       |Base URL                         |Authentication |
|---------------|---------------------------------|---------------|
|PokeAPI        | https://pokeapi.co/api/v2       |No             |
|SpaceX API     | https://api.spacexdata.com/v4   |No             |
|Cat Facts      | https://catfact.ninja           |No             |
|The Dog API    | https://api.thedogapi.com/v1    |Yes            |
|OpenWeather    | https://api.openweathermap.org  |Yes            |
|NewsAPI        | https://newsapi.org/v2          |Yes            |
