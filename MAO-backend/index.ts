import express from "express";
import { createDeepAgent } from "deepagents";
import {internetSearch} from "./tools/search"



const app = express();
const port= 8080;

const researchInstructions = `You are an expert researcher. Your job is to conduct thorough research and then write a polished report.

You have access to an internet search tool as your primary means of gathering information.

## \`internet_search\`

Use this to run an internet search for a given query. You can specify the max number of results to return, the topic, and whether raw content should be included.
`;

const agent = createDeepAgent({
    model: "ollama:devstral-2",
  tools: [internetSearch],
  systemPrompt: researchInstructions,
})


// Running the agent 


// agents response
console.log();

app.get("/agent_response", async (req, res) => {
    
    try{
        const result = await agent.invoke({
  messages: [{ role: "user", content: "What is langgraph?" }],
    });


        const final_data= result.messages[result.messages.length - 1].content;
        
        return res.send(final_data);
    }
    catch(e) {
        console.log("Error receiving data")
        return res.status(500).send("something is wrong with the AI agent")
    }
})


app.listen(port, async () => {
    console.log(`listening to the server on ${port}`)


})

