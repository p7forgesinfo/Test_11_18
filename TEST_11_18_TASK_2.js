// Не мудрствуя лукаво
const getCoefficients = (polynomial1, polynomial2) => {
  const result = [];

  polynomial1.forEach((poly1) => {
    polynomial2.forEach((poly2) => {
      result.push(poly1 * poly2);
    });
  });

  const extraElement = result.splice(2, 1);
  result[1] += +extraElement;

  return result;
};

console.log('[-1, 1], [2, 1]:', getCoefficients([-1, 1], [2, 1]));
console.log('[-2, 5], [2, 4]:', getCoefficients([-2, 5], [2, 4]));
console.log('[6, 3], [1, 7]:', getCoefficients([6, 3], [1, 7]));
