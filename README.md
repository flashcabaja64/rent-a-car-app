# Rent-a-car App!
## Description
#### Objective
The objective is to build a car sharing native application with the minimum requirements below. There are many optimizations and code refactoring changes that did not get fully considered due to the time constraints. I will address them below.
#### Requirements
 -   Use fake car data (car details & images) to populate the UI
    -   See the resources section on APIs for random car data & images
    -   Assume the "price" property on the fake car data represents the daily rental rate ($/day)
 -   Simple text matching for the text search feature is sufficient
 -   Filters must be fully functional
    -   At a minimum, the user must be able to filter by car make, year, and color
    -   Feel free to add range sliders for the filters (not required, but extra points)
 -   Amazing UI/UX
 - Intuitive - is it easy to use?
 - Comprehensive - does the UI draw users' attention to particular focus areas?
 - Design - does it look nice?
#### Main Tech Stacks
 - react-dom
 - react-native
 - typescript
 - react-redux
 - react-native-paper
 - @react-navigation/native
 - @expo/cli

# Summary

### Assumptions
 - The suggested API did not provide a concise endpoint to filter data based on user selected make, year, and color filters. Typically, in a professional environment, the back-end engineers would develop a strong data fetching endpoint for the required search data front-end developers can consume. Because of this I opted to create custom filters instead of using the api endpoint to filter make, color, and year.
- For better UX, users can further filter the searched cars with the combined 3 filters, instead of filtering based on one filtered value. 
	- Ex: Instead of individually filtering data based make, color, or year, users can combined all 3 filters together. This helps users scale down to their desired results
	- The way it is implemented does not reflect a real-world application since the API just isn't verbose enough.
- The response of all cars contains 1000 items and it's considered a huge computational load on the CPU. Instead of calling 1000 items for each component rerender, I decided to cache the results inside the redux state. This can help improve performance throughout the application.

### Improvements
- Some of the search components are reusing the same logic, I can instead write a Higher Order Component for reuse. 
- Refactor and migrate some of the CSS values into a global file, and then import them in the necessary components. Some CSS styles were repeated.
- Make a pagination logic inside redux so load times can improve when initially loading the entire 1000 list items. This can be done using react native's Flatlist **onEndReached** prop. Essentially, we can render a small set of items and when the user scrolls to the end of the list, it will call a function that displays the next batch of items. Ultimately, this can help with user experience with shorter load times.

### Constraints
- Time is definitely one where if there were more of it, I can work on the items above.
- API search endpoint is not specific enough to return the necessary list items for better user experience when filtering.
- The beginning was the most challenging given I had to find the best design in mind. There were several occasions where I thought one way worked, but did afterwards. This led me to either scrap code or redesign the logic.
- The NHTSA endpoint for decoding a VIN, at times, returned incorrect data based on cars I personally am familiar with. Though the data may not be 100% accurate, I was still able to display information in the necessary application screen.

### Feedback
- The time given was 5 days, and I only worked only 4 days. My time spent per day ranges from 4 - 10 hours.
- For the most part, the instructions were clear with a few assumptions discussed above.
- Level of difficulty: 7
- My stance on technical screenings always comes from a place of practicality. In this scenario, a project-based assessment mimics closely to what a developer would be working on during to day-to-day position.

### Links
- [expo QR Code](https://qr.expo.dev/expo-go?owner=flashcabaja64&slug=rent-a-car&releaseChannel=default&host=exp.host)
- [expo link](https://expo.dev/@flashcabaja64/rent-a-car?serviceType=classic&distribution=expo-go)
- [expo device link](exp://exp.host/@flashcabaja64/rent-a-car?release-channel=default)
