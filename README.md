<p align="center">
  <img src="src/Assets/logo.svg" alt="Vendor App Logo" width="150"/>
</p>

# Vendor App

A platform to discover, promote, and connect with local food vendors.

---

## What This Project Does

Vendor App is a React-based web platform for users to:
- Browse and discover local vendors (e.g. restaurants, bakeries, catering services)
- View vendor details, ratings, location, distance, and status (open/closed)
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

The app is structured around reusable React components. 
- The landing page (`Landing.jsx`) renders a vendor carousel, promotions, and featured sections.
- `BrowsePage.jsx` allows users to search by keyword or category, view vendors in a grid, and navigate to more details.
- UI state (e.g. open drawers, scroll positions) is managed with React hooks like `useState` and `useRef`.
- Navigation between pages uses `window.location.assign()` and/or React Router `Link` components.
- All vendor data and images are presently mocked/statically included; backend integration can be added as needed.

---


