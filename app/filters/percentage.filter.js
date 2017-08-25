app.filter("percentage", [Percentage]);

function Percentage () {
  return function(x) {
        return Math.floor(x * 10) + "%";
    };
}
