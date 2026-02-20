import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const text = `
RAG stands for Retrieval Augmented Generation.
It improves LLM responses by adding retrieved context.
Chunking strategy plays an important role.
Better chunking improves retrieval accuracy.
`;

async function test() {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 100,
    chunkOverlap: 20,
  });

  const docs = await splitter.createDocuments([text]);

  console.log("Chunks:");
  docs.forEach((doc, i) => {
    console.log(`\nChunk ${i + 1}:`);
    console.log(doc.pageContent);
    //console.log(docs);
  });
}

test();
