const firstName = prompt('What is your first name? ')
const lastName = prompt('What is your last name? ')
const fieldStudy = prompt('What is your field of study? ')
const birthYear = prompt('What is your birth year? ')

document.getElementById('info_recruit').innerHTML += `${firstName} ${lastName}, ${fieldStudy}, ${2024 - birthYear}`