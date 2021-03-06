// const itineraryDaysJSON = `
// [
//     {
//         "dayTitle": "Day 1: Chernobyl",
//         "description": "We start our safari trip with a drive to the Lake Manyara National Park. Founded in 1960, the small Lake Manyara National Park is home to tree-climbing lions, elephants and large troops of baboons and monkeys. The park is dominated by the shallow, alkaline lake and boasts with diverse habitats like grassy plains, escarpment, and forest. Here hundreds of bird species gather including the legendary pink flamingos. In addition to the stunning scenery, you have the chance to meet giraffes, buffaloes, hippos, wildebeests and the comical warthog. The safari jeep has an open roof and is the great viewing platform to appreciate the nature and animals of this park. In the late afternoon, you will leave the park and drive to the selected lodge, where you will spend the night.",
//         "dayImageUrl": "stela.jpg"
//     },
//     {
//         "dayTitle": "Day 2: LENIN CHERNOBYL NPP",
//         "description": "After a deep sleep we will go towards the fertile crater highlands where the local people grow wheat, corn and coffee. By midday we will reach the plains of the Serengeti National Park, the most stunning park in Tanzania. The Serengeti has a diversity of landscapes including short grass plains, savannah, thick bush, swamps and lakes and it is famous for the yearly migration when hundred thousands of wildebeest and zebras trek to find fresh grass and water. On our way to the hotel we will show you, where the word Serengeti (plains in the language of the Maasai) comes from. We reach the hotel in the early evening so that you have enough time to have a dinner and rest.",
//         "dayImageUrl": "npp.jpg"
//     },
//     {
//         "dayTitle": "Day 3: THE CITY OF GHOSTS - PRIPYAT",
//         "description": "This day we spend on a game drive in the Serengeti National Park. During the rainy season in November and December the herds move from the hills in the north to the plains in the south, so we chase them on their route. A visit to the Serengeti Visitor Centre is also possible. Here you can learn more about the history of the park and the research that is being done by the Frankfurter Zoological Society. After a day full of emotions we come back to the hotel near the national park, and have a rest.",
//         "dayImageUrl": "pripyat.jpg"
//     },
//     {
//         "dayTitle": "Day 4: SECRET OBJECT CHERNOBYL 2. ZHRLS DUGA- 1",
//         "description": "We continue exploring the Serengeti National Park. In the Seronera Valley we might be lucky to see predators hunt as animals gather at the waters. After lunch we rush in the direction of the Ngorongoro Crater. As soon as we have reached the crater you will have a superb view of the caldera. This 20 km wide crater is part of an UNESCO World Heritage Site and is hosts over 20,000 animals. This evening, we stay in a local hotel right on the crater from which you'll have the opportunity to witness one of the most incredible sunsets in your life!",
//         "dayImageUrl": "duga.jpg"
//     }
// ]
// `;

function renderItineraryDays(itineraryDays) {
    const itineraryDaysContainer = document.querySelector('.all-days');
    for (const itineraryDay of itineraryDays) {
        itineraryDaysContainer.innerHTML += `
        <article>
            <img class="itinerary-img" src="img/${itineraryDay.dayImageUrl}" alt="${itineraryDay.dayTitle}">
            <div>
                <h3 class="itinerary-day">${itineraryDay.dayTitle}</h3>
                <p class="itinerary-description">
                    ${itineraryDay.description}
                </p>
            </div>
        </article>`
    }
}

async function fetchItinerary(order) {
    const response = await fetch('js/itinerary-days.json');
    const itinerary = await response.json();
    renderItineraryDays(itinerary, order);
}

fetchItinerary();

// renderItineraryDays(JSON.parse(itineraryDaysJSON));