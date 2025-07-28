window.onload = addStyleToSvg;

function addStyleToSvg() {
   addStyleFor("svg-front");
   addStyleFor("svg-back");
}

function addStyleFor(svgFilePrefix) {
   const svgObject = document.getElementById(svgFilePrefix);

   if (!svgObject) {
      console.warn(`❗ SVG object with ID '${svgFilePrefix}' not found`);
      return;
   }

   const tryInject = () => {
      const svgDocument = svgObject.contentDocument;

      if (!svgDocument) {
         console.warn(`❗ SVG document for '${svgFilePrefix}' not loaded`);
         return;
      }

      console.log(svgDocument.className);

      const svgElements = svgDocument.getElementsByClassName("hover");
      if (!svgElements.length) {
         console.warn(`⚠️ No elements with class 'hover' found in '${svgFilePrefix}'`);
         return;
      }

      for (let i = 0; i < svgElements.length; i++) {
         const svgElement = svgElements[i];
         const children = svgElement.children;
         const originalColors = [];

         for (let j = 0; j < children.length; j++) {
            originalColors[j] = children[j].style.fill || "#ccc";
         }


         // ✅ Hover effect
         svgElement.addEventListener("mouseover", function () {
            svgElement.style.cursor = "pointer";
            printBodyPart(svgElement.id);

            // Bring parent element to front
            svgElement.style.position = "relative";
            svgElement.style.zIndex = "9999";

            for (let j = 0; j < children.length; j++) {
               const svgItem = children[j];
               svgItem.style.fill = "#2cb1b3";
               svgItem.style.transition = "all 0.3s ease";
               svgItem.style.transform = "translateY(-5px) scale(1.04";
               svgItem.style.position = "relative";
               svgItem.style.zIndex = "9999";
            }
         });

         // ✅ Mouse out
         svgElement.addEventListener("mouseout", function () {
            svgElement.style.cursor = "default";
            printBodyPart("");

            // Reset parent z-index
            svgElement.style.zIndex = "1";

            for (let j = 0; j < children.length; j++) {
               const svgItem = children[j];
               svgItem.style.fill = originalColors[j];
               svgItem.style.transition = "all 0.3s ease";
               svgItem.style.transform = "scale(1) translate(0px, 0px)";
               svgItem.style.position = "relative";
               svgItem.style.zIndex = "1";
            }
         });
      }
   };

   if (svgObject.contentDocument) {
      tryInject();
   } else {
      svgObject.addEventListener("load", tryInject);
   }
}

function printBodyPart(bodyPartId) {
   const printElement = document.getElementById("body-part-print");
   printElement.innerHTML = bodyPartId ? formatBodyPartName(bodyPartId) : "&nbsp;";
}

function formatBodyPartName(id) {
   return id
      .replace(/-/g, " ")
      .replace(/\b\w/g, char => char.toUpperCase());
}
