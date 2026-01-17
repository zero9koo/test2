# Blueprint: Dinner Menu Recommendation App

## Overview
A simple and fun web application that recommends dinner menus for users. It features a cute theme ("삐약아"), category filtering, social sharing, and dark mode.

## Project Outline
- **Core Features:**
  - Random menu recommendation.
  - Category filters (Korean, Japanese, Western, Chinese, Etc).
  - Copy menu name to clipboard.
  - Social media sharing (Twitter, Facebook).
  - Dark mode toggle with persistent settings via LocalStorage.
- **Design:**
  - Cute "Ppiyak" (Chick) theme with pastel colors.
  - Responsive layout for mobile and web.
  - Modern CSS features like variables and transitions.
- **Tech Stack:**
  - HTML5, CSS3, Vanilla JavaScript (ES Modules).
  - Unsplash API for high-quality food images.

## Current Task: Fix Recommended Menu Images (v3)
- **Problem:** Images fetched via keywords (loremflickr) were often inaccurate or unrelated to the menu items.
- **Solution:**
  - Replaced keyword-based URLs with **specific Unsplash Photo IDs** carefully selected for each menu item (e.g., specific IDs for Kimchi Stew, Bibimbap, etc.).
  - Implemented a **Loading State**:
    - Added a `pulse` animation in CSS to show a placeholder effect while the image is fetching.
    - Used JavaScript `load` and `error` events to manage the visibility and opacity of the image.
  - Refined the menu pool logic to ensure the name and image are updated simultaneously.
- **Next Steps:**
  - Verify that the specific images match the user's expectations.
  - Ensure the loading transition is smooth.
