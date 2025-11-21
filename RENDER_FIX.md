# 🔧 Render Deployment Fix

## The Error You're Seeing

```
Service Root Directory "/opt/render/project/src/portfolio-website/tree/master/backend" is missing.
```

This means the root directory was set incorrectly.

---

## ✅ Correct Render Configuration

When creating your Web Service on Render, use **EXACTLY** these settings:

### Basic Settings:
- **Name**: `portfolio-backend` (or any name you want)
- **Repository**: `Abhijit7979/portfolio-website`
- **Branch**: `master`

### Build Settings:
- **Root Directory**: `backend` ✅ (just type "backend", nothing else)
- **Environment**: `Python 3`
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

### Advanced:
- **Auto-Deploy**: `Yes`

---

## 🚨 Common Mistakes to Avoid

❌ **Wrong**: `/backend`
❌ **Wrong**: `./backend`
❌ **Wrong**: `portfolio-website/backend`
❌ **Wrong**: `/opt/render/project/src/portfolio-website/tree/master/backend`

✅ **Correct**: `backend`

---

## Step-by-Step Deploy

1. **Make Repository Public** (I've done this for you ✓)

2. **Go to Render Dashboard**: https://dashboard.render.com

3. **Delete Old Service** (if exists):
   - Go to the failed service
   - Settings → Delete Web Service

4. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Choose "Public Git repository"
   - Paste: `https://github.com/Abhijit7979/portfolio-website`
   - Click "Connect"

5. **Configure** (copy these EXACTLY):
   ```
   Name: portfolio-backend
   Root Directory: backend
   Environment: Python 3
   Build Command: pip install -r requirements.txt
   Start Command: uvicorn app.main:app --host 0.0.0.0 --port $PORT
   Plan: Free
   ```

6. **Create Web Service** → Wait for deployment (5-10 min)

---

## ✅ Verify Deployment

Once deployed, test your backend:

1. Copy your backend URL from Render (e.g., `https://portfolio-backend-xxxx.onrender.com`)

2. Open in browser: `https://your-backend-url.onrender.com`

3. You should see:
   ```json
   {"message":"Welcome to Abhijit's Portfolio API"}
   ```

4. Test resume endpoint: `https://your-backend-url.onrender.com/api/resume`

If you see JSON data, backend is working! ✅

---

## Next: Update Vercel

After backend is deployed:

1. Go to Vercel → Your Project → Settings → Environment Variables

2. Add/Update:
   ```
   VITE_API_URL = https://your-render-url.onrender.com/api
   ```

3. Redeploy frontend

---

## Still Having Issues?

Share the error message and I'll help!
