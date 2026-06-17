# Copilot Instructions for Weather App

## Architecture Overview
This is a simple React weather application built with Create React App. The app consists of:
- **App.js**: Main component managing state (city, weather, error) and auto-refresh logic
- **components/**: Reusable UI components (SearchBar, WeatherCard)
- **utils/weatherApi.js**: API utility for OpenWeatherMap integration

Data flow: User inputs city → SearchBar → App.fetchWeather() → weatherApi.getWeather() → WeatherCard display

## Key Patterns
- **Functional Components**: All components use React hooks (useState, useEffect)
- **State Management**: Centralized in App.js with props drilling to children
- **API Integration**: Axios for HTTP requests, error handling with try/catch
- **Auto-refresh**: useEffect with setInterval for real-time updates (30s interval)
- **Styling**: CSS modules with className-based styling

## Developer Workflows
- **Start dev server**: `npm start` (runs on localhost:3000)
- **Build for production**: `npm run build`
- **Run tests**: `npm test` (uses React Testing Library)
- **API Key**: Hardcoded in `src/utils/weatherApi.js` (replace with real OpenWeatherMap key)

## Conventions
- **Error Handling**: Catch API errors in utils, display user-friendly messages in UI
- **Component Props**: Pass functions as props for child-to-parent communication
- **File Structure**: Group related files in folders (components/, utils/)
- **Imports**: Relative paths for internal modules, named exports preferred

## Examples
- **Adding new weather data**: Extend WeatherCard props and destructure in component
- **New API endpoint**: Add function in weatherApi.js, import and use in App.js
- **Styling**: Add classes in component JSX, define in App.css

## Dependencies
- React 19, Axios for API calls, React Testing Library for tests