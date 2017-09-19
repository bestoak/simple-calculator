function calc() {
  var keys = document.querySelectorAll('#calculator span');
  var result = document.querySelector('.screen');
  var operator = ['+', '-', '/', '*'];
  var decimalFlag = false;
  result.innerHTML = '0';
  for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
      var inputVal = this.innerHTML;
      if (inputVal == 'C') {
        result.innerHTML = '0';
        decimalFlag = false;
      } else if (inputVal == '=') {
        result.innerHTML = eval(result.innerHTML);
        if (result.innerHTML == 'Infinity') {
          result.innerHTML = 'error,devide by 0'
        }
        if(result.innerHTML == Math.round(result.innerHTML)){
          decimalFlag = false;
        }
        else{
          decimalFlag = true;
        }
      } else {
        var lastChar = result.innerHTML[result.innerHTML.length - 1];
        if (inputVal == '.') {
          if (lastChar != '.' && operator.indexOf(lastChar) == -1 &&
            decimalFlag == false) {
            result.innerHTML += inputVal;
            decimalFlag = true;
          }
        } else if (operator.indexOf(inputVal) > -1) {
          if (lastChar == '.' || operator.indexOf(lastChar) > -1) {
            result.innerHTML = result.innerHTML.slice(0, -1)
          }
          result.innerHTML += inputVal;
          decimalFlag = false
        } else {
          if(result.innerHTML.length == 1 && result.innerHTML[0] == '0'){
            result.innerHTML = '';
          }
          result.innerHTML += inputVal;
        }
      }
    }
  }
}
