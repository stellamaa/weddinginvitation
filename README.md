# Wedding Invitation Website

A beautiful, responsive wedding invitation website for Adam & Stephanie's wedding on September 12, 2026.

## Features

- Responsive design for both desktop and mobile
- Smooth scrolling navigation
- RSVP form
- Travel information
- Accommodation options
- Vintage floral design with custom backgrounds
- Running order of the day
- Day 2 event details

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

This project can be deployed to various platforms:

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Vercel
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect React and configure the build settings

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Add homepage field: `"homepage": "https://yourusername.github.io/wedding-invitation"`
4. Run: `npm run deploy`

## Project Structure

```
wedding/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── RunningOrder.js
│   │   ├── RSVP.js
│   │   ├── Travel.js
│   │   ├── Stay.js
│   │   ├── Day2.js
│   │   ├── Footer.js
│   │   └── Navigation.js
│   ├── assets/
│   │   └── [images]
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── assets/
    └── [images]
```

## Technologies Used

- React 18
- CSS3
- Google Fonts (Dancing Script, Montserrat, Share Tech Mono)

## License

Private project for personal use.
