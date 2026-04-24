import app from './src/app.js';
import {PORT} from './src/config/env.config.js';
import {getConnection} from './src/config/db.config.js';

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
    getConnection();
});
