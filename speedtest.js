const { performance } = require('perf_hooks');

const speedtest = func => {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    let t0 = performance.now();
    func
    let t1 = performance.now();
    numbers.push(t1 - t0);
  }

  const median = sequence => {
    sequence.sort();  // note that direction doesn't matter
    return sequence[Math.ceil(sequence.length / 2)];
  }

  const time = median(numbers).toFixed(4);

  console.log('Median time', time, 'milliseconds');

  return time;
}

const compare = (myFunc, lodash, arg) => {
  if (speedtest(myFunc(arg)) < speedtest(lodash(arg))) {
    console.log('faster');
  } else {
    console.log('no faster');
  }
}


module.exports = compare;
