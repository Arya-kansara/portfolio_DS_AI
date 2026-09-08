export const profile = {
  name: "Arya Kansara",
  role: "Data Scientist | Machine Learning & Generative AI",
  tagline: "I build ML models and LLM-powered systems — from RAG pipelines to predictive models, shipped end-to-end.",
  location: "Surat, Gujarat",
  email: "kansaraarya00@gmail.com",
  phone: "9157947370",
  github: "https://github.com/Arya-kansara",
  linkedin: "https://linkedin.com/in/arya-kansara",
  resumeNote: "BCA graduate • CGPA 8.10 • Available immediately",
};

export const about = {
  paragraph:
    "BCA graduate with hands-on experience across Data Science and applied Generative AI — predictive modeling, SQL analytics, Python-based EDA and feature engineering, and end-to-end LLM pipeline development. I'm comfortable building and evaluating ML models, developing BI dashboards, or integrating LLM APIs into applied AI products people actually use.",
  education: {
    degree: "Bachelor of Computer Application (BCA)",
    school: "Uka Tarsadia University, Gujarat",
    period: "Aug 2023 – May 2026",
    detail: "CGPA: 8.10 / 10",
  },
  publication: {
    title: "Analysing Effectiveness of Deep Learning Models for Car Model Classification",
    venue: "Published, IRJMETS",
  },
};

export const skillGroups = [
  {
    title: "Machine Learning",
    items: ["Scikit-learn", "XGBoost", "Feature Engineering", "Model Evaluation", "Deep Learning Fundamentals"],
  },
  {
    title: "Generative AI & LLMs",
    items: ["RAG Pipelines", "LLM Integration", "Prompt Engineering", "NLP", "Groq API", "Llama 3.3"],
  },
  {
    title: "Data & Querying",
    items: ["Python", "SQL", "Pandas", "NumPy", "EDA", "Statistics"],
  },
  {
    title: "Systems & BI",
    items: ["Supabase (pgvector)", "Flask", "Power BI", "DAX", "Data Visualization"],
  },
];

export const projects = [
  {
    title: "Multilingual AI Study Assistant — Notegoo",
    stack: ["Python", "Flask", "Groq API", "Supabase pgvector", "edge-tts"],
    metric: "3",
    metricLabel: "languages — EN / HI / GU",
    stats: ["Full RAG pipeline", "Zero-cost stack"],
    points: [
      "Built a multilingual AI study assistant that converts PDF notes into spoken, tutor-style explanations in English, Hindi and Gujarati.",
      "Implemented a full RAG pipeline using Supabase's vector database for semantic document search, adaptive LLM response styling by question type, and persistent conversation memory.",
      "Handled real production challenges — API deprecation migration, rate-limit management, and multiple database/integration bugs — entirely on a zero-cost tech stack.",
    ],
    link: "https://github.com/Arya-kansara",
  },
  {
    title: "Spotify Music Recommendation System",
    stack: ["Python", "Scikit-learn", "XGBoost", "Flask"],
    metric: "2-model",
    metricLabel: "ensemble ranking engine",
    stats: ["Random Forest + XGBoost", "Deployed on Render"],
    points: [
      "Built an ensemble recommendation engine combining Random Forest and XGBoost with candidate pooling (artist, album, genre) to rank song matches.",
      "Deployed a full-stack Flask web app with search autocomplete and dynamic genre/count filtering; production-configured with Gunicorn.",
    ],
    link: "https://github.com/Arya-kansara/Spotify_Recommendation",
  },
  {
    title: "Medical Insurance Cost Predictor",
    stack: ["Python", "Scikit-learn"],
    metric: "86.54%",
    metricLabel: "accuracy (Random Forest)",
    stats: ["vs 78.33% Linear Regression", "Systematic model comparison"],
    points: [
      "Built and compared multiple regression models to predict medical insurance costs from age, BMI, smoking status and region.",
      "Random Forest outperformed Linear Regression by a clear margin, validated through systematic model comparison.",
    ],
    link: "https://github.com/Arya-kansara/Medical-Insurance-Cost-Predictor",
  },
  {
    title: "Food Delivery BI & Prediction System",
    stack: ["Python", "SQL", "Scikit-learn", "Power BI"],
    metric: "3",
    metricLabel: "classification models compared",
    stats: ["Logistic, Decision Tree, RF", "Full metric suite"],
    points: [
      "Engineered features from a 10,000-order dataset and built a classification pipeline to predict order cancellations.",
      "Evaluated models using accuracy, precision, recall, F1-score and confusion matrix — not accuracy alone.",
    ],
    link: "https://github.com/Arya-kansara/Food_Delivery_Business_Intelligence",
  },
];

export const currentlyLearning = ["Statistics & Model Evaluation", "Docker", "AWS", "Computer Vision (PyTorch)"];
