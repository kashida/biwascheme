// 
// Heap based scheme from 3imp.pdf
//

//
// variables
//
BiwaScheme.TopEnv = {};
BiwaScheme.CoreEnv = {};

//
// Nil
// javascript representation of empty list( '() )
//
BiwaScheme.nil = {
  toString: function() { return "nil"; },
  to_write: function() { return "()"; },
  to_array: function() { return []; },
  length: function() { return 0; }
};

//
// #<undef> (The undefined value)
// also used as #<unspecified> values
//
BiwaScheme.undef = new Object();
BiwaScheme.undef.toString = function(){ return "#<undef>"; }

// Prints the arguments to console.debug.
BiwaScheme.debug = function(/*arguments*/){
  var args = _.toArray(arguments);
  console.debug.apply(console, _.map(args, BiwaScheme.inspect));
}
