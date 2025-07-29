import express from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const YFP_NARATIVE_Q1= process.env.YFP_NARATIVE_Q1;
const YFP_NARATIVE_Q3= process.env.YFP_NARATIVE_Q3;
const YFP_NARATIVE_Q4= process.env.YFP_NARATIVE_Q4;
const YFP_NARATIVE_Q5= process.env.YFP_NARATIVE_Q5;
const YFP_NARATIVE_Q6AB= process.env.YFP_NARATIVE_Q6AB;
const YFP_NARATIVE_Q7AB= process.env.YFP_NARATIVE_Q7AB;
const YFP_NARATIVE_Q8= process.env.YFP_NARATIVE_Q8;
const YFP_NARATIVE_Q9= process.env.YFP_NARATIVE_Q9;
const YFP_NARATIVE_Q10= process.env.YFP_NARATIVE_Q10;
const YFP_NARATIVE_Q11AB= process.env.YFP_NARATIVE_Q11AB;
const YFP_NARATIVE_Q12= process.env.YFP_NARATIVE_Q12;
const YFP_NARATIVE_Q3ER= process.env.YFP_NARATIVE_Q3ER;
const YFP_NARATIVE_Q4ER= process.env.YFP_NARATIVE_Q4ER;
const YFP_NARATIVE_Q5ER= process.env.YFP_NARATIVE_Q5ER;
const YFP_NARATIVE_Q6ER= process.env.YFP_NARATIVE_Q6ER;
const YFP_NARATIVE_Q7ER= process.env.YFP_NARATIVE_Q7ER;
const YFP_NARATIVE_Q8ER= process.env.YFP_NARATIVE_Q8ER;
const YFP_NARATIVE_Q9ER= process.env.YFP_NARATIVE_Q9ER;
const YFP_NARATIVE_Q10ER= process.env.YFP_NARATIVE_Q10ER;
const YFP_NARATIVE_Q11ER= process.env.YFP_NARATIVE_Q11ER;
const YFP_NARATIVE_Q12ER= process.env.YFP_NARATIVE_Q12ER;
const YFP_NARATIVE_Q1OP= process.env.YFP_NARATIVE_Q1OP;
const YFP_NARATIVE_Q2OP= process.env.YFP_NARATIVE_Q2OP;
const YFP_NARATIVE_Q3OP= process.env.YFP_NARATIVE_Q3OP;
const YFP_NARATIVE_COMPILOR=process.env.YFP_NARATIVE_COMPILOR;




console.log(process.env.OPENAI_API_KEY);

app.use(cors());
app.use(express.json());


app.post('/chatq1', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q1,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});


app.post('/chatq3', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q3,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});


app.post('/chatq4', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q4,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});



app.post('/chatq5', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q5,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});



app.post('/chatq6AB', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q6AB,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});







app.post('/chatq7AB', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q7AB,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});




app.post('/chatq8', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q8,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq9', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q9,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq10', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q10,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});


app.post('/chatq11AB', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q11AB,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});



app.post('/chatq12', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q12,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});


app.post('/chatq3er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q3ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq4er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q4ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq5er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q5ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq6er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q6ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq7er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q7ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});


app.post('/chatq8er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q8ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq9er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q9ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq10er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q10ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq11er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q11ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq12er', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q12ER,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq1op', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q1OP,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq2op', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q2OP,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});

app.post('/chatq3op', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_Q3OP,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});


app.post('/chatcompile', async (req, res) => {
  console.log("test /chat");
  const userMessage = req.body.message;
  const threadid= req.body.user.threadId;
  // const questionid= 1;
  
console.log(threadid);
// console.log(questionid);
  if (!userMessage) {
    return res.status(400).json({ reply: "Message is required." });
  }

  if(!threadid){
    return res.status(400).json({ reply: "threadid is required" });
  //make a method to update thread id if no threadid is found?
  }

  // if(!questionid){
  //   return res.status(400).json({ reply: "questionid is required" });
  // }

  try {

await openai.beta.threads.messages.create(threadid, {
  role: "user",
  content: `Answer: ${userMessage}`,


});

const run = await openai.beta.threads.runs.create(threadid,{
  assistant_id: YFP_NARATIVE_COMPILOR,
});

let runstatus; // run status for response 
let attempts = 0;
const maxAttempts = 60;// max attempts or timeout seconds
do{
  runstatus= await openai.beta.threads.runs.retrieve(threadid,run.id);
   console.log(runstatus);
  if(runstatus.status === "completed") break;
  await new Promise((resolve) => setTimeout(resolve,1000));
  attempts++;
} while ((runstatus.status === "queued" ||
   runstatus.status === "in_progress") && 
   attempts < maxAttempts);


//fetching response

const messages = await openai.beta.threads.messages.list(threadid);
const lastMessage = messages.data.find((msg)=> msg.role === "assistant");

res.json({
  reply: lastMessage?.content[0]?.text?.value || "No reply try again",
 
});

  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Failed to get response from OpenAI." });
  }







  



});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
});
