# SIMPLE NODE SDK

Sample NodeJS SDK

## Installation
```
npm install --save simple-node-sdk
```

## Setup
```javascript
const nodeSDK = require('simple-node-sdk');
const mockFunctions = nodeSDK('apiKey', 'secretApiKey');
```

Quickly test that you can connect to the API with the following call:
```javascript
mockFunctions.consoleAuthorsName().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
```

```javascript
mockFunctions.consoleMyName().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
```