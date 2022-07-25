const express = require("express");
const helmet = require("helmet");
const routes = require("./presentation/Routes");

const PORT = 3000;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
