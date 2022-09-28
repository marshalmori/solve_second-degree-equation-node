const fs = require("fs");
const { solve_delta, solve_x_plus, solve_root } = require("../helpers/calcula");

const createFile = async (term_a, term_b, term_c) => {
  try {
    const { x1, x2 } = solve_root(term_a, term_b, term_c);
    const solution = `a = ${term_a}, b = ${term_b}, c = ${term_c} \nsolution {x1 = ${x1} , x2 = ${x2}}`;

    fs.writeFileSync("./saida/sol_eq_segundo_grau.txt", solution);
    return solution;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
