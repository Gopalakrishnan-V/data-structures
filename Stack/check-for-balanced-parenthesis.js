function isMatchingPair(a, b) {
  if (a === "{" && b === "}") {
    return true;
  } else if (a === "[" && b === "]") {
    return true;
  } else if (a === "(" && b === ")") {
    return true;
  }
  return false;
}

function areParenthesisBalanced(expression) {
  const stack = [];
  const expressionCharArr = expression.split("");
  for (let i in expressionCharArr) {
    const c = expressionCharArr[i];
    if (c === "{" || c === "[" || c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0 || !isMatchingPair(stack.pop(),c)) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const expression = "{[{()}]}";
console.log("Expresion:", expression, areParenthesisBalanced(expression));
