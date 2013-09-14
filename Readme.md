# model-debounce

  Debounces a model's save and update methods.

## Installation

    $ component install segmentio/model-debounce

## API

```js
var debounce = require('model-debounce')
  , model = require('model');

// defaults to `100`ms
var Person = model('person')
  .use(debounce)
  .attr('name')
  .attr('age');

// or specify the interval yourself
var Person = model('person')
  .use(debounce(300))
  .attr('name')
  .attr('age');
```

## License

  MIT
