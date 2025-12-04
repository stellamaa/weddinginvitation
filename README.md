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

### GitHub Pages

This project is configured for GitHub Pages deployment.

1. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```
   This will build the project and push it to the `gh-pages` branch.

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub: https://github.com/stellamaa/weddinginvitation
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **Branch: `gh-pages`**
   - Click **Save**

3. **Your site will be live at:**
   - https://stellamaa.github.io/weddinginvitation
   - It may take a few minutes for the site to be available after the first deployment

4. **To update the site:**
   - Make your changes
   - Run `npm run deploy` again
   - The site will automatically update

### Alternative: Netlify or Vercel

You can also deploy to Netlify or Vercel by connecting your GitHub repository. They will automatically detect React and configure the build settings.

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
