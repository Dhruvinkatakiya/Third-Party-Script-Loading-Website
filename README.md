# Third Party Script Loading Website

## Overview
This project demonstrates the impact of web performance optimizations on a simple travel explorer website. It includes two versions: an unoptimized version (`unoptimized.html`) that simulates common performance issues, and an optimized version (`optimized.html`) that applies best practices for faster loading and better user experience.

The focus is on optimizing third-party script loading, resource prioritization, and reducing render-blocking elements to improve Core Web Vitals metrics like First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS).

## Features
- **Hero Section**: Eye-catching banner with call-to-action.
- **Destinations**: Showcase of popular travel spots with images.
- **Video Section**: Embedded YouTube video for immersive content.
- **Services**: List of travel-related services offered.
- **Testimonials**: Customer reviews.
- **Footer**: Social media links and copyright information.

## Optimizations Applied
The optimized version includes the following improvements over the unoptimized version:

### Resource Loading
- **Preconnect and Prefetch**: Added `preconnect` for Google Fonts and CDN, and `dns-prefetch` for faster DNS resolution.
- **Font Optimization**: Consolidated font requests into a single link with specific weights to reduce HTTP requests.
- **CSS and JS Minification**: External stylesheets and scripts are minified (`style.min.css`, `script.min.js`) for smaller file sizes.
- **Defer Non-Critical Scripts**: Third-party scripts (e.g., Bootstrap) are loaded with `defer` to avoid blocking rendering.

### Images
- **Lazy Loading**: Images use `loading="lazy"` to defer off-screen images.
- **Optimized Formats**: Uses WebP and JPEG formats for better compression.

### Scripts
- **Deferred Loading**: Non-critical scripts are deferred to prevent blocking the main thread.
- **Removed Blocking Scripts**: Eliminated heavy, blocking third-party scripts that simulate analytics delays.

### Other
- **Inline Styles Removed**: Moved all styles to external minified CSS.
- **Reduced Font Requests**: From multiple font families to a single optimized request.
- **Video Optimization**: YouTube iframe is responsive and non-autoplaying.

## How to View
1. Clone or download the repository.
2. Open `optimized.html` or `unoptimized.html` in a web browser to compare the loading performance.
3. Use browser developer tools (e.g., Chrome DevTools) to analyze performance metrics, network requests, and Lighthouse scores.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5 (for responsive design)
- Google Fonts (Poppins)
- YouTube API (for embedded video)

## Performance Comparison
- **Unoptimized**: Multiple blocking requests, inline styles, heavy scripts causing delays.
- **Optimized**: Prioritized critical resources, deferred non-critical assets, resulting in faster load times and better user experience.

## Contributing
Feel free to fork the repository and submit pull requests for additional optimizations or features.

## License
This project is for educational purposes. No specific license applied.
