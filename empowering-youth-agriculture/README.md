Heroes – Empowering Youth Through Agribusiness
A responsive, mission-driven website built for the BSc Software Engineering Frontend Web Development module.

Table of Contents
Overview

Live Demo

Features

Technologies Used

Project Structure

Setup & Installation

Usage Guide

Rubric Alignment

Acknowledgments & Sources

Author

Overview
Heroes is a youth-led social enterprise addressing youth unemployment and rural-urban migration in Ghana by equipping young people in Northern Ghana with market-linked, climate-resilient agribusiness skills.

This multi-page, responsive website serves as the digital platform for Heroes, communicating its mission, program structure, team, and impact. The project demonstrates foundational frontend engineering skills including semantic HTML5, modern CSS layouts (Flexbox and Grid), client-side form validation, and a CSS-variable-driven dark mode theme toggle.

Live Demo
View the live site: https://your-username.github.io/heroes/

Features
Feature	Description
Home Page	Hero section with mission statement, stats, and call-to-action
About Page	Mission statement, problem breakdown, solution approach, team gallery (3+2 layout), and skills dashboard
Mission Page	Program phases table, 5 core components grid, CSS-only modal with detailed program information
Team Page	Professional biographies with hover-reveal overlays
Contact Page	Semantic form with real-time validation using regex patterns
FAQ Page	CSS-only accordion with 4 categories and 14 questions
Advanced Feature	CSS-variable-driven Light/Dark theme toggle with live variable inspector
Dark Mode	Persistent theme preference using localStorage
Responsive Design	Fully responsive across mobile, tablet, and desktop viewports
Technologies Used
Technology	Purpose
HTML5	Semantic markup for all pages
CSS3	Custom properties (variables), Flexbox, CSS Grid, media queries
JavaScript	Dark mode persistence (localStorage), mobile menu toggle
Font Awesome	Icons for problem cards and social elements
GitHub Pages	Deployment and hosting
Project Structure
text
heroes/
├── index.html              # Home page with hero section
├── about.html              # Mission, problem, solution, team, skills dashboard
├── mission.html            # Program table, 5 core components, CSS-only modal
├── contact.html            # Contact form with regex validation
├── team.html               # Team gallery with professional biographies
├── faq.html                # CSS-only accordion FAQ
├── advancedfeature.html    # Dark mode theme toggle with live inspector
├── styles.css              # Main stylesheet (variables, layout, responsive)
├── darkmode.css            # Dark mode overrides and toggle styling
├── darkmode.js             # localStorage theme persistence
├── main.js                 # Mobile menu toggle
├── pics/                   # Image assets
│   ├── farming.jpg
│   ├── tm.png
│   ├── debbie.jpeg
│   ├── nwandoo.jpeg
│   ├── patience.jpeg
│   └── mypicture.jpeg
└── README.md               # This file
Setup and Installation
1. Clone the Repository
bash
git clone https://github.com/your-username/heroes.git
cd heroes
2. Open in Browser
Simply open any .html file in your preferred browser. No build tools or dependencies are required.

3. (Optional) Deploy to GitHub Pages
Go to your repository on GitHub.

Navigate to Settings → Pages.

Under "Branch," select main and save.

Your site will be available at https://your-username.github.io/heroes/.

Usage Guide
Navigation
Persistent navigation bar across all pages with active state highlighting.

Mobile menu toggle collapses navigation on smaller screens.

Dark Mode
Toggle the switch in the navigation bar to switch between light and dark themes.

Preference is saved to localStorage and persists across pages and browser sessions.

Contact Form
Full Name: Required text field.

Email: Validates email format using regex.

Phone: Validates international format (^\+?[0-9]{8,15}$).

Reference Code: Validates custom pattern (^[A-Za-z]+_[0-9]{4}$).

Real-time validation feedback with :valid and :invalid pseudo-classes.

FAQ Accordion
Click any question to expand or collapse the answer.

CSS-only implementation using the checkbox hack.

Program Modal (Mission Page)
Click "Learn More About Our Program" or "View Full Program Details" to open a modal.

CSS-only modal using the checkbox hack.