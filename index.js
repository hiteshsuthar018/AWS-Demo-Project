import express from "express";
import ip from "ip";
const app = express();


app.get("/",(req,res)=>{

   res.json([
  { id: 1, title: "Wake up" },
  { id: 2, title: "Brush teeth" },
  { id: 3, title: "Exercise" },
  { id: 4, title: "Take a shower" },
  { id: 5, title: "Have breakfast" },
  { id: 6, title: "Check emails" },
  { id: 7, title: "Work on project" },
  { id: 8, title: "Lunch break" },
  { id: 9, title: "Read a book" },
  { id: 10, title: "Sleep" }
]);

})

app.listen(3000,()=>{
    console.log("Server running on port:",3000);
})