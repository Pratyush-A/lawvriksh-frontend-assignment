# Promage - Project Management Dashboard

A modern, responsive project management dashboard built with React, TypeScript, and Tailwind CSS. This application demonstrates extensive implementation of UX design laws and micro-interactions to create an intuitive, efficient user experience.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd promage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

## 🎨 UX Laws Applied

### 1. **Fitts's Law**
*"The time to acquire a target is a function of the distance to and size of the target."*

**Implementation:**
- **Large Click Targets**: All interactive elements (buttons, links, dropdowns) have minimum touch targets of 44x44px on mobile and 48x48px on desktop
- **Strategic Positioning**: 
  - Primary action "Create New Project" button is prominently placed at the top of the sidebar (high-frequency action in easy-to-reach location)
  - Dropdown toggles are positioned at the edges of containers for easy access
- **Padding & Spacing**: Generous padding around clickable elements reduces accidental clicks
- **Profile Menu**: Large circular profile area (45x45px) in the navbar corner for quick access

**Examples:**
```tsx
// Create New Project Button - Large, easy target
className="h-[48px] w-[184px] bg-white rounded-3xl"

// Dropdown Button - Minimum 44px height
className="h-[40px] sm:h-[44px] w-full sm:w-[160px]"
```

### 2. **Hick's Law**
*"The time it takes to make a decision increases with the number and complexity of choices."*

**Implementation:**
- **Limited Navigation**: Only 3 main menu items (Dashboard, Projects, Tasks) reducing cognitive load
- **Grouped Information**: Stats cards show 4 key metrics in identical format for quick scanning
- **Progressive Disclosure**: 
  - Dropdowns reveal options only when needed
  - Mobile sidebar hidden by default, revealed on demand
- **Category Filters**: Today Task component uses 4 clear categories (All, Important, Notes, Links) instead of overwhelming options
- **Consistent Actions**: Primary actions use the same visual pattern throughout the app

**Examples:**
```tsx
// Limited, clear navigation options
const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "tasks", label: "Tasks", icon: ListChecks },
];

// Simplified tab structure
const tabs = ["All", "Important", "Notes", "Links"];
```

### 3. **Miller's Law**
*"The average person can only keep 7 (±2) items in their working memory."*

**Implementation:**
- **Chunked Information**: 
  - Stats cards limited to 4 key metrics
  - Project summary shows 5 projects at a time
  - Workload chart displays 7 team members (within the 5-9 range)
- **Visual Grouping**: Related information grouped in distinct cards with clear boundaries
- **Categorization**: Tasks grouped by tabs, projects grouped by status
- **Summary Views**: Complex data reduced to essential metrics (e.g., "72% Completed" instead of showing raw numbers everywhere)

**Examples:**
```tsx
// Workload data - 7 items maximum
const data: Person[] = [
    { name: "Sam", value: 7, circles: 3 },
    { name: "Meldy", value: 8, circles: 4 },
    // ... 7 total items
];

// Stats cards - 4 key metrics
const cards = [
    { title: "Total revenue" },
    { title: "Projects" },
    { title: "Time spent" },
    { title: "Resources" }
];
```

### 4. **Jakob's Law**
*"Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know."*

**Implementation:**
- **Familiar Patterns**:
  - Sidebar navigation on the left (standard web app pattern)
  - Profile menu in top-right corner
  - Hamburger menu icon for mobile navigation
  - Checkboxes for task completion
  - Progress indicators as circular/linear bars
- **Standard Icons**: Using universally recognized icons (Briefcase for Projects, ListChecks for Tasks, LayoutGrid for Dashboard)
- **Dropdown Behavior**: Standard chevron indicators that rotate when dropdown opens
- **Color Conventions**: 
  - Green for completed/positive
  - Red for errors/negative/at risk
  - Orange for warnings/ongoing
  - Yellow for delayed

**Examples:**
```tsx
// Standard mobile menu icon
{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}

// Conventional color coding
case "Completed": return "bg-[#1A932E2E] text-[#1A932E]";
case "At risk": return "bg-[#EE201C2E] text-[#EE201C]";
```

### 5. **Law of Proximity**
*"Objects that are near, or proximate to each other, tend to be grouped together."*

**Implementation:**
- **Visual Grouping**:
  - Profile information (avatar, name, title) tightly grouped
  - Status badges positioned next to related content
  - Filter buttons grouped together in a row
  - Stats grouped in cards with clear separation
