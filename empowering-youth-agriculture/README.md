HEROES — EMPOWERING YOUTH THROUGH AGRICULTURE

INTRODUCTION

Heroes is a youth-led social enterprise tackling two of Ghana's most pressing challenges: unemployment and rural-urban migration. We're doing this by equipping young people in Northern Ghana with climate-resilient agribusiness skills that create real economic opportunities.

This website is our public face — it tells our story, explains our program, and showcases our team. It's also a demonstration of modern web development practices, built with semantic HTML, responsive CSS, and thoughtful interactivity.


WHAT WE DO

Our flagship program is a 3-month agribusiness incubation that trains 40 young people per cohort, with a strong focus on gender balance (50% women). Participants learn:

- Modern, climate-smart farming techniques
- Agribusiness management and financial literacy
- How to connect with buyers and markets

We don't just train and release — we provide starter inputs, ongoing mentorship, and direct links to buyers. Our goal is to move graduates from learning to earning, creating a sustainable cycle of income generation and food security.


WHY THIS MATTERS

Ghana's youth unemployment rate sits at 34.4%. Young people, especially in the north, often feel they have no choice but to migrate south to Accra in search of work. This puts pressure on cities while draining rural communities of their energy and potential.

We believe agriculture — when done right — can be the solution. By combining modern techniques with business skills and market access, we're showing young people that they can build meaningful, profitable careers without leaving their communities.


WEBSITE STRUCTURE

The site is organised across seven pages, each serving a specific purpose:

Home
A welcoming landing page with our mission at a glance, key statistics, and a clear call to action.

About
A deeper dive into the problem we're solving and our approach. Includes hard numbers and our three-step solution framework.

Mission
Our complete program breakdown — a detailed table of the 3-month curriculum, five core components, expected outcomes, and a modal that expands on our methodology.

Team
Meet the five people driving Heroes forward. A responsive grid layout with hover overlays that reveal each team member's role.

FAQ
A CSS-only accordion answering 14 common questions across categories like program eligibility, application process, and impact.

Contact
A validation-driven contact form with real-time feedback. Fields include email, phone, reference code, and full name — all checked with regex patterns.

Advanced Feature
Documentation of our dark mode implementation, including a live CSS variable inspector that shows how colours change in real time.


KEY FEATURES

Semantic HTML
Every page uses proper structural elements like <header>, <nav>, <main>, <section>, and <footer>. ARIA labels improve accessibility, and data-page attributes help identify each page.

Flexbox and Grid Layouts
The design is built with modern CSS layout techniques. The hero section uses a two-column grid, the team gallery scales responsively, and the contact form adapts with Flexbox. Everything responds gracefully across devices, with breakpoints at 992px, 768px, and 480px.

Smart Form Validation
The contact form validates on blur and input events using regex patterns:
- Email: Standard email format validation
- Phone: Accepts 8 to 15 digits, optionally with a leading +
- Reference Code: Must match the pattern Heroes_0000
- Full Name: Must be a non-empty string
Each field gets visual feedback — green for valid, red for invalid — making it clear what needs fixing.

Theme Toggle (Dark Mode)
Our dark mode is built entirely with CSS custom properties. All colours are defined on :root, and toggling dark mode simply adds one class to the body. Everything updates automatically — no per-element overrides needed. The preference is saved in localStorage so it persists across pages and visits. The Advanced Feature page includes a live inspector that shows variable values as they change.

CSS-Only Accordion
The FAQ section uses hidden checkboxes and labels. The :checked pseudo-class drives smooth max-height transitions — no JavaScript required.

CSS-Only Modal
A similar technique powers the program details modal on the Mission page. Clean, accessible, and lightweight.

Mobile Navigation
A hamburger menu with animated toggle bars collapses to a single-column layout on smaller screens.


TECHNOLOGY STACK

Markup: HTML5 (semantic elements)
Styling: CSS3 — Flexbox, Grid, Custom Properties, Transitions, Pseudo-classes
Interactivity: Vanilla JavaScript (form validation, mobile menu, theme toggle)
Icons: Font Awesome 6.5
Fonts: Google Fonts — Inter (body), DM Serif Display (headings)
Version Control: Git / GitHub
AI Assistance: OpenCode CLI (big-pickle model)


HOW TO RUN THE PROJECT

1. Get the files
   git clone <repository-url>
   cd empowering-youth-agriculture

2. Open in a browser — No server required. Just open index.html in any modern browser and you're good to go.

3. Toggle dark mode — Click the switch in the navigation bar. Your preference will be remembered.


PROJECT STRUCTURE

empowering-youth-agriculture/
├── index.html              # Home
├── about.html              # About
├── mission.html            # Mission
├── team.html               # Team gallery
├── faq.html                # FAQ accordion
├── contact.html            # Contact form
├── advanced-feature.html   # Theme toggle documentation
├── styles.css              # Main styles
├── darkmode.css            # Dark mode overrides
├── darkmode.js             # Theme toggle logic
├── main.js                 # Mobile menu
├── README.md               # This file
└── pics/                   # Images
   ├── farming.jpg
   ├── tm.png
   ├── debbie.jpeg
   ├── nwandoo.jpeg
   ├── patience.jpeg
   ├── mypicture.jpeg
   └── call.png


AI TOOL USAGE

We used OpenCode CLI (big-pickle model) and deepseek throughout development for:
- Structuring semantic HTML across all pages
- Building responsive Flexbox and Grid layouts
- Writing regex patterns for form validation
- Architecting the CSS-variable-driven dark mode
- Cleaning up code and consolidating styles
- Drafting this README


MEET THE TEAM

- Thierry — Project Lead (oversees the full program cycle)
- Debbie — Operations Coordinator (logistics, scheduling, resource allocation)
- Nwando — Agricultural Trainer (hands-on training in crop production and livestock)
- Patience — Community Outreach Lead (community engagement and partnerships)
- Shania — Finance & Administration (budgeting, reporting, donor transparency)

end!