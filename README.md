<h1>The project uses NESTJS as its backend framework which internally using express and mongodb as its db layer and jest for testing</h1>
<h2>To install  project dependencies: <b>npm install</b></h2>
<h2>To run  project : <b>npm run start</b></h2>
<h2>To run  project in dev mode : <b>npm run start:dev</b></h2>
<h2>To run  unit test : <b>npm run test</b></h2>
<h2>Swagger Documentation can be found in <i>localhost:3000/api</i></b></h2>


<h2>A sample curl request</h2>
<p>curl -X 'POST' \
  'http://localhost:3000/post-form' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "firstName": "ga",
  "lastName": "ga",
  "email": "wa@gmail.com",
  "message": "ege"
}'</p>
