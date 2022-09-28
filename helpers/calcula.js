const fs = require("fs");

const solve_delta = (term_a, term_b, term_c) => {
  const delta = term_b * term_b - 4 * term_a * term_c;
  return delta;
};

const solve_x_plus = (term_a, term_b, term_c) => {
  const x_plus =
    (-1 * term_b + solve_delta(term_a, term_b, term_c) ** (1 / 2)) /
    (2 * term_a);
  return x_plus;
};

const solve_x_minus = (term_a, term_b, term_c) => {
  const x_plus =
    (-1 * term_b - solve_delta(term_a, term_b, term_c) ** (1 / 2)) /
    (2 * term_a);
  return x_plus;
};

const solve_root = (term_a, term_b, term_c) => {
  if (solve_delta(term_a, term_b, term_c) > 0) {
    const x1 = solve_x_plus(term_a, term_b, term_c);
    const x2 = solve_x_minus(term_a, term_b, term_c);
    const solution = {
      x1: x1,
      x2: x2,
    };
    return solution;
  }
  if (solve_delta(term_a, term_b, term_c) == 0) {
    const x1 = solve_x_plus(term_a, term_b, term_c);
    const x2 = x1;
    const solution = {
      x1: x1,
      x2: x2,
    };
    return solution;
  }
  if (solve_delta(term_a, term_b, term_c) < 0) {
    const x1 = "Não tem solução real.";
    const x2 = "Não tem solução real.";
    const solution = {
      x1: x1,
      x2: x2,
    };
    return solution;
  }
};

module.exports = { solve_delta, solve_x_plus, solve_root };
