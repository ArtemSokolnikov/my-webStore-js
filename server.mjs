







// import express from 'express';
// import cors from 'cors';
// import _ from 'lodash';

// const app = express();
// const PORT = 3001;

// let createdArray = [];
// let sortedArray = [];

// app.use(express.json());
// app.use(cors());

// app.post('/createArray', (req, res) => {
//   const { array } = req.body;
//   try {
//     if (Array.isArray(array) && !_.isEmpty(array)) {
//       createdArray = array;
//       sortedArray = [];
//       return res.status(200).send({ message: 'Array saved successfully' });
//     } else {
//       throw new Error('Invalid array');
//     }
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// });
// app.post('/sortArray', (req, res) => {
//   const { array } = req.body;
//   try {
//     if (Array.isArray(array)) {
//       sortedArray = array;
//       return res.status(200).send({ message: 'Array sorted successfully' });
//     } else {
//       throw new Error('Invalid array');
//     }
//   } catch (error) {
//     return res.status(400).json({ message: error.message });
//   }
// });

// app.listen(PORT, () => console.log('Server is running on port ' + PORT));
