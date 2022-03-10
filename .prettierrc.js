module.exports = {
  trailingComma: "es5",
  bracketSpacing: true,

  // vue template 排版設定
  printWidth: 200,
  sortAttributes: true, // 屬性自動排按順序排列
  wrap_attributes: "auto",
  bracketSameLine: false, //結尾括號

  // vue script js 排版設定
  semi: false, //使用分號結尾
  singleQuote: false, //使用單引號
  eslintIntegration: false, //開啟 eslint 支援
  arrowParens: "always", //箭頭函式的引數，always： 使用圓括號，avoid： 不使用圓括號
  spaceBeforeFunctionParen: true,
};

//    wrap_attributes 有以下屬性
// - auto: 僅在超出行長度時才對屬性進行換行。
// - force: 對除第一個屬性外的其他每個屬性進行換行。
// - force-aligned: 對除第一個屬性外的其他每個屬性進行換行，並保持對齊。
// - force-expand-multiline: 對每個屬性進行換行。
// - aligned-multiple: 當超出折行長度時，將屬性進行垂直對齊。
