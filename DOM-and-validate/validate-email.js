const prompt = require('prompt-sync')({sigint : true});
let email = prompt('Nhập email của bạn: ');
const regex = /^\w.+@\w+\.\w+$/;
if (regex.test(email)) {
    console.log('Email hợp lệ');
} else {
    console.log('Email không hợp lệ');
}
