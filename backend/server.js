const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const { createSuperUser } = require('./controllers/authController');
const bookingRoutes = require('./routes/bookingRoutes');
const fileRoutes = require('./routes/fileRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(cors({
  origin: ['http://localhost:3000','https://real3dspacescan.com/'],
  credentials: true,
}));


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/users', userRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  createSuperUser('SYSTEM ADMIN','sysadmin@example.com','406aa0EeTtFa5Z3');
  createSuperUser('Brun Moussiesse','moussiesse@sbcglobal.net',`K}owWhs[Qt=Qd=,X;a*`);
});
