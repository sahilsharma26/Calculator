
function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function display(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    var expression = document.getElementById("result").value;
  
    // Handle power calculation
    expression = expression.replace("^", "**");
  
    // Handle percentage calculation
    if (expression.includes("%")) {
      var parts = expression.split("%");
      var number = parseFloat(parts[0]);
      var percent = parseFloat(parts[1]);
      expression = (number * percent) / 100;
    }
  
    var result;
    try {
      result = new Function('return ' + expression)();
    } catch (error) {
      result = 'Invalid Expression';
    }
  
    document.getElementById("result").value = result;
  }
  
  function deleteLastCharacter() {
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
  }
  
