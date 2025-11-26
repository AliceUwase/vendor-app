<p align="left">
  <img src="src/Assets/logo.svg" alt="Vendor App Logo" width="150"/>
</p>

A platform to discover, promote, and connect with local food vendors.

---

## What This Project Does

Vendor App is a React-based web platform for users to:
- Browse and discover local vendors 
- View vendor details, ratings, location, distance, and status 
- Register your own business or connect with your local community
- Search vendors by category or name
- Review and rate business

---

## How to Run

1. **Install dependencies**
    ```bash
    npm install
    ```

2. **Run the development server**
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**
    ```bash
    npm run build
    ```

4. **Run tests**
    ```bash
    npm test
    ```

---

## Main Features

- **Vendor Carousel:** Highlights popular vendors with ratings, status, and distance.
- **Category Search:** Easily search for vendors by category (e.g. Bakery, Catering, Restaurant).
- **Promotional Sections:** Encourages local business signups and community engagement.
- **Responsive Design:** Usable on desktop and mobile.

---

## What I Used to Build This

- **ReactJS** - Frontend UI library
- **React Router** - Navigation and routing
- **CSS** - Custom and module styling
- **Create React App** - Boilerplate and development tooling

---

## How the Code Works

1. The app structure:
   - Uses reusable React components for each UI section.

2. Main pages:
   - The landing page (`Landing.jsx`):
     - Displays  popular vendors.
     - Shows promotional callouts to register or join the community.
     - Features specials and order-online sections.
   - The browse page (`BrowsePage.jsx`):
     - users search by vendor name or keyword.
     - search  by category.
     - Displays vendors 
    
3. How state and navigation work:
   - UI state is managed with React hooks
   - Navigation between pages uses both:
     - `window.location.assign()` for direct redirects.
     - React Router's `<Link>` components for client-side routing.


---


