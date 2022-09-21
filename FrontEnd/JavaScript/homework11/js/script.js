
const firstNameReg = /[a-zA-Z]{1,20}/;
// console.log(firstNameReg.test('Ivan'));
const lastNameReg = /[a-zA-Z]{1,20}/;
// console.log(lastNameReg.test('Ivanov'));
const emailAddressReg = /[A-Za-z0-9\.\-]{1,255}@[A-Za-z0-9\.\-]{2,255}\.[\w]{2,64}/;
// console.log(emailAddressReg.test('Ivan123@ukr.net'));
const passwordReg = /[a-zA-Z0-9]{8,16}/;
// console.log(passwordReg.test('Hello12321'));

// console.log(document.forms);

const { form } = document.forms;

const actionBtn = document.querySelector('.buttonStyle');

const checkIfCheckboxOrRadio = type => ['checkbox', 'radio'].includes(type);

function validateFirstName(value) {
    if(value.match(firstNameReg)) {
        return true;
    }
    return false;
};

function validateLastName(value) {
    if(value.match(lastNameReg)) {
        return true;
    }
    return false;
};

function validateEmail(value) {
    if(value.match(emailAddressReg)) {
        return true;
    }
    return false;
};

function validatePassword(value) {
    if(value.match(passwordReg)) {
        return true;
    }
    return false;
};

function validateBooleans(value) {
    return value;
};

function validate(fields) {
    const filetedFields = [...fields].filter(field => field.name);

    const check = filetedFields.every(field => {
        // switch (field.name) {
        //     case 'firstName':
        //         return validateFirstName(field.value);
        //     case 'LastName':
        //         return validateLastName(field.value);
        //     case 'emailAddress':
        //         return validateEmail(field.value);
        //     case 'password':
        //         return validatePassword(field.value);
        //     case 'checkbox':
        //     case 'radio':
        //         return validateBooleans(field.checked);
        //     default:
        //         return false;
        // }
        switch (field.type) {
            case 'text':
                return validateFirstName(field.value);
            case 'text':
                return validateLastName(field.value);
            case 'text':
                return validateEmail(field.value);
            case 'password':
                return validatePassword(field.value);
            case 'checkbox':
            case 'radio':
                return validateBooleans(field.checked);
            default:
                return false;
        }
    });
    return check;
};




function getRegisterForm(event) {
    event.preventDefault();

    const formFields = form.elements;

    // console.log(form.elements);

    const values = {};

    for(const field of formFields) {
        const { name, value, checked, type } = field;

        if(name) {
            values[name] = checkIfCheckboxOrRadio(type) ? checked : value;
        }
    };


    console.log('values:', values);
}

form.addEventListener('submit', getRegisterForm);

for(const field of form.elements) {
    field.addEventListener('change', () => {
        actionBtn.disabled = !validate(form.elements);
    });
};