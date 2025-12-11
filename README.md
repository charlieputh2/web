# Professional Website - Next.js

A modern, professional website built with Next.js featuring Web Development and SEO services.

## Features

- **Home Page**: Welcome section with Services overview and Lift button
- **Services Page**: Detailed information about Web Development and SEO services
- **Order Form**: Professional order form with validation and local storage
- **Form Validation**: Email mandatory when bill not made by someone else
- **Local Storage**: Form data persists in browser local storage
- **Success Popup**: Confirmation message on successful submission
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Professional UI**: Modern gradient designs and smooth transitions

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
web/
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Home page
│   ├── globals.css         # Global styles
│   ├── services/
│   │   └── page.jsx        # Services page
│   └── order/
│       └── page.jsx        # Order form page
├── components/
│   ├── Header.jsx          # Navigation header
│   └── Footer.jsx          # Footer component
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Pages

### Home Page (/)
- Welcome heading
- Services section with Web Development and SEO overview
- Lift button linking to Services page
- Order button linking to Order form

### Services Page (/services)
- Detailed Web Development services
- Detailed SEO services
- Order Now button

### Order Page (/order)
- Name field (required)
- Phone number field (required, minimum 10 digits)
- Email field (mandatory if bill not made by someone else)
- Checkbox for bill made by someone else
- Form validation
- Success popup on submission
- Local storage integration

## Form Validation Rules

- **Name**: Required
- **Phone**: Required, minimum 10 digits
- **Email**: Mandatory unless "Bill is being made by someone else" is checked
- **Email Format**: Must be valid email format

## Local Storage

Form data is automatically saved to browser local storage and restored on page reload.

## Technologies Used

- **Next.js 14**: React framework
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: useState, useEffect for state management

## Building for Production

```bash
npm run build
npm start
```

## License

This project is open source and available under the MIT License.
