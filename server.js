const express = require("express"); // RestAPI 구축을 위한 Node.js 프레임워크
const bodyParser = require("body-parser"); // request를 분석하고 routes에 엑세스 해야 하는 req.body 개체를 만들기 위함

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

require("./app/routes/customer.routes.js")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
