# CCW Lyrics

A Next.js application for displaying church song setlists and lyrics with markdown support.

## Features

- Browse setlists by date
- View songs individually or in continuous scroll mode
- Dark/light theme toggle
- Adjustable font sizes for accessibility
- Markdown-formatted lyrics with proper styling

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Run the development server:
   ```bash
   yarn dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding Content

Songs and setlists are managed in `lib/data.ts`. To add new content:

1. Add songs to a setlist's `songs` array
2. Create new setlists by adding to the `setlists` array
3. Follow the existing TypeScript interfaces for `Song` and `Setlist`

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Radix UI components
- React Markdown