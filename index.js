const express = require('express');

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const {a, operator, b} = req.body;
  let total = 0;
  switch (operator) {
    case '+':
      total = a + b;
      break;

    case '-':
      total = a - b;
      break;

    case '*':
      total = a * b;
      break;

    case '/':
      total = a / b;
      break;
  
    default:
      break;
  }

  console.log({a, operator, b});
  res.json({total});
})


app.listen(3333, () => console.log('server is running on port 3333'));