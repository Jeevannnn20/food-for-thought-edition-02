# Food for Thought Challenge — Edition 02

A responsive website concept for Swiggy’s student case study competition, built to make the challenge easy to understand, explore and share for review.

**[View the live website on Vercel →](https://food-for-thought-edition-02.vercel.app/)**

**Status:** Design preview for stakeholder review. Edition 02 registration dates, the official registration link, final rules and rewards are awaiting confirmation.

![Food for Thought Challenge website preview](docs/website-preview.jpg)

## Project overview

The website refreshes the first edition’s familiar visual identity while keeping the main page compact. It uses the original hero artwork and Gilroy typefaces, with an integrated second-edition label, simple navigation and a light About/Problem section.

The main page includes:

- **About and Problem Statement:** competition context and the two core outcomes—driving preference and building stickiness.
- **How to enter:** team size, submission format and competition stages, with expandable submission guidance, judging criteria, tips and student initiatives.
- **Meet the class of ’25:** the previous edition’s winners, official photographs and participation highlights.
- **Good ideas. Great rewards:** the Edition 01 reward line-up, clearly labelled as a reference pending Edition 02 confirmation.
- **FFT V1:** a separate first-edition recap accessible from the top navigation.

The registration button currently opens an information dialog explaining that dates and the official entry link are coming soon. It does not collect registrations.

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

Desktop and mobile layouts have been checked, including mobile menu behavior, navigation to expandable guidance, FFT V1 switching and horizontal overflow. Winners appear before rewards on the main page.

Before the Edition 02 launch, confirm and update:

- Registration dates and official entry link
- Final eligibility, competition stages and submission requirements
- Final prize amounts and reward terms

## Content and visual references

- [Original Food for Thought Challenge website](https://www.foodforthoughtchallenge.in/)
- [Swiggy’s official 2025 competition recap](https://blog.swiggy.com/news/food-for-thought-challenge-2025-swiggys-first-ever-student-case-study-competition/)

Swiggy names, branding, original artwork, photographs and fonts remain associated with their respective owners. This repository contains the website implementation prepared for review.
