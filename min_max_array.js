var numbers = [1,2,3,2,4,3,5,6];
function max(numbers)	{
	var	loopLength = numbers.length;
	var	num1 = numbers[0];
	for (var i = 0; i <= loopLength; i++) {
		var num2 = numbers[i++];
		// compare num1(current position) vs. num2 (next position)
		// if num2 is >= num1 ... make num1 = num2 AND num2 = i+=2
      if (num2 >= num1) {
        num1 = num2;
        num2 = numbers[i+=2];
      }
		// else continue loop (num1 = num1, num2 = i++)
	  else ()