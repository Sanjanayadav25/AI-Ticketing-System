# 🤖 AI Ticketing System - RAG Powered Helpdesk Assistant

An AI-powered Ticketing System built using **React, FastAPI, LangChain, FAISS, and Groq LLM**. The application analyzes employee support tickets, retrieves relevant information from company knowledge documents using **Retrieval-Augmented Generation (RAG)**, and generates intelligent resolutions.

This project demonstrates practical implementation of **Large Language Models (LLMs)**, **semantic search**, **vector databases**, and **Retrieval-Augmented Generation (RAG)** in a real-world enterprise use case.


## 🚀 Live Demo

Frontend:
https://ai-ticketing-system-cl9s.vercel.app

Backend API:
https://ai-ticketing-system-b8qe.onrender.com



---

## 🚀 Features

- 🤖 AI-powered ticket analysis using **Groq (Llama 3.1 8B Instant)**
- 📚 Upload company knowledge base PDFs
- 🔍 Retrieval-Augmented Generation (RAG)
- 🧠 Semantic Search using sentence embeddings
- 🗂️ FAISS Vector Store
- 📊 Analytics Dashboard
- 📂 Knowledge Base Management
  - Upload PDFs
  - Delete documents
  - Clear entire knowledge base
- ⚙️ AI System Settings
- ✨ Responsive UI with smooth animations
- 📈 Live dashboard statistics

---

# 🏗️ System Architecture

```
                Upload PDF
                     │
                     ▼
             Document Chunking
                     │
                     ▼
      Sentence Transformer Embeddings
                     │
                     ▼
               FAISS Vector Store
                     │
                     ▼
          User submits Ticket
                     │
                     ▼
         Semantic Similarity Search
                     │
                     ▼
       Relevant Context Retrieved
                     │
                     ▼
      Groq (Llama 3.1 8B Instant)
                     │
                     ▼
       AI Generated Resolution
```

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- Framer Motion
- Recharts
- React Hot Toast

## Backend

- FastAPI
- LangChain
- FAISS
- Sentence Transformers
- Groq API
- Python

---

# 🧠 AI Stack

| Component | Technology |
|------------|------------|
| LLM Provider | Groq |
| LLM Model | Llama 3.1 8B Instant |
| Embedding Model | sentence-transformers/all-MiniLM-L6-v2 |
| Vector Database | FAISS |
| AI Technique | Retrieval-Augmented Generation (RAG) |

---

# 📂 Project Structure

```
AI-Ticketing-System
│
├── .vscode
│
├── ai-service
│   │
│   ├── database
│   ├── embeddings
│   ├── llm
│   ├── prompts
│   ├── rag
│   ├── repositories
│   ├── scripts
│   ├── services
│   ├── tests
│   ├── uploads
│   ├── utils
│   ├── vectorstore
│   │
│   ├── app.py
│   ├── startup.py
│   ├── .env
│   └── venv
│
├── client
│   │
│   ├── node_modules
│   ├── public
│   │
│   ├── src
│   │   │
│   │   ├── api
│   │   ├── components
│   │   │   ├── common
│   │   │   ├── dashboard
│   │   │   ├── knowledge
│   │   │   ├── layout
│   │   │   ├── settings
│   │   │   └── ticket
│   │   │
│   │   ├── layouts
│   │   ├── pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── TicketAnalyzer.jsx
│   │   │   ├── KnowledgeBase.jsx
│   │   │   ├── Analytics.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── routes
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```


## 📸 Screenshots

### Dashboard

![Dashboard](screenshots/dashboard.png)

### AI Ticket Analyzer

![Analyzer](screenshots/analyzer.png)

### Knowledge Base

![Knowledge Base](screenshots/knowledge.png)

### Analytics

![Analytics](screenshots/analytics.png)

### Settings

![Settings](screenshots/settings.png)

---

# 📡 API Endpoints

## Ticket Analysis

| Method | Endpoint |
|----------|----------|
| POST | `/process-ticket` |

---

## Knowledge Base

| Method | Endpoint |
|----------|----------|
| POST | `/upload` |
| GET | `/knowledge-files` |
| DELETE | `/knowledge/{filename}` |
| POST | `/clear-knowledge` |

---

## Analytics

| Method | Endpoint |
|----------|----------|
| GET | `/stats` |

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Sanjanayadav25/AI-Ticketing-System.git

cd AI-Ticketing-System
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## Backend Setup

```bash
cd ai-service

pip install -r requirements.txt

uvicorn app:app --reload
```

---

# 🔑 Environment Variables

Create a `.env` file inside **ai-service**

```env
GROQ_API_KEY=your_groq_api_key
```

---

# 📊 Dashboard

The Analytics Dashboard provides:

- Knowledge Files Count
- Knowledge Chunks Count
- Total Ticket Dataset
- Interactive Bar Chart

---

# 📚 Knowledge Base

Users can:

- Upload PDF documents
- Delete uploaded documents
- View uploaded documents
- Clear the complete knowledge base

Uploaded PDFs are automatically:

- Chunked
- Embedded
- Stored inside FAISS

---

# 🤖 AI Ticket Analyzer

The Ticket Analyzer:

- Accepts employee support tickets
- Retrieves relevant knowledge
- Uses semantic search
- Sends retrieved context to Groq LLM
- Generates an AI-powered resolution

---

# ⚙️ Settings

Displays:

- AI Configuration
- LLM Provider
- LLM Model
- Embedding Model
- Vector Store
- Knowledge Statistics

---

# 🎯 Learning Outcomes

This project demonstrates practical implementation of:

- Retrieval-Augmented Generation (RAG)
- Large Language Models (LLMs)
- Semantic Search
- Sentence Embeddings
- Vector Databases
- FastAPI Backend Development
- React Frontend Development
- REST API Integration
- Data Visualization
- Component-Based Architecture

---

# 🔮 Future Improvements

- User Authentication
- Persistent Ticket History
- Streaming AI Responses
- Cloud Vector Database
- Multi-user Support
- Conversation Memory
- Advanced Analytics Dashboard

---

# 👩‍💻 Author

**Sanjana Yadav**

B.Tech Computer Science Engineering

Interested in

- Artificial Intelligence
- Retrieval-Augmented Generation (RAG)
- Large Language Models (LLMs)
- Full Stack Development
- Generative AI Applications

---

## ⭐ If you found this project interesting, consider giving it a star!