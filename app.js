const { solve_delta, solve_x_plus, solve_root } = require("./helpers/calcula");
const { createFile } = require("./config/generate_file");
const argv = require("./config/yargs");

console.clear();

createFile(argv.a, argv.b, argv.c)
  .then((solution) => console.log(solution, "Arquivo criado"))
  .catch((error) => console.log(error));

// const valor = solve_x_plus(5, 0, 0);

// duas raizes reais e diferentes
// const valor = solve_root(1, -1, -12);

// duas raizes reais e iguais
// const valor = solve_root(5, 0, 0);

// duas raizes complexas
// const valor = solve_root(4, -4, 2);

// console.log(valor);
