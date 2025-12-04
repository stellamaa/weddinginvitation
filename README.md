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

### Netlify (Automatic Deployments)

This project is configured for Netlify with **automatic deployments** - your site will update automatically whenever you push changes to GitHub!

#### Initial Setup:

1. **Go to Netlify:**
   - Visit [https://www.netlify.com](https://www.netlify.com)
   - Sign up or log in (you can use your GitHub account)

2. **Connect Your Repository:**
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"Deploy with GitHub"**
   - Authorize Netlify to access your GitHub account
   - Select your repository: `stellamaa/weddinginvitation`

3. **Build Settings (Auto-detected):**
   - Netlify will automatically detect the `netlify.toml` file
   - Build command: `npm run build` ✅
   - Publish directory: `build` ✅
   - Click **"Deploy site"**

4. **Your site is now live!**
   - Netlify will provide a URL like `your-site-name.netlify.app`
   - You can customize the domain in **Site settings** → **Domain management**

#### Automatic Deployments (Already Set Up!):

Once connected, **every time you push to GitHub**, Netlify will:
- ✅ Automatically detect the changes
- ✅ Build your site
- ✅ Deploy the new version
- ✅ Update your live site

**No manual deployment needed!** Just:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

And Netlify will handle the rest automatically.

#### View Deployments:

- Go to your site dashboard on Netlify
- Click on **"Deploys"** to see all deployments
- Each push creates a new deployment automatically
- You can see build logs and deployment status

#### Custom Domain (Optional):

- Go to **Site settings** → **Domain management**
- Click **"Add custom domain"**
- Follow the instructions to configure your domain

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
