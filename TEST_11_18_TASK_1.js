const sourceArray = [1, 2, 3];
const newArray = [...sourceArray];

console.log('Исходный массив:', sourceArray);
console.log('Новый массив', newArray);

const answer = sourceArray === newArray ? 'Ссылка' : 'Нет, не ссылка';
console.log('newArray ссылка на sourceArray?', answer);


console.log('Точно не ссылка? Добавим элемент;)');
newArray.push(4);
console.log('sourceArray', sourceArray);
console.log('newArray', newArray);
