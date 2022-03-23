const prompt = require('prompt-sync')({sigint:true});
let account = prompt('Nhập account của bạn: ');
const regex = /^[a-z0-9_]{6,}$/;
if (regex.test(account)) {
    console.log('Account hợp lệ');
} else {
    console.log('Account không hợp lệ');
}