⚽ Project Overview

  VCM Football XI is a modern Angular-based frontend application that dynamically generates the optimal football squad based on a selected formation.

  It connects to a FastAPI backend that analyzes FIFA 2017 player data and returns the best XI using weighted performance metrics.

  The frontend renders players visually on a football pitch layout and updates in real-time based on user interaction.

🧠 What This Frontend Does

  Allows users to select formations (4-3-3, 4-4-2, 3-5-2, 4-2-3-1)

  Sends formation to backend API

  Receives optimized squad response

  Displays players visually on pitch

  Handles asynchronous rendering using Zone-less Angular

🏗 Tech Stack
  
  Technology-----	Purpose
  
  Angular 17-----	Frontend Framework
  
  TypeScript-----	Strong typing
  
  Standalone----- Components	Modern Angular structure
  
  Zone-less------ Architecture	Manual change detection
  
  Vite----------	Fast build tool
  
  Vercel---------	Deployment
  
🌍 Live Deployment

Frontend (Vercel):

    https://vcmfootballxi.vercel.app/

Backend (Render):

    https://predictionxi.onrender.com/

🧩 Architecture Overview

    User selects formation
            ↓
    Angular sends POST request
            ↓
    FastAPI backend processes FIFA 2017 data
            ↓
    Returns best XI squad
            ↓
    Angular renders players on pitch

🔌 API Integration

  The frontend communicates with:

  POST https://predictionxi.onrender.com/generate-team


  Request Body:

      {
        "formation": "4-3-3"
      }


  Response:

      {
        "goalkeeper": ["Player Name"],
        "defenders": ["Player1", "Player2", "Player3", "Player4"],
        "midfielders": ["Player1", "Player2", "Player3"],
        "attackers": ["Player1", "Player2", "Player3"]
      }

⚙️ Environment Configuration

📁 environment.ts (Development)

    export const environment = {
      apiUrl: 'http://127.0.0.1:8000'
    };

📁 environment.prod.ts (Production)

    export const environment = {
      apiUrl: 'https://predictionxi.onrender.com'
    };


Angular automatically switches based on build configuration.

🖥 Running Locally

1️⃣ Clone Repository

    git clone <your-frontend-repo>
    cd frontend

2️⃣ Install Dependencies

    npm install

3️⃣ Start Development Server

    ng serve


Open:

    http://localhost:4200

4️⃣ IMPORTANT – Backend Must Be Running

If using local backend:

    cd backend
    uvicorn main:app --reload


Backend must be running at:

    http://127.0.0.1:8000

🏭 Production Build

    ng build --configuration production


Output directory:

    dist/<project-name>/browser

🚀 Deployment (Vercel)

Build Command:

    ng build --configuration production

Output Directory:

    dist/<project-name>/browser

SPA Routing Fix (Important)

Create vercel.json:

    {
      "routes": [
        { "handle": "filesystem" },
        { "src": "/.*", "dest": "/index.html" }
      ]
    }

🧠 Zone-less Angular Implementation

  This project uses Angular in zone-less mode.

  That means:

  Angular does NOT automatically detect async updates.

  Manual change detection is required after HTTP responses.

  Example:
    
    constructor(private cdr: ChangeDetectorRef) {}
    
    this.http.post(...).subscribe(response => {
      this.team = response;
      this.cdr.detectChanges();
    });


  This prevents stale UI rendering and ensures instant updates.



🎯 Why This Project Matters

  This is not just a UI project.

  It demonstrates:

  Full-stack integration

  API consumption

  Production deployment

  Real-world debugging (CORS, zone-less)

  Modern Angular architecture

👨‍💻 Author

  Built as a full-stack deployed application combining:

Data analytics (FIFA 2017 dataset)

Backend optimization logic

Modern frontend visualization
