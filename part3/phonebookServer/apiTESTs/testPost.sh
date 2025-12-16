## correct
curl -i POST http://localhost:3001/api/persons \
  -H 'Content-Type: application/json' \
  -d '{"name":"myuser","number":"1234"}'
## missing
curl -i POST http://localhost:3001/api/persons \
  -H 'Content-Type: application/json' \
  -d '{"number":"1234"}'
## exist
curl -i POST http://localhost:3001/api/persons \
  -H 'Content-Type: application/json' \
  -d '{"name":"Ada Lovelace","number":"1234"}'
