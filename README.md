# Smart TV React Movie Browsing App

This project is a React-based movie browsing application developed for smart TV platforms. It showcases advanced key navigation, focus management, complex UI design, and performance optimization for low-powered devices whilst also being fully compatible with Desktop, Tablet and Mobile devices.

## Getting Started

### How to Run the App

1. **Clone the Repository**
   ```bash
   git clone https://github.com/lovrozagar/tv-movies.git
   cd tv-movies
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Start in Production**
   ```bash
   npm run start
   ```

The application will be available at `http://localhost:3000` by default.

## Features

### 1. Home Screen
- **Content Rails**: Displays 20 horizontal rails representing movie genres (e.g., Action, Comedy, Documentary). Each rail initially contains 20 movies, with infinite scrolling to load more as needed. Movies are fetched performantly via Intersection Observer when repsective observer in view or when navigation reaches the end of a list.

- **Scrolling**: Supports vertical scrolling of page and smooth horizonatal scrolling between rails.
- **Top Navigation**: Includes a top menu bar with selectable items/links.

### 2. Movie Details Screen
- Displays information about the selected movie.
- Features "Play now" and "Watch later" buttons.

### 3. Player Screen
- Custom video player with play/pause, volume up/down, seek and fullscreen toggle capabilities.

### 4. Additional Functionality
- **Search**: Supports movie search with virtual keyboard input.
- **Continue Watching / My List**: Personalized rails with user preferences.
- **Responsive Design**: Adapts to different TV resolutions and works well on desktop and mobile as well.

## Data Sources

- **Movie Data**: [TMDb API](https://www.themoviedb.org/documentation/api).
- **Video Streams**: Sample videos from [Mux test streams](https://test-streams.mux.dev).

## Assumptions

- Support for Chrome 66 and above, with optimizations for low-powered devices.
- Focus on performance optimization techniques, small bundle size and efficient code practices for better performance.

## Key and Focus Management

- **Navigation Library**: Used `@noriginmedia/norigin-spatial-navigation` for keyboard navigation, supplemented with custom enhancements.
- **Focus Handling**: Infinite loading movie tracks using Intersection Observer to trigger fetching when in view.
- **Caching/State managment**: Tanstack/React query.
- **State managment**: Zustand.

## Performance Optimizations

- **Dynamic Code Splitting**: All routes are code-split, with a loader shown during suspense fallback, optimizing bundle size.
- **Lazy Loading**: Images are optimized and movie items are loaded as needed, video is streamed to the player using hls.js.
- **Rail Scrolling**: Ensures seamless navigation between and within content rails, custom calculation of focusing remote focused items in window view.

## Browser Compatibility

- Tested on Chrome v66 and the latest stable version.
- Implemented fallbacks for older browsers where necessary (grid gap, window.scrollIntoView...)
