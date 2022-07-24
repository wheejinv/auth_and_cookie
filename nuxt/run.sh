pm2 delete backend

cd backend
pm2 start ./run/ecosystem.local.config.js

cd ..
cd frontend
npm run dev