var attitude = function(original, replacement) {
  return function(source) {
    return source.replace(original, replacement);
  };
};

var snakify = attitude(/millenials/gi, "Snake People");
var hippify = attitude(/baby boomers/gi, "Aging Hippies");

console.log(snakify("The Millenials are always up to something."));
// The Snake People are always up to something.
console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.
