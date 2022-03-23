const prompt = require('prompt-sync')({sigint:true});
const animalList = new Set();
let mess = '';
let running = true;

const printNotify = () => {
    console.log(`Tin nhắn: ${mess}`);
    mess = '';
}

const getNameAnimal = () => prompt('Nhập tên loài vật: ');

const addAnimal = animalName => {
    let size = animalList.size;
    animalList.add(animalName);
    mess = size === animalList.size ? 'Loài vật đã tồn tại.' : 'Đã thêm loài vật mới.';
}

const checkExistence = animalName => {
    mess = animalList.has(animalName) ? 'Loài vật đã tồn tại trong danh sách.' : 'Loài vật chưa tồn tại trong danh sách.';
}

const deleteAnimal = animalName => {
    mess = animalList.delete(animalName) ? 'Đã xóa loài vật khỏi danh sách.' : 'Xóa thất bại. Loài vật không tồn tại.';
}

const printAnimalList = () => {
    animalList.forEach(animal => console.log(animal));
    mess = animalList.size == 0 ? 'Danh sách trống.' : `Tổng số động vật trong danh sách là: ${animalList.size}.`;
}

while (running) {
    console.log('-----------------------------------');
    console.log('Nhập vào chức năng muốn sử dụng:\n 1 - Thêm loài vật mới.\n 2 - Kiểm tra loài vật.\n 3 - Xóa loài vật.\n 4 - In danh sách loài vật.\n 5 - Thoát chương trình.');
    let value = prompt('Yêu cầu của bạn: ')
    switch (value) {
        case '1':
            addAnimal(getNameAnimal());
            break;
        case '2':
            checkExistence(getNameAnimal());
            break;
        case '3':
            deleteAnimal(getNameAnimal());
            break;
        case '4':
            printAnimalList();
            break;
        case '5':
            running = false;
            mess = 'Hẹn gặp lại.';
            break;
        default:
            mess = 'Yêu cầu không tồn tại. Hãy nhập lại.'
            break;
    }
    printNotify();
}