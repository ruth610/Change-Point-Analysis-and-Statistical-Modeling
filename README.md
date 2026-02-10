# Change Point Analysis and Statistical Modeling of Time Series Data

## Overview
This project focuses on analyzing how major political and economic events affect Brent oil prices. The goal is to detect changes and associate causes using statistical methods, specifically Bayesian Change Point Analysis.

## Structure
- `data/`: Contains raw and processed data (Brent oil prices, event data).
- `notebooks/`: Jupyter notebooks for EDA, modeling, and analysis.
- `src/`: Source code for data processing and modeling.
- `backend/`: Flask application for serving analysis results (Task 3).
- `frontend/`: React application for the dashboard (Task 3).
- `docs/`: Documentation, analysis plans, and reports.

## Objectives
1. Identify key events impacting Brent oil prices.
2. Quantify effects using statistical methods (PyMC).
3. Provide data-driven insights.

## Tasks
- **Task 1:** Laying the Foundation for Analysis (Data workflow, event research, EDA).
- **Task 2:** Change Point Modeling and Insight Generation (Bayesian model with PyMC).
- **Task 3:** Developing an Interactive Dashboard (Flask + React).

## Setup & Execution

### 1. Python Environment
Create a virtual environment and install dependencies:
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install -r backend/requirements.txt
```

### 2. Notebooks
Run the Jupyter notebooks in the `notebooks/` directory to perform the analysis:
- `01_EDA.ipynb`: Exploratory Data Analysis.
- `02_ChangePointAnalysis.ipynb`: Bayesian Change Point Detection.

### 3. Dashboard
**Backend (Flask):**
```bash
cd backend
python app.py
```
The API will run on `http://localhost:5000`.

**Frontend (React):**
Open a new terminal:
```bash
cd frontend
npm install
npm start
```
The dashboard will open at `http://localhost:3000`.
