/**
 * Re-export retriever katalog agar Vercel Serverless & client/Vitest berbagi satu implementasi.
 */
export { tokenizeQuery, retrieveCatalogContext, buildFallbackReply, isGreetingOrSmallTalk } from '../src/utils/aiRetriever.js';
