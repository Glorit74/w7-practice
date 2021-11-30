/* 
function functionName(parameter) {

    parameter === "Argument as a string"
};
functionName("Argument as a string");

const argument = "Argument saved in a variable";
const functionName = function (parameter) {

    parameter === "Argument saved is a variable";
};
functionName(argument);


const functionName = (parameter1, parameter2) => {

    parameter1 === 1;
    parameter2 === 2;
};
functionName(1,2);

*/

// const inputElement = `
//     <input type="text">
// `;   ÁTALAKÍTOTTUK ARRAY FUNCTIONNÁ


// itt adjuk meg paraméterként azt, h milyen típusú legyen az input elem
// <input type="text"> helyett a type-ot dinamikusan generáljuk a '${type}
const inputElement = (type, name, label) => {
    return `
        <div>
            <label>${label}</label>
            <input type='${type}' name='${name}'>
        </div>
    `;
};
/* 
const formElement = "<form>" + inputElement('text', 'firsName') + inputElement('file', 'profilePicture') + inputElement('email', 'personalEmail') stb + "</form>";
*/
const formElemenet = `
    <form id="form">
    ${inputElement('text', 'firsName', 'Keresztneved')}
    ${inputElement('file', 'profilePicture', 'Profilképed')}
    ${inputElement('email', 'personalEmail', 'Email címed')}
    ${inputElement('radio', 'newsLetter', 'Feliratkozás')}
    ${inputElement('checkbox', 'terms', 'Elfogadok mindent')}
    <button>Ok</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    event.target.classList.add("submitted");
}
// ez csak akkor fusson le, ha firstNamet csinálunk, getAttribute
const inputUpdate = (event) => {
    document.getElementById("inputValue").innerHTML = event.target.value;
}
function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("afterbegin", formElemenet);
    root.insertAdjacentHTML("afterbegin", `
    <div id="inputValue"></div>
    `);

    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputList = form.querySelectorAll("input");
        for (const input of inputList) {
            input.addEventListener("input", inputUpdate)
            
        }
}

window.addEventListener("load", loadEvent);