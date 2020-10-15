const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnShearchTerm()
    content.prefix = askAndReturnPrefiz()

    function askAndReturnShearchTerm(){
        return readline.question('Type Wikipedia search term: ')
    }

    function askAndReturnPrefiz(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(content)
}


start()