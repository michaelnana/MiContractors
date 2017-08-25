app.filter("decimalPlaces", [DecimalPlaces]);

function DecimalPlaces () {
  return function(x) {
        return x.toFixed(2);
    };
}
