function zipList(a, b) {
  const x = [];
  for (let i = 0; i < a.length; i++) {
    x.push(a[i]);
    x.push(b[i]);
  }
  return x;
}

function zipListTheSimpleWay(a, b) {
  const x = _.zip(a, b);
  return _.flatten(x);
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
