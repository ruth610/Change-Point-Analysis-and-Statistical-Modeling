# Analysis Plan & Workflow

## 1. Analysis Workflow Steps
1.  **Data Ingestion**: Load Brent oil price data.
2.  **Preprocessing**: Convert dates, handle missing values, calculate returns.
3.  **Exploratory Data Analysis (EDA)**:
    *   Trend analysis
    *   Stationarity checks (ADF test)
    *   Volatility analysis
4.  **Event Data Integration**: Map external events to the timeline.
5.  **Modeling (Bayesian Change Point)**:
    *   Define priors (PyMC).
    *   Run MCMC sampling.
    *   Check convergence (Trace plots, R-hat).
6.  **Insight Generation**:
    *   Identify posterior distribution of switch points.
    *   Correlate found switch points with known events.
    *   Quantify impact (pre- vs post-event statistics).
7.  **Reporting**: Visualizations and written summary.

## 2. Assumptions
*   Market efficiency (to an extent): Prices reflect available information.
*   The Bayesian model assumes specific distributions (e.g., Normal/Poisson) for the data generation process.
*   ...

## 3. Limitations
*   Correlation does not imply causation.
*   External unanticipated shocks might overlap.
*   ...

## 4. Communication Channels
*   Interim Report (Markdown/PDF).
*   Interactive Dashboard (Web-based).
