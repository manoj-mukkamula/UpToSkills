# Task 1 – Admin Settings Page (General Tab)
### UptoSkills MERN Stack Internship

This project is submitted as **Task 1** of the **UptoSkills MERN Stack Internship**.

---

## 📌 Objective

The objective of Task 1 was to build the **General Tab of the Admin Settings Page** for a real-world **Daycare Management SaaS Platform**, based on a provided Figma design and following the UptoSkills BrandKit guidelines.

---

## 🚀 Project Overview

This page is part of the **Admin Portal** of a Daycare Marketplace platform. It allows the platform admin to configure core settings such as platform name, support contact, timezone, language, and currency.

The implementation includes:
- Pixel-accurate layout matching the Figma design
- UptoSkills BrandKit colors, typography, and component styles
- Fully functional General Configuration form
- Two bonus features added beyond the task scope: **Dark Mode** and a **Language Picker**

---

## 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and semantic markup |
| CSS3 | Styling, dark mode via CSS variables, responsive layout |
| JavaScript (Vanilla JS) | Interactivity, form validation, tab switching, dark mode toggle |
| Poppins (Google Fonts) | Typography — as specified in UptoSkills BrandKit |
| Lucide Icons (CDN) | UI icons — matching Figma icon set |

---

## 🔗 Live Demo

View the live project here:  
**[Live Demo](https://manoj-mukkamula.github.io/UpToSkills/Task%201/)**

---

## 📂 Project Structure

```
Task-1/
├── index.html      # Page structure
├── styles.css      # All styling (light/dark theme, responsive)
└── script.js       # All interactivity
```

---

## ✅ Features Implemented

### Core (as per task requirements)
- **Admin Sidebar** with all navigation items and active state highlight
- **Platform Settings** topbar with 2-row layout matching Figma exactly
- **5-tab bar** — General, Notifications, Security, Payment, Platform (pill-shaped)
- **General Configuration form** with 6 fields:
  - Platform Name (text input)
  - Timezone (dropdown)
  - Support Email (text input with email validation)
  - Support Phone (text input with phone validation)
  - Default Language (dropdown)
  - Currency (dropdown)
- **Reset to Default** button — restores all 6 fields to original values
- **Save Changes** button — validates form and saves settings
- **Form validation** — real-time error messages on invalid input
- **BrandKit compliance** — `#00bea3` green, `#ff6d34` orange, Poppins font throughout

### Bonus Features (added for enhanced UX)
- **Dark Mode Toggle** — switches between light and dark theme, preference saved in `localStorage`
- **Language Picker Dropdown** — clicking the language icon opens a dropdown; selecting a language automatically updates the Default Language field in the form
- **Save button disabled by default** — enables only when form changes are detected, disables again after saving or resetting
- **Toast Notifications** — success/error feedback on Save, Reset, and language change
- **Responsive Design** — fully functional on desktop, tablet, and mobile
  - Sidebar collapses on mobile with hamburger menu
  - Form switches from 2-column to 1-column on small screens
  - Tab bar becomes horizontally scrollable on mobile

---

## 🎨 BrandKit Compliance

| Element | Value | Source |
|---|---|---|
| Primary Color | `#00bea3` (Skills Green) | BrandKit `README.md` |
| Accent Color | `#ff6d34` (Upto Orange) | BrandKit `README.md` |
| Font | Poppins 400/500/600/700 | BrandKit `fonts/font-links.md` |
| Border Radius | 8px / 12px / 14px | BrandKit design tokens |
| Input Background | `#f3f3f5` | Project `theme.css` |

---

## 👤 Author

**Manoj Mukkamula**  
MERN Stack Intern — UptoSkills  
GitHub: [https://github.com/manoj-mukkamula](https://github.com/manoj-mukkamula)  
LinkedIn: [https://www.linkedin.com/in/manoj-mukkamula-baa58a2a7/](https://www.linkedin.com/in/manoj-mukkamula-baa58a2a7/)

---

*This project fulfills the requirements specified in Task 1 of the UptoSkills MERN Stack Internship.*
