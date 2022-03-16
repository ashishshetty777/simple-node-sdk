import consoleAuthorsName from '../src/commands/consoleAuthorsName';
import consoleMyName from '../src/commands/consoleMyName';

export default function nodeClient(apiKey, secretApiKey) {
    let client = {};

    client.consoleAuthorsName = function () {
        return consoleAuthorsName(apiKey, secretApiKey);
    };
    client.consoleMyName = function () {
        return consoleMyName(apiKey, secretApiKey);
    };
    return client;

}