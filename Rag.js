import dotenv from "dotenv";
dotenv.config();

import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { HuggingFaceTransformersEmbeddings } from "@langchain/community/embeddings/huggingface_transformers";
import { MongoClient } from "mongodb";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";

// -------- SAMPLE TEXT --------
const text = `
RAG stands for Retrieval Augmented Generation.
It improves LLM responses by adding retrieved context.
Chunking strategy plays an important role.
Better chunking improves retrieval accuracy.
vector database can stores a chunking data from the documents.
`;

// -------- MAIN FUNCTION --------
async function runRAG() {
  try {
    // 1️⃣ Chunking
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 100,
      chunkOverlap: 20,
    });

    const docs = await splitter.createDocuments([text]);

    console.log("Chunks created:", docs.length);

    // 2️⃣ Embeddings Model
    const embeddings = new HuggingFaceTransformersEmbeddings({
      model: "Xenova/all-MiniLM-L6-v2",
    });

    // 3️⃣ Connect MongoDB
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("rag_db");
    const collection = db.collection("documents");

    // 4️⃣ Create Vector Store
    const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
      collection: collection,
      indexName: "default", // must match Atlas index name
    });

    // 5️⃣ Store Documents
    await vectorStore.addDocuments(docs);
    console.log("Documents stored in MongoDB Atlas");

    // 6️⃣ Test Similarity Search
    const results = await vectorStore.similaritySearch(
      "What improves retrieval accuracy?",
      2
    );

    console.log("\nTop Results:");
    results.forEach((doc, i) => {
      console.log(`Result ${i + 1}:`, doc.pageContent);
    });

    await client.close();
  } catch (error) {
    console.error("Error:", error);
  }
}

runRAG();
