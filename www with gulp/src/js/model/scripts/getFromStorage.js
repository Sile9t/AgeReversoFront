import { isJSON } from "./isJSON";

export function getFromLocalStorage(key, initValue) {
   const savedInfo = localStorage.getItem(key) || "";
   return isJSON(savedInfo) ? JSON.parse(savedInfo) : initValue;
}

export function getFromSessionStorage(key, initValue) {
   const savedInfo = sessionStorage.getItem(key) || "";
   return isJSON(savedInfo) ? JSON.parse(savedInfo) : initValue;
}
