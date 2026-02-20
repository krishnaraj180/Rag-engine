##🤖 AI-Powered RAG Engine with MongoDB Vector Search

An intelligent **Retrieval-Augmented Generation (RAG) Engine** that combines  
**LLMs + MongoDB Atlas Vector Search** to deliver accurate, context-aware responses from your custom data.

This project enables you to upload documents, convert them into embeddings, store them in MongoDB, and query them using semantic search with an LLM.

##🚀 Features

- 📄 Document ingestion (PDF / TXT / custom data)
- 🧠 Text chunking & embedding generation
- 🗂️ MongoDB Atlas Vector Search integration
- 🔎 Semantic similarity search
- 🤖 LLM-powered answer generation
- ⚡ Fast and scalable retrieval pipeline
- 🛠️ Modular and production-ready architecture

## 🛠️ Tech Stack

- **Python**
- **MongoDB Atlas (Vector Search)**
- **OpenAI / HuggingFace Embeddings**
- **LLM (GPT / Open Source Model)**
- **FastAPI / Flask (Optional API Layer)**
- **LangChain (Optional Orchestration)**


## 📂 Project Structure

rag-engine/
│
├── app.py # Main application
├── config.py # Environment configuration
├── ingest.py # Document ingestion pipeline
├── embeddings.py # Embedding generation
├── retriever.py # Vector search logic
├── llm.py # LLM interaction
├── requirements.txt
├── .env
└── README.md

## ⚙️ How It Works

### 1️⃣ Document Ingestion
- Upload documents
- Split into chunks
- Generate embeddings
- Store in MongoDB with vector index

### 2️⃣ Query Processing
- Convert user query into embedding
- Perform similarity search in MongoDB
- Retrieve top-K relevant chunks

### 3️⃣ Response Generation
- Pass retrieved context + query to LLM
- Generate context-aware answer


##🌟 Use Cases

- Enterprise Knowledge Base
- AI Chatbot with Private Data
- Research Assistant
- Legal / Medical Document QA
- Internal Documentation Search
- Customer Support Automation

##🔐 Security Best Practices

- Never commit .env files
- Use IP whitelist in MongoDB Atlas
- Enable rate limiting for API
- Use secure API key management

##📜 License

This project is licensed under the MIT License.

##👨‍💻 Author

Krishnaraj R
Full Stack Developer | AI Enthusiast
GitHub: https://github.com/Krishnaraj180
