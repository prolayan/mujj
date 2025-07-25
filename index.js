const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // هذا السطر يسمح لكل المواقع بالوصول إلى الـ API

app.use(express.json());

// ... باقي الكود والمسارات ...

app.post('/', (req, res) => {
  // منطق الرد على الرسائل
  res.json({ reply: 'مرحباً! كيف أساعدك؟' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port', PORT);
});
