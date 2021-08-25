const commaArrayInput =
  `const testArray = [
  'JavaScript (including experimental features)',
  'JSX',
  'Angular',
  'Vue',
  'Flow',
  'TypeScript',
  'CSS, Less, and SCSS',
  'HTML',
  'JSON',
  'GraphQL',
  'Markdown, including GFM and MDX',
  'YAML'
];`;

const commaArrayExpected =
  `const testArray = [
  'JavaScript (including experimental features)',
  'JSX',
  'Angular',
  'Vue',
  'Flow',
  'TypeScript',
  'CSS, Less, and SCSS',
  'HTML',
  'JSON',
  'GraphQL',
  'Markdown, including GFM and MDX',
  'YAML',
];
`;

const commaObjectInput =
  `const testObject = {
  printWidth: 100,
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all'
};`;

const commaObjectExpected =
  `const testObject = {
  printWidth: 100,
  proseWrap: 'always',
  singleQuote: true,
  trailingComma: 'all',
};
`;

const commaFnInput =
  `const testFn = (
  reallyLongArgName = true,
  anotherReallyLongArgName = true,
  oneMoreReallyLongArgName = true
) => {};`;

const commaFnExpected =
  `const testFn = (
  reallyLongArgName = true,
  anotherReallyLongArgName = true,
  oneMoreReallyLongArgName = true,
) => {};
`;

const printWidthFixInput =
  'const result = thisStupidlyLongVariableName ? thatStupidlyLongVariableName : anotherStupidlyLongVariableName;';

const printWidthFixExpected = `const result = thisStupidlyLongVariableName
  ? thatStupidlyLongVariableName
  : anotherStupidlyLongVariableName;
`;

const printWidthLeaveInput =
  `const result = thisVariableName ? thatVariableName : anotherVariableName;
`;

const printWidthLeaveExpected =
  `const result = thisVariableName ? thatVariableName : anotherVariableName;
`;

const proseWrapFixInput =
  'Prettier is an opinionated code formatter with support for JavaScript (including experimental features), JSX, Angular, Vue, Flow, TypeScript, CSS, Less, and SCSS, HTML, JSON, GraphQL, Markdown (including GFM and MDX), YAML';

const proseWrapFixExpected =
  `Prettier is an opinionated code formatter with support for JavaScript (including experimental
features), JSX, Angular, Vue, Flow, TypeScript, CSS, Less, and SCSS, HTML, JSON, GraphQL, Markdown
(including GFM and MDX), YAML
`;

const proseWrapLeaveInput =
  `Prettier is an opinionated code formatter with support for:

- JavaScript (including experimental features)
- JSX
- Angular
- Vue
- Flow
- TypeScript
- CSS, Less, and SCSS
- HTML
- JSON
- GraphQL
- Markdown, including GFM and MDX
- YAML
`;

const proseWrapLeaveExpected =
  `Prettier is an opinionated code formatter with support for:

- JavaScript (including experimental features)
- JSX
- Angular
- Vue
- Flow
- TypeScript
- CSS, Less, and SCSS
- HTML
- JSON
- GraphQL
- Markdown, including GFM and MDX
- YAML
`;

const quotesFixInput = `const testString = "Hello, world!";`;

const quotesFixExpected = `const testString = 'Hello, world!';
`;

const quotesLeaveInput = `const testString = 'Hello, world!';
`;

const quotesLeaveExpected = `const testString = 'Hello, world!';
`;

const commaArray = {
  input: commaArrayInput,
  expected: commaArrayExpected,
};

const commaObject = {
  input: commaObjectInput,
  expected: commaObjectExpected,
};

const commaFn = {
  input: commaFnInput,
  expected: commaFnExpected,
};

const printWidthFix = {
  input: printWidthFixInput,
  expected: printWidthFixExpected,
};

const printWidthLeave = {
  input: printWidthLeaveInput,
  expected: printWidthLeaveExpected,
};

const proseWrapFix = {
  input: proseWrapFixInput,
  expected: proseWrapFixExpected,
};

const proseWrapLeave = {
  input: proseWrapLeaveInput,
  expected: proseWrapLeaveExpected,
};

const quotesFix = {
  input: quotesFixInput,
  expected: quotesFixExpected,
};

const quotesLeave = {
  input: quotesLeaveInput,
  expected: quotesLeaveExpected,
};

export {
  commaArray,
  commaObject,
  commaFn,
  printWidthFix,
  printWidthLeave,
  proseWrapFix,
  proseWrapLeave,
  quotesFix,
  quotesLeave,
};
