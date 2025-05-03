Glory Calculator
Overview
The Glory Calculator is a React-based web application designed to help users calculate unit stats, glory costs, protection blessings, and attack blessings for various troop types. Users can input levels (0-50) and star levels (0-10) for each troop type, set a glory balance, and view the total stats, costs, and blessings. The app also includes features to clear inputs or maximize them to their highest values.
Features

Dynamic Table: Displays troop types with input fields for level and star level, and calculates stats, glory cost, and blessings in real-time.
Totals Calculation: Summarizes total stats, glory cost, protection blessings, and attack blessings across all units.
Glory Balance: Allows users to input a glory balance and see the remaining balance after subtracting the total glory cost.
Clear and Maximize Inputs: Buttons to reset all inputs to 0 or set them to maximum values (Level: 50, Star Level: 10).
Responsive Design: Adapts to different screen sizes for a seamless experience on desktop and mobile devices.
Custom Styling: Uses a gradient background, blurred table effects, and modern typography with the Poppins font.

Project Structure

src/App.js: The root component that renders the header, main content (CalculatorTable), and footer.
src/CalculatorTable.js: Manages the state and logic for the table, including input handling and totals calculation.
src/UnitRow.js: Renders individual rows for each troop type, displaying inputs and calculated values.
src/styles.css: Contains all styling for the app, including layout, colors, and responsive design.
src/unit-data.js: Exports the unitData object with troop data (level costs, star costs, stat increases, blessings).
public/trophy.ico: Favicon for the app, representing the "Glory" theme.
public/trophy192.png: Apple Touch icon for iOS devices.

Usage

Input Levels and Star Levels:

For each troop type, enter a level (0-50) and star level (0-10) in the respective input fields.
The table will automatically update to show the total stats, glory cost, protection blessing, and attack blessing for each unit.

Set Glory Balance:

Enter a value in the "Glory Balance" input in the footer.
The "Left Over" field will show the remaining balance after subtracting the total glory cost.

Clear or Maximize Inputs:

Click "Clear Inputs" to reset all levels and star levels to 0, and clear the glory balance.
Click "Maximize Inputs" to set all levels to 50 and star levels to 10, while leaving the glory balance unchanged.

Technologies Used

React: For building the user interface with components.
JavaScript (ES6+): For logic and calculations.
CSS: For styling, including flexbox for layout and responsive design.
Google Fonts (Poppins): For modern typography.

License
This project is licensed under the MIT License. See the LICENSE file for details.
