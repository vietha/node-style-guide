//
// ============================================================================
// Copyright: 
//          This source is subject to the Designveloper JSC (designveloper.com) 
//          All using or modify must have permission from us.
//
// Name:    DSVScriptTemplate
// Purpose: 	
//          Describe the purpose of the script [short version]
// Class:        
//          one ; two ; three
// Functions:        
//          one ; two ; three
// Called From:       
//          (script) any
// Author:            
//          Ha Truong (truongvieth@designveloper.com)
// Notes:             
//          Additional information [long version]  
// Changelog:
//          05/27/2014 - Ha Truong - Init first revision.
// ============================================================================
//


// Coding style rule:
//  80 characters per line
//  Use 2 spaces not tab
//  Write small functions (<= 15 lines)
//  Use slashes for comments


//	Use single quotes: 
var foo = 'bar';

// Declare one variable per var statement
var http = require('http').createServer(handler);
var io = require('socket.io').listen(http);
var sys = require('sys');
var fs = require('fs');

var clients = [];


//Opening braces go on the same line
if (true) {
  console.log('winning');
}

// Object or Array creation: Use trailing commas and put short declarations 
// on a single line. Only quote keys when your interpreter complains:
var a = ['hello', 'world'];
var b = {
  good: 'code',
  'is generally': 'pretty',
};

// Use the === operator
var a = 0;
if (a !== '') {
  console.log('winning');
}

// Use multi-line ternary operator (not write on the same line)
var foo = (a === b)
  ? 1
  : 2;
  
// Name your closures  
req.on('end', function onEnd() {
  console.log('winning');
});
  

// Use UPPERCASE for Constants
var SECOND = 1 * 1000;

// Use lowerCamelCase for variables, properties and function names
var adminUser = db.query('SELECT * FROM users ...');

/**
 * -------------------------------------------------------------------
 * customFunctionName ( parameter1 ; parameter2 )
 *
 * PARAMETERS:
 *            @parameter1 (text) Input string
 *            @parameter2 (num) Numerical value
 * RETURNS:
 *            (bool) True or False based on proper
 *            evaluation
 * DEPENDENCIES:
 *            none
 * PURPOSE:
 *            Use this function in order to accomplish
 *            most wonderful things possible!
 * NOTES:
 *            none
 * REVISIONS:
 *            05/23/14 - Initial release
 *            05/25/14 - Modified to fix issue
 *            05/27/14 - No returning Boolean result
 * -------------------------------------------------------------------
 */
function customFunctionName(request, response) {

  response.writeHead(200, {
	'Content-Type':'text/html'
  });
  
  var rs = fs.createReadStream(__dirname + '/template.html');
  sys.pump(rs, response);
  return true;
};  
  
 
// Use UpperCamelCase for class names
  
/**
 * -------------------------------------------------------------------
 * CustomClassName ( parameter1 ; parameter2 )
 *
 * PARAMETERS:
 *            @parameter1 (text) Input string
 *            @parameter2 (num) Numerical value
 * METHODS:
 *            one
 *            two
 * DEPENDENCIES:
 *            none
 * PURPOSE:
 *            Use this function in order to accomplish
 *            most wonderful things possible!
 * NOTES:
 *            none
 * REVISIONS:
 *            05/23/14 - Initial release
 *            05/27/14 - Modified to fix issue
 *            05/31/10 - No returning Boolean result
 * -------------------------------------------------------------------
 */
 // Constructor
function CustomClassName(bar,foo) {
  // always initialize all instance properties
  this.bar = bar;
  this.baz = 'baz'; // default value
}
// class methods
CustomClassName.prototype.fooBar = function() {

};
// export the class
module.exports = CustomClassName;
 
 

