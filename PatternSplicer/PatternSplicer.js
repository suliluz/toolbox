var regex = /:([^:]+):/g;

async function ParseSentence(sentenceTemplate, parameters = {}) {
    let sentence;
    let matches;

    do {
        matches = regex.exec(sentenceTemplate);

        if (matches) {
            let body = matches[0];
            let keyValue = matches[1];

            sentence = sentenceTemplate.replace(body, parameters[keyValue]);
        }

    } while (matches);

    return sentence;
}