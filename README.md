# Glory Calculator

## Overview

Glory Calculator is a React-based web app that calculates unit stats, glory costs, and blessings for various troop types. Users input levels (0–50) and star levels (0–10), set a glory balance, and view computed stats, costs, and blessings. The app includes controls to reset or maximize inputs.

## Features

- **Dynamic Table**: Real-time calculation of stats, glory cost, and blessings for each troop type.
- **Totals Summary**: Aggregates total stats, glory cost, and blessings.
- **Glory Balance Tracker**: Displays remaining balance after deducting total glory cost.
- **Input Controls**: Buttons to reset or maximize all values (Level: 50, Star Level: 10).
- **Responsive Design**: Optimized for desktop and mobile use.
- **Modern Styling**: Gradient background, blur effects, and Poppins font.

## Project Structure

- `src/App.js`: Main component rendering header, content, and footer.
- `src/CalculatorTable.js`: Core logic and state management for the calculator.
- `src/UnitRow.js`: Renders each unit row with inputs and calculations.
- `src/styles.css`: App-wide styling and layout.
- `src/unit-data.js`: Defines unit stats, costs, and blessing data.
- `public/trophy.ico`: Favicon.
- `public/trophy192.png`: iOS touch icon.

## Usage

### Input Levels and Star Levels

Set level (0–50) and star level (0–10) per troop. Calculations update automatically.

### Set Glory Balance

Input a value in the "Glory Balance" field. Remaining balance is shown after deducting total cost.

### Input Controls

- **Clear Inputs**: Resets all fields to 0 and clears the balance.
- **Maximize Inputs**: Sets all levels to 50 and stars to 10; balance remains unchanged.

## Technologies Used

- **React**: Component-based UI framework.
- **JavaScript (ES6+)**: Application logic.
- **CSS**: Styling with responsive layout.
- **Google Fonts (Poppins)**: Typography.

## License

MIT License. See `LICENSE` for details.
