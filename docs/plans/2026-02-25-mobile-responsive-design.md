# Mobile Responsive Fixes Design

**Date:** 2026-02-25
**Status:** Approved

## Goal
Fix 4 mobile display issues so the site looks good on smartphones (375px and 320px widths).

## Changes

### 1. Hero Split Background (HIGH)
- At 768px and below: show only hero1.jpeg (right image), hide left
- Make the visible image full-width instead of 50%

### 2. Hero Buttons (MEDIUM)
- At 768px and below: reduce min-width, make buttons full-width and stack vertically

### 3. Hero Stats (MEDIUM)
- At 768px and below: reduce gap from 48px to 24px
- At 480px: further reduce gap

### 4. Results Table (HIGH)
- Wrap tables in a scrollable container with overflow-x: auto
- Or add overflow-x: auto to existing table containers

## Files
- css/style.css (media queries)
- index.html, en.html (table wrapper if needed)
