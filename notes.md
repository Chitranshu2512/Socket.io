**[SOCKET.io]** socket.io is a javascript library that enables real-time, bidirectional event-based communication between web clients and servers.

socket.io is build on top of webSockets but provides additional capabilities such as fall back option, rooms and namespace management, automatic roconnection.


[Key-features]:
1. cross browser support.

2. real-time, bidirectional communication communication.

3. **[WebSocket-Fallbacks]**: Automatically falls back to other protocols (like long polling) if WebSockets are not supported by the client’s browser.

4. auto reconnection.



# ----------------------------------  what is WebSocket

websocket is full duplex communication channels over a single TCP connection.

Unlike HTTP, which is a request-response protocol where the client sends a request and waits for the server to respond, WebSocket allows for continuous, real-time data exchange, 

meaning both the client and server can send and receive messages independently at any time.



***[how-WebSocket-works]***:
The websocket communication begins with a handshake between client and server.

client sends the HTTP request with 'upgrade' header asking to switch the connection from HTTP to WebSocket.

if the server agrees to hand-shake then connection upgraded to WebSocket.

now both the client and server send the message to eachother.




# -------------------------------- 'emit' and 'on'

[emit]- the emit fun is used to trigger an event, when an event is emitted, any listener registered for that event will be called.

[on]- on fun is used to register a listener for a specific event, when a event is emitted, the listener(call-back function) will be executed.


- emit is used to send or broadcast events from server to the client or vice-versa.
- on is used to listen for the events that are send by other party (client or server).