# 📊 Referral Dashboard App

A modern and responsive Referral Dashboard built using **React.js** that enables users to track referral statistics, manage referral links and codes, and monitor referral activity through an interactive data table with search and pagination functionality.

---

## 🌐 Live Demo

🚀 **Live Application:**  
https://referral-dashboard-56g1r7p9t-gouthamraju13s-projects.vercel.app

---

## 📖 Project Overview

The Referral Dashboard App provides users with a centralized interface to monitor referral performance and earnings. The application displays referral-related metrics, referral links and codes, and referral history through a responsive and user-friendly dashboard.

The project focuses on:

- Responsive UI implementation
- API integration
- Search and filtering functionality
- Pagination
- Component-based architecture
- Modern React development practices

---

## ✨ Features

### 🧭 Header & Navigation

- Company logo
- Navigation menu
  - Home
  - About Us
  - Courses
  - Projects
  - Contact
- Search bar
- User profile section
- "Try for Free" call-to-action button

---

### 📈 Referral Statistics

Displays referral metrics using dashboard cards:

- Total Balance
- Discount Percentage
- Total Referral
- Discount Amount
- Commission Amount
- Total Earning
- Commission Discount
- Total Bank Transfer

Each card includes:

- Icon
- Title
- Value

---

### 🔗 Referral Links & Codes

- Referral Link section
- Referral Code section
- Copy-to-clipboard functionality
- User-friendly interaction feedback

---

### 📋 Referral Table

Displays referral data fetched from the API.

#### Table Columns

- Name
- Service Name
- Date
- Profit

#### Search Functionality

- Case-insensitive search
- Filters records by Name
- Displays "No matching data" when no results are found

#### Pagination

- 10 rows per page
- Previous and Next controls
- Dynamic page updates

---

### 📱 Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile

Responsive behavior includes:

- Rearranged dashboard cards
- Mobile-friendly table layout
- Responsive navigation menu

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|----------|
| React.js | Frontend Library |
| JavaScript | Application Logic |
| CSS | Styling |
| React Hooks | State Management |
| Axios / Fetch API | API Integration |
| React Icons | UI Icons |
| Vite | Build Tool |

---

## 🌐 API Integration

Referral table data is fetched from:

```text
https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/d4457a9c-6134-46a5-b31c-60ad13a3e2f6_userData.json
```

### Data Handling

- API data fetching
- Loading states
- Error handling
- Search filtering
- Pagination logic

---

## ⚛️ React Concepts Implemented

### Functional Components

Built entirely using React functional components.

### Hooks

- useState
- useEffect

### State Management

Managed:

- API data
- Search queries
- Pagination state
- UI interactions

### Conditional Rendering

Implemented for:

- Loading states
- Error states
- Empty search results

---

## 📂 Project Structure

```text
src
│
├── components
│   ├── Header
│   ├── Pagination
│   ├── ReferralPanel
│   ├── ReferralTable
│   ├── StatsCards
│
├── assets
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Gouthamraju13/Referral-Dashboard.git
```

### Navigate to Project

```bash
cd Referral-Dashboard
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## 🔧 Available Scripts

| Command | Description |
|----------|-------------|
| npm run dev | Start development server |
| npm run build | Create production build |
| npm run preview | Preview production build |

---

## 🎯 Assignment Requirements Fulfilled

### ✅ Header & Navigation

- Logo
- Navigation links
- Search bar
- User profile
- CTA button

### ✅ Statistics Cards

- 8 referral statistics cards
- Icons and values

### ✅ Referral Links

- Referral link display
- Referral code display
- Copy functionality

### ✅ API Integration

- Fetched referral table data from API
- Dynamic rendering

### ✅ Search Functionality

- Case-insensitive filtering
- No matching data state

### ✅ Pagination

- 10 records per page
- Navigation controls

### ✅ Responsive Design

- Desktop
- Tablet
- Mobile

---

## 📈 Development Highlights

- Built reusable React components
- Implemented API integration and data management
- Developed search and pagination features
- Created responsive layouts using Flexbox and CSS Grid
- Applied modern React Hooks and component architecture

---

## 🔮 Future Enhancements

- Sorting functionality
- Export referral data
- Advanced filters
- Dark mode
- User authentication
- Dashboard analytics charts

---

## 👨‍💻 Author

**Goutham Raju**

---

## 📄 License

This project is developed for educational purpose.
