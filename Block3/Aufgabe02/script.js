for(option in document){
    optionname = `document.${option}`
    document.write(`<p>${optionname}: ${document[option]}</p>`)
}
