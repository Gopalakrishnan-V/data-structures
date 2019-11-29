function evaluatePostfixExpression(expression) {
  const stack = [];

  const expressionCharArr = expression.split("");
  for (let i in expressionCharArr) {
    const c = expressionCharArr[i];
    if (c.match(/^[0-9]$/)) {
      stack.push(parseInt(c));
    } else {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      switch (c) {
        case "+": {
          stack.push(operand2 + operand1);
          break;
        }
        case "-": {
          stack.push(operand2 - operand1);
          break;
        }
        case "*": {
          stack.push(operand2 * operand1);
          break;
        }
        case "/": {
          stack.push(operand2 / operand1);
          break;
        }
        case "^": {
          stack.push(operand2 ^ operand1);
          break;
        }
      }
    }
  }
  return stack.pop();
}

console.log(evaluatePostfixExpression("12+3*"));
