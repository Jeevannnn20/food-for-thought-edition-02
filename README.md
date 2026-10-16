# Food for Thought Challenge — Edition 02

A responsive website for Swiggy’s student case study competition. FFT V2 asks: **What should Swiggy build next for India’s college students?**

**[View the live website on Vercel →](https://food-for-thought-edition-02.vercel.app/)**

**Status:** Updated with the supplied FFT V2 brief. Competition registration closes **30 October 2026**. The official competition registration URL is pending; Student Rewards signup is available. Submission deadline, finale date/location and detailed prize terms remain to be announced.

![Food for Thought Challenge website preview](docs/website-preview.jpg)

## Project overview

The website refreshes the first edition’s familiar visual identity while keeping the main page compact. It uses the original hero artwork and Gilroy typefaces, with an integrated second-edition label, simple navigation and a light About/Problem section.

The main page includes:

- **About and problem statement:** discover an unmet student need, validate the opportunity, design a new solution and explain why Swiggy should solve it sustainably.
- **How to enter:** 2–4 students from the same college, all batches and disciplines at eligible Indian colleges. Every member must register for Student Rewards; each student may join only one team.
- **Five-slide submission guide:** campus insight, proposed solution, user journey, business impact and execution plan. Campus-level validation is mandatory. AI is optional; AI-led ideas should explain its role and show a prototype/mock-up wherever feasible.
- **Selection and judging:** AI-assisted screening, top 50 progressing towards selection of 6–7 in-person national finalists, and qualitative finale criteria without invented weights.
- **FAQs and business context:** Swiggy Food, Dineout, Instamart and Student Rewards.
- **2025 winners and FFT V1:** retained first-edition photographs, results and separate recap; winners appear before Edition 02 rewards.
- **Registration:** a two-step journey separating Student Rewards signup from competition team registration.

### Registration behavior

1. Every participant can use the [official Student Rewards link](https://swiggy.onelink.me/888564224/u631l8dw).
2. Competition team registration closes **30 October 2026**. Its official URL is intentionally omitted until supplied; the pending button is disabled.

Student Rewards signup does **not** register a team for the competition. The website does not collect student data or accept case uploads itself. Once supplied, replace the disabled button in `#register` with a link to the official competition platform and update its explanatory text and FAQ.

## Technology

- HTML for content and structure
- CSS for responsive layouts and visual styling
- Vanilla JavaScript for mobile navigation, edition switching, expandable guidance links and the registration information dialog
- Static hosting on Vercel

No package installation, build step, backend or environment variables are required to run the website locally.

## Run locally

Requires Python 3 and a modern web browser.

```sh
git clone https://github.com/Jeevannnn20/food-for-thought-edition-02.git
cd food-for-thought-edition-02
python3 -m http.server 4173 --directory dist
```

Open **http://localhost:4173** in your browser. Because this repository is private, cloning requires an authenticated GitHub account with access.

## Repository structure

```text
.
├── README.md
├── vercel.json                  # Static hosting configuration
├── docs/
│   └── website-preview.jpg      # README preview image
└── dist/
    ├── index.html               # Website content and sections
    ├── styles.css               # Styling, fonts and responsive layouts
    ├── app.js                   # Navigation and interactions
    └── assets/                  # Fonts, artwork, photographs and checklist
```

To update content, edit `dist/index.html`. To change the visual design, edit `dist/styles.css`. Interactive behavior is in `dist/app.js`.

## Deployment

The current live preview is hosted at:

**https://food-for-thought-edition-02.vercel.app/**

The included `vercel.json` sets `dist` as the output directory for static hosting. This repository is a source handoff of the current website; automatic deployment from GitHub has not been configured. Pushing a commit to this repository alone will not update the existing live preview.

## Review notes

Checked desktop and 390px mobile layouts, including horizontal overflow, mobile menu closing after navigation, links opening guidance/FAQs, FFT V1 switching, the Student Rewards URL and the disabled competition registration button. JavaScript syntax, internal anchors and local assets were also checked.

Before competition entry can open, add the official registration URL. The following details still need confirmation:

- Submission deadline and platform-specific file/upload instructions
- National finale date and location
- Cash prize amounts and detailed reward terms
- Any final eligible-college list and detailed screening parameters

The internal marketing plan and tentative operational review details from the brief are not published as student-facing commitments.

## Content and visual references

- [Original Food for Thought Challenge website](https://www.foodforthoughtchallenge.in/)
- [Swiggy’s official 2025 competition recap](https://blog.swiggy.com/news/food-for-thought-challenge-2025-swiggys-first-ever-student-case-study-competition/)

Swiggy names, branding, original artwork, photographs and fonts remain associated with their respective owners. This repository contains the website implementation prepared for review.
