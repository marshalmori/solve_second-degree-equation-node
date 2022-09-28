const argv = require("yargs")
  .option("a", {
    alias: "term_a",
    type: "number",
    default: 0,
    describe: "O valor do termo a da equação do segundo grau.",
  })
  .option("b", {
    alias: "term_b",
    type: "number",
    default: 0,
    describe: "O valor do termo b da equação do segundo grau.",
  })
  .option("c", {
    alias: "term_c",
    type: "number",
    default: 0,
    describe: "O valor do termo c da equação do segundo grau.",
  })
  .check((argv, options) => {
    if (isNaN(argv.a) || argv.a === NaN) {
      throw "O valor do termo a deve ser um número.";
    }
    if (isNaN(argv.b)) {
      throw "O valor do termo b deve ser um número.";
    }
    if (isNaN(argv.c)) {
      throw "O valor do termo c deve ser um número.";
    }
    return true;
  }).argv;

module.exports = argv;
