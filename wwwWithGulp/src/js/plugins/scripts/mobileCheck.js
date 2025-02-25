// Определение мобильных устройств
import { $vars } from "../../state";

const devices = [
   { regex: /android/i, class: "page--android", name: "Android" },
   { regex: /iPad|iPhone|iPod/, class: "page--ios", name: "iOS", condition: !window.MSStream },
   { regex: /IEMobile/i, class: "page--windows-mobile", name: "Windows Mobile" },
   { regex: /BlackBerry/i, class: "page--blackberry", name: "BlackBerry" },
   { regex: /Opera Mini/i, class: "page--phone", name: "Phone" },
];

export const mobileCheck = () => {
   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
   let deviceName = null;

   for (const device of devices) {
      let isDevice = device.regex.test(userAgent);

      if ("condition" in device) {
         isDevice = isDevice && device.condition;
      }

      if (isDevice) {
         if (!$vars.html.classList.contains(device.class)) {
            $vars.html.classList.add(device.class);
         }

         deviceName = device.name;
         break;
      }
   }

   if (!deviceName && !$vars.html.classList.contains("pc")) {
      $vars.html.classList.add("pc");
   }

   return deviceName;
};
