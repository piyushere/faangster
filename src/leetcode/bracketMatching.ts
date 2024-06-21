const verifyBrackets = (input: string) => {
  const bracketMap: Record<string, string> = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const openingBrackets = new Set(['{', '(', '[']);
  const closingBrackets = new Set(['}', ')', ']']);
  const opening: string[] = [];

  const chars = input.split('');
  for (let idx = 0; idx < chars.length; idx += 1) {
    const char = chars[idx];
    if (openingBrackets.has(char)) opening.push(char);
    else if (closingBrackets.has(char)) {
      const openingChar = opening.pop() || '';
      const expected = bracketMap[openingChar];
      if (char !== expected) return 'Not Balanced';
    }
  }
  if (opening.length === 0) return 'Balanced';
  return 'Not Balanced';
};

console.log(verifyBrackets('[()]{}{[()()]()}'));
console.log(verifyBrackets('[(])'));
