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
//rey == required '' defaultként nem ad meg semmit, enélkül undefinded lenne
const inputElement = (type, name, label, req = '') => {
    return `
        <div class ='${type}'>
            <label>${label}</label>
            <input type='${type}' name='${name}' ${req}>
        </div>
    `;
};

const selectElement = (type, name, title, options) => {
    let optionsToSelect = "";
    for (const op of options) {

        optionsToSelect += `
        <option>
            ${op}
        </option>
        `;
    }
    return `
        <div>
            <label>${title}</label>
            <${type} name="${name}">
                ${optionsToSelect}
            <${type}>
        </div>    `
}
/* 
const formElement = "<form>" + inputElement('text', 'firsName') + inputElement('file', 'profilePicture') + inputElement('email', 'personalEmail') stb + "</form>";
*/

const nameData = {
    type: "text",
    name: "firstName",
    label: "Keresztneved"
};

const anotherFormFields = [
    {
    type: "text",
    name: "street",
    label: "közterlület neve"
    },
    {
    type: "number",
    name: "houseNumber",
    label: "Házszám"
    },
    {
    type: "number",
    name: "zipCode",
    label: "Irányítószám"
    },
    {
    type: "text",
    name: "city",
    label: "Település neve"
    },
];

const formFields = [
    {
    type: "file",
    name: "profilePicture",
    label: "Profilképed"
    },
    {
    type: "text",
    name: "firstName",
    label: "Keresztneved"
    },
    {
    type: "email",
    name: "lastName",
    label: "Email címed",
    req: "required"
    },
    {
    type: "checkbox",
    name: "newsLetter",
    label: "Feliratkozás"
    },
    {
    type: "checkbox",
    name: "terms",
    label: "Megismertem és elfogadom a felhasználási feltételeket"
    }

];
// ffs form fields
const formElemenet = (ffs, id) => {
    let inputs = "";
    for (const ff of ffs) {
        inputs += inputElement(ff.type, ff.name, ff.label, ff.req)
    }
    return `
    <div class='container'>
    <form id='${id}'>
 
    ${inputs}
    ${selectElement("select", "where", "Hol hallottál rólunk?", ["Válassz", "Interneten", "Ismerőstől", "egyéb"])}
    <button class="myButton">Ok</button>
    </form>
    </div>
`;

}

/* const formElemenet = `
    <div class=container>
    <form id="form">
    <h2>Jelentkezem az önkéntes munkára</h2>
    ${inputElement('file', 'profilePicture', 'Profilképed')}
    ${inputElement('text', 'lastName', 'Vezetékneved', '')}
    ${inputElement(nameData.type, nameData.name, nameData.label)}
    ${inputElement('email', 'personalEmail', 'Email címed', 'required')}
    ${selectElement("select", "where", "Hol hallottál rólunk?", ["Válassz", "Interneten", "Ismerőstől", "egyéb"])}
    ${inputElement('checkbox', 'newsLetter', 'Feliratkozás')}
    ${inputElement('checkbox', 'terms', 'Elfogadok mindent')}
    <button class="myButton">Ok</button>
    </form>
    </div>
`;
 */
const formSubmit = (event) => {
    event.preventDefault();
    const et = event.target;
    console.log(event);
    console.log(et);
    et.classList.add("submitted");

    let selectValue = et.querySelector(`select[name="where"]`).value;
    console.log(selectValue);
}

const inputUpdate = (event) => {
    if (event.target.getAttribute("name") === "firstName") {
        // document.getElementById("inputValue").innerHTML =event.target.value;
    }

    if (event.target.getAttribute("name") === "profilePicture") {
        console.log(event.target.files[0]);
        
        const image = URL.createObjectURL(event.target.files[0]);
        document.getElementById("inputValue").insertAdjacentHTML("beforeend", 
        `
        <img src='${image}'>
        `);
    }

  
}

function loadEvent() {
    const root = document.getElementById("root");
    root.insertAdjacentHTML("afterbegin", formElemenet(formFields, "form"));
    root.insertAdjacentHTML("afterbegin", formElemenet(anotherFormFields, "form2"));
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