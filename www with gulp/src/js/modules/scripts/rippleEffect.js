// Author: Фрилансер по жизни
// Modification: Binarion

export function rippleEffect(selector = "[data-ripple]") {
   // Событие нажатия на кнопку
   document.body.addEventListener("click", function (e) {
      // Получение узла на котором сработал событие и поиск кнопки с заданным селектором
      const { target: targetItem } = e;
      const button = targetItem.closest(selector);

      // Проверка наличия кнопки с заданным селектором
      if (button) {
         // Создание элемента для анимации, определение его размера и позицию
         const ripple = document.createElement("span");
         const diameter = Math.max(button.clientWidth, button.clientHeight);
         const radius = diameter / 2;

         // Формирование элемента
         ripple.style.width = ripple.style.height = `${diameter}px`;
         ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
         ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
         ripple.classList.add("ripple");

         // Получение элемента анимации для нажатой кнопки
         const rippleElement = button.querySelector(":scope .ripple");

         // Удаление существующего элемента (необязательно)
         if (button.dataset.ripple === "once" && rippleElement) {
            rippleElement.remove();
         }

         // Добавление предмета
         button.append(ripple);

         // Получение времени акта анимации
         const timeOut = getAnimationDuration(ripple);

         // Удаление предмета
         setTimeout(() => {
            if (ripple && ripple.isConnected) {
               ripple.remove();
            }
         }, timeOut);

         // Функция получения времени действия анимации
         function getAnimationDuration(ripple) {
            const aDuration = window.getComputedStyle(ripple).animationDuration;
            const isMS = aDuration.includes("ms");
            return isMS ? aDuration.replace("ms", "") : aDuration.replace("s", "") * 1000;
         }
      }
   });
}
