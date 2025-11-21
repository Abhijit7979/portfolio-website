# 🔧 Deployment Troubleshooting Guide

## Error: "Failed to fetch. Please ensure the backend is running."

This error means your frontend cannot connect to the backend API. Follow these steps:

---

## Step 1: Verify Backend is Deployed

### Option A: Deploy to Render (Recommended - Free)

1. Go to https://render.com and sign in with GitHub
2. Click "New +" → "Web Service"
3. Connect repository: `Abhijit7979/portfolio-website`
4. Configure:
   ```
   Name: portfolio-backend
   Root Directory: backend
   Environment: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn app.main:app --host 0.0.0.0 --port $PORT
   ```
5. Click "Create Web Service"
6. **Wait for deployment** (5-10 minutes first time)
7. **Copy your backend URL**: `https://portfolio-backend-XXXX.onrender.com`

### Test Your Backend:
Open this URL in browser: `https://your-backend-url.onrender.com`

You should see: `{"message":"Welcome to Abhijit's Portfolio API"}`

If you see this, backend is running! ✅

---

## Step 2: Set Environment Variable in Vercel

1. Go to https://vercel.com → Your Project
2. Click "Settings" → "Environment Variables"
3. Add new variable:
   ```
   Key: VITE_API_URL
   Value: https://your-backend-url.onrender.com/api
   ```
   ⚠️ **IMPORTANT**: Add `/api` at the end!
4. Select: ✅ Production ✅ Preview ✅ Development
5. Click "Save"

---

## Step 3: Redeploy Frontend

After adding environment variable:

1. Go to "Deployments" tab in Vercel
2. Click "..." menu on latest deployment → "Redeploy"
3. Wait for deployment to complete

---

## Step 4: Verify in Browser

Open browser console (F12) and check:

1. **Network Tab** - Look for failed requests
2. **Console Tab** - Look for error messages

### Common Issues:

**404 Error on API calls?**
- Check if you added `/api` at the end of `VITE_API_URL`
- Should be: `https://backend-url.onrender.com/api` ✅
- NOT: `https://backend-url.onrender.com` ❌

**CORS Error?**
- Your backend needs to allow your Vercel URL
- See Step 5 below

**Still seeing "Failed to fetch"?**
- Backend might not be deployed yet
- Check Render dashboard - backend should show "Live"

---

## Step 5: Update Backend CORS (If needed)

If you see CORS errors in console:

1. Edit `backend/app/main.py`
2. Update origins list:
   ```python
   origins = [
       "http://localhost:5173",
       "https://your-vercel-app.vercel.app",  # Add your Vercel URL
       "*"  # This allows all origins (remove in production if needed)
   ]
   ```
3. Commit and push to GitHub
4. Render will auto-deploy

---

## Quick Checklist

- [ ] Backend deployed to Render and showing "Live" status
- [ ] Backend URL accessible in browser (shows welcome message)
- [ ] `VITE_API_URL` set in Vercel environment variables
- [ ] Environment variable includes `/api` at the end
- [ ] Frontend redeployed after adding environment variable
- [ ] Vercel URL added to backend CORS origins

---

## Alternative: Deploy Backend to Vercel (Not Recommended)

If you insist on hosting backend on Vercel:

1. Vercel doesn't officially support long-running FastAPI apps
2. Better to use Render (free) or Railway for backend
3. Vercel is optimized for frontend hosting

---

## Need More Help?

**Check Backend Logs:**
- Render Dashboard → Your Service → Logs

**Check Frontend Build Logs:**
- Vercel Dashboard → Deployments → Click on deployment → Build Logs

**Still stuck?**
Share the error message from browser console and I can help further!
