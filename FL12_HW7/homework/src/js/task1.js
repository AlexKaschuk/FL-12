let login = prompt('enter login');
let autentificator = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}
let myPassword;
let oldPassword;
let newPassword1;
let newPassword2;
const MIN_LOGIN_LENGTH = 5;
const MIN_PASS_LENGTH = 6;

if (login === null || login.length === 0) {
    alert('Canceled.');
} else if (login.length < MIN_LOGIN_LENGTH) {
    alert('I don’t know any emails having name length less than 5 symbols');
} else if (autentificator[login]) {
    myPassword = prompt('enter pasword');
    if (myPassword === null || myPassword.length === 0) {
        alert('Canceled');
    } else if (autentificator[login] === myPassword) {
        if (confirm('Do you want to change your password?')) {
            oldPassword = prompt('enter old password');
            if (oldPassword === null || oldPassword.length === 0) {
                alert('Canceled');
            } else if (autentificator[login] === oldPassword) {
                newPassword1 = prompt('enter new password');
                if (newPassword1 === null || newPassword1.length === 0) {
                    alert('Canceled');
                } else if (newPassword1.length < MIN_PASS_LENGTH) {
                    alert('It’s too short password. Sorry.');
                } else {
                    newPassword2 = prompt('enter new password again');
                    if (newPassword1 !== newPassword2) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.');
                    }
                }
            } else {
                alert('Wrong password');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you');
}