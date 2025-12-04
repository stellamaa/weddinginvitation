# Wedding Invitation Website

A beautiful, responsive wedding invitation website for Adam & Stephanie's wedding on September 12, 2025.

## Features

- Responsive design for both desktop and mobile
- Smooth scrolling navigation
- RSVP form
- Travel information
- Accommodation options
- Vintage floral design with custom backgrounds

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
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── assets/
    ├── bluebackground.png
    ├── blueflowers.png
    ├── doily.png
    ├── pinkflowers.png
    └── whiteflowers.png
```

## Customization

You can customize the wedding details by editing the component files in `src/components/`. The main sections are:

- **Header**: Couple names and event details
- **RunningOrder**: Schedule of events
- **RSVP**: RSVP form
- **Travel**: Travel and transportation information
- **Stay**: Accommodation options
- **Day2**: Day 2 event details

## Technologies Used

- React 18
- CSS3
- Google Fonts (Dancing Script, Montserrat)

