# Vercel Deployment Guide

## 🚀 Deploying Your Portfolio to Vercel

### Prerequisites
- GitHub account (already set up ✓)
- Vercel account (sign up at https://vercel.com with your GitHub account)

---

## Part 1: Deploy Backend (FastAPI)

Since Vercel is optimized for frontend hosting, deploy your backend to **Render** (free tier):

### Step 1: Deploy Backend to Render

1. **Go to Render**: https://render.com and sign in with GitHub

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository: `Abhijit7979/portfolio-website`
   - Configure:
     - **Name**: `portfolio-backend` (or any name you prefer)
     - **Root Directory**: `backend`
     - **Environment**: `Python 3`
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
     - **Plan**: Free

3. **Click "Create Web Service"**

4. **Copy your backend URL** (will be something like `https://portfolio-backend-xxxx.onrender.com`)

---

## Part 2: Deploy Frontend to Vercel

### Step 1: Import Your GitHub Repository

1. **Go to Vercel**: https://vercel.com and sign in with GitHub

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your repository: `Abhijit7979/portfolio-website`

### Step 2: Configure Build Settings

Vercel will auto-detect Vite. Configure these settings:

- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Add Environment Variable

Before deploying, add your backend URL:

- Click "Environment Variables"
- Add:
  - **Name**: `VITE_API_URL`
  - **Value**: `https://your-render-backend-url.onrender.com/api` (use your actual Render URL)
  - **Environment**: Production, Preview, Development

### Step 4: Deploy

- Click "Deploy"
- Wait for deployment to complete (usually 2-3 minutes)
- You'll get a URL like: `https://your-portfolio-xxxx.vercel.app`

---

## Part 3: Update Backend CORS

After deployment, update your backend CORS settings:

1. Go to your Render dashboard
2. Navigate to your backend service
3. Click "Environment" tab
4. Add environment variable (or update `backend/app/main.py`):
   - Add your Vercel URL to the `origins` list
   - Example: `https://your-portfolio-xxxx.vercel.app`

Or manually edit `backend/app/main.py`:
```python
origins = [
    "http://localhost:5173",
    "https://your-portfolio-xxxx.vercel.app",  # Add your Vercel URL
    "*"
]
```

Commit and push changes - Render will auto-deploy.

---

## 🎉 Done!

Your portfolio is now live:
- **Frontend**: `https://your-portfolio-xxxx.vercel.app`
- **Backend API**: `https://portfolio-backend-xxxx.onrender.com`

---

## Auto-Deployment

Both platforms support auto-deployment:
- **Push to GitHub** → Automatic deployment on Vercel and Render
- No manual deployment needed after initial setup!

---

## Custom Domain (Optional)

### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

### On Render:
1. Go to Settings → Custom Domain
2. Add your domain
3. Update DNS records

---

## Troubleshooting

**Frontend not loading data?**
- Check if `VITE_API_URL` environment variable is set correctly in Vercel
- Ensure backend is running on Render
- Check browser console for CORS errors

**Backend CORS errors?**
- Add your Vercel URL to backend CORS origins
- Redeploy backend after updating

**Need help?**
- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
