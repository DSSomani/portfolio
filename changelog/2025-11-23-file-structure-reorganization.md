# File Structure Reorganization

**Date:** November 23, 2025  
**Type:** Project Structure Update

## Changes Made

### Created New Directories
- `css/` - For all stylesheet files
- `js/` - For all JavaScript files
- `images/` - For all image files (PNG, JPG, etc.)
- `assets/` - For documents and other resources (PDFs, text files, PHP files)
- `changelog/` - For tracking all changes made to the project

### File Relocations

#### CSS Files
- `style.css` → `css/style.css`
- `animate.css` → `css/animate.css`

#### JavaScript Files
- `script.js` → `js/script.js`

#### Image Files
- `1.png` → `images/1.png`
- `2.png` → `images/2.png`
- `Dharmik Somani-1.png` → `images/Dharmik Somani-1.png`
- `profile.jpg` → `images/profile.jpg`

#### Asset Files
- `Dharmik somani.pdf` → `assets/Dharmik somani.pdf`
- `Dharmik somani2.pdf` → `assets/Dharmik somani2.pdf`
- `resume.pdf` → `assets/resume.pdf`
- `ABOUT RESPONSIVR.txt` → `assets/ABOUT RESPONSIVR.txt`
- `one page link.txt` → `assets/one page link.txt`
- `contact.php` → `assets/contact.php`

### Updated References in index.html

1. **CSS Link:** `href="style.css"` → `href="css/style.css"`
2. **Favicon:** `href="Dharmik Somani-1.png"` → `href="images/Dharmik Somani-1.png"`
3. **Profile Image:** `src="1.png"` → `src="images/1.png"`
4. **Resume Link:** Updated from absolute Windows path to relative path `assets/Dharmik somani2.pdf`
5. **JavaScript:** `src="script.js"` → `src="js/script.js"`

## New Project Structure

```
portfolio/
├── index.html
├── css/
│   ├── style.css
│   └── animate.css
├── js/
│   └── script.js
├── images/
│   ├── 1.png
│   ├── 2.png
│   ├── Dharmik Somani-1.png
│   └── profile.jpg
├── assets/
│   ├── Dharmik somani.pdf
│   ├── Dharmik somani2.pdf
│   ├── resume.pdf
│   ├── ABOUT RESPONSIVR.txt
│   ├── one page link.txt
│   └── contact.php
└── changelog/
    └── 2025-11-23-file-structure-reorganization.md
```

## Benefits

- **Better Organization:** Files are now grouped by type, making the project easier to navigate
- **Scalability:** Clear structure makes it easier to add new files in the future
- **Standard Practice:** Follows common web development conventions
- **Maintainability:** Easier to locate and update specific files
- **Cross-Platform:** Removed hardcoded Windows paths for better portability
