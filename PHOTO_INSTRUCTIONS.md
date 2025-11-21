# How to Add Your Photo to the Website

## Step 1: Prepare Your Photo

1. Choose a professional headshot or portrait photo
2. Recommended dimensions: **500x500 pixels** (square)
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

## Step 2: Add Photo to the Project

**Option A (Recommended):**
Replace the placeholder file at:
```
/Users/abhi/Desktop/test_anti/frontend/public/profile.jpeg
```

**Option B:**
Add your photo with a different name (e.g., `abhijit.jpg`) to:
```
/Users/abhi/Desktop/test_anti/frontend/public/
```

Then update the image path in `Hero.jsx` (line 86) to match your filename.

## Step 3: Verify

1. Restart the frontend server if needed:
   ```bash
   cd frontend
   npm run dev
   ```

2. Visit `http://localhost:5173` to see your photo displayed in the hero section.

## Tips:
- Use a high-quality image for best results
- A square aspect ratio works best
- File size should be under 500KB for faster loading
