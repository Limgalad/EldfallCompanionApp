# Eldfall Chronicles Companion App

A companion application for the Eldfall Chronicles tabletop skirmish game. This app provides a quick reference for missions, rules, spells, and more.

## Features

- **Quest Overview**: Explore competitive quests, season objectives, and tactical maps.
- **Rules Wiki**: Access core rules, traits, skills, and class-specific masteries.
- **Spell Book**: Browse spells by school, element, and level.
- **Bug Reporting**: Integrated bug report system with SMTP email notifications.
- **PWA Support**: Installable as a progressive web app for offline-ready access.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory based on `.env.example`.

### Environment Variables

The application requires several environment variables to function correctly, especially for the bug reporting system.

| Variable | Description | Default |
|----------|-------------|---------|
| `BUG_REPORT_EMAIL` | The email address that will receive bug reports. | `koendeurloo1987@gmail.com` |
| `SMTP_HOST` | The SMTP server host (e.g., `smtp.gmail.com`). | - |
| `SMTP_PORT` | The SMTP server port. | `587` |
| `SMTP_USER` | The username for SMTP authentication. | - |
| `SMTP_PASS` | The password or app-specific password for SMTP. | - |
| `SMTP_SECURE` | Whether to use a secure connection (`true` for port 465, `false` for others). | `false` |

### SMTP Configuration Steps (Gmail Example)

If you want to use Gmail to send bug reports, follow these steps:

1. **Enable 2-Step Verification**: Go to your Google Account settings and enable 2-Step Verification.
2. **Generate an App Password**:
   - Go to the "Security" tab in your Google Account.
   - Under "Signing in to Google," select "App passwords."
   - Select "Mail" for the app and "Other (Custom name)" for the device (e.g., "Eldfall Companion").
   - Click "Generate" and copy the 16-character password.
3. **Update `.env`**:
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=587`
   - `SMTP_USER=your-email@gmail.com`
   - `SMTP_PASS=your-16-character-app-password`
   - `SMTP_SECURE=false`

## Development

To start the development server:
```bash
npm run dev
```

To build the application for production:
```bash
npm run build
```

To run the production server:
```bash
npm run start
```

## Linting & Testing

- **Linting**: `npm run lint`
- **Testing**: `npm run test`

## License

© 2026 Eldfall Chronicles Companion. All rights reserved. Created for the Eldfall Community.
