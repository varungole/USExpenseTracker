const express = require('express')
const mongoose = require('mongoose')
const app = express()
const Expenses = require('../expense-tracker-us/Schema');

mongoose.connect("", {
})
.then(() => console.log("Connected to Database"))
.catch(console.error);
app.use(express.json());

app.get('/expenses', async (req, res) => {
    try {
      const exp = await Expenses.find()  // Execute the Mongoose query
      return res.status(200).json(exp);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.post('/expenses' , async(req , res) => {
    const {title , amount , date } = req.body

    try{
        const expense = Expenses.create({title, amount , date})
        res.json(expense).status(200)
        console.log(res.json(expense))
    }
    catch(error)
    {
        console.log(error)
    }

})

app.listen( , ()=>{console.log('Started on port ')})