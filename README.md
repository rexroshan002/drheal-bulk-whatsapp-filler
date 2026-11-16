# Dr. Heal Bulk WhatsApp Form Filler

A Manifest V3 Chrome Extension that automates populating **New Bulk WhatsApp Message** forms in Dr. Heal's Frappe/ERPNext portal across single or multiple open tabs in the active browser window.

## Features
- **Single & Multi-Tab Batch Filling:** Populates either the active tab or all matching form tabs left-to-right within the current Chrome window (1 time slot per tab).
- **Branch & Category Presets:** Pre-configured for **HSR Layout** and **Banashankari (BSK)** across 1st Visit (English & Kannada), Follow-up (Senior Doctors), and First Come First Serve (FCFS) templates.
- **Automatic Date Generation:** Defaults to tomorrow's date in both English (`DD-MM-YYYY`) and Kannada formats.
- **Live Payload Preview:** Inspect generated Titles and JSON Template Variables for single or multiple tabs before injecting.

## Installation (Developer Mode)
1. Clone or download this repository to your computer.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the project folder containing `manifest.json`.
