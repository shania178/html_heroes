# Heroes – Empowering Youth Through Agribusiness

> A responsive, mission-driven website built for the BSc Software Engineering Frontend Web Development module.

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage Guide](#usage-guide)
- [Rubric Alignment](#rubric-alignment)
- [Acknowledgments & Sources](#acknowledgments--sources)
- [Author](#author)

---

## Overview

**Heroes** is a youth-led social enterprise addressing youth unemployment and rural–urban migration in Ghana by equipping young people in Northern Ghana with market-linked, climate-resilient agribusiness skills.

This multi-page, responsive website serves as the digital platform for Heroes, communicating its mission, program structure, team, and impact. The project demonstrates foundational frontend engineering skills including semantic HTML5, modern CSS layouts (Flexbox & Grid), client-side form validation, and a CSS-variable-driven dark mode theme toggle.

---

## Live Demo

**View the live site:** ()

---

## Features

| Feature | Description |
|---------|-------------|
| ** Home Page | Hero section with mission statement, stats, and call-to-action |
| ** About Page | Mission statement, problem breakdown, solution approach, team gallery (3+2 layout), and skills dashboard |
| ** Mission Page | Program phases table, 5 core components grid, CSS-only modal with detailed program info |
| ** Team Page | Professional biographies with hover-reveal overlays |
| ** Contact Page | Semantic form with real-time validation using regex patterns (`^\+?[0-9]{8,15}$` and `^[A-Za-z]+_[0-9]{4}$`) |
| ** FAQ Page | CSS-only accordion with 4 categories and 14 questions |
|  Advanced Feature | CSS-variable-driven Light/Dark theme toggle with live variable inspector |
|  Dark Mode | Persistent theme preference using `localStorage` |
|  Responsive | Fully responsive across mobile, tablet, and desktop viewports |

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup for all pages |
| **CSS3** | Custom properties (variables), Flexbox, CSS Grid, media queries |
| **JavaScript** | Dark mode persistence (`localStorage`), mobile menu toggle |
| **Font Awesome** | Icons for problem cards and social elements |
| **GitHub Pages** | Deployment and hosting |


---

## Setup & Installation

### 1. Clone the Repository
bash
git clone https://github.com/your-username/heroes.git
cd heroes

### 2. Open in Browser
Simply open any .html file in your preferred browser. No build tools or dependencies are required.

### 3. (Optional) Deploy to GitHub Pages
Go to your repository on GitHub.

Navigate to Settings → Pages.

Under "Branch," select main and save.

Your site will be available at https://your-username.github.io/heroes/.

### Usage Guide

### Navigation
- Persistent navigation bar across all pages with active state highlighting.

- Mobile menu toggle collapses navigation on smaller screens.

### Dark Mode
- Toggle the switch in the navigation bar to switch between light and dark themes.

- Preference is saved to localStorage and persists across pages and browser sessions.

###  Contact Form

- Full Name: Required text field.

- Email: Validates email format using regex.

- Phone: Validates international format (^\+?[0-9]{8,15}$).

- Reference Code: Validates custom pattern (^[A-Za-z]+_[0-9]{4}$).

- Real-time validation feedback with :valid and :invalid pseudo-classes.

### FAQ Accordion
- Click any question to expand or collapse the answer.

- CSS-only implementation using the checkbox hack.

### Program Modal (Mission Page)

- Click "Learn More About Our Program" or "View Full Program Details" to open a modal.

- CSS-only modal using the checkbox hack.


### Acknowledgments and Sources

### Sources
- Font Awesome – Icons used throughout the site. fontawesome.com

- Google Fonts – System font stack with 'Segoe UI' fallback.

- Images – All images are original assets created for this project.

### AI Disclosure
This project was developed as a group assessment for the BSc Software Engineering – Frontend Web Development module. Generative AI tools were used as supplementary learning aids for:

- Explaining CSS Grid and Flexbox layout concepts

- Debugging layout overflow issues

- Optimizing regular expressions for form validation

All code represents our own individual authorship and understanding. AI interactions were logged and referenced in accordance with APA 7th Edition guidelines.

### Third-Party Code
No third-party code or boilerplate was used in this project. 

### Authors
- Thierry

- Debbie

- Nwando

- Patience

- Shania

Course: BSc Software Engineering, Year 1
Module: Frontend Web Development – June to October 2026
Faculty: Chris Bergue

### License
This project was created for educational purposes as part of the BSc Software Engineering programme at African Leadership College of Higher Education.
