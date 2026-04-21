# LittleSteps Admin Dashboard

Admin Dashboard page for the LittleSteps Daycare Management Platform.
Built as Task 2 of the UptoSkills MERN Stack Internship.

---

## Objective

The goal of Task 2 was to build the Admin Dashboard page of the LittleSteps platform based on the provided Figma design. The page displays key platform statistics, data visualizations, pending approvals, and a recent activity feed, all using mock data since the backend is not ready yet.

---

## Live Demo
## 🔗 Live Demo

View the live project here:  
**[Live Demo](https://admin-dashboard-one-pearl.vercel.app/)**

---

## Project Structure

```
src/
├── components/
│   ├── Icons.jsx                     # All SVG icons used across the dashboard
│   ├── layout/
│   │   ├── Sidebar.jsx               # Sidebar navigation with active state
│   │   └── Topbar.jsx                # Top header with bell and user profile
│   └── dashboard/
│       ├── StatCard.jsx              # Reusable stat card component
│       ├── UserGrowthChart.jsx       # Bar chart using Recharts
│       ├── RevenueChart.jsx          # Line chart using Recharts
│       ├── PendingApprovals.jsx      # Approval list with approve/reject actions
│       └── RecentActivity.jsx        # Activity feed with type-based icons
├── pages/
│   └── DashboardPage.jsx             # Assembles all dashboard sections
├── data/
│   └── mockData.js                   # All dummy data for the dashboard
├── styles/
│   └── globals.css                   # CSS variables, reset, scrollbar
├── App.jsx                           # Root layout shell
└── main.jsx                          # Entry point
```

---

## Features

### Stats Section
Four cards at the top showing Total Users, Active Children, Daycare Centers, and Total Revenue. Each card has a color-coded icon, the current value, and a growth badge.

### Charts
Two charts side by side. The bar chart shows registered vs active user growth from January to April. The line chart shows monthly revenue in lakhs over the same period. Both use Recharts and have custom tooltips.

### Pending Center Approvals
A list of daycare centers waiting for admin approval. Each entry has the center name, city, submission time, and approve/reject buttons. Approving or rejecting removes the entry from the list.

### Recent Activities
A feed showing the latest platform events like new registrations, role changes, payments received, and reports generated. Each activity type has its own icon and color.

---

## Technologies Used

| Technology | Purpose |
|---|---|
| React 18 | Component-based UI |
| Vite | Dev server and build tool |
| Recharts | Bar and line charts |
| Plus Jakarta Sans | Font (Google Fonts) |
| Plain CSS variables | Theming and design tokens |

No Tailwind, no styled-components. Just clean CSS variables for full control.

---

## Design Reference

Figma: https://www.figma.com/make/qny6mIQib4GSyemX0EckQV/

Colors:

| Token | Value | Usage |
|---|---|---|
| Orange brand | #F97316 | Active nav, icons, charts, badges |
| Sidebar bg | #FFFFFF | Light sidebar matching Figma |
| Page bg | #F4F6FA | Main content background |
| Card bg | #FFFFFF | All cards and chart containers |
| Text primary | #0F172A | Headings and values |
| Text muted | #94A3B8 | Labels, axis ticks, meta info |
| Border | #E8EDF5 | Card borders, dividers |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Open http://localhost:5173 in your browser.

---

## Notes

- All data is mock. Structure is ready for real API calls when backend is available.
- Only the Dashboard page is implemented as per Task 2 scope.
- Other nav pages (Centers, Users, Reports, Settings) show a placeholder screen.

---

## Author

Manoj Mukkamula
MERN Stack Intern, UptoSkills
GitHub: https://github.com/manoj-mukkamula
LinkedIn: https://www.linkedin.com/in/manoj-mukkamula-baa58a2a7/

---

This project fulfills the requirements of Task 2 of the UptoSkills MERN Stack Internship.
