// === Text Manipulation ===
function handleTextChange() {
    const textElement = document.getElementById("dynamic-text");
    textElement.textContent = "✅ The text has been updated dynamically!";
  }
  
  // === Style Toggler ===
  function toggleHighlight() {
    const textElement = document.getElementById("dynamic-text");
    textElement.classList.toggle("highlight");
  }
  
  // === Element Control ===
  function addDynamicElement() {
    const container = document.getElementById("dynamic-container");
  
    if (!document.getElementById("dynamic-paragraph")) {
      const newParagraph = document.createElement("p");
      newParagraph.id = "dynamic-paragraph";
      newParagraph.textContent = " A dynamic paragraph has appeared!";
      container.appendChild(newParagraph);
    }
  }
  
  function removeDynamicElement() {
    const dynamicElement = document.getElementById("dynamic-paragraph");
    if (dynamicElement) {
      dynamicElement.remove();
    }
  }
  
