// Форматирование цифр типа 100 000 000
export function getDigFormat(item) {
   return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
