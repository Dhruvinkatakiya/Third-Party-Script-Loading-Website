# Third Party Script Loading Website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [Optimizations Applied](#optimizations-applied)
- [Performance Comparison](#performance-comparison)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [FAQ](#faq)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## Overview
This project demonstrates the impact of web performance optimizations on a simple travel explorer website. It includes two versions: an unoptimized version (`unoptimized.html`) that simulates common performance issues, and an optimized version (`optimized.html`) that applies best practices for faster loading and better user experience.

The focus is on optimizing third-party script loading, resource prioritization, and reducing render-blocking elements to improve Core Web Vitals metrics like First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS).

**Project Goals:**
- Showcase the difference between optimized and unoptimized web pages.
- Educate developers on performance best practices.
- Provide a practical example for web performance audits.

## Features
- **Hero Section**: Eye-catching banner with call-to-action.
- **Destinations**: Showcase of popular travel spots with images.
- **Video Section**: Embedded YouTube video for immersive content.
- **Services**: List of travel-related services offered.
- **Testimonials**: Customer reviews.
- **Footer**: Social media links and copyright information.

## Project Structure
```
Third Party Script Loading Website/
├── README.md
├── TODO.md
├── optimized.html          # Optimized version of the website
├── unoptimized.html        # Unoptimized version for comparison
├── assets/
│   ├── css/
│   │   ├── style.css       # Full CSS file
│   │   └── style.min.css   # Minified CSS
│   ├── js/
│   │   ├── script.js       # Full JavaScript file
│   │   └── script.min.js   # Minified JavaScript
│   └── images/             # Image assets (WebP, JPEG, etc.)
│       ├── large-banner.jpg
│       ├── large3.jpeg
│       ├── large31.webp
│       ├── paris.jpg
│       ├── paris2.webp
│       └── small-banner.webp
```

## Installation and Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/third-party-script-loading-website.git
   cd third-party-script-loading-website
   ```

2. **No Additional Setup Required**: This is a static HTML/CSS/JS project. Simply open the HTML files in a web browser.

## Usage
1. Open `optimized.html` or `unoptimized.html` in a web browser to compare the loading performance.
2. Use browser developer tools (e.g., Chrome DevTools) to analyze performance metrics, network requests, and Lighthouse scores.
3. Compare the two versions side-by-side to observe the differences in load times and user experience.

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

## Performance Comparison
- **Unoptimized**: Multiple blocking requests, inline styles, heavy scripts causing delays.
- **Optimized**: Prioritized critical resources, deferred non-critical assets, resulting in faster load times and better user experience.

**Example Metrics (Approximate):**
- **First Contentful Paint (FCP)**: Unoptimized ~3.5s → Optimized ~1.2s
- **Largest Contentful Paint (LCP)**: Unoptimized ~5.2s → Optimized ~2.1s
- **Cumulative Layout Shift (CLS)**: Unoptimized 0.25 → Optimized 0.05

## Testing
1. Open both `optimized.html` and `unoptimized.html` in separate browser tabs.
2. Use Chrome DevTools (F12) to inspect:
   - **Network Tab**: Observe request timings and blocking resources.
   - **Performance Tab**: Record and analyze load performance.
   - **Lighthouse Tab**: Run audits for performance, accessibility, best practices, and SEO.
3. Compare Lighthouse scores between the two versions.
4. Test on different devices and network conditions to simulate real-world usage.

## Technologies Used
- **HTML5**: Semantic markup for structure.
- **CSS3**: Styling with responsive design.
- **JavaScript (ES6+)**: Interactive elements.
- **Bootstrap 5.3.0**: Responsive framework.
- **Google Fonts (Poppins)**: Typography.
- **YouTube API**: Embedded video content.



## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Submit a pull request.

**Guidelines:**
- Ensure code follows web performance best practices.
- Test changes in both optimized and unoptimized versions.
- Update documentation if necessary.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## FAQ
**Q: Why are there two versions of the website?**  
A: The unoptimized version demonstrates common performance pitfalls, while the optimized version shows best practices in action.

**Q: Can I use this project for my own website?**  
A: Yes, feel free to fork and adapt it. Just ensure you comply with the licenses of any third-party assets used.

**Q: How do I measure performance improvements?**  
A: Use browser developer tools, specifically the Lighthouse audit tool, to quantify metrics like FCP, LCP, and CLS.

## Authors
- **Dhruvin Katakiya** - *Initial work* - [GitHub Profile](https://github.com/dhruvinkatakiya)

## Acknowledgments
- Inspiration from web performance communities.
- Images sourced from Unsplash and other free resources.
- Thanks to the open-source community for tools like Bootstrap and Google Fonts.
