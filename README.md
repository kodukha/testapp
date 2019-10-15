# testapp
to run app type:
node index.js

to test app:
POST http://localhost:3000/batch
{
  "url": "https://someurl/user/{userId}",
  "verb": "get"
}
