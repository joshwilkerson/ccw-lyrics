# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 React application for displaying church song setlists and lyrics. It's a lyrics viewer app that organizes songs by date-based setlists with markdown-formatted lyrics.

## Development Commands

- `yarn dev` - Start development server
- `yarn build` - Build production bundle
- `yarn lint` - Run ESLint
- `yarn start` - Start production server

## Architecture

### Data Structure
- Songs and setlists are stored in `lib/data.ts` as TypeScript objects
- Each `Song` has: id, title, lyrics (markdown string)
- Each `Setlist` has: id, date, songs array
- No database - all data is hardcoded in the data file

### Routing Structure
- `/` - Homepage showing all setlists
- `/setlist/[date]` - Shows individual setlist with song list or continuous view toggle
- `/setlist/[date]/[songId]` - Individual song viewer

### Key Components
- `SetlistCard` - Displays setlist overview on homepage
- `SongViewer` - Accordion-style song display with lyrics
- `MarkdownRenderer` - Renders song lyrics from markdown
- `FontSizeControls` - User font size adjustment
- `ThemeToggle` - Dark/light mode switching

### Styling
- Uses Tailwind CSS with dark mode support
- Radix UI components via shadcn/ui
- Global font size context for accessibility

### State Management
- FontSizeContext for global font size state
- No external state management - uses React hooks
- Theme handled by next-themes

## Adding New Songs/Setlists

To add content, edit `lib/data.ts` and append to the `setlists` array. Follow the existing pattern with proper TypeScript types.