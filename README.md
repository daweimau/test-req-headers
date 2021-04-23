# What is this?

This is a nothing server for reviewing http request headers.

The server listens on `localhost:4000/tester`.

Whatever request comes its way, the server will return the request headers as the response body.

This is a simple, silly way to review what headers are **really** being sent with any request.

Example use case: Postman appends certain headers even if they are not visible on UI. Calling this endpoint reveals that detail.

# Setup

1. Pull this repo
2. Run `npm install`
3. Run `node index`

Send your test requests to `localhost:4000/tester` and observe either this server's console (prints the request headers), or the response (which contains the same info) .
