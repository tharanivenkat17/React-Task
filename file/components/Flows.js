
// @flow
function flows(x: ?number): string {
    if (x) {
      // return (x)
    //   Cannot return `x` because number [1] is incompatible with string [2]. [incompatible-return]
    return String(x)
    }
    return "default string";
  }
  
