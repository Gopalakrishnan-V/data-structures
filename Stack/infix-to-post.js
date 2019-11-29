function infixToPostfix(expression) {
  let result = "";
  const stack = [];
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3
  };
  expression.split("").map(c => {
    if (c.match(/^[a-zA-Z0-9]$/)) {
      result += c;
    } else if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        result += stack.pop();
      }
      if (stack.length) {
        stack.pop();
      } else {
        return "Invalid Expression";
      }
    } else {
      while (
        stack.length &&
        precedence[c] <= precedence[stack[stack.length - 1]]
      ) {
        result += stack.pop();
      }
      stack.push(c);
    }
  });
  while (stack.length) {
    result += stack.pop();
  }
  return result;
}

console.log(infixToPostfix("a+b-c"));
