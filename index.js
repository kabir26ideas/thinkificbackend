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
const YFP_NARATIVE_Q6= process.env.YFP_NARATIVE_Q6;
const YFP_NARATIVE_Q7= process.env.YFP_NARATIVE_Q7;
const YFP_NARATIVE_Q8= process.env.YFP_NARATIVE_Q8;
const YFP_NARATIVE_Q9= process.env.YFP_NARATIVE_Q9;
const YFP_NARATIVE_Q10= process.env.YFP_NARATIVE_Q10;
const YFP_NARATIVE_Q11= process.env.YFP_NARATIVE_Q11;
const YFP_NARATIVE_Q12= process.env.YFP_NARATIVE_Q12;
const YFP_NARATIVE_Q13= process.env.YFP_NARATIVE_Q13;
const YFP_NARATIVE_Q14= process.env.YFP_NARATIVE_Q14;
const YFP_NARATIVE_Q15= process.env.YFP_NARATIVE_Q15;
const YFP_NARATIVE_Q16= process.env.YFP_NARATIVE_Q16;
const YFP_NARATIVE_Q17= process.env.YFP_NARATIVE_Q17;
const YFP_NARATIVE_Q18= process.env.YFP_NARATIVE_Q18;
const YFP_NARATIVE_Q19= process.env.YFP_NARATIVE_Q19;
const YFP_NARATIVE_Q20= process.env.YFP_NARATIVE_Q20;
const YFP_NARATIVE_Q21= process.env.YFP_NARATIVE_Q21;
const YFP_NARATIVE_Q22= process.env.YFP_NARATIVE_Q22;
const YFP_NARATIVE_Q23= process.env.YFP_NARATIVE_Q23;
const YFP_NARATIVE_Q24= process.env.YFP_NARATIVE_Q24;
const YFP_NARATIVE_Q25= process.env.YFP_NARATIVE_Q25;
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

console.log("messages");
console.log(messages);
    
console.log("last message");    
console.log(lastMessage);


console.log(lastMessage?.content[0]?.text?.value);    
    
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



app.post('/chatq6', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q6,
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







app.post('/chatq7', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q7,
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


app.post('/chatq11', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q11,
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


app.post('/chatq13', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q13,
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

app.post('/chatq14', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q14,
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

app.post('/chatq15', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q15,
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

app.post('/chatq16', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q16,
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

app.post('/chatq17', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q17,
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


app.post('/chatq18', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q18,
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

app.post('/chatq19', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q19,
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

app.post('/chatq20', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q20,
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

app.post('/chatq21', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q21,
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

app.post('/chatq22', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q22,
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

app.post('/chatq23', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q23,
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

app.post('/chatq24', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q24,
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

app.post('/chatq25', async (req, res) => {
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
  assistant_id: YFP_NARATIVE_Q25,
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
