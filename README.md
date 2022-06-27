# Angelicas Travel Blog

## Install guide

### backend 
- Have a running instance of MongoDB on Port localhost:27017
- Create Database „travel-blog“ with Collection „destinations“
- Import sample data from /backend/destinations.json
```bash
cd /backend
npm install 
node index.js
```

### frontend

- enter your google Maps API-key in the src/components/googlemap/MapComponent.js in Line 6 (const googleApiKey);
- in root folder of project run 
```bash
npm install 
npm start
```