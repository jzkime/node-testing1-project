const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = {name: '   fake', nickname: '  nicknam ', test: ' tested'};
    const expected = {name: 'fake', nickname: 'nicknam', test: 'tested'};
    const result = utils.trimProperties(input);
    expect(result).toEqual(expected);
    expect(input).toEqual({name: '   fake', nickname: '  nicknam ', test: ' tested'});
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    let input = {key1: '   first', key2: ' second   '}
    const expected = {key1: 'first', key2: 'second'};
    const result = utils.trimPropertiesMutation(input);
    expect(result).toEqual(expected);
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    let input = {key1: '   first', key2: ' second   '}
    const expected = {key1: 'first', key2: 'second'};
    const result = utils.trimPropertiesMutation(input);
    expect(result).toEqual(expected);
    expect(input).toEqual(result);
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{integer: 2}, {integer: 7}, {integer: 10}];
    const expected = 10;
    const result = utils.findLargestInteger(input);
    expect(result).toBe(expected);
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const expected = 3;
    expect(counter.countDown()).toBe(expected);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    let count = counter.countDown();
    expect(count).toBe(3)
    count = counter.countDown()
    expect(count).toBe(2)
    
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let count = counter.countDown();
    expect(count).toBe(3)
    count = counter.countDown()
    expect(count).toBe(2)
    count = counter.countDown()
    expect(count).toBe(1)
    count = counter.countDown()
    expect(count).toBe(0)
    count = counter.countDown()
    expect(count).toBe(0)
    expect(count).not.toBe(-1)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let season;
    season = seasons.next();
    expect(season).toBe("summer");
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let season;
    seasons.next();
    season = seasons.next();
    expect(season).toBe("fall");
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let season;
    seasons.next();
    seasons.next();
    season = seasons.next();
    expect(season).toBe("winter");
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let season;
    seasons.next();
    seasons.next();
    seasons.next();
    season = seasons.next();
    expect(season).toBe("spring");
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let season;
    seasons.next();
    seasons.next();
    seasons.next();
    seasons.next();
    season = seasons.next();
    expect(season).toBe("summer");
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let season;
    const seasonCall = (times) => {
      for(let i = 0; i<times; i++) {
        season = seasons.next();
      }
    }
    seasonCall(40)
    expect(season).toBe("spring");
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    const expected = 100;
    const result = focus.drive(100);
    expect(result).toBe(expected);
  })
  test('[16] driving the car uses gas', () => {
    const expected = 16.7;
    focus.drive(100);
    const currentTank = focus.tank;
    expect(currentTank).toBe(expected)
  })
  test('[17] refueling allows to keep driving', () => {
    const expected = 20;
    focus.drive(600)
    focus.drive(1)
    focus.refuel(99)
    const currentTank = focus.tank;
    expect(currentTank).toBe(expected)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    const expected = 600;
    const result = focus.refuel(5);
    expect(result).toBe(expected)
    expect(focus.tank).toBe(20)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const expected = true;
    const result = await utils.isEvenNumberAsync(4);
    expect(result).toBe(expected);
  })
  test('[20] resolves false if passed an odd number', async () => {
    const expected = false;
    const result = await utils.isEvenNumberAsync(13);
    expect(result).toBe(expected);
  })
})
