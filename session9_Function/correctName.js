let name = prompt('Input name: ')
function correctName(name) {
    let newName = '';
    newName += name[0].toUpperCase();
    for (let i = 1; i < name.length; i++) {
        if (name[i-1] == ' ') {
            if (name[i]!= ' ') {
                newName += name[i].toLocaleUpperCase();
            }
        } else {
            newName += name[i].toLocaleLowerCase();
        }
    }
    return newName
}

console.log(correctName(name));