- **Whitespace Usage**: Adequate spacing between unrelated elements to prevent false groupings
- **Card Layouts**: Related information contained within bordered containers
- **Consistent Spacing**: Using Tailwind's spacing scale (gap-2, gap-3, gap-4) for predictable relationships

**Examples:**
```tsx
// Profile section - tightly grouped related info
<div className="flex flex-row items-center gap-2">
    <img src="/assets/profile.png" />
    <span className='font-semibold'>
        <p>Alex Main</p>
        <p>Product Manager</p>
    </span>
</div>

// Filter buttons - grouped with minimal gap
<div className="flex flex-wrap gap-2">
    {["Project", "Project Manager", "Status"].map(...)}
</div>
```

### 6. **Law of Common Region**
*"Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary."*

**Implementation:**
- **Card Containers**: All major sections enclosed in rounded rectangles with consistent background color (#f2eae5)
- **Table Rows**: Subtle hover states create temporary regions
- **Dropdown Menus**: White background with shadow creates clear boundary
- **Sidebar**: Black background clearly separates navigation from content
- **Mobile Overlay**: Semi-transparent backdrop distinguishes menu from content

**Examples:**
```tsx
// Card with clear boundary
className="w-full lg:w-[480px] bg-[#f2eae5] rounded-3xl shadow-sm p-4"

// Dropdown region
className="absolute right-0 mt-2 bg-white rounded-2xl shadow-md"
```

### 7. **Law of Uniform Connectedness**
*"Elements that are visually connected are perceived as more related than elements with no connection."*

**Implementation:**
- **Progress Bars**: Visual connection between label and completion status
- **Connected Data**: Lines in gauge chart connect data points
- **Table Rows**: Horizontal lines create visual flow across columns
- **Status Indicators**: Colored backgrounds connect status text to its meaning
- **Icon + Text**: Icons paired with labels create unified elements

**Examples:**
```tsx
// Progress circle connecting percentage to visual representation
<svg className="w-full h-full">
    <circle stroke={getProgressColor(project.status)} />
    <text>{project.progress}%</text>
</svg>

// Connected workload visualization
{[...Array(person.circles)].map((_, i) => (
    <div className="flex flex-col items-center justify-end space-y-1">
```

### 8. **Serial Position Effect (Primacy & Recency)**
*"Users have a propensity to best remember the first and last items in a series."*

**Implementation:**
- **Key Metrics First**: Most important stat (Total Revenue) appears first in the cards row
- **Primary Action Top**: "Create New Project" button at the top of sidebar
- **Critical Status Last**: Progress percentage prominently placed in the last column of project table
- **Help Button Last**: Support button positioned at the bottom of sidebar for easy memory recall
- **Navigation Order**: Most frequently used "Dashboard" appears first in menu

**Examples:**
```tsx
// Primary metric positioned first
const cards = [
    { title: "Total revenue" }, // Most important first
    { title: "Projects" },
    { title: "Time spent" },
    { title: "Resources" }
];

// Progress in last column for recency effect
<th className="py-2 font-semibold">Progress</th> // Last column
```

### 9. **Aesthetic-Usability Effect**
*"Users often perceive aesthetically pleasing design as design that's more usable."*

**Implementation:**
- **Consistent Design System**:
  - Unified color palette (warm beige #ebdfd7, accent orange #E65F2B)
  - Consistent border radius (rounded-3xl for cards, rounded-full for buttons)
  - Custom typography (Aeonik Pro font family)
- **Smooth Transitions**: All interactions have smooth animations (200-300ms)
- **Thoughtful Spacing**: Generous whitespace using Tailwind's spacing system
- **Visual Hierarchy**: Clear size differentiation (headings, subtext, body)
- **Micro-animations**: Hover effects, button scales, dropdown rotations
- **Color Harmony**: Limited, purposeful color palette for professional appearance

**Examples:**
```tsx
// Consistent border radius throughout
className="rounded-3xl"  // Cards
className="rounded-full" // Buttons, badges, inputs

// Smooth transitions
className="transition-all duration-200"
className="hover:scale-[1.03] transition-transform duration-200"
```

### 10. **Tesler's Law (Law of Conservation of Complexity)**
*"For any system there is a certain amount of complexity which cannot be reduced."*

**Implementation:**
- **Simplified Data Display**: Complex project data reduced to essential columns (Name, Manager, Due Date, Status, Progress)
- **Smart Defaults**: "All" selected by default in filters, "Last 30 days" as default time range
- **Progressive Complexity**: 
  - Mobile view shows fewer columns
  - Dropdowns hide complexity until needed
  - Advanced features accessible but not overwhelming
- **Calculated Metrics**: Backend complexity (calculations) hidden, showing only clean results (72% completed)
- **Automatic Behaviors**: Auto-close dropdowns, responsive layouts handle complexity automatically

**Examples:**
```tsx
// Simplified mobile view - hiding less critical columns
<td className="py-3 hidden sm:table-cell">{project.manager}</td>

// Smart defaults
const [selectedRange, setSelectedRange] = useState("Last 30 days");
const [activeTab, setActiveTab] = useState("All");
```

## 🎯 Micro-Interactions Implemented

### Visual Feedback
1. **Hover States**: All interactive elements change appearance on hover
2. **Active States**: Pressed buttons show subtle scale reduction
3. **Loading States**: Dropdown animations when opening/closing
4. **Status Indicators**: Color-coded badges for instant recognition

### Navigation
1. **Active Route Highlighting**: Current page highlighted in sidebar
2. **Mobile Menu**: Smooth slide-in/out animation
3. **Overlay Backdrop**: Semi-transparent layer when mobile menu is open

### Data Visualization
1. **Animated Progress Circles**: SVG-based circular progress indicators
2. **Gauge Chart**: Semi-circular gauge with animated segments
3. **Workload Bubbles**: Stacked circles showing team capacity

### User Input
1. **Dropdown Menus**: Smooth expand/collapse with rotate animation
2. **Search Input**: Focus states with ring effect
3. **Checkbox Animations**: Checkmark appearance on task completion

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Key responsive features:
- Collapsible sidebar on mobile with hamburger menu
- Flexible grid layouts that stack on smaller screens
- Touch-optimized interaction targets (44px minimum)
- Horizontal scrolling for wide tables on mobile
- Adaptive text sizes and spacing

## 🛠 Technologies Used

- **React 18**: Component-based UI framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide React**: Icon library
- **Vite**: Fast build tool and development server

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx           # Top navigation bar
│   ├── Sidebar.tsx          # Left sidebar navigation
│   ├── StatsCards.tsx       # Statistics overview cards
│   ├── ProjectSummary.tsx   # Project table
│   ├── ProgressDashboard.tsx # Gauge chart
│   ├── Todaytask.tsx        # Task list with tabs
│   └── ProjectsWorkload.tsx # Team workload visualization
├── pages/
│   └── homepage.tsx         # Main dashboard page
├── App.tsx                  # Main app component with routing
├── fonts.css               # Custom font definitions
└── index.css               # Global styles

```

## 🎨 Design Decisions

### Color Palette
- **Primary Background**: #ebdfd7 (Warm beige)
- **Card Background**: #f2eae5 (Lighter beige)
- **Accent Color**: #E65F2B (Orange)
- **Sidebar**: #000000 (Black)
- **Text**: #292D32 (Dark gray)

### Typography
- **Font Family**: Aeonik Pro (custom font)
- **Hierarchy**: Bold headings, semibold subheadings, regular body text
- **Sizes**: Responsive scaling using Tailwind's text utilities

### Spacing
- **Card Padding**: 16-18px
- **Gap Between Sections**: 24-40px (gap-6 to gap-10)
- **Consistent Margins**: Using Tailwind's spacing scale

## 🔍 Performance Considerations

- Component-level state management (React hooks)
- Efficient re-renders using proper React patterns
- Optimized SVG rendering for charts
- CSS transitions instead of JavaScript animations
- Lazy loading potential for route-based code splitting

## 🚧 Future Enhancements

- Dark mode support
- Real-time data updates
- Advanced filtering and sorting
- Export functionality
- User settings and preferences
- Collaborative features
- Mobile app version

## 📄 License

This project is created for educational purposes demonstrating UX principles and modern web development practices.

## 👥 Credits

Designed and developed as a demonstration of UX laws and micro-interactions in modern web applications.

---

For detailed information about specific micro-interactions and their implementation, see `PHASE_NOTES.md`.