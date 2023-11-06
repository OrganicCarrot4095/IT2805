/* Part 2 */

for (let i = 1; i <= 20; i++ ) {
    console.log(i)
}


/* Part 3 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0){
        if (numbers[i] % 5 === 0){
            console.log("eplekake")
        }
        else {
            console.log("eple")
        }
    }
    else if (numbers[i] % 5 === 0){
        console.log("kake");

    }
    else{
        console.log(numbers[i])
    }    
}


/* Part 4 */

document.getElementById("title").innerText = "Hello, JavaScript"


/* Part 5 */

function changeDisplay() {
    var element = document.getElementById("magic");
    if (element){
        element.style.display = "none";
    }
}

function changeVisibility () {
    var element = document.getElementById("magic");
    if (element){
        element.style.visibility = "hidden"
        element.style.display = "block"
    }
}

function reset () {
    var element = document.getElementById("magic")
    if (element){
        element.style.visibility = "visible"
        element.style.display = "block"
    }
}


/* Part 6 */

const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

for (let i = 0; i < technologies.length; i++) {
    const listElement = document.createElement("li");
    let element = document.createTextNode(technologies[i]);
    listElement.appendChild(element)
    document.getElementById("tech").appendChild(listElement)
}
