# Project Specification: Web-Based Asciinema CAST Editor

## 1. Project Overview

### Title: 
Asciinema Studio (Web-Based CAST Editor & Merger)

### Description:
A client-side web application designed to edit, trim, highlight, and merge .cast files (Asciinema terminal recordings) directly in the browser. It provides a non-destructive editing workflow where users can visually select parts of a terminal recording to keep or combine multiple recordings into a single file.

## 2. Technical Stack

### Frontend:
HTML, CSS, JAVASCRIPT 

### Library: 
asciinema-player (v3.7.1) for rendering terminal playback.

### Data Processing:
Client-side JSON parsing and manipulation of the Asciinema v2 file format.

### Environment:
Runs entirely in the browser.

## 3. Functional Requirements

### Input Format: 
Must support Asciinema v2 JSON format.

### Performance: 
Must handle standard terminal session files (up to ~50MB) without freezing the browser.

### Non-Destructive: 
The application must never modify the original uploaded file; it only generates new files.

### Offline Capability: 
The application must function without an active internet connection.

## 4. User Interface (UI) Design

### Theme: 
Dark Mode (Background #111, Text #eee) to match standard terminal aesthetics.

### Controls: 
Button groups, numeric inputs for resolution, and dropdowns for speed.

### Feedback: 
Status bar messages indicating "Waiting," "Loaded," or "Exporting."

## 5. Features

### Trim Editor:

*Non-Destructive Editing:* Your original file is never modified.

*"Keep" Workflow:* visually select the best parts of your recording to keep. The tool automatically stitches them together.

*Interactive Timeline:* Drag handles to set start/end times and scrub through the video with a real-time playhead.

*Instant Preview:* Watch your edited version before exporting.

*Customization:* Adjust playback speed (1.0x, 1.5x, 2.0x) and screen resolution.

### Video Merger:

*Batch Processing:* Upload multiple .cast files at once.

*Sequential Stitching:* Joins files seamlessly in the order listed.

*Header Preservation:* Automatically retains the configuration (theme, shell, terminal size) of the master file.

---

# HOW TO USE OF WEBSITE

Click on the Trim or Combine videos.


## How to Trim a Video

1. Click *"Trim & Highlight"* on the home page.

2. Upload a *( .cast )* file.

3. Drag the Cyan Handles on the timeline to cover a specific section you want to keep.

4. Click *"Mark Selection to KEEP"*. A green block will appear.

5. Repeat this for all the good parts of the video.

6. Click *"Preview Result"* to watch the stitched video.

7. Click *"Export Selections"* to download Trimming.cast.

## How to Combine Videos

1. Click "Combine Videos" on the home page.

2. Select multiple *( .cast )* files.

3. Review the file order in the list (remove any unwanted files).

4. Click *"Merge & Download"* to get combined.cast.

## Requirements
### Browser: 
A modern web browser (Chrome, Firefox, Safari, Edge).

### Input Files: 
Valid Asciinema v2 JSON format (.cast).
