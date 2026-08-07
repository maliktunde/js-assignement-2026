# Car Dealer Landing Page - Design Assignment

## 📋 Project Overview

Your task is to replicate this car dealer landing page design. You will build it from scratch using **HTML** and **CSS** only. The design is clean, elegant, and focuses on a premium automotive brand experience.

---

## 🎨 Design Specifications

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Gold/Accent | `#b48b5c` | Buttons, icons, accents |
| Dark Text | `#1a1a1a` | Headings, main text |
| Secondary Text | `#4a4a4a` | Paragraph text |
| Light Background | `#faf9f7` | Page background |
| Card Background | `#ffffff` | Car cards |
| Border/Light Accent | `#ede8e1` | Badges, tags |
| Subtle Shadow | `rgba(0,0,0,0.06)` | Card shadows |

### Typography

- **Primary Font:** [Inter](https://fonts.google.com/specimen/Inter)
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Fallback:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Font Sizes (Reference)

| Element | Size |
|---------|------|
| Hero Title | 3.4rem |
| Section Headings | 1.8rem |
| Car Card Title | 1.3rem |
| Body Text | 1.1rem |
| Navigation | 0.95rem |

---

## 📐 Layout Structure
┌─────────────────────────────────────────┐
│ [Logo] [Nav] [Contact] │ <- Header/Nav
├─────────────────────────────────────────┤
│ │
│ [Badge] [Hero Image] │
│ [Headline] │
│ [Description] [2026 Label] │
│ [Buttons] │
│ │
├─────────────────────────────────────────┤
│ Featured Drives ──── View All → │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐│
│ │Icon/ │ │Icon/ │ │Icon/ │ │Icon/ ││
│ │Image │ │Image │ │Image │ │Image ││
│ │Title │ │Title │ │Title │ │Title ││
│ │Specs │ │Specs │ │Specs │ │Specs ││
│ │Price │ │Price │ │Price │ │Price ││
│ │[Tag] │ │[Tag] │ │[Tag] │ │[Tag] ││
│ └──────┘ └──────┘ └──────┘ └──────┘│
├─────────────────────────────────────────┤
│ © 2026 DriveLux [Social Icons]│ <- Footer
└─────────────────────────────────────────┘

```
┌─────────────────────────────────────────┐
│ [Logo] [Nav] [Contact] │ <- Header/Nav
├─────────────────────────────────────────┤
│ │
│ [Badge] [Hero Image] │
│ [Headline] │
│ [Description] [2026 Label] │
│ [Buttons] │
│ │
├─────────────────────────────────────────┤
│ Featured Drives ──── View All → │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐│
│ │Icon/ │ │Icon/ │ │Icon/ │ │Icon/ ││
│ │Image │ │Image │ │Image │ │Image ││
│ │Title │ │Title │ │Title │ │Title ││
│ │Specs │ │Specs │ │Specs │ │Specs ││
│ │Price │ │Price │ │Price │ │Price ││
│ │[Tag] │ │[Tag] │ │[Tag] │ │[Tag] ││
│ └──────┘ └──────┘ └──────┘ └──────┘│
├─────────────────────────────────────────┤
│ © 2026 DriveLux [Social Icons]│ <- Footer
└─────────────────────────────────────────┘
```

---

## 🖼️ Image Requirements

### 1. Hero Section Background Image

**Location:** Behind the "2026 collection" label in the hero section

**Requirements:**
- Replace the abstract background with a real car image
- The image should be high-quality and automotive-themed
- Use CSS `background-image` property
- Consider using a dark overlay or gradient for text readability

**Suggested Approach:**
```css
.hero-image {
    background-image: url('your-car-image.jpg');
    background-size: cover;
    background-position: center;
    /* Add a subtle overlay if needed */
}
```

## Free Image Sources:

Unsplash - Cars

Pexels - Cars

Pixabay - Cars

2. Featured Drives - Car Cards
Current State: Font Awesome icons

Task: Add actual vehicle images to each card

## Option A - Replace Icons Completely:
```html
<div class="car-card">
    <img src="elegance-s.jpg" alt="Elegance S" class="car-image">
    <h3>Elegance S</h3>
    <!-- rest of card content -->
</div>
```

## Option B - Maintain Icons + Add Images:

```html
<div class="car-card">
    <div class="car-image-wrapper">
        <img src="elegance-s.jpg" alt="Elegance S">
        <div class="car-icon-overlay">
            <i class="fas fa-car-side"></i>
        </div>
    </div>
    <!-- rest of card content -->
</div>
```
### Image Requirements:

- Square or 4:3 aspect ratio

- Consistent sizing across all cards

- Rounded corners to match the design aesthetic

- Consider hover effects (zoom, fade, etc.)

## 📝 HTML Structure Checklist
### Required Sections
- Header/Navigation
    - Logo with car icon

    - Navigation links (Inventory, Financing, Services, About)

    - Contact button with phone icon

-  Hero Section
    - "PREMIUM SELECTION" badge

    - Main headline

    - Description paragraph

    - Two action buttons (Browse cars, Schedule test)

    - Hero image area with 2026 collection label

    - Car background image in hero

- Featured Drives Section
    - Section title

    - "View all" link

    - 4 car cards with:

        - Car image (replacing or alongside icons)

        - Car name

        - Specifications

        - Price

        - Status tag

- Footer
    - Copyright text

    - Social media icons

## 🎯 CSS Requirements
### Must Include:
1. Google Fonts import for Inter font

2. Font Awesome for icons (CDN)

3. Flexbox or Grid for layout

4. Responsive design (mobile-friendly)

5. Hover effects on:
    - Buttons

    - Car cards

    - Navigation links

6. Custom properties (CSS variables) for colors

7. Box shadows for depth

8. Border radius for rounded elements

### Bonus Points For:
- Smooth animations/transitions

- Glassmorphism effects

- Dark mode toggle

- Interactive hover states on images (zoom, scale)

## 📁 File Structure
```
project/
├── index.html
├── style.css
├── README.md (documentation)
└── images/
    ├── hero-car.jpg
    ├── elegance-s.jpg
    ├── venture-x.jpg
    ├── sportivo-gt.jpg
    └── ion-ev.jpg
```
## 🔧 Technical Requirements
### HTML
- Semantic HTML5 elements

- Proper heading hierarchy

- Accessible (alt attributes, ARIA labels)

- Valid code (no errors)

### CSS
- External stylesheet (no inline styles)

- Well-organized (comments, grouping)

- CSS variables for theming

- Media queries for responsiveness

- No frameworks (pure CSS)

### 📱 Responsive Breakpoints
Breakpoint	Target
1280px+	Desktop (full layout)
800px	Tablet (hide nav links)
550px	Mobile (stack everything)

## 📚 Resources
### Icons (Font Awesome)

```html
<!-- Include in head -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

<!-- Example usage -->
<i class="fas fa-car"></i>
<i class="fas fa-phone-alt"></i>
<i class="fas fa-search"></i>
```

## Google Fonts
```html
<!-- Include in head -->
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet" />
```

## Image Placeholders (if needed)
- Lorem Picsum

- Placeholder.com

## ✅ Submission Checklist
Before submitting, ensure you have:

□ All HTML tags are closed
□ All images are properly linked and display correctly
□ CSS is properly organized and commented
□ The page looks good on desktop, tablet, and mobile
□ All links and buttons are functional
□ Font Awesome icons display correctly
□ Google Fonts load properly
□ No console errors
□ Include a README explaining your choices
---

## 💡 Tips for Success
1. Start with the structure - Build the HTML skeleton first

2. Use CSS variables - Makes color changes easier

3. Mobile-first - Design for mobile then scale up

4. Test frequently - Check in multiple browsers

5. Inspect the original - Use browser DevTools on similar designs

6- Keep it organized - Comment your CSS sections

## 📊 Grading Rubric

| Criteria | Weight | Description |
|----------|--------|-------------|
| Design Accuracy | 30% | How closely does it match the original? |
| Code Quality | 20% | Clean, semantic, well-organized code |
| Responsiveness | 20% | Works on all screen sizes |
| Image Implementation | 15% | Proper use of car images |
| CSS Polish | 10% | Transitions, hover effects, shadows |
| Documentation | 5% | README explaining your approach |
---

## 🚀 Getting Started
1. Create your project folder structure

2. Download or find suitable car images

3. Create index.html with the basic structure

4. Create style.css with the design system

5. Build each section step by step

6. Test responsiveness

7. Submit your project

---

Good luck! Take your time, experiment, and make it your own while staying true to the elegant design brief. 🚗✨