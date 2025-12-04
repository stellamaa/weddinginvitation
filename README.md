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

### Netlify (Recommended)

1. **Push your code to GitHub** (if not already done)
   ```bash
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to [https://www.netlify.com](https://www.netlify.com)
   - Sign up or log in
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your `weddinginvitation` repository

3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `build`
   - Click "Deploy site"

4. **Your site will be live!** Netlify will provide a URL like `your-site-name.netlify.app`
   - You can customize the domain name in Site settings → Domain management

### Alternative: Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically detect React and configure the build settings
4. Click "Deploy"

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
