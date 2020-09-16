for(let option in document){
    let optionname = `document.${option}`
    document.write(`<p>${optionname}: ${document[option]}</p>`)
}
