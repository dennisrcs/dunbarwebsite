// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//





$(document).ready(function() {
    $(".flash_danger").delay(2000).fadeOut(1000);
    $(".flash_info").delay(2000).fadeOut(1000);
    
    $(window).scroll(function() {
      if ($(this).width() > 1100) {
        if ($(this).scrollTop() > 200){
          $(".logo img").css("height", "70px");
          $(".logo a").css("font-size", "20pt");
          $("nav").css("height", "100px");
        }
        else {
          $(".logo img").css("height", "100px");
          $(".logo a").css("font-size", "24pt");
          $("nav").css("height", "200px");
        }
      }
    });
});

/*!
 * jQuery JavaScript Library v1.12.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-02-22T19:07Z
 */


(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE11 only
	// In IE 11 fullscreen elements inside of an iframe have
	// 100x too small dimensions (gh-1764).
	if ( document.msFullscreenElement && window.top !== window ) {

		// Support: IE11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
		}
	}

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) >= 0 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8+
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	if ( !document.implementation.createHTMLDocument ) {
		return false;
	}
	var doc = document.implementation.createHTMLDocument( "" );
	doc.body.innerHTML = "<form></form><form></form>";
	return doc.body.childNodes.length === 2;
} )();


// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	// document.implementation stops scripts or inline event handlers from
	// being executed immediately
	context = context || ( support.createHTMLDocument ?
		document.implementation.createHTMLDocument( "" ) :
		document );

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */

jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
jQuery(function($){
  $("#telephone").mask("(999) 999-9999");
  $("#fax").mask("(999) 999-9999");
});
$(document).ready(function() {
    $('.courses-list ul.course-info li:first-child').addClass('active');
    $('.courses-list .course-files .course-files-container:first-child').addClass('active');
    
    $('ul.course-info li').bind('click', function() {
        $('ul.course-info .active').removeClass('active');
        $(this).addClass('active');
        id = $(this).attr('id');
        $('.course-files .course-files-container.active').removeClass('active');
        $('.course-files .course-files-container.files_' + id).addClass('active');
    });
    
    $("ul.course-info li").hover(
        function() {
            thirddEl = $(this).children().first().next().next();
            thirddEl.css('background', '#e0e0e0');
        },
        function() {
            thirddEl = $(this).children().first().next().next()
            thirddEl.css('background', 'white');
        }
    );
});
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 4.258860, lng: 24.293072},
    zoom: 1,
    mapTypeControl: false,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: true,
    streetViewControl: false
  });
  
  plotMembers();
}

function plotMembers(){
  if (gon.members != undefined) {
    for (i = 0; i < gon.members.length; i++) { 
      var geocoder = new google.maps.Geocoder();
      if (gon.members[i].birthplace != undefined && gon.members[i].birthplace != "" && gon.members[i].birthplace != null) {
        geocoder.geocode({'address': gon.members[i].birthplace},
          function(results, status) {
            if (status === 'OK') {
              var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
              });
            }
          }
        ); 
      }
    }  
  }
}
;
$(document).ready(function() {
    $('#group_rules').parent().addClass('active');
    $('.files_group_rules').parent().addClass('active');
    
    $('ul.group-info-category li').bind('click', function() {
        $('ul.group-info-category .active').removeClass('active');
        $(this).addClass('active');
        firstChild = $(this).children().first();
        id = firstChild.attr('id');
        $('ul.group-info li.active').removeClass('active');
        $('ul.group-info .files_' + id).parent().addClass('active');
    });
    
    $("ul.group-info-category li").hover(
        function() {
            secondChildEl = $(this).children().first().next();
            secondChildEl.css('background', '#e0e0e0');
        },
        function() {
            secondChildEl = $(this).children().first().next()
            secondChildEl.css('background', 'white');
        }
    );
});
/*!
* jQuery Cycle2; version: 2.1.6 build: 20141007
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2014 M. Alsup; Dual licensed: MIT/GPL
*/

/* Cycle2 core engine */

;(function($) {
"use strict";

var version = '2.1.6';

$.fn.cycle = function( options ) {
    // fix mistakes with the ready state
    var o;
    if ( this.length === 0 && !$.isReady ) {
        o = { s: this.selector, c: this.context };
        $.fn.cycle.log('requeuing slideshow (dom not ready)');
        $(function() {
            $( o.s, o.c ).cycle(options);
        });
        return this;
    }

    return this.each(function() {
        var data, opts, shortName, val;
        var container = $(this);
        var log = $.fn.cycle.log;

        if ( container.data('cycle.opts') )
            return; // already initialized

        if ( container.data('cycle-log') === false || 
            ( options && options.log === false ) ||
            ( opts && opts.log === false) ) {
            log = $.noop;
        }

        log('--c2 init--');
        data = container.data();
        for (var p in data) {
            // allow props to be accessed sans 'cycle' prefix and log the overrides
            if (data.hasOwnProperty(p) && /^cycle[A-Z]+/.test(p) ) {
                val = data[p];
                shortName = p.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, lowerCase);
                log(shortName+':', val, '('+typeof val +')');
                data[shortName] = val;
            }
        }

        opts = $.extend( {}, $.fn.cycle.defaults, data, options || {});

        opts.timeoutId = 0;
        opts.paused = opts.paused || false; // #57
        opts.container = container;
        opts._maxZ = opts.maxZ;

        opts.API = $.extend ( { _container: container }, $.fn.cycle.API );
        opts.API.log = log;
        opts.API.trigger = function( eventName, args ) {
            opts.container.trigger( eventName, args );
            return opts.API;
        };

        container.data( 'cycle.opts', opts );
        container.data( 'cycle.API', opts.API );

        // opportunity for plugins to modify opts and API
        opts.API.trigger('cycle-bootstrap', [ opts, opts.API ]);

        opts.API.addInitialSlides();
        opts.API.preInitSlideshow();

        if ( opts.slides.length )
            opts.API.initSlideshow();
    });
};

$.fn.cycle.API = {
    opts: function() {
        return this._container.data( 'cycle.opts' );
    },
    addInitialSlides: function() {
        var opts = this.opts();
        var slides = opts.slides;
        opts.slideCount = 0;
        opts.slides = $(); // empty set
        
        // add slides that already exist
        slides = slides.jquery ? slides : opts.container.find( slides );

        if ( opts.random ) {
            slides.sort(function() {return Math.random() - 0.5;});
        }

        opts.API.add( slides );
    },

    preInitSlideshow: function() {
        var opts = this.opts();
        opts.API.trigger('cycle-pre-initialize', [ opts ]);
        var tx = $.fn.cycle.transitions[opts.fx];
        if (tx && $.isFunction(tx.preInit))
            tx.preInit( opts );
        opts._preInitialized = true;
    },

    postInitSlideshow: function() {
        var opts = this.opts();
        opts.API.trigger('cycle-post-initialize', [ opts ]);
        var tx = $.fn.cycle.transitions[opts.fx];
        if (tx && $.isFunction(tx.postInit))
            tx.postInit( opts );
    },

    initSlideshow: function() {
        var opts = this.opts();
        var pauseObj = opts.container;
        var slideOpts;
        opts.API.calcFirstSlide();

        if ( opts.container.css('position') == 'static' )
            opts.container.css('position', 'relative');

        $(opts.slides[opts.currSlide]).css({
            opacity: 1,
            display: 'block',
            visibility: 'visible'
        });
        opts.API.stackSlides( opts.slides[opts.currSlide], opts.slides[opts.nextSlide], !opts.reverse );

        if ( opts.pauseOnHover ) {
            // allow pauseOnHover to specify an element
            if ( opts.pauseOnHover !== true )
                pauseObj = $( opts.pauseOnHover );

            pauseObj.hover(
                function(){ opts.API.pause( true ); }, 
                function(){ opts.API.resume( true ); }
            );
        }

        // stage initial transition
        if ( opts.timeout ) {
            slideOpts = opts.API.getSlideOpts( opts.currSlide );
            opts.API.queueTransition( slideOpts, slideOpts.timeout + opts.delay );
        }

        opts._initialized = true;
        opts.API.updateView( true );
        opts.API.trigger('cycle-initialized', [ opts ]);
        opts.API.postInitSlideshow();
    },

    pause: function( hover ) {
        var opts = this.opts(),
            slideOpts = opts.API.getSlideOpts(),
            alreadyPaused = opts.hoverPaused || opts.paused;

        if ( hover )
            opts.hoverPaused = true; 
        else
            opts.paused = true;

        if ( ! alreadyPaused ) {
            opts.container.addClass('cycle-paused');
            opts.API.trigger('cycle-paused', [ opts ]).log('cycle-paused');

            if ( slideOpts.timeout ) {
                clearTimeout( opts.timeoutId );
                opts.timeoutId = 0;
                
                // determine how much time is left for the current slide
                opts._remainingTimeout -= ( $.now() - opts._lastQueue );
                if ( opts._remainingTimeout < 0 || isNaN(opts._remainingTimeout) )
                    opts._remainingTimeout = undefined;
            }
        }
    },

    resume: function( hover ) {
        var opts = this.opts(),
            alreadyResumed = !opts.hoverPaused && !opts.paused,
            remaining;

        if ( hover )
            opts.hoverPaused = false; 
        else
            opts.paused = false;

    
        if ( ! alreadyResumed ) {
            opts.container.removeClass('cycle-paused');
            // #gh-230; if an animation is in progress then don't queue a new transition; it will
            // happen naturally
            if ( opts.slides.filter(':animated').length === 0 )
                opts.API.queueTransition( opts.API.getSlideOpts(), opts._remainingTimeout );
            opts.API.trigger('cycle-resumed', [ opts, opts._remainingTimeout ] ).log('cycle-resumed');
        }
    },

    add: function( slides, prepend ) {
        var opts = this.opts();
        var oldSlideCount = opts.slideCount;
        var startSlideshow = false;
        var len;

        if ( $.type(slides) == 'string')
            slides = $.trim( slides );

        $( slides ).each(function(i) {
            var slideOpts;
            var slide = $(this);

            if ( prepend )
                opts.container.prepend( slide );
            else
                opts.container.append( slide );

            opts.slideCount++;
            slideOpts = opts.API.buildSlideOpts( slide );

            if ( prepend )
                opts.slides = $( slide ).add( opts.slides );
            else
                opts.slides = opts.slides.add( slide );

            opts.API.initSlide( slideOpts, slide, --opts._maxZ );

            slide.data('cycle.opts', slideOpts);
            opts.API.trigger('cycle-slide-added', [ opts, slideOpts, slide ]);
        });

        opts.API.updateView( true );

        startSlideshow = opts._preInitialized && (oldSlideCount < 2 && opts.slideCount >= 1);
        if ( startSlideshow ) {
            if ( !opts._initialized )
                opts.API.initSlideshow();
            else if ( opts.timeout ) {
                len = opts.slides.length;
                opts.nextSlide = opts.reverse ? len - 1 : 1;
                if ( !opts.timeoutId ) {
                    opts.API.queueTransition( opts );
                }
            }
        }
    },

    calcFirstSlide: function() {
        var opts = this.opts();
        var firstSlideIndex;
        firstSlideIndex = parseInt( opts.startingSlide || 0, 10 );
        if (firstSlideIndex >= opts.slides.length || firstSlideIndex < 0)
            firstSlideIndex = 0;

        opts.currSlide = firstSlideIndex;
        if ( opts.reverse ) {
            opts.nextSlide = firstSlideIndex - 1;
            if (opts.nextSlide < 0)
                opts.nextSlide = opts.slides.length - 1;
        }
        else {
            opts.nextSlide = firstSlideIndex + 1;
            if (opts.nextSlide == opts.slides.length)
                opts.nextSlide = 0;
        }
    },

    calcNextSlide: function() {
        var opts = this.opts();
        var roll;
        if ( opts.reverse ) {
            roll = (opts.nextSlide - 1) < 0;
            opts.nextSlide = roll ? opts.slideCount - 1 : opts.nextSlide-1;
            opts.currSlide = roll ? 0 : opts.nextSlide+1;
        }
        else {
            roll = (opts.nextSlide + 1) == opts.slides.length;
            opts.nextSlide = roll ? 0 : opts.nextSlide+1;
            opts.currSlide = roll ? opts.slides.length-1 : opts.nextSlide-1;
        }
    },

    calcTx: function( slideOpts, manual ) {
        var opts = slideOpts;
        var tx;

        if ( opts._tempFx )
            tx = $.fn.cycle.transitions[opts._tempFx];
        else if ( manual && opts.manualFx )
            tx = $.fn.cycle.transitions[opts.manualFx];

        if ( !tx )
            tx = $.fn.cycle.transitions[opts.fx];

        opts._tempFx = null;
        this.opts()._tempFx = null;

        if (!tx) {
            tx = $.fn.cycle.transitions.fade;
            opts.API.log('Transition "' + opts.fx + '" not found.  Using fade.');
        }
        return tx;
    },

    prepareTx: function( manual, fwd ) {
        var opts = this.opts();
        var after, curr, next, slideOpts, tx;

        if ( opts.slideCount < 2 ) {
            opts.timeoutId = 0;
            return;
        }
        if ( manual && ( !opts.busy || opts.manualTrump ) ) {
            opts.API.stopTransition();
            opts.busy = false;
            clearTimeout(opts.timeoutId);
            opts.timeoutId = 0;
        }
        if ( opts.busy )
            return;
        if ( opts.timeoutId === 0 && !manual )
            return;

        curr = opts.slides[opts.currSlide];
        next = opts.slides[opts.nextSlide];
        slideOpts = opts.API.getSlideOpts( opts.nextSlide );
        tx = opts.API.calcTx( slideOpts, manual );

        opts._tx = tx;

        if ( manual && slideOpts.manualSpeed !== undefined )
            slideOpts.speed = slideOpts.manualSpeed;

        // if ( opts.nextSlide === opts.currSlide )
        //     opts.API.calcNextSlide();

        // ensure that:
        //      1. advancing to a different slide
        //      2. this is either a manual event (prev/next, pager, cmd) or 
        //              a timer event and slideshow is not paused
        if ( opts.nextSlide != opts.currSlide && 
            (manual || (!opts.paused && !opts.hoverPaused && opts.timeout) )) { // #62

            opts.API.trigger('cycle-before', [ slideOpts, curr, next, fwd ]);
            if ( tx.before )
                tx.before( slideOpts, curr, next, fwd );

            after = function() {
                opts.busy = false;
                // #76; bail if slideshow has been destroyed
                if (! opts.container.data( 'cycle.opts' ) )
                    return;

                if (tx.after)
                    tx.after( slideOpts, curr, next, fwd );
                opts.API.trigger('cycle-after', [ slideOpts, curr, next, fwd ]);
                opts.API.queueTransition( slideOpts);
                opts.API.updateView( true );
            };

            opts.busy = true;
            if (tx.transition)
                tx.transition(slideOpts, curr, next, fwd, after);
            else
                opts.API.doTransition( slideOpts, curr, next, fwd, after);

            opts.API.calcNextSlide();
            opts.API.updateView();
        } else {
            opts.API.queueTransition( slideOpts );
        }
    },

    // perform the actual animation
    doTransition: function( slideOpts, currEl, nextEl, fwd, callback) {
        var opts = slideOpts;
        var curr = $(currEl), next = $(nextEl);
        var fn = function() {
            // make sure animIn has something so that callback doesn't trigger immediately
            next.animate(opts.animIn || { opacity: 1}, opts.speed, opts.easeIn || opts.easing, callback);
        };

        next.css(opts.cssBefore || {});
        curr.animate(opts.animOut || {}, opts.speed, opts.easeOut || opts.easing, function() {
            curr.css(opts.cssAfter || {});
            if (!opts.sync) {
                fn();
            }
        });
        if (opts.sync) {
            fn();
        }
    },

    queueTransition: function( slideOpts, specificTimeout ) {
        var opts = this.opts();
        var timeout = specificTimeout !== undefined ? specificTimeout : slideOpts.timeout;
        if (opts.nextSlide === 0 && --opts.loop === 0) {
            opts.API.log('terminating; loop=0');
            opts.timeout = 0;
            if ( timeout ) {
                setTimeout(function() {
                    opts.API.trigger('cycle-finished', [ opts ]);
                }, timeout);
            }
            else {
                opts.API.trigger('cycle-finished', [ opts ]);
            }
            // reset nextSlide
            opts.nextSlide = opts.currSlide;
            return;
        }
        if ( opts.continueAuto !== undefined ) {
            if ( opts.continueAuto === false || 
                ($.isFunction(opts.continueAuto) && opts.continueAuto() === false )) {
                opts.API.log('terminating automatic transitions');
                opts.timeout = 0;
                if ( opts.timeoutId )
                    clearTimeout(opts.timeoutId);
                return;
            }
        }
        if ( timeout ) {
            opts._lastQueue = $.now();
            if ( specificTimeout === undefined )
                opts._remainingTimeout = slideOpts.timeout;

            if ( !opts.paused && ! opts.hoverPaused ) {
                opts.timeoutId = setTimeout(function() { 
                    opts.API.prepareTx( false, !opts.reverse ); 
                }, timeout );
            }
        }
    },

    stopTransition: function() {
        var opts = this.opts();
        if ( opts.slides.filter(':animated').length ) {
            opts.slides.stop(false, true);
            opts.API.trigger('cycle-transition-stopped', [ opts ]);
        }

        if ( opts._tx && opts._tx.stopTransition )
            opts._tx.stopTransition( opts );
    },

    // advance slide forward or back
    advanceSlide: function( val ) {
        var opts = this.opts();
        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;
        opts.nextSlide = opts.currSlide + val;
        
        if (opts.nextSlide < 0)
            opts.nextSlide = opts.slides.length - 1;
        else if (opts.nextSlide >= opts.slides.length)
            opts.nextSlide = 0;

        opts.API.prepareTx( true,  val >= 0 );
        return false;
    },

    buildSlideOpts: function( slide ) {
        var opts = this.opts();
        var val, shortName;
        var slideOpts = slide.data() || {};
        for (var p in slideOpts) {
            // allow props to be accessed sans 'cycle' prefix and log the overrides
            if (slideOpts.hasOwnProperty(p) && /^cycle[A-Z]+/.test(p) ) {
                val = slideOpts[p];
                shortName = p.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, lowerCase);
                opts.API.log('['+(opts.slideCount-1)+']', shortName+':', val, '('+typeof val +')');
                slideOpts[shortName] = val;
            }
        }

        slideOpts = $.extend( {}, $.fn.cycle.defaults, opts, slideOpts );
        slideOpts.slideNum = opts.slideCount;

        try {
            // these props should always be read from the master state object
            delete slideOpts.API;
            delete slideOpts.slideCount;
            delete slideOpts.currSlide;
            delete slideOpts.nextSlide;
            delete slideOpts.slides;
        } catch(e) {
            // no op
        }
        return slideOpts;
    },

    getSlideOpts: function( index ) {
        var opts = this.opts();
        if ( index === undefined )
            index = opts.currSlide;

        var slide = opts.slides[index];
        var slideOpts = $(slide).data('cycle.opts');
        return $.extend( {}, opts, slideOpts );
    },
    
    initSlide: function( slideOpts, slide, suggestedZindex ) {
        var opts = this.opts();
        slide.css( slideOpts.slideCss || {} );
        if ( suggestedZindex > 0 )
            slide.css( 'zIndex', suggestedZindex );

        // ensure that speed settings are sane
        if ( isNaN( slideOpts.speed ) )
            slideOpts.speed = $.fx.speeds[slideOpts.speed] || $.fx.speeds._default;
        if ( !slideOpts.sync )
            slideOpts.speed = slideOpts.speed / 2;

        slide.addClass( opts.slideClass );
    },

    updateView: function( isAfter, isDuring, forceEvent ) {
        var opts = this.opts();
        if ( !opts._initialized )
            return;
        var slideOpts = opts.API.getSlideOpts();
        var currSlide = opts.slides[ opts.currSlide ];

        if ( ! isAfter && isDuring !== true ) {
            opts.API.trigger('cycle-update-view-before', [ opts, slideOpts, currSlide ]);
            if ( opts.updateView < 0 )
                return;
        }

        if ( opts.slideActiveClass ) {
            opts.slides.removeClass( opts.slideActiveClass )
                .eq( opts.currSlide ).addClass( opts.slideActiveClass );
        }

        if ( isAfter && opts.hideNonActive )
            opts.slides.filter( ':not(.' + opts.slideActiveClass + ')' ).css('visibility', 'hidden');

        if ( opts.updateView === 0 ) {
            setTimeout(function() {
                opts.API.trigger('cycle-update-view', [ opts, slideOpts, currSlide, isAfter ]);
            }, slideOpts.speed / (opts.sync ? 2 : 1) );
        }

        if ( opts.updateView !== 0 )
            opts.API.trigger('cycle-update-view', [ opts, slideOpts, currSlide, isAfter ]);
        
        if ( isAfter )
            opts.API.trigger('cycle-update-view-after', [ opts, slideOpts, currSlide ]);
    },

    getComponent: function( name ) {
        var opts = this.opts();
        var selector = opts[name];
        if (typeof selector === 'string') {
            // if selector is a child, sibling combinator, adjancent selector then use find, otherwise query full dom
            return (/^\s*[\>|\+|~]/).test( selector ) ? opts.container.find( selector ) : $( selector );
        }
        if (selector.jquery)
            return selector;
        
        return $(selector);
    },

    stackSlides: function( curr, next, fwd ) {
        var opts = this.opts();
        if ( !curr ) {
            curr = opts.slides[opts.currSlide];
            next = opts.slides[opts.nextSlide];
            fwd = !opts.reverse;
        }

        // reset the zIndex for the common case:
        // curr slide on top,  next slide beneath, and the rest in order to be shown
        $(curr).css('zIndex', opts.maxZ);

        var i;
        var z = opts.maxZ - 2;
        var len = opts.slideCount;
        if (fwd) {
            for ( i = opts.currSlide + 1; i < len; i++ )
                $( opts.slides[i] ).css( 'zIndex', z-- );
            for ( i = 0; i < opts.currSlide; i++ )
                $( opts.slides[i] ).css( 'zIndex', z-- );
        }
        else {
            for ( i = opts.currSlide - 1; i >= 0; i-- )
                $( opts.slides[i] ).css( 'zIndex', z-- );
            for ( i = len - 1; i > opts.currSlide; i-- )
                $( opts.slides[i] ).css( 'zIndex', z-- );
        }

        $(next).css('zIndex', opts.maxZ - 1);
    },

    getSlideIndex: function( el ) {
        return this.opts().slides.index( el );
    }

}; // API

// default logger
$.fn.cycle.log = function log() {
    /*global console:true */
    if (window.console && console.log)
        console.log('[cycle2] ' + Array.prototype.join.call(arguments, ' ') );
};

$.fn.cycle.version = function() { return 'Cycle2: ' + version; };

// helper functions

function lowerCase(s) {
    return (s || '').toLowerCase();
}

// expose transition object
$.fn.cycle.transitions = {
    custom: {
    },
    none: {
        before: function( opts, curr, next, fwd ) {
            opts.API.stackSlides( next, curr, fwd );
            opts.cssBefore = { opacity: 1, visibility: 'visible', display: 'block' };
        }
    },
    fade: {
        before: function( opts, curr, next, fwd ) {
            var css = opts.API.getSlideOpts( opts.nextSlide ).slideCss || {};
            opts.API.stackSlides( curr, next, fwd );
            opts.cssBefore = $.extend(css, { opacity: 0, visibility: 'visible', display: 'block' });
            opts.animIn = { opacity: 1 };
            opts.animOut = { opacity: 0 };
        }
    },
    fadeout: {
        before: function( opts , curr, next, fwd ) {
            var css = opts.API.getSlideOpts( opts.nextSlide ).slideCss || {};
            opts.API.stackSlides( curr, next, fwd );
            opts.cssBefore = $.extend(css, { opacity: 1, visibility: 'visible', display: 'block' });
            opts.animOut = { opacity: 0 };
        }
    },
    scrollHorz: {
        before: function( opts, curr, next, fwd ) {
            opts.API.stackSlides( curr, next, fwd );
            var w = opts.container.css('overflow','hidden').width();
            opts.cssBefore = { left: fwd ? w : - w, top: 0, opacity: 1, visibility: 'visible', display: 'block' };
            opts.cssAfter = { zIndex: opts._maxZ - 2, left: 0 };
            opts.animIn = { left: 0 };
            opts.animOut = { left: fwd ? -w : w };
        }
    }
};

// @see: http://jquery.malsup.com/cycle2/api
$.fn.cycle.defaults = {
    allowWrap:        true,
    autoSelector:     '.cycle-slideshow[data-cycle-auto-init!=false]',
    delay:            0,
    easing:           null,
    fx:              'fade',
    hideNonActive:    true,
    loop:             0,
    manualFx:         undefined,
    manualSpeed:      undefined,
    manualTrump:      true,
    maxZ:             100,
    pauseOnHover:     false,
    reverse:          false,
    slideActiveClass: 'cycle-slide-active',
    slideClass:       'cycle-slide',
    slideCss:         { position: 'absolute', top: 0, left: 0 },
    slides:          '> img',
    speed:            500,
    startingSlide:    0,
    sync:             true,
    timeout:          4000,
    updateView:       0
};

//automatically find and run slideshows
$(document).ready(function() {
    $( $.fn.cycle.defaults.autoSelector ).cycle();
});

//run slideshow when the home tab is clicked
$( "#home" ).click(function() {
    alert( "Handler for .click() called." );
    $( $.fn.cycle.defaults.autoSelector ).cycle();
});
})(jQuery);

/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130913 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    autoHeight: 0, // setting this option to false disables autoHeight logic
    autoHeightSpeed: 250,
    autoHeightEasing: null
});    

$(document).on( 'cycle-initialized', function( e, opts ) {
    var autoHeight = opts.autoHeight;
    var t = $.type( autoHeight );
    var resizeThrottle = null;
    var ratio;

    if ( t !== 'string' && t !== 'number' )
        return;

    // bind events
    opts.container.on( 'cycle-slide-added cycle-slide-removed', initAutoHeight );
    opts.container.on( 'cycle-destroyed', onDestroy );

    if ( autoHeight == 'container' ) {
        opts.container.on( 'cycle-before', onBefore );
    }
    else if ( t === 'string' && /\d+\:\d+/.test( autoHeight ) ) { 
        // use ratio
        ratio = autoHeight.match(/(\d+)\:(\d+)/);
        ratio = ratio[1] / ratio[2];
        opts._autoHeightRatio = ratio;
    }

    // if autoHeight is a number then we don't need to recalculate the sentinel
    // index on resize
    if ( t !== 'number' ) {
        // bind unique resize handler per slideshow (so it can be 'off-ed' in onDestroy)
        opts._autoHeightOnResize = function () {
            clearTimeout( resizeThrottle );
            resizeThrottle = setTimeout( onResize, 50 );
        };

        $(window).on( 'resize orientationchange', opts._autoHeightOnResize );
    }

    setTimeout( onResize, 30 );

    function onResize() {
        initAutoHeight( e, opts );
    }
});

function initAutoHeight( e, opts ) {
    var clone, height, sentinelIndex;
    var autoHeight = opts.autoHeight;

    if ( autoHeight == 'container' ) {
        height = $( opts.slides[ opts.currSlide ] ).outerHeight();
        opts.container.height( height );
    }
    else if ( opts._autoHeightRatio ) { 
        opts.container.height( opts.container.width() / opts._autoHeightRatio );
    }
    else if ( autoHeight === 'calc' || ( $.type( autoHeight ) == 'number' && autoHeight >= 0 ) ) {
        if ( autoHeight === 'calc' )
            sentinelIndex = calcSentinelIndex( e, opts );
        else if ( autoHeight >= opts.slides.length )
            sentinelIndex = 0;
        else 
            sentinelIndex = autoHeight;

        // only recreate sentinel if index is different
        if ( sentinelIndex == opts._sentinelIndex )
            return;

        opts._sentinelIndex = sentinelIndex;
        if ( opts._sentinel )
            opts._sentinel.remove();

        // clone existing slide as sentinel
        clone = $( opts.slides[ sentinelIndex ].cloneNode(true) );
        
        // #50; remove special attributes from cloned content
        clone.removeAttr( 'id name rel' ).find( '[id],[name],[rel]' ).removeAttr( 'id name rel' );

        clone.css({
            position: 'static',
            visibility: 'hidden',
            display: 'block'
        }).prependTo( opts.container ).addClass('cycle-sentinel cycle-slide').removeClass('cycle-slide-active');
        clone.find( '*' ).css( 'visibility', 'hidden' );

        opts._sentinel = clone;
    }
}    

function calcSentinelIndex( e, opts ) {
    var index = 0, max = -1;

    // calculate tallest slide index
    opts.slides.each(function(i) {
        var h = $(this).height();
        if ( h > max ) {
            max = h;
            index = i;
        }
    });
    return index;
}

function onBefore( e, opts, outgoing, incoming, forward ) {
    var h = $(incoming).outerHeight();
    opts.container.animate( { height: h }, opts.autoHeightSpeed, opts.autoHeightEasing );
}

function onDestroy( e, opts ) {
    if ( opts._autoHeightOnResize ) {
        $(window).off( 'resize orientationchange', opts._autoHeightOnResize );
        opts._autoHeightOnResize = null;
    }
    opts.container.off( 'cycle-slide-added cycle-slide-removed', initAutoHeight );
    opts.container.off( 'cycle-destroyed', onDestroy );
    opts.container.off( 'cycle-before', onBefore );

    if ( opts._sentinel ) {
        opts._sentinel.remove();
        opts._sentinel = null;
    }
}

})(jQuery);

/*! caption plugin for Cycle2;  version: 20130306 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    caption:          '> .cycle-caption',
    captionTemplate:  '{{slideNum}} / {{slideCount}}',
    overlay:          '> .cycle-overlay',
    overlayTemplate:  '<div>{{title}}</div><div>{{desc}}</div>',
    captionModule:    'caption'
});    

$(document).on( 'cycle-update-view', function( e, opts, slideOpts, currSlide ) {
    if ( opts.captionModule !== 'caption' )
        return;
    var el;
    $.each(['caption','overlay'], function() {
        var name = this; 
        var template = slideOpts[name+'Template'];
        var el = opts.API.getComponent( name );
        if( el.length && template ) {
            el.html( opts.API.tmpl( template, slideOpts, opts, currSlide ) );
            el.show();
        }
        else {
            el.hide();
        }
    });
});

$(document).on( 'cycle-destroyed', function( e, opts ) {
    var el;
    $.each(['caption','overlay'], function() {
        var name = this, template = opts[name+'Template'];
        if ( opts[name] && template ) {
            el = opts.API.getComponent( 'caption' );
            el.empty();
        }
    });
});

})(jQuery);

/*! command plugin for Cycle2;  version: 20140415 */
(function($) {
"use strict";

var c2 = $.fn.cycle;

$.fn.cycle = function( options ) {
    var cmd, cmdFn, opts;
    var args = $.makeArray( arguments );

    if ( $.type( options ) == 'number' ) {
        return this.cycle( 'goto', options );
    }

    if ( $.type( options ) == 'string' ) {
        return this.each(function() {
            var cmdArgs;
            cmd = options;
            opts = $(this).data('cycle.opts');

            if ( opts === undefined ) {
                c2.log('slideshow must be initialized before sending commands; "' + cmd + '" ignored');
                return;
            }
            else {
                cmd = cmd == 'goto' ? 'jump' : cmd; // issue #3; change 'goto' to 'jump' internally
                cmdFn = opts.API[ cmd ];
                if ( $.isFunction( cmdFn )) {
                    cmdArgs = $.makeArray( args );
                    cmdArgs.shift();
                    return cmdFn.apply( opts.API, cmdArgs );
                }
                else {
                    c2.log( 'unknown command: ', cmd );
                }
            }
        });
    }
    else {
        return c2.apply( this, arguments );
    }
};

// copy props
$.extend( $.fn.cycle, c2 );

$.extend( c2.API, {
    next: function() {
        var opts = this.opts();
        if ( opts.busy && ! opts.manualTrump )
            return;

        var count = opts.reverse ? -1 : 1;
        if ( opts.allowWrap === false && ( opts.currSlide + count ) >= opts.slideCount )
            return;

        opts.API.advanceSlide( count );
        opts.API.trigger('cycle-next', [ opts ]).log('cycle-next');
    },

    prev: function() {
        var opts = this.opts();
        if ( opts.busy && ! opts.manualTrump )
            return;
        var count = opts.reverse ? 1 : -1;
        if ( opts.allowWrap === false && ( opts.currSlide + count ) < 0 )
            return;

        opts.API.advanceSlide( count );
        opts.API.trigger('cycle-prev', [ opts ]).log('cycle-prev');
    },

    destroy: function() {
        this.stop(); //#204

        var opts = this.opts();
        var clean = $.isFunction( $._data ) ? $._data : $.noop;  // hack for #184 and #201
        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;
        opts.API.stop();
        opts.API.trigger( 'cycle-destroyed', [ opts ] ).log('cycle-destroyed');
        opts.container.removeData();
        clean( opts.container[0], 'parsedAttrs', false );

        // #75; remove inline styles
        if ( ! opts.retainStylesOnDestroy ) {
            opts.container.removeAttr( 'style' );
            opts.slides.removeAttr( 'style' );
            opts.slides.removeClass( opts.slideActiveClass );
        }
        opts.slides.each(function() {
            var slide = $(this);
            slide.removeData();
            slide.removeClass( opts.slideClass );
            clean( this, 'parsedAttrs', false );
        });
    },

    jump: function( index, fx ) {
        // go to the requested slide
        var fwd;
        var opts = this.opts();
        if ( opts.busy && ! opts.manualTrump )
            return;
        var num = parseInt( index, 10 );
        if (isNaN(num) || num < 0 || num >= opts.slides.length) {
            opts.API.log('goto: invalid slide index: ' + num);
            return;
        }
        if (num == opts.currSlide) {
            opts.API.log('goto: skipping, already on slide', num);
            return;
        }
        opts.nextSlide = num;
        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;
        opts.API.log('goto: ', num, ' (zero-index)');
        fwd = opts.currSlide < opts.nextSlide;
        opts._tempFx = fx;
        opts.API.prepareTx( true, fwd );
    },

    stop: function() {
        var opts = this.opts();
        var pauseObj = opts.container;
        clearTimeout(opts.timeoutId);
        opts.timeoutId = 0;
        opts.API.stopTransition();
        if ( opts.pauseOnHover ) {
            if ( opts.pauseOnHover !== true )
                pauseObj = $( opts.pauseOnHover );
            pauseObj.off('mouseenter mouseleave');
        }
        opts.API.trigger('cycle-stopped', [ opts ]).log('cycle-stopped');
    },

    reinit: function() {
        var opts = this.opts();
        opts.API.destroy();
        opts.container.cycle();
    },

    remove: function( index ) {
        var opts = this.opts();
        var slide, slideToRemove, slides = [], slideNum = 1;
        for ( var i=0; i < opts.slides.length; i++ ) {
            slide = opts.slides[i];
            if ( i == index ) {
                slideToRemove = slide;
            }
            else {
                slides.push( slide );
                $( slide ).data('cycle.opts').slideNum = slideNum;
                slideNum++;
            }
        }
        if ( slideToRemove ) {
            opts.slides = $( slides );
            opts.slideCount--;
            $( slideToRemove ).remove();
            if (index == opts.currSlide)
                opts.API.advanceSlide( 1 );
            else if ( index < opts.currSlide )
                opts.currSlide--;
            else
                opts.currSlide++;

            opts.API.trigger('cycle-slide-removed', [ opts, index, slideToRemove ]).log('cycle-slide-removed');
            opts.API.updateView();
        }
    }

});

// listen for clicks on elements with data-cycle-cmd attribute
$(document).on('click.cycle', '[data-cycle-cmd]', function(e) {
    // issue cycle command
    e.preventDefault();
    var el = $(this);
    var command = el.data('cycle-cmd');
    var context = el.data('cycle-context') || '.cycle-slideshow';
    $(context).cycle(command, el.data('cycle-arg'));
});


})(jQuery);

/*! hash plugin for Cycle2;  version: 20130905 */
(function($) {
"use strict";

$(document).on( 'cycle-pre-initialize', function( e, opts ) {
    onHashChange( opts, true );

    opts._onHashChange = function() {
        onHashChange( opts, false );
    };

    $( window ).on( 'hashchange', opts._onHashChange);
});

$(document).on( 'cycle-update-view', function( e, opts, slideOpts ) {
    if ( slideOpts.hash && ( '#' + slideOpts.hash ) != window.location.hash ) {
        opts._hashFence = true;
        window.location.hash = slideOpts.hash;
    }
});

$(document).on( 'cycle-destroyed', function( e, opts) {
    if ( opts._onHashChange ) {
        $( window ).off( 'hashchange', opts._onHashChange );
    }
});

function onHashChange( opts, setStartingSlide ) {
    var hash;
    if ( opts._hashFence ) {
        opts._hashFence = false;
        return;
    }
    
    hash = window.location.hash.substring(1);

    opts.slides.each(function(i) {
        if ( $(this).data( 'cycle-hash' ) == hash ) {
            if ( setStartingSlide === true ) {
                opts.startingSlide = i;
            }
            else {
                var fwd = opts.currSlide < i;
                opts.nextSlide = i;
                opts.API.prepareTx( true, fwd );
            }
            return false;
        }
    });
}

})(jQuery);

/*! loader plugin for Cycle2;  version: 20131121 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    loader: false
});

$(document).on( 'cycle-bootstrap', function( e, opts ) {
    var addFn;

    if ( !opts.loader )
        return;

    // override API.add for this slideshow
    addFn = opts.API.add;
    opts.API.add = add;

    function add( slides, prepend ) {
        var slideArr = [];
        if ( $.type( slides ) == 'string' )
            slides = $.trim( slides );
        else if ( $.type( slides) === 'array' ) {
            for (var i=0; i < slides.length; i++ )
                slides[i] = $(slides[i])[0];
        }

        slides = $( slides );
        var slideCount = slides.length;

        if ( ! slideCount )
            return;

        slides.css('visibility','hidden').appendTo('body').each(function(i) { // appendTo fixes #56
            var count = 0;
            var slide = $(this);
            var images = slide.is('img') ? slide : slide.find('img');
            slide.data('index', i);
            // allow some images to be marked as unimportant (and filter out images w/o src value)
            images = images.filter(':not(.cycle-loader-ignore)').filter(':not([src=""])');
            if ( ! images.length ) {
                --slideCount;
                slideArr.push( slide );
                return;
            }

            count = images.length;
            images.each(function() {
                // add images that are already loaded
                if ( this.complete ) {
                    imageLoaded();
                }
                else {
                    $(this).load(function() {
                        imageLoaded();
                    }).on("error", function() {
                        if ( --count === 0 ) {
                            // ignore this slide
                            opts.API.log('slide skipped; img not loaded:', this.src);
                            if ( --slideCount === 0 && opts.loader == 'wait') {
                                addFn.apply( opts.API, [ slideArr, prepend ] );
                            }
                        }
                    });
                }
            });

            function imageLoaded() {
                if ( --count === 0 ) {
                    --slideCount;
                    addSlide( slide );
                }
            }
        });

        if ( slideCount )
            opts.container.addClass('cycle-loading');
        

        function addSlide( slide ) {
            var curr;
            if ( opts.loader == 'wait' ) {
                slideArr.push( slide );
                if ( slideCount === 0 ) {
                    // #59; sort slides into original markup order
                    slideArr.sort( sorter );
                    addFn.apply( opts.API, [ slideArr, prepend ] );
                    opts.container.removeClass('cycle-loading');
                }
            }
            else {
                curr = $(opts.slides[opts.currSlide]);
                addFn.apply( opts.API, [ slide, prepend ] );
                curr.show();
                opts.container.removeClass('cycle-loading');
            }
        }

        function sorter(a, b) {
            return a.data('index') - b.data('index');
        }
    }
});

})(jQuery);

/*! pager plugin for Cycle2;  version: 20140415 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    pager:            '> .cycle-pager',
    pagerActiveClass: 'cycle-pager-active',
    pagerEvent:       'click.cycle',
    pagerEventBubble: undefined,
    pagerTemplate:    '<span>&bull;</span>'
});

$(document).on( 'cycle-bootstrap', function( e, opts, API ) {
    // add method to API
    API.buildPagerLink = buildPagerLink;
});

$(document).on( 'cycle-slide-added', function( e, opts, slideOpts, slideAdded ) {
    if ( opts.pager ) {
        opts.API.buildPagerLink ( opts, slideOpts, slideAdded );
        opts.API.page = page;
    }
});

$(document).on( 'cycle-slide-removed', function( e, opts, index, slideRemoved ) {
    if ( opts.pager ) {
        var pagers = opts.API.getComponent( 'pager' );
        pagers.each(function() {
            var pager = $(this);
            $( pager.children()[index] ).remove();
        });
    }
});

$(document).on( 'cycle-update-view', function( e, opts, slideOpts ) {
    var pagers;

    if ( opts.pager ) {
        pagers = opts.API.getComponent( 'pager' );
        pagers.each(function() {
           $(this).children().removeClass( opts.pagerActiveClass )
            .eq( opts.currSlide ).addClass( opts.pagerActiveClass );
        });
    }
});

$(document).on( 'cycle-destroyed', function( e, opts ) {
    var pager = opts.API.getComponent( 'pager' );

    if ( pager ) {
        pager.children().off( opts.pagerEvent ); // #202
        if ( opts.pagerTemplate )
            pager.empty();
    }
});

function buildPagerLink( opts, slideOpts, slide ) {
    var pagerLink;
    var pagers = opts.API.getComponent( 'pager' );
    pagers.each(function() {
        var pager = $(this);
        if ( slideOpts.pagerTemplate ) {
            var markup = opts.API.tmpl( slideOpts.pagerTemplate, slideOpts, opts, slide[0] );
            pagerLink = $( markup ).appendTo( pager );
        }
        else {
            pagerLink = pager.children().eq( opts.slideCount - 1 );
        }
        pagerLink.on( opts.pagerEvent, function(e) {
            if ( ! opts.pagerEventBubble )
                e.preventDefault();
            opts.API.page( pager, e.currentTarget);
        });
    });
}

function page( pager, target ) {
    /*jshint validthis:true */
    var opts = this.opts();
    if ( opts.busy && ! opts.manualTrump )
        return;

    var index = pager.children().index( target );
    var nextSlide = index;
    var fwd = opts.currSlide < nextSlide;
    if (opts.currSlide == nextSlide) {
        return; // no op, clicked pager for the currently displayed slide
    }
    opts.nextSlide = nextSlide;
    opts._tempFx = opts.pagerFx;
    opts.API.prepareTx( true, fwd );
    opts.API.trigger('cycle-pager-activated', [opts, pager, target ]);
}

})(jQuery);

/*! prevnext plugin for Cycle2;  version: 20140408 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    next:           '> .cycle-next',
    nextEvent:      'click.cycle',
    disabledClass:  'disabled',
    prev:           '> .cycle-prev',
    prevEvent:      'click.cycle',
    swipe:          false
});

$(document).on( 'cycle-initialized', function( e, opts ) {
    opts.API.getComponent( 'next' ).on( opts.nextEvent, function(e) {
        e.preventDefault();
        opts.API.next();
    });

    opts.API.getComponent( 'prev' ).on( opts.prevEvent, function(e) {
        e.preventDefault();
        opts.API.prev();
    });

    if ( opts.swipe ) {
        var nextEvent = opts.swipeVert ? 'swipeUp.cycle' : 'swipeLeft.cycle swipeleft.cycle';
        var prevEvent = opts.swipeVert ? 'swipeDown.cycle' : 'swipeRight.cycle swiperight.cycle';
        opts.container.on( nextEvent, function(e) {
            opts._tempFx = opts.swipeFx;
            opts.API.next();
        });
        opts.container.on( prevEvent, function() {
            opts._tempFx = opts.swipeFx;
            opts.API.prev();
        });
    }
});

$(document).on( 'cycle-update-view', function( e, opts, slideOpts, currSlide ) {
    if ( opts.allowWrap )
        return;

    var cls = opts.disabledClass;
    var next = opts.API.getComponent( 'next' );
    var prev = opts.API.getComponent( 'prev' );
    var prevBoundry = opts._prevBoundry || 0;
    var nextBoundry = (opts._nextBoundry !== undefined)?opts._nextBoundry:opts.slideCount - 1;

    if ( opts.currSlide == nextBoundry )
        next.addClass( cls ).prop( 'disabled', true );
    else
        next.removeClass( cls ).prop( 'disabled', false );

    if ( opts.currSlide === prevBoundry )
        prev.addClass( cls ).prop( 'disabled', true );
    else
        prev.removeClass( cls ).prop( 'disabled', false );
});


$(document).on( 'cycle-destroyed', function( e, opts ) {
    opts.API.getComponent( 'prev' ).off( opts.nextEvent );
    opts.API.getComponent( 'next' ).off( opts.prevEvent );
    opts.container.off( 'swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle' );
});

})(jQuery);

/*! progressive loader plugin for Cycle2;  version: 20130315 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    progressive: false
});

$(document).on( 'cycle-pre-initialize', function( e, opts ) {
    if ( !opts.progressive )
        return;

    var API = opts.API;
    var nextFn = API.next;
    var prevFn = API.prev;
    var prepareTxFn = API.prepareTx;
    var type = $.type( opts.progressive );
    var slides, scriptEl;

    if ( type == 'array' ) {
        slides = opts.progressive;
    }
    else if ($.isFunction( opts.progressive ) ) {
        slides = opts.progressive( opts );
    }
    else if ( type == 'string' ) {
        scriptEl = $( opts.progressive );
        slides = $.trim( scriptEl.html() );
        if ( !slides )
            return;
        // is it json array?
        if ( /^(\[)/.test( slides ) ) {
            try {
                slides = $.parseJSON( slides );
            }
            catch(err) {
                API.log( 'error parsing progressive slides', err );
                return;
            }
        }
        else {
            // plain text, split on delimeter
            slides = slides.split( new RegExp( scriptEl.data('cycle-split') || '\n') );
            
            // #95; look for empty slide
            if ( ! slides[ slides.length - 1 ] )
                slides.pop();
        }
    }



    if ( prepareTxFn ) {
        API.prepareTx = function( manual, fwd ) {
            var index, slide;

            if ( manual || slides.length === 0 ) {
                prepareTxFn.apply( opts.API, [ manual, fwd ] );
                return;
            }

            if ( fwd && opts.currSlide == ( opts.slideCount-1) ) {
                slide = slides[ 0 ];
                slides = slides.slice( 1 );
                opts.container.one('cycle-slide-added', function(e, opts ) {
                    setTimeout(function() {
                        opts.API.advanceSlide( 1 );
                    },50);
                });
                opts.API.add( slide );
            }
            else if ( !fwd && opts.currSlide === 0 ) {
                index = slides.length-1;
                slide = slides[ index ];
                slides = slides.slice( 0, index );
                opts.container.one('cycle-slide-added', function(e, opts ) {
                    setTimeout(function() {
                        opts.currSlide = 1;
                        opts.API.advanceSlide( -1 );
                    },50);
                });
                opts.API.add( slide, true );
            }
            else {
                prepareTxFn.apply( opts.API, [ manual, fwd ] );
            }
        };
    }

    if ( nextFn ) {
        API.next = function() {
            var opts = this.opts();
            if ( slides.length && opts.currSlide == ( opts.slideCount - 1 ) ) {
                var slide = slides[ 0 ];
                slides = slides.slice( 1 );
                opts.container.one('cycle-slide-added', function(e, opts ) {
                    nextFn.apply( opts.API );
                    opts.container.removeClass('cycle-loading');
                });
                opts.container.addClass('cycle-loading');
                opts.API.add( slide );
            }
            else {
                nextFn.apply( opts.API );    
            }
        };
    }
    
    if ( prevFn ) {
        API.prev = function() {
            var opts = this.opts();
            if ( slides.length && opts.currSlide === 0 ) {
                var index = slides.length-1;
                var slide = slides[ index ];
                slides = slides.slice( 0, index );
                opts.container.one('cycle-slide-added', function(e, opts ) {
                    opts.currSlide = 1;
                    opts.API.advanceSlide( -1 );
                    opts.container.removeClass('cycle-loading');
                });
                opts.container.addClass('cycle-loading');
                opts.API.add( slide, true );
            }
            else {
                prevFn.apply( opts.API );
            }
        };
    }
});

})(jQuery);

/*! tmpl plugin for Cycle2;  version: 20121227 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    tmplRegex: '{{((.)?.*?)}}'
});

$.extend($.fn.cycle.API, {
    tmpl: function( str, opts /*, ... */) {
        var regex = new RegExp( opts.tmplRegex || $.fn.cycle.defaults.tmplRegex, 'g' );
        var args = $.makeArray( arguments );
        args.shift();
        return str.replace(regex, function(_, str) {
            var i, j, obj, prop, names = str.split('.');
            for (i=0; i < args.length; i++) {
                obj = args[i];
                if ( ! obj )
                    continue;
                if (names.length > 1) {
                    prop = obj;
                    for (j=0; j < names.length; j++) {
                        obj = prop;
                        prop = prop[ names[j] ] || str;
                    }
                } else {
                    prop = obj[str];
                }

                if ($.isFunction(prop))
                    return prop.apply(obj, args);
                if (prop !== undefined && prop !== null && prop != str)
                    return prop;
            }
            return str;
        });
    }
});    

})(jQuery);
/*
 * jQuery Masked Input Plugin
 * Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com)
 * Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 * Version: 1.4.1
 * 
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});
jQuery(function($){
  $("#telephone").mask("(999) 999-9999");
  $("#fax").mask("(999) 999-9999");
});
/*!
 * Mercury Editor is a CoffeeScript and jQuery based WYSIWYG editor.  Documentation and other useful information can be
 * found at https://github.com/jejacks0n/mercury
 *
 * Minimum jQuery requirements are 1.7

 *
 * You can include the Rails jQuery ujs script here to get some nicer behaviors in modals, panels and lightviews when
 * using :remote => true within the contents rendered in them.
 * require jquery_ujs
 *
 * Add any requires for the support libraries that integrate nicely with Mercury Editor.
 * require mercury/support/history
 *
 * Require Mercury Editor itself.

 *
 * Require any localizations you wish to support
 * Example: es.locale, or fr.locale -- regional dialects are in each language file so never en_US for instance.
 * Make sure you enable the localization feature in the configuration.
 * require mercury/locales/swedish_chef.locale
 *
 * Add all requires for plugins that extend or change the behavior of Mercury Editor.
 * require mercury/plugins/save_as_xml/plugin.js
 *
 * Require any files you want to use that either extend, or change the default Mercury behavior.
 * require mercury_overrides
 */

window.Mercury = {

  // # Mercury Configuration
  config: {
    // ## Toolbars
    //
    // This is where you can customize the toolbars by adding or removing buttons, or changing them and their
    // behaviors.  Any top level object put here will create a new toolbar.  Buttons are simply nested inside the
    // toolbars, along with button groups.
    //
    // Some toolbars are custom (the snippets toolbar for instance), and to denote that use _custom: true.  You can then
    // build the toolbar yourself with it's own behavior.
    //
    // Buttons can be grouped, and a button group is simply a way to wrap buttons for styling -- they can also handle
    // enabling or disabling all the buttons within it by using a context.  The table button group is a good example of
    // this.
    //
    // It's important to note that each of the button names (keys), in each toolbar object must be unique, regardless of
    // if it's in a button group, or nested, etc.  This is because styling is applied to them by name, and because their
    // name is used in the event that's fired when you click on them.
    //
    // Button format: `[label, description, {type: action, type: action, etc}]`
    //
    // ### The available button types are:
    //
    // - toggle:    toggles on or off when clicked, otherwise behaves like a button
    // - modal:     opens a modal window, expects the action to be one of:
    //   1. a string url
    //   2. a function that returns a string url
    // - lightview: opens a lightview window (like modal, but different UI), expects the action to be one of:
    //   1. a string url
    //   2. a function that returns a string url
    // - panel:     opens a panel dialog, expects the action to be one of:
    //   1. a string url
    //   2. a function that returns a string url
    // - palette:   opens a palette window, expects the action to be one of:
    //   1. a string url
    //   2. a function that returns a string url
    // - select:    opens a pulldown style window, expects the action to be one of:
    //   1. a string url
    //   2. a function that returns a string url
    // - context:   calls a callback function, expects the action to be:
    //   1. a function that returns a boolean to highlight the button
    //   note: if a function isn't provided, the key will be passed to the contextHandler, in which case a default
    //         context will be used (for more info read the Contexts section below)
    // - mode:      toggle a given mode in the editor, expects the action to be:
    //   1. a string, denoting the name of the mode
    //   note: it's assumed that when a specific mode is turned on, all other modes will be turned off, which happens
    //         automatically, thus putting the editor into a specific "state"
    // - regions:   allows buttons to be enabled/disabled based on what region type has focus, expects:
    //   1. an array of region types (eg. ['full', 'markdown'])
    // - preload:   allows some dialog views to be loaded when the button is created instead of on first open, expects:
    //   1. a boolean true / false
    //   note: this is only used by panels, selects, and palettes
    //
    // Separators are any "button" that's not an array, and are expected to be a string.  You can use two different
    // separator styles: line ('-'), and spacer (' ').
    //
    // ### Adding Contexts
    //
    // Contexts are used callback functions used for highlighting and disabling/enabling buttons and buttongroups.  When
    // the cursor enters an element within an html region for instance we want to disable or highlight buttons based on
    // the properties of the given node.  You can see examples of contexts in, and add your own to:
    // `Mercury.Toolbar.Button.contexts` and `Mercury.Toolbar.ButtonGroup.contexts`
    toolbars: {
      primary: {
        save:                  ['Save', 'Save this page'],
        preview:               ['Preview', 'Preview this page', { toggle: true, mode: true }],
        sep1:                  ' ',
        undoredo:              {
          undo:                ['Undo', 'Undo your last action'],
          redo:                ['Redo', 'Redo your last action'],
          sep:                 ' '
          },
        insertLink:            ['Link', 'Insert Link', { modal: '/mercury/modals/link.html', regions: ['full', 'markdown'] }],
        insertMedia:           ['Media', 'Insert Media (images and videos)', { modal: '/mercury/modals/media.html', regions: ['full', 'markdown'] }],
        insertTable:           ['Table', 'Insert Table', { modal: '/mercury/modals/table.html', regions: ['full', 'markdown'] }],
        insertCharacter:       ['Character', 'Special Characters', { modal: '/mercury/modals/character.html', regions: ['full', 'markdown'] }],
        snippetPanel:          ['Snippet', 'Snippet Panel', { panel: '/mercury/panels/snippets.html' }],
        sep2:                  ' ',
        historyPanel:          ['History', 'Page Version History', { panel: '/mercury/panels/history.html' }],
        sep3:                  ' ',
        notesPanel:            ['Notes', 'Page Notes', { panel: '/mercury/panels/notes.html' }]
        },

      editable: {
        _regions:              ['full', 'markdown'],
        predefined:            {
          style:               ['Style', null, { select: '/mercury/selects/style.html', preload: true }],
          sep1:                ' ',
          formatblock:         ['Block Format', null, { select: '/mercury/selects/formatblock.html', preload: true }],
          sep2:                '-'
          },
        colors:                {
          backColor:           ['Background Color', null, { palette: '/mercury/palettes/backcolor.html', context: true, preload: true, regions: ['full'] }],
          sep1:                ' ',
          foreColor:           ['Text Color', null, { palette: '/mercury/palettes/forecolor.html', context: true, preload: true, regions: ['full'] }],
          sep2:                '-'
          },
        decoration:            {
          bold:                ['Bold', null, { context: true }],
          italic:              ['Italicize', null, { context: true }],
          overline:            ['Overline', null, { context: true, regions: ['full'] }],
          strikethrough:       ['Strikethrough', null, { context: true, regions: ['full'] }],
          underline:           ['Underline', null, { context: true, regions: ['full'] }],
          sep:                 '-'
          },
        script:                {
          subscript:           ['Subscript', null, { context: true }],
          superscript:         ['Superscript', null, { context: true }],
          sep: '-'
          },
        justify:               {
          justifyLeft:         ['Align Left', null, { context: true, regions: ['full'] }],
          justifyCenter:       ['Center', null, { context: true, regions: ['full'] }],
          justifyRight:        ['Align Right', null, { context: true, regions: ['full'] }],
          justifyFull:         ['Justify Full', null, { context: true, regions: ['full'] }],
          sep:                 '-'
          },
        list:                  {
          insertUnorderedList: ['Unordered List', null, { context: true }],
          insertOrderedList:   ['Numbered List', null, { context: true }],
          sep:                 '-'
          },
        indent:                {
          outdent:             ['Decrease Indentation'],
          indent:              ['Increase Indentation'],
          sep:                 '-'
          },
        table:                 {
          _context:            true,
          insertRowBefore:     ['Insert Table Row', 'Insert a table row before the cursor', { regions: ['full'] }],
          insertRowAfter:      ['Insert Table Row', 'Insert a table row after the cursor', { regions: ['full'] }],
          deleteRow:           ['Delete Table Row', 'Delete this table row', { regions: ['full'] }],
          insertColumnBefore:  ['Insert Table Column', 'Insert a table column before the cursor', { regions: ['full'] }],
          insertColumnAfter:   ['Insert Table Column', 'Insert a table column after the cursor', { regions: ['full'] }],
          deleteColumn:        ['Delete Table Column', 'Delete this table column', { regions: ['full'] }],
          sep1:                ' ',
          increaseColspan:     ['Increase Cell Columns', 'Increase the cells colspan'],
          decreaseColspan:     ['Decrease Cell Columns', 'Decrease the cells colspan and add a new cell'],
          increaseRowspan:     ['Increase Cell Rows', 'Increase the cells rowspan'],
          decreaseRowspan:     ['Decrease Cell Rows', 'Decrease the cells rowspan and add a new cell'],
          sep2:                '-'
          },
        rules:                 {
          horizontalRule:      ['Horizontal Rule', 'Insert a horizontal rule'],
          sep1:                '-'
          },
        formatting:            {
          removeFormatting:    ['Remove Formatting', 'Remove formatting for the selection', { regions: ['full'] }],
          sep2:                ' '
          },
        editors:               {
          htmlEditor:          ['Edit HTML', 'Edit the HTML content', { regions: ['full'] }]
          }
        },

      snippets: {
        _custom:               true,
        actions:               {
          editSnippet:         ['Edit Snippet Settings'],
          sep1:                ' ',
          removeSnippet:       ['Remove Snippet']
          }
        }
      },


    // ## Region Options
    //
    // You can customize some aspects of how regions are found, identified, and saved.
    //
    // attribute: Mercury identifies editable regions by a data-mercury attribute.  This attribute has to be added in
    // your HTML in advance, and is the only real code/naming exposed in the implementation of Mercury.  To allow this
    // to be as configurable as possible, you can set the name of this attribute.  If you change this, you should adjust
    // the injected styles as well.
    //
    // identifier: This is used as a unique identifier for any given region (and thus should be unique to the page).
    // By default this is the id attribute but can be changed to a data attribute should you want to use something
    // custom instead.
    //
    // dataAttributes: The dataAttributes is an array of data attributes that will be serialized and returned to the
    // server upon saving.  These attributes, when applied to a Mercury region element, will be automatically serialized
    // and submitted with the AJAX request sent when a page is saved.  These are expected to be HTML5 data attributes,
    // and 'data-' will automatically be prepended to each item in this directive. (ex. ['scope', 'version'])
    //
    // determineType: This function is called after checking the data-type attribute for the correct field type. Use
    // it if you want to dynamically set the type based on inspection of the region.
    regions: {
      attribute: 'data-mercury',
      identifier: 'id',
      dataAttributes: []
      // determineType: function(region){},
      },


    // ## Snippet Options / Preview
    //
    // When a user drags a snippet onto the page they'll be prompted to enter options for the given snippet.  The server
    // is expected to respond with a form.  Once the user submits this form, an Ajax request is sent to the server with
    // the options provided; this preview request is expected to respond with the rendered markup for the snippet.
    //
    // method: The HTTP method used when submitting both the options and the preview.  We use POST by default because a
    // snippet options form may contain large text inputs and we don't want that to be truncated when sent to the
    // server.
    //
    // optionsUrl: The url that the options form will be loaded from.
    //
    // previewUrl: The url that the options will be submitted to, and will return the rendered snippet markup.
    //
    // **Note:** `:name` will be replaced with the snippet name in the urls (eg. /mercury/snippets/example/options.html)
    snippets: {
      method: 'POST',
      optionsUrl: '/mercury/snippets/:name/options.html',
      previewUrl: '/mercury/snippets/:name/preview.html'
      },


    // ## Image Uploading
    //
    // If you drag images from your desktop into regions that support it, it will be uploaded to the server and inserted
    // into the region.  You can disable or enable this feature, the accepted mime-types, file size restrictions, and
    // other things related to uploading.
    //
    // **Note:** Image uploading is only supported in some region types, and some browsers.
    //
    // enabled: You can set this to true, or false if you want to disable the feature entirely.
    //
    // allowedMimeTypes: You can restrict the types of files that can be uploaded by providing a list of allowed mime
    // types.
    //
    // maxFileSize: You can restrict large files by setting the maxFileSize (in bytes).
    //
    // inputName: When uploading, a form is generated and submitted to the server via Ajax.  If your server would prefer
    // a different name for how the image comes through, you can change the inputName.
    //
    // url: The url that the image upload will be submitted to.
    //
    // handler: You can use false to let Mercury handle it for you, or you can provide a handler function that can
    // modify the response from the server.  This can be useful if your server doesn't respond the way Mercury expects.
    // The handler function should take the response from the server and return an object that matches:
    // `{image: {url: '[your provided url]'}`
    uploading: {
      enabled: true,
      allowedMimeTypes: ['image/jpeg', 'image/gif', 'image/png'],
      maxFileSize: 1235242880,
      inputName: 'image[image]',
      url: '/mercury/images',
      handler: false
      },


    // ## Localization / I18n
    //
    // Include the .locale files you want to support when loading Mercury.  The files are always named by the language,
    // and not the regional dialect (eg. en.locale.js) because the regional dialects are nested within the primary
    // locale files.
    //
    // The client locale will be used first, and if no proper locale file is found for their language then the fallback
    // preferredLocale configuration will be used.  If one isn't provided, and the client locale isn't included, the
    // strings will remain untranslated.
    //
    // enabled: Set to false to disable, true to enable.
    //
    // preferredLocale: If a client doesn't support the locales you've included, this is used as a fallback.
    localization: {
      enabled: false,
      preferredLocale: 'swedish_chef-BORK'
      },


    // ## Behaviors
    //
    // Behaviors are used to change the default behaviors of a given region type when a given button is clicked.  For
    // example, you may prefer to add HR tags using an HR wrapped within a div with a classname (for styling).  You
    // can add your own complex behaviors here and they'll be shared across all regions.
    //
    // If you want to add behaviors to specific region types, you can mix them into the actions property of any region
    // type.
    //
    //     Mercury.Regions.Full.actions.htmlEditor = function() {}
    //
    // You can see how the behavior matches up directly with the button names.  It's also important to note that the
    // callback functions are executed within the scope of the given region, so you have access to all it's methods.
    behaviors: {
      //foreColor: function(selection, options) { selection.wrap('<span style="color:' + options.value.toHex() + '">', true) },
      htmlEditor: function() { Mercury.modal('/mercury/modals/htmleditor.html', { title: 'HTML Editor', fullHeight: true, handler: 'htmlEditor' }); }
      },


    // ## Global Behaviors
    //
    // Global behaviors are much like behaviors, but are more "global".  Things like save, exit, etc. can be included
    // here.  They'll only be called once, and execute within the scope of whatever editor is instantiated (eg.
    // PageEditor).
    //
    // An example of changing how saving works:
    //
    //     save: function() {
    //       var data = top.JSON.stringify(this.serialize(), null, '  ');
    //       var content = '<textarea style="width:500px;height:200px" wrap="off">' + data + '</textarea>';
    //       Mercury.modal(null, {title: 'Saving', closeButton: true, content: content})
    //     }
    //
    // This is a nice way to add functionality, when the behaviors aren't region specific.  These can be triggered by a
    // button, or manually with `Mercury.trigger('action', {action: 'barrelRoll'})`
    globalBehaviors: {
      exit: function() { window.location.href = this.iframeSrc() },
      barrelRoll: function() { $('body').css({webkitTransform: 'rotate(360deg)'}) }
      },


    // ## Ajax and CSRF Headers
    //
    // Some server frameworks require that you provide a specific header for Ajax requests.  The values for these CSRF
    // tokens are typically stored in the rendered DOM.  By default, Mercury will look for the Rails specific meta tag,
    // and provide the X-CSRF-Token header on Ajax requests, but you can modify this configuration if the system you're
    // using doesn't follow the same standard.
    csrfSelector: 'meta[name="csrf-token"]',
    csrfHeader: 'X-CSRF-Token',


    // ## Editor URLs
    //
    // When loading a given page, you may want to tweak this regex.  It's to allow the url to differ from the page
    // you're editing, and the url at which you access it.
    editorUrlRegEx: /([http|https]:\/\/.[^\/]*)\/editor\/?(.*)/i,


    // ## Hijacking Links & Forms
    //
    // Mercury will hijack links and forms that don't have a target set, or the target is set to _self and will set it
    // to _parent.  This is because the target must be set properly for Mercury to not get in the way of some
    // functionality, like proper page loads on form submissions etc.  Mercury doesn't do this to links or forms that
    // are within editable regions because it doesn't want to impact the html that's saved.  With that being explained,
    // you can add classes to links or forms that you don't want this behavior added to.  Let's say you have links that
    // open a lightbox style window, and you don't want the targets of these to be set to _parent.  You can add classes
    // to this array, and they will be ignored when the hijacking is applied.
    nonHijackableClasses: [],


    // ## Pasting & Sanitizing
    //
    // When pasting content into Mercury it may sometimes contain HTML tags and attributes.  This markup is used to
    // style the content and makes the pasted content look (and behave) the same as the original content.  This can be a
    // desired feature or an annoyance, so you can enable various sanitizing methods to clean the content when it's
    // pasted.
    //
    // sanitize: Can be any of the following:
    // - false: no sanitizing is done, the content is pasted the exact same as it was copied by the user
    // - 'whitelist': content is cleaned using the settings specified in the tag white list (described below)
    // - 'text': all html is stripped before pasting, leaving only the raw text
    //
    // whitelist: The white list allows you to specify tags and attributes that are allowed when pasting content.  Each
    // item in this object should contain the allowed tag, and an array of attributes that are allowed on that tag.  If
    // the allowed attributes array is empty, all attributes will be removed.  If a tag is not present in this list, it
    // will be removed, but without removing any of the text or tags inside it.
    //
    // **Note:** Content is *always* sanitized if looks like it's from MS Word or similar editors regardless of this
    // configuration.
    pasting: {
      sanitize: 'whitelist',
      whitelist: {
        h1:     [],
        h2:     [],
        h3:     [],
        h4:     [],
        h5:     [],
        h6:     [],
        table:  [],
        thead:  [],
        tbody:  [],
        tfoot:  [],
        tr:     [],
        th:     ['colspan', 'rowspan'],
        td:     ['colspan', 'rowspan'],
        div:    ['class'],
        span:   ['class'],
        ul:     [],
        ol:     [],
        li:     [],
        b:      [],
        strong: [],
        i:      [],
        em:     [],
        u:      [],
        strike: [],
        br:     [],
        p:      [],
        hr:     [],
        a:      ['href', 'target', 'title', 'name'],
        img:    ['src', 'title', 'alt']
        }
      },


    // ## Injected Styles
    //
    // Mercury tries to stay as much out of your code as possible, but because regions appear within your document we
    // need to include a few styles to indicate regions, as well as the different states of them (eg. focused).  These
    // styles are injected into your document, and as simple as they might be, you may want to change them.
    injectedStyles: '' +
      '[data-mercury]       { min-height: 10px; outline: 1px dotted #09F } ' +
      '[data-mercury]:focus { outline: none; -webkit-box-shadow: 0 0 10px #09F, 0 0 1px #045; box-shadow: 0 0 10px #09F, 0 0 1px #045 }' +
      '[data-mercury].focus { outline: none; -webkit-box-shadow: 0 0 10px #09F, 0 0 1px #045; box-shadow: 0 0 10px #09F, 0 0 1px #045 }' +
      '[data-mercury]:after { content: "."; display: block; visibility: hidden; clear: both; height: 0; overflow: hidden; }' +
      '[data-mercury] table { border: 1px dotted red; min-width: 6px; }' +
      '[data-mercury] th    { border: 1px dotted red; min-width: 6px; }' +
      '[data-mercury] td    { border: 1px dotted red; min-width: 6px; }' +
      '[data-mercury] .mercury-textarea       { border: 0; box-sizing: border-box; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; resize: none; }' +
      '[data-mercury] .mercury-textarea:focus { outline: none; -webkit-box-shadow: none; -moz-box-shadow: none; box-shadow: none; }'
  },

  // ## Silent Mode
  //
  // Turning silent mode on will disable asking about unsaved changes before leaving the page.
  silent: false,

  // ## Debug Mode
  //
  // Turning debug mode on will log events and other various things (using console.debug if available).
  debug: false,
  
  onload: function() {
    //Mercury.PageEditor.prototype.iframeSrc = function(url) { return '/testing'; }
    Mercury.on('ready', function() {
     var link = $('#mercury_iframe').contents().find('#edit_link');
      Mercury.saveUrl = link.data('save-url');
      link.hide();
    });

    Mercury.on('saved', function() {
      window.location.href = window.location.href.replace(/\/editor\//i, '/');
    });

  }



};

//$(window).bind('mercury:ready', function() {
//  var link = $('#mercury_iframe').contents().find('#edit_link');
//  Mercury.saveURL = link.data('save-url');
//  link.hide();
//});

//$(window).bind('mercury:saved', function() {
//  window.location = window.location.href.replace(/\/editor\//i, '/');
//});

//$(window).bind('mercury:ready', function() {
//  var link = $('#mercury_iframe').contents().find('#edit_link');
//  Mercury.saveURL = link.data('save-url');
//  link.hide();
//});

//$(window).bind('mercury:saved', function() {
//  window.location = window.location.href.replace(/\/editor\//i, '/');
//});
/*!
 * jQuery UI 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */

(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.13",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();
b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,
"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,
outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,"tabindex"),d=isNaN(b);
return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=
0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;

/*!
 * jQuery UI Mouse 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

var mouseHandled = false;
$(document).mousedown(function(e) {
	mouseHandled = false;
});

$.widget("ui.mouse", {
	options: {
		cancel: ':input,option',
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var self = this;

		this.element
			.bind('mousedown.'+this.widgetName, function(event) {
				return self._mouseDown(event);
			})
			.bind('click.'+this.widgetName, function(event) {
				if (true === $.data(event.target, self.widgetName + '.preventClickEvent')) {
				    $.removeData(event.target, self.widgetName + '.preventClickEvent');
					event.stopImmediatePropagation();
					return false;
				}
			});

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.unbind('.'+this.widgetName);
	},

	_mouseDown: function(event) {
		// don't let more than one widget handle mouseStart
    $(this.document || document).mousedown(function(e) {
      mouseHandled = false;
    });
		if(mouseHandled) {return};

		// we may have missed mouseup (out of window)
		(this._mouseStarted && this._mouseUp(event));

		this._mouseDownEvent = event;

		var self = this,
			btnIsLeft = (event.which == 1),
			elIsCancel = (typeof this.options.cancel == "string" ? $(event.target).parents().add(event.target).filter(this.options.cancel).length : false);
		if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if (!this.mouseDelayMet) {
			this._mouseDelayTimer = setTimeout(function() {
				self.mouseDelayMet = true;
			}, this.options.delay);
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted = (this._mouseStart(event) !== false);
			if (!this._mouseStarted) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if (true === $.data(event.target, this.widgetName + '.preventClickEvent')) {
			$.removeData(event.target, this.widgetName + '.preventClickEvent');
		}

		// these delegates are required to keep context
		this._mouseMoveDelegate = function(event) {
			return self._mouseMove(event);
		};
		this._mouseUpDelegate = function(event) {
			return self._mouseUp(event);
		};
		$(this.document || document)
			.bind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
			.bind('mouseup.'+this.widgetName, this._mouseUpDelegate);

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function(event) {
		// IE mouseup check - mouseup happened when mouse was out of window
		if ($.browser.msie && !((this.document || document).documentMode >= 9) && !event.button) {
			return this._mouseUp(event);
		}

		if (this._mouseStarted) {
			this._mouseDrag(event);
			return event.preventDefault();
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted =
				(this._mouseStart(this._mouseDownEvent, event) !== false);
			(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
		}

		return !this._mouseStarted;
	},

	_mouseUp: function(event) {
		$(this.document || document)
			.unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
			.unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);

		if (this._mouseStarted) {
			this._mouseStarted = false;

			if (event.target == this._mouseDownEvent.target) {
			    $.data(event.target, this.widgetName + '.preventClickEvent', true);
			}

			this._mouseStop(event);
		}

		return false;
	},

	_mouseDistanceMet: function(event) {
		return (Math.max(
				Math.abs(this._mouseDownEvent.pageX - event.pageX),
				Math.abs(this._mouseDownEvent.pageY - event.pageY)
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function(event) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function(event) {},
	_mouseDrag: function(event) {},
	_mouseStop: function(event) {},
	_mouseCapture: function(event) { return true; }
});

})(jQuery);

/*
 * jQuery UI Draggable 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;this.helper=
this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);
this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=
d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",
a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a=
{left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&
d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=
this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+
d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!="hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),
10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-
this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&
d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;
if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1];h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<
g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.13"});
d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=
0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=
c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,
true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=
0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=
a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");
if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=
f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);
else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,
a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,
o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;
if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=
c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&
c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});
d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;

/*
 * jQuery UI Sortable 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("ui.sortable", $.ui.mouse, {
	widgetEventPrefix: "sort",
	options: {
		appendTo: "parent",
		axis: false,
		connectWith: false,
		containment: false,
		cursor: 'auto',
		cursorAt: false,
		dropOnEmpty: true,
		forcePlaceholderSize: false,
		forceHelperSize: false,
		grid: false,
		handle: false,
		helper: "original",
		items: '> *',
		opacity: false,
		placeholder: false,
		revert: false,
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		scope: "default",
		tolerance: "intersect",
		zIndex: 1000
	},
	_create: function() {

		var o = this.options;
    this.document = o.document;

		this.containerCache = {};
		this.element.addClass("ui-sortable");

		//Get the items
		this.refresh();

		//Let's determine if the items are being displayed horizontally
		this.floating = this.items.length ? o.axis === 'x' || (/left|right/).test(this.items[0].item.css('float')) || (/inline|table-cell/).test(this.items[0].item.css('display')) : false;

		//Let's determine the parent's offset
		this.offset = this.element.offset();

		//Initialize mouse events for interaction
		this._mouseInit();

	},

	destroy: function() {
		this.element
			.removeClass("ui-sortable ui-sortable-disabled")
			.removeData("sortable")
			.unbind(".sortable");
		this._mouseDestroy();

		for ( var i = this.items.length - 1; i >= 0; i-- )
			this.items[i].item.removeData("sortable-item");

		return this;
	},

	_setOption: function(key, value){
		if ( key === "disabled" ) {
			this.options[ key ] = value;

			this.widget()
				[ value ? "addClass" : "removeClass"]( "ui-sortable-disabled" );
		} else {
			// Don't call widget base _setOption for disable as it adds ui-state-disabled class
			$.Widget.prototype._setOption.apply(this, arguments);
		}
	},

	_mouseCapture: function(event, overrideHandle) {

		if (this.reverting) {
			return false;
		}

		if(this.options.disabled || this.options.type == 'static') return false;

		//We have to refresh the items data once first
		this._refreshItems(event);

		//Find out if the clicked node (or one of its parents) is a actual item in this.items
		var currentItem = null, self = this, nodes = $(event.target).parents().each(function() {
			if($.data(this, 'sortable-item') == self) {
				currentItem = $(this);
				return false;
			}
		});
		if($.data(event.target, 'sortable-item') == self) currentItem = $(event.target);

		if(!currentItem) return false;
		if(this.options.handle && !overrideHandle) {
			var validHandle = false;

			$(this.options.handle, currentItem).find("*").andSelf().each(function() { if(this == event.target) validHandle = true; });
			if(!validHandle) return false;
		}

		this.currentItem = currentItem;
		this._removeCurrentsFromItems();
		return true;

	},

	_mouseStart: function(event, overrideHandle, noActivation) {
		var o = this.options, self = this;
		this.currentContainer = this;

		//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
		this.refreshPositions();

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		//Cache the helper size
		this._cacheHelperProportions();

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Get the next scrolling parent
		this.scrollParent = this.helper.scrollParent();

		//The element's absolute position on the page minus margins
		this.offset = this.currentItem.offset();
		this.offset = {
			top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		// Only after we got the offset, we can change the helper's position to absolute
		// TODO: Still need to figure out a way to make relative sorting possible
		this.helper.css("position", "absolute");
		this.cssPosition = this.helper.css("position");

		$.extend(this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
		});

		//Generate the original position
		this.originalPosition = this._generatePosition(event);
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if 'cursorAt' is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Cache the former DOM position
		this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

		//If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
		if(this.helper[0] != this.currentItem[0]) {
			this.currentItem.hide();
		}

		//Create the placeholder
		this._createPlaceholder();

		//Set a containment if given in the options
		if(o.containment)
			this._setContainment();

		if(o.cursor) { // cursor option
			if ($('body').css("cursor")) this._storedCursor = $('body').css("cursor");
			$('body').css("cursor", o.cursor);
		}

		if(o.opacity) { // opacity option
			if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity");
			this.helper.css("opacity", o.opacity);
		}

		if(o.zIndex) { // zIndex option
			if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex");
			this.helper.css("zIndex", o.zIndex);
		}

		//Prepare scrolling
		if(this.scrollParent[0] != (this.document || document) && this.scrollParent[0].tagName != 'HTML')
			this.overflowOffset = this.scrollParent.offset();

		//Call callbacks
		this._trigger("start", event, this._uiHash());

		//Recache the helper size
		if(!this._preserveHelperProportions)
			this._cacheHelperProportions();


		//Post 'activate' events to possible containers
		if(!noActivation) {
			 for (var i = this.containers.length - 1; i >= 0; i--) { this.containers[i]._trigger("activate", event, self._uiHash(this)); }
		}

		//Prepare possible droppables
		if($.ui.ddmanager)
			$.ui.ddmanager.current = this;

		if ($.ui.ddmanager && !o.dropBehaviour)
			$.ui.ddmanager.prepareOffsets(this, event);

		this.dragging = true;

		this.helper.addClass("ui-sortable-helper");
		this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
		return true;

	},

	_mouseDrag: function(event) {

		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");

		if (!this.lastPositionAbs) {
			this.lastPositionAbs = this.positionAbs;
		}

		//Do scrolling
		if(this.options.scroll) {
			var o = this.options, scrolled = false;
			if(this.scrollParent[0] != (this.document || document) && this.scrollParent[0].tagName != 'HTML') {

				if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity)
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
				else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity)
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;

				if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity)
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
				else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity)
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;

			} else {

				if(event.pageY - $((this.document || document)).scrollTop() < o.scrollSensitivity)
					scrolled = $((this.document || document)).scrollTop($((this.document || document)).scrollTop() - o.scrollSpeed);
				else if($(window).height() - (event.pageY - $((this.document || document)).scrollTop()) < o.scrollSensitivity)
					scrolled = $((this.document || document)).scrollTop($((this.document || document)).scrollTop() + o.scrollSpeed);

				if(event.pageX - $((this.document || document)).scrollLeft() < o.scrollSensitivity)
					scrolled = $((this.document || document)).scrollLeft($((this.document || document)).scrollLeft() - o.scrollSpeed);
				else if($(window).width() - (event.pageX - $((this.document || document)).scrollLeft()) < o.scrollSensitivity)
					scrolled = $((this.document || document)).scrollLeft($((this.document || document)).scrollLeft() + o.scrollSpeed);

			}

			if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour)
				$.ui.ddmanager.prepareOffsets(this, event);
		}

		//Regenerate the absolute position used for position checks
		this.positionAbs = this._convertPositionTo("absolute");

		//Set the helper position
		if(!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left+'px';
		if(!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top+'px';

		//Rearrange
		for (var i = this.items.length - 1; i >= 0; i--) {

			//Cache variables and intersection, continue if no intersection
			var item = this.items[i], itemElement = item.item[0], intersection = this._intersectsWithPointer(item);
			if (!intersection) continue;

			if(itemElement != this.currentItem[0] //cannot intersect with itself
				&&	this.placeholder[intersection == 1 ? "next" : "prev"]()[0] != itemElement //no useless actions that have been done before
				&&	!$.ui.contains(this.placeholder[0], itemElement) //no action if the item moved is the parent of the item checked
				&& (this.options.type == 'semi-dynamic' ? !$.ui.contains(this.element[0], itemElement) : true)
				//&& itemElement.parentNode == this.placeholder[0].parentNode // only rearrange items within the same container
			) {

				this.direction = intersection == 1 ? "down" : "up";

				if (this.options.tolerance == "pointer" || this._intersectsWithSides(item)) {
					this._rearrange(event, item);
				} else {
					break;
				}

				this._trigger("change", event, this._uiHash());
				break;
			}
		}

		//Post events to containers
		this._contactContainers(event);

		//Interconnect with droppables
		if($.ui.ddmanager) $.ui.ddmanager.drag(this, event);

		//Call callbacks
		this._trigger('sort', event, this._uiHash());

		this.lastPositionAbs = this.positionAbs;
		return false;

	},

	_mouseStop: function(event, noPropagation) {

		if(!event) return;

		//If we are using droppables, inform the manager about the drop
		if ($.ui.ddmanager && !this.options.dropBehaviour)
			$.ui.ddmanager.drop(this, event);

		if(this.options.revert) {
			var self = this;
			var cur = self.placeholder.offset();

			self.reverting = true;

			$(this.helper).animate({
				left: cur.left - this.offset.parent.left - self.margins.left + (this.offsetParent[0] == (this.document || document).body ? 0 : this.offsetParent[0].scrollLeft),
				top: cur.top - this.offset.parent.top - self.margins.top + (this.offsetParent[0] == (this.document || document).body ? 0 : this.offsetParent[0].scrollTop)
			}, parseInt(this.options.revert, 10) || 500, function() {
				self._clear(event);
			});
		} else {
			this._clear(event, noPropagation);
		}

		return false;

	},

	cancel: function() {

		var self = this;

		if(this.dragging) {

			this._mouseUp({ target: null });

			if(this.options.helper == "original")
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
			else
				this.currentItem.show();

			//Post deactivating events to containers
			for (var i = this.containers.length - 1; i >= 0; i--){
				this.containers[i]._trigger("deactivate", null, self._uiHash(this));
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", null, self._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		if (this.placeholder) {
			//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
			if(this.placeholder[0].parentNode) this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			if(this.options.helper != "original" && this.helper && this.helper[0].parentNode) this.helper.remove();

			$.extend(this, {
				helper: null,
				dragging: false,
				reverting: false,
				_noFinalSort: null
			});

			if(this.domPosition.prev) {
				$(this.domPosition.prev).after(this.currentItem);
			} else {
				$(this.domPosition.parent).prepend(this.currentItem);
			}
		}

		return this;

	},

	serialize: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected);
		var str = []; o = o || {};

		$(items).each(function() {
			var res = ($(o.item || this).attr(o.attribute || 'id') || '').match(o.expression || (/(.+)[-=_](.+)/));
			if(res) str.push((o.key || res[1]+'[]')+'='+(o.key && o.expression ? res[1] : res[2]));
		});

		if(!str.length && o.key) {
			str.push(o.key + '=');
		}

		return str.join('&');

	},

	toArray: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected);
		var ret = []; o = o || {};

		items.each(function() { ret.push($(o.item || this).attr(o.attribute || 'id') || ''); });
		return ret;

	},

	/* Be careful with the following core functions */
	_intersectsWith: function(item) {

		var x1 = this.positionAbs.left,
			x2 = x1 + this.helperProportions.width,
			y1 = this.positionAbs.top,
			y2 = y1 + this.helperProportions.height;

		var l = item.left,
			r = l + item.width,
			t = item.top,
			b = t + item.height;

		var dyClick = this.offset.click.top,
			dxClick = this.offset.click.left;

		var isOverElement = (y1 + dyClick) > t && (y1 + dyClick) < b && (x1 + dxClick) > l && (x1 + dxClick) < r;

		if(	   this.options.tolerance == "pointer"
			|| this.options.forcePointerForContainers
			|| (this.options.tolerance != "pointer" && this.helperProportions[this.floating ? 'width' : 'height'] > item[this.floating ? 'width' : 'height'])
		) {
			return isOverElement;
		} else {

			return (l < x1 + (this.helperProportions.width / 2) // Right Half
				&& x2 - (this.helperProportions.width / 2) < r // Left Half
				&& t < y1 + (this.helperProportions.height / 2) // Bottom Half
				&& y2 - (this.helperProportions.height / 2) < b ); // Top Half

		}
	},

	_intersectsWithPointer: function(item) {

		var isOverElementHeight = $.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
			isOverElementWidth = $.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
			isOverElement = isOverElementHeight && isOverElementWidth,
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (!isOverElement)
			return false;

		return this.floating ?
			( ((horizontalDirection && horizontalDirection == "right") || verticalDirection == "down") ? 2 : 1 )
			: ( verticalDirection && (verticalDirection == "down" ? 2 : 1) );

	},

	_intersectsWithSides: function(item) {

		var isOverBottomHalf = $.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
			isOverRightHalf = $.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (this.floating && horizontalDirection) {
			return ((horizontalDirection == "right" && isOverRightHalf) || (horizontalDirection == "left" && !isOverRightHalf));
		} else {
			return verticalDirection && ((verticalDirection == "down" && isOverBottomHalf) || (verticalDirection == "up" && !isOverBottomHalf));
		}

	},

	_getDragVerticalDirection: function() {
		var delta = this.positionAbs.top - this.lastPositionAbs.top;
		return delta != 0 && (delta > 0 ? "down" : "up");
	},

	_getDragHorizontalDirection: function() {
		var delta = this.positionAbs.left - this.lastPositionAbs.left;
		return delta != 0 && (delta > 0 ? "right" : "left");
	},

	refresh: function(event) {
		this._refreshItems(event);
		this.refreshPositions();
		return this;
	},

	_connectWith: function() {
		var options = this.options;
		return options.connectWith.constructor == String
			? [options.connectWith]
			: options.connectWith;
	},

	_getItemsAsjQuery: function(connected) {

		var self = this;
		var items = [];
		var queries = [];
		var connectWith = this._connectWith();

		if(connectWith && connected) {
			for (var i = connectWith.length - 1; i >= 0; i--){
				var cur = $(connectWith[i]);
				for (var j = cur.length - 1; j >= 0; j--){
					var inst = $.data(cur[j], 'sortable');
					if(inst && inst != this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'), inst]);
					}
				};
			};
		}

		queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'), this]);

		for (var i = queries.length - 1; i >= 0; i--){
			queries[i][0].each(function() {
				items.push(this);
			});
		};

		return $(items);

	},

	_removeCurrentsFromItems: function() {

		var list = this.currentItem.find(":data(sortable-item)");

		for (var i=0; i < this.items.length; i++) {

			for (var j=0; j < list.length; j++) {
				if(list[j] == this.items[i].item[0])
					this.items.splice(i,1);
			};

		};

	},

	_refreshItems: function(event) {

		this.items = [];
		this.containers = [this];
		var items = this.items;
		var self = this;
		var queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]];
		var connectWith = this._connectWith();

		if(connectWith) {
			for (var i = connectWith.length - 1; i >= 0; i--){
				var cur = $(connectWith[i]);
				for (var j = cur.length - 1; j >= 0; j--){
					var inst = $.data(cur[j], 'sortable');
					if(inst && inst != this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
						this.containers.push(inst);
					}
				};
			};
		}

		for (var i = queries.length - 1; i >= 0; i--) {
			var targetData = queries[i][1];
			var _queries = queries[i][0];

			for (var j=0, queriesLength = _queries.length; j < queriesLength; j++) {
				var item = $(_queries[j]);

				item.data('sortable-item', targetData); // Data for target checking (mouse manager)

				items.push({
					item: item,
					instance: targetData,
					width: 0, height: 0,
					left: 0, top: 0
				});
			};
		};

	},

	refreshPositions: function(fast) {

		//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
		if(this.offsetParent && this.helper) {
			this.offset.parent = this._getParentOffset();
		}

		for (var i = this.items.length - 1; i >= 0; i--){
			var item = this.items[i];

			//We ignore calculating positions of all connected containers when we're not over them
			if(item.instance != this.currentContainer && this.currentContainer && item.item[0] != this.currentItem[0])
				continue;

			var t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

			if (!fast) {
				item.width = t.outerWidth();
				item.height = t.outerHeight();
			}

			var p = t.offset();
			item.left = p.left;
			item.top = p.top;
		};

		if(this.options.custom && this.options.custom.refreshContainers) {
			this.options.custom.refreshContainers.call(this);
		} else {
			for (var i = this.containers.length - 1; i >= 0; i--){
				var p = this.containers[i].element.offset();
				this.containers[i].containerCache.left = p.left;
				this.containers[i].containerCache.top = p.top;
				this.containers[i].containerCache.width	= this.containers[i].element.outerWidth();
				this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			};
		}

		return this;
	},

	_createPlaceholder: function(that) {

		var self = that || this, o = self.options;

		if(!o.placeholder || o.placeholder.constructor == String) {
			var className = o.placeholder;
			o.placeholder = {
				element: function() {

					var el = $((this.document || document).createElement(self.currentItem[0].nodeName))
						.addClass(className || self.currentItem[0].className+" ui-sortable-placeholder")
						.removeClass("ui-sortable-helper")[0];

					if(!className)
						el.style.visibility = "hidden";

					return el;
				},
				update: function(container, p) {

					// 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
					// 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
					if(className && !o.forcePlaceholderSize) return;

					//If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
					if(!p.height()) { p.height(self.currentItem.innerHeight() - parseInt(self.currentItem.css('paddingTop')||0, 10) - parseInt(self.currentItem.css('paddingBottom')||0, 10)); };
					if(!p.width()) { p.width(self.currentItem.innerWidth() - parseInt(self.currentItem.css('paddingLeft')||0, 10) - parseInt(self.currentItem.css('paddingRight')||0, 10)); };
				}
			};
		}

		//Create the placeholder
		self.placeholder = $(o.placeholder.element.call(self.element, self.currentItem));

		//Append it after the actual current item
		self.currentItem.after(self.placeholder);

		//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
		o.placeholder.update(self, self.placeholder);

	},

	_contactContainers: function(event) {

		// get innermost container that intersects with item
		var innermostContainer = null, innermostIndex = null;


		for (var i = this.containers.length - 1; i >= 0; i--){

			// never consider a container that's located within the item itself
			if($.ui.contains(this.currentItem[0], this.containers[i].element[0]))
				continue;

			if(this._intersectsWith(this.containers[i].containerCache)) {

				// if we've already found a container and it's more "inner" than this, then continue
				if(innermostContainer && $.ui.contains(this.containers[i].element[0], innermostContainer.element[0]))
					continue;

				innermostContainer = this.containers[i];
				innermostIndex = i;

			} else {
				// container doesn't intersect. trigger "out" event if necessary
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", event, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		// if no intersecting containers found, return
		if(!innermostContainer) return;

		// move the item into the container if it's not there already
		if(this.containers.length === 1) {
			this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
			this.containers[innermostIndex].containerCache.over = 1;
		} else if(this.currentContainer != this.containers[innermostIndex]) {

			//When entering a new container, we will find the item with the least distance and append our item near it
			var dist = 10000; var itemWithLeastDistance = null; var base = this.positionAbs[this.containers[innermostIndex].floating ? 'left' : 'top'];
			for (var j = this.items.length - 1; j >= 0; j--) {
				if(!$.ui.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) continue;
				var cur = this.items[j][this.containers[innermostIndex].floating ? 'left' : 'top'];
				if(Math.abs(cur - base) < dist) {
					dist = Math.abs(cur - base); itemWithLeastDistance = this.items[j];
				}
			}

			if(!itemWithLeastDistance && !this.options.dropOnEmpty) //Check if dropOnEmpty is enabled
				return;

			this.currentContainer = this.containers[innermostIndex];
			itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
			this._trigger("change", event, this._uiHash());
			this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));

			//Update the placeholder
			this.options.placeholder.update(this.currentContainer, this.placeholder);

			this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
			this.containers[innermostIndex].containerCache.over = 1;
		}


	},

	_createHelper: function(event) {

		var o = this.options;
		var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper == 'clone' ? this.currentItem.clone() : this.currentItem);

		if(!helper.parents('body').length) //Add the helper to the DOM if that didn't happen already
			$(o.appendTo != 'parent' ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);

		if(helper[0] == this.currentItem[0])
			this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };

		if(helper[0].style.width == '' || o.forceHelperSize) helper.width(this.currentItem.width());
		if(helper[0].style.height == '' || o.forceHelperSize) helper.height(this.currentItem.height());

		return helper;

	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj == 'string') {
			obj = obj.split(' ');
		}
		if ($.isArray(obj)) {
			obj = {left: +obj[0], top: +obj[1] || 0};
		}
		if ('left' in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ('right' in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ('top' in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ('bottom' in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {


		//Get the offsetParent and cache its position
		this.offsetParent = this.helper.offsetParent();
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if(this.cssPosition == 'absolute' && this.scrollParent[0] != (this.document || document) && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if((this.offsetParent[0] == (this.document || document).body) //This needs to be actually done for all browsers, since pageX/pageY includes this information
		|| (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == 'html' && $.browser.msie)) //Ugly IE fix
			po = { top: 0, left: 0 };

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
		};

	},

	_getRelativeOffset: function() {

		if(this.cssPosition == "relative") {
			var p = this.currentItem.position();
			return {
				top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
				left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
			top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var o = this.options;
		if(o.containment == 'parent') o.containment = this.helper[0].parentNode;
		if(o.containment == 'document' || o.containment == 'window') this.containment = [
			0 - this.offset.relative.left - this.offset.parent.left,
			0 - this.offset.relative.top - this.offset.parent.top,
			$(o.containment == 'document' ? (this.document || document) : window).width() - this.helperProportions.width - this.margins.left,
			($(o.containment == 'document' ? (this.document || document) : window).height() || (this.document || document).body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
		];

		if(!(/^(document|window|parent)$/).test(o.containment)) {
			var ce = $(o.containment)[0];
			var co = $(o.containment).offset();
			var over = ($(ce).css("overflow") != 'hidden');

			this.containment = [
				co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
				co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
				co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
				co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
			];
		}

	},

	_convertPositionTo: function(d, pos) {

		if(!pos) pos = this.position;
		var mod = d == "absolute" ? 1 : -1;
		var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != (this.document || document) && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		return {
			top: (
				pos.top																	// The absolute mouse position
				+ this.offset.relative.top * mod										// Only for relative positioned nodes: Relative offset from element to offset parent
				+ this.offset.parent.top * mod											// The offsetParent's offset without borders (offset + border)
				- ($.browser.safari && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
			),
			left: (
				pos.left																// The absolute mouse position
				+ this.offset.relative.left * mod										// Only for relative positioned nodes: Relative offset from element to offset parent
				+ this.offset.parent.left * mod											// The offsetParent's offset without borders (offset + border)
				- ($.browser.safari && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
			)
		};

	},

	_generatePosition: function(event) {

		var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != (this.document || document) && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		// This is another very weird special case that only happens for relative elements:
		// 1. If the css position is relative
		// 2. and the scroll parent is the document or similar to the offset parent
		// we have to refresh the relative offset during the scroll so there are no jumps
		if(this.cssPosition == 'relative' && !(this.scrollParent[0] != (this.document || document) && this.scrollParent[0] != this.offsetParent[0])) {
			this.offset.relative = this._getRelativeOffset();
		}

		var pageX = event.pageX;
		var pageY = event.pageY;

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		if(this.originalPosition) { //If we are not dragging yet, we won't check for options

			if(this.containment) {
				if(event.pageX - this.offset.click.left < this.containment[0]) pageX = this.containment[0] + this.offset.click.left;
				if(event.pageY - this.offset.click.top < this.containment[1]) pageY = this.containment[1] + this.offset.click.top;
				if(event.pageX - this.offset.click.left > this.containment[2]) pageX = this.containment[2] + this.offset.click.left;
				if(event.pageY - this.offset.click.top > this.containment[3]) pageY = this.containment[3] + this.offset.click.top;
			}

			if(o.grid) {
				var top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
				pageY = this.containment ? (!(top - this.offset.click.top < this.containment[1] || top - this.offset.click.top > this.containment[3]) ? top : (!(top - this.offset.click.top < this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				var left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
				pageX = this.containment ? (!(left - this.offset.click.left < this.containment[0] || left - this.offset.click.left > this.containment[2]) ? left : (!(left - this.offset.click.left < this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

		}

		return {
			top: (
				pageY																// The absolute mouse position
				- this.offset.click.top													// Click offset (relative to the element)
				- this.offset.relative.top												// Only for relative positioned nodes: Relative offset from element to offset parent
				- this.offset.parent.top												// The offsetParent's offset without borders (offset + border)
				+ ($.browser.safari && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
			),
			left: (
				pageX																// The absolute mouse position
				- this.offset.click.left												// Click offset (relative to the element)
				- this.offset.relative.left												// Only for relative positioned nodes: Relative offset from element to offset parent
				- this.offset.parent.left												// The offsetParent's offset without borders (offset + border)
				+ ($.browser.safari && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
			)
		};

	},

	_rearrange: function(event, i, a, hardRefresh) {

		a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction == 'down' ? i.item[0] : i.item[0].nextSibling));

		//Various things done here to improve the performance:
		// 1. we create a setTimeout, that calls refreshPositions
		// 2. on the instance, we have a counter variable, that get's higher after every append
		// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
		// 4. this lets only the last addition to the timeout stack through
		this.counter = this.counter ? ++this.counter : 1;
		var self = this, counter = this.counter;

		window.setTimeout(function() {
			if(counter == self.counter) self.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
		},0);

	},

	_clear: function(event, noPropagation) {

		this.reverting = false;
		// We delay all events that have to be triggered to after the point where the placeholder has been removed and
		// everything else normalized again
		var delayedTriggers = [], self = this;

		// We first have to update the dom position of the actual currentItem
		// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
		if(!this._noFinalSort && this.currentItem[0].parentNode) this.placeholder.before(this.currentItem);
		this._noFinalSort = null;

		if(this.helper[0] == this.currentItem[0]) {
			for(var i in this._storedCSS) {
				if(this._storedCSS[i] == 'auto' || this._storedCSS[i] == 'static') this._storedCSS[i] = '';
			}
			this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
		} else {
			this.currentItem.show();
		}

		if(this.fromOutside && !noPropagation) delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
		if((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !noPropagation) delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed
		if(!$.ui.contains(this.element[0], this.currentItem[0])) { //Node was moved out of the current element
			if(!noPropagation) delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
			for (var i = this.containers.length - 1; i >= 0; i--){
				if($.ui.contains(this.containers[i].element[0], this.currentItem[0]) && !noPropagation) {
					delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
					delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.containers[i]));
				}
			};
		};

		//Post events to containers
		for (var i = this.containers.length - 1; i >= 0; i--){
			if(!noPropagation) delayedTriggers.push((function(c) { return function(event) { c._trigger("deactivate", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
			if(this.containers[i].containerCache.over) {
				delayedTriggers.push((function(c) { return function(event) { c._trigger("out", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
				this.containers[i].containerCache.over = 0;
			}
		}

		//Do what was originally in plugins
		if(this._storedCursor) $('body').css("cursor", this._storedCursor); //Reset cursor
		if(this._storedOpacity) this.helper.css("opacity", this._storedOpacity); //Reset opacity
		if(this._storedZIndex) this.helper.css("zIndex", this._storedZIndex == 'auto' ? '' : this._storedZIndex); //Reset z-index

		this.dragging = false;
		if(this.cancelHelperRemoval) {
			if(!noPropagation) {
				this._trigger("beforeStop", event, this._uiHash());
				for (var i=0; i < delayedTriggers.length; i++) { delayedTriggers[i].call(this, event); }; //Trigger all delayed events
				this._trigger("stop", event, this._uiHash());
			}
			return false;
		}

		if(!noPropagation) this._trigger("beforeStop", event, this._uiHash());

		//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
		this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

		if(this.helper[0] != this.currentItem[0]) this.helper.remove(); this.helper = null;

		if(!noPropagation) {
			for (var i=0; i < delayedTriggers.length; i++) { delayedTriggers[i].call(this, event); }; //Trigger all delayed events
			this._trigger("stop", event, this._uiHash());
		}

		this.fromOutside = false;
		return true;

	},

	_trigger: function() {
		if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
			this.cancel();
		}
	},

	_uiHash: function(inst) {
		var self = inst || this;
		return {
			helper: self.helper,
			placeholder: self.placeholder || $([]),
			position: self.position,
			originalPosition: self.originalPosition,
			offset: self.positionAbs,
			item: self.currentItem,
			sender: inst ? inst.element : null
		};
	}

});

$.extend($.ui.sortable, {
	version: "1.8.13"
});

})(jQuery);
/*
 * jQuery serializeObject Plugin: https://github.com/fojas/jQuery-serializeObject
 *
 */

!function($){
  $.serializeObject = function(obj){
    var o={},lookup=o,a = obj;
    $.each(a,function(){
      var named = this.name.replace(/\[([^\]]+)?\]/g,',$1').split(','),
          cap = named.length - 1,
          i = 0;
      for(;i<cap;i++) {
        // move down the tree - create objects or array if necessary
        if(lookup.push){ // this is an array, add values instead of setting them
          // push an object if this is an empty array or we are about to overwrite a value
          if( !lookup[lookup.length -1] // this is an empty array
              || lookup[lookup.length -1].constructor !== Object //current value is not a hash
              || lookup[lookup.length -1][named[i+1]] !== undefined //current item is already set
              ){
            lookup.push({});
          }
          lookup = lookup[lookup.length -1];
        } else {
          lookup = lookup[named[i]] = lookup[named[i]] || (named[i+1]==""?[]:{});
        }
      }
      if(lookup.push){
        lookup.push(this.value);
      }else{
        lookup[named[cap]]=this.value;
      }
      lookup = o;
    });
    return o;
  };

  $.deserializeObject = function deserializeObject(json,arr,prefix){
    var i,j,thisPrefix,objType;
    arr = arr || [];
    if(Object.prototype.toString.call(json) ==='[object Object]'){
      for(i in json){
        thisPrefix = prefix ? [prefix,'[',i,']'].join('') : i;
        if(json.hasOwnProperty(i)){
          objType = Object.prototype.toString.call(json[i])
          if(objType === '[object Array]'){
            for(j = 0,jsonLen = json[i].length;j<jsonLen;j++){
              deserializeObject(json[i][j],arr,thisPrefix+'[]');
            }
          }else if(objType === '[object Object]'){
            deserializeObject(json[i],arr,thisPrefix);
          }else {
            arr.push({
              name : thisPrefix,
              value : json[i]
            });
          }
        }
      }
    } else {
      arr.push({
        name : prefix,
        value : json
      });
    }
    return arr;
  }

  var check = function(){
    // older versions of jQuery do not have prop
    var propExists = !!$.fn.prop;
    return function(obj,checked){
      if(propExists) obj.prop('checked',checked);
      else obj.attr('checked', (checked ? 'checked' : null ));
    };
  }();

  $.applySerializedArray = function(form,obj){
    var $form = $(form).find('input,select,textarea'), el;
    check($form.filter(':checked'),false)
    for(var i = obj.length;i--;){
      el = $form.filter("[name='"+obj[i].name+"']");
      if(el.filter(':checkbox').length){
        if(el.val() == obj[i].value) check(el.filter(':checkbox'),true);
      }else if(el.filter(':radio').length){
        check(el.filter("[value='"+obj[i].value+"']"),true)
      } else {
        el.val(obj[i].value);
      }
    }
  };

  $.applySerializedObject = function(form, obj){
    $.applySerializedArray(form,$.deserializeObject(obj));
  };

  $.fn.serializeObject = $.fn.serializeObject || function(){
    return $.serializeObject(this.serializeArray());
  };

  $.fn.applySerializedObject = function(obj){
    $.applySerializedObject(this,obj);
    return this;
  };

  $.fn.applySerializedArray = function(obj){
    $.applySerializedArray(this,obj);
    return this;
  };

}(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1 to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
 * following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following
 * disclaimer.  Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
jQuery.extend(jQuery.easing, {
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
  }
});

/*
 * jQuery JSON Plugin version: 2.1 (2009-08-14)
 *
 * This document is licensed as free software under the terms of the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Brantley Harris wrote this plugin. It is based somewhat on the JSON.org  website's http://www.json.org/json2.js,
 * which proclaims: "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that I uphold.
 *
 * It is also influenced heavily by MochiKit's serializeJSON, which is  copyrighted 2005 by Bob Ippolito.
 */
(function($) {
  $.toJSON = function(o) {
    if (typeof(JSON) == 'object' && JSON.stringify) return JSON.stringify(o);

    var type = typeof(o);

    if (o === null) return "null";
    if (type == "undefined") return undefined;
    if (type == "number" || type == "boolean") return o + "";
    if (type == "string") return $.quoteString(o);

    if (type == 'object') {
      if (typeof(o.toJSON) == "function") return $.toJSON(o.toJSON());

      if (o.constructor === Date) {
        var year = o.getUTCFullYear();

        var month = o.getUTCMonth() + 1;
        if (month < 10) month = '0' + month;

        var day = o.getUTCDate();
        if (day < 10) day = '0' + day;

        var hours = o.getUTCHours();
        if (hours < 10) hours = '0' + hours;

        var minutes = o.getUTCMinutes();
        if (minutes < 10) minutes = '0' + minutes;

        var seconds = o.getUTCSeconds();
        if (seconds < 10) seconds = '0' + seconds;

        var milli = o.getUTCMilliseconds();
        if (milli < 100) milli = '0' + milli;
        if (milli < 10) milli = '0' + milli;

        return '"' + year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.' + milli + 'Z"';
      }

      if (o.constructor === Array) {
        var ret = [];
        for (var i = 0; i < o.length; i++) ret.push($.toJSON(o[i]) || "null");
        return "[" + ret.join(",") + "]";
      }

      var pairs = [];
      for (var k in o) {
        var name;
        type = typeof(k);

        if (type == "number") name = '"' + k + '"';
        else if (type == "string") name = $.quoteString(k);
        else continue;  //skip non-string or number keys

        if (typeof o[k] == "function") continue;  //skip pairs where the value is a function.
        var val = $.toJSON(o[k]);
        pairs.push(name + ":" + val);
      }

      return "{" + pairs.join(", ") + "}";
    }
  };

  $.quoteString = function(string) {
    if (string.match(_escapeable)) {
      return '"' + string.replace(_escapeable, function (a) {
        var c = _meta[a];
        if (typeof c === 'string') return c;
        c = a.charCodeAt();
        return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
      }) + '"';
    }
    return '"' + string + '"';
  };

  var _escapeable = /["\\\x00-\x1f\x7f-\x9f]/g;
  var _meta = {'\b': '\\b', '\t': '\\t', '\n': '\\n', '\f': '\\f', '\r': '\\r', '"' : '\\"', '\\': '\\\\'};
})(jQuery);

/*
 * jQuery Localizer Plugin
 *
 * Copyright (c) 2011 Sagi Mann (with a basic reworking by Jeremy Jackson)
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms are permitted provided that the above copyright notice and this
 * paragraph are duplicated in all such forms and that any documentation, advertising materials, and other materials
 * related to such distribution and use acknowledge that the software was developed by the <organization>.  The name of
 * the University may not be used to endorse or promote products derived from this software without specific prior
 * written permission.
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, WITHOUT LIMITATION, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
 */
(function($) {
  $.fn.localize = function(locale) {
    this.find('*').contents().each(function() {
      var translated = false;
      var source = '';
      if (typeof(this.data) == 'string') {
        source = $.trim(this.data);
        if (source && (translated = (locale.sub[source] || locale.top[source]))) {
          this.data = translated;
        }
      }

      if (this.nodeName == 'IMG' && this.attributes['src']) {
        source = this.attributes['src'].nodeValue;
        if (source && (translated = (locale.sub[source] || locale.top[source]))) {
          $(this).attr('src', translated);
        }
      }

      if (this.nodeName == "A" && this.attributes['href']) {
        source = $.trim(this.attributes['href'].nodeValue);
        if (source && (translated = (locale.sub[source] || locale.top[source]))) {
          $(this).attr('href', translated);
        }
      }

      if (this.nodeName == "INPUT" && this.attributes['type']) {
        if (this.attributes['value'] && ['submit', 'reset', 'button'].indexOf(this.attributes['type'].nodeValue.toLowerCase()) > -1) {
          source = $.trim(this.attributes['value'].nodeValue);
          if (source && (translated = (locale.sub[source] || locale.top[source]))) {
            $(this).attr('value', translated);
          }
        }
      }

      return this;
    });
  };
})(jQuery);
/*
 HTML Clean for jQuery
 Anthony Johnston
 http://www.antix.co.uk

 version 1.2.3

 $Revision: 51 $

 requires jQuery http://jquery.com

 Use and distibution http://www.opensource.org/licenses/bsd-license.php

 2010-04-02 allowedTags/removeTags added (white/black list) thanks to David Wartian (Dwartian)
 2010-06-30 replaceStyles added for replacement of bold, italic, super and sub styles on a tag
 2010-07-01 notRenderedTags added, where tags are to be removed but their contents are kept
 */

(function ($) {
  $.fn.htmlClean = function (options) {
    // iterate and html clean each matched element
    return this.each(function () {
      if (this.value) {
        this.value = $.htmlClean(this.value, options);
      } else {
        this.innerHTML = $.htmlClean(this.innerHTML, options);
      }
    });
  };

  // clean the passed html
  $.htmlClean = function (html, options) {
    options = $.extend({}, $.htmlClean.defaults, options);

    var tagsRE = /<(\/)?(\w+:)?([\w]+)([^>]*)>/gi;
    var attrsRE = /(\w+)=(".*?"|'.*?'|[^\s>]*)/gi;

    var tagMatch;
    var root = new Element();
    var stack = [root];
    var container = root;

    if (options.bodyOnly) {
      // check for body tag
      if (tagMatch = /<body[^>]*>((\n|.)*)<\/body>/i.exec(html)) {
        html = tagMatch[1];
      }
    }
    html = html.concat("<xxx>"); // ensure last element/text is found
    var lastIndex;

    while (tagMatch = tagsRE.exec(html)) {
      var tag = new Tag(tagMatch[3], tagMatch[1], tagMatch[4], options);

      // add the text
      var text = html.substring(lastIndex, tagMatch.index);
      if (text.length > 0) {
        var child = container.children[container.children.length - 1];
        if (container.children.length > 0 && isText(child = container.children[container.children.length - 1])) {
          // merge text
          container.children[container.children.length - 1] = child.concat(text);
        } else {
          container.children.push(text);
        }
      }
      lastIndex = tagsRE.lastIndex;

      if (tag.isClosing) {
        // find matching container
        if (pop(stack, [tag.name])) {
          stack.pop();
          container = stack[stack.length - 1];
        }
      } else {
        // create a new element
        var element = new Element(tag);

        // add attributes
        var attrMatch;
        while (attrMatch = attrsRE.exec(tag.rawAttributes)) {
          // check style attribute and do replacements
          if (attrMatch[1].toLowerCase() == "style" && options.replaceStyles) {

            var renderParent = !tag.isInline;
            for (var i = 0; i < options.replaceStyles.length; i++) {
              if (options.replaceStyles[i][0].test(attrMatch[2])) {

                if (!renderParent) {
                  tag.render = false;
                  renderParent = true;
                }
                container.children.push(element); // assumes not replaced
                stack.push(element);
                container = element; // assumes replacement is a container
                // create new tag and element
                tag = new Tag(options.replaceStyles[i][1], "", "", options);
                element = new Element(tag);
              }
            }
          }

          if (tag.allowedAttributes != null
            && (tag.allowedAttributes.length == 0
            || $.inArray(attrMatch[1], tag.allowedAttributes) > -1)) {
            element.attributes.push(new Attribute(attrMatch[1], attrMatch[2]));
          }
        }

        // add required empty ones
        $.each(tag.requiredAttributes, function () {
          var name = this.toString();
          if (!element.hasAttribute(name)) element.attributes.push(new Attribute(name, ""));
        });

        // check for replacements
        for (var repIndex = 0; repIndex < options.replace.length; repIndex++) {
          for (var tagIndex = 0; tagIndex < options.replace[repIndex][0].length; tagIndex++) {
            var byName = typeof (options.replace[repIndex][0][tagIndex]) == "string";
            if ((byName && options.replace[repIndex][0][tagIndex] == tag.name)
              || (!byName && options.replace[repIndex][0][tagIndex].test(tagMatch))) {
              // don't render this tag
              tag.render = false;
              container.children.push(element);
              stack.push(element);
              container = element;

              // render new tag, keep attributes
              tag = new Tag(options.replace[repIndex][1], tagMatch[1], tagMatch[4], options);
              element = new Element(tag);
              element.attributes = container.attributes;

              repIndex = options.replace.length; // break out of both loops
              break;
            }
          }
        }

        // check container rules
        var add = true;
        if (!container.isRoot) {
          if (container.tag.isInline && !tag.isInline) {
            add = false;
          } else if (container.tag.disallowNest && tag.disallowNest
            && !tag.requiredParent) {
            add = false;
          } else if (tag.requiredParent) {
            if (add = pop(stack, tag.requiredParent)) {
              container = stack[stack.length - 1];
            }
          }
        }

        if (add) {
          container.children.push(element);

          if (tag.toProtect) {
            // skip to closing tag
            var tagMatch2 = null;
            while (tagMatch2 = tagsRE.exec(html)) {
              var tag2 = new Tag(tagMatch2[3], tagMatch2[1], tagMatch2[4], options);
              if (tag2.isClosing && tag2.name == tag.name) {
                element.children.push(RegExp.leftContext.substring(lastIndex));
                lastIndex = tagsRE.lastIndex;
                break;
              }
            }
          } else {
            // set as current container element
            if (!tag.isSelfClosing && !tag.isNonClosing) {
              stack.push(element);
              container = element;
            }
          }
        }
      }
    }

    // render doc
    return render(root, options).join("");
  };

  // defaults
  $.htmlClean.defaults = {
    // only clean the body tagbody
    bodyOnly: true,
    // only allow tags in this array, (white list), contents still rendered
    allowedTags: [],
    // remove tags in this array, (black list), contents still rendered
    removeTags: ["basefont", "center", "dir", "font", "frame", "frameset", "iframe", "isindex", "menu", "noframes", "s", "strike", "u"],
    // array of attribute names to remove on all elements in addition to those not in tagAttributes e.g ["width", "height"]
    removeAttrs: [],
    // array of [className], [optional array of allowed on elements] e.g. [["class"], ["anotherClass", ["p", "dl"]]]
    allowedClasses: [],
    // tags not rendered, contents remain
    notRenderedTags: [],
    // format the result
    format: false,
    // format indent to start on
    formatIndent: 0,
    // tags to replace, and what to replace with, tag name or regex to match the tag and attributes
    replace: [
      [
        ["b", "big"],
        "strong"
      ],
      [
        ["i"],
        "em"
      ]
    ],
    // styles to replace with tags, multiple style matches supported, inline tags are replaced by the first match blocks are retained
    replaceStyles: [
      [/font-weight:\s*bold/i, "strong"],
      [/font-style:\s*italic/i, "em"],
      [/vertical-align:\s*super/i, "sup"],
      [/vertical-align:\s*sub/i, "sub"]
    ]
  };

  function applyFormat(element, options, output, indent) {
    if (!element.tag.isInline && output.length > 0) {
      output.push("\n");
      for (var i = 0; i < indent; i++) output.push("\t");
    }
  }

  function render(element, options) {
    var output = [],
        empty = element.attributes.length == 0,
        indent = 0,
        outputChildren = null;

    // don't render if not in allowedTags or in removeTags
    var renderTag
      = element.tag.render
      && (options.allowedTags.length == 0 || $.inArray(element.tag.name, options.allowedTags) > -1)
      && (options.removeTags.length == 0 || $.inArray(element.tag.name, options.removeTags) == -1);

    if (!element.isRoot && renderTag) {
      // render opening tag
      output.push("<");
      output.push(element.tag.name);
      $.each(element.attributes, function () {
        if ($.inArray(this.name, options.removeAttrs) == -1) {
          var m = new RegExp(/^(['"]?)(.*?)['"]?$/).exec(this.value);
          var value = m[2];
          var valueQuote = m[1] || "'";

          // check for classes allowed
          if (this.name == "class") {
            value =
              $.grep(value.split(" "), function (c) {
                return $.grep(options.allowedClasses,
                  function (a) {
                    return a[0] == c && (a.length == 1 || $.inArray(element.tag.name, a[1]) > -1);
                  }).length > 0;
              })
                .join(" ");
            valueQuote = "'";
          }

          if (value != null && (value.length > 0 || $.inArray(this.name, element.tag.requiredAttributes) > -1)) {
            output.push(" ");
            output.push(this.name);
            output.push("=");
            output.push(valueQuote);
            output.push(value);
            output.push(valueQuote);
          }
        }
      });
    }

    if (element.tag.isSelfClosing) {
      // self closing
      if (renderTag) output.push(" />");
      empty = false;
    } else if (element.tag.isNonClosing) {
      empty = false;
    } else {
      if (!element.isRoot && renderTag) {
        // close
        output.push(">");
      }

      indent = options.formatIndent++;

      // render children
      if (element.tag.toProtect) {
        outputChildren = $.htmlClean.trim(element.children.join("")).replace(/<br>/ig, "\n");
        output.push(outputChildren);
        empty = outputChildren.length == 0;
        options.formatIndent--;
      } else {
        outputChildren = [];
        for (var i = 0; i < element.children.length; i++) {
          var child = element.children[i];
          var text = $.htmlClean.trim(textClean(isText(child) ? child : child.childrenToString()));
          if (isInline(child)) {
            if (i > 0 && text.length > 0
              && (startsWithWhitespace(child) || endsWithWhitespace(element.children[i - 1]))) {
              outputChildren.push(" ");
            }
          }
          if (isText(child)) {
            if (text.length > 0) {
              outputChildren.push(text);
            }
          } else {
            // don't allow a break to be the last child
            if (i != element.children.length - 1 || child.tag.name != "br") {
              if (options.format) applyFormat(child, options, outputChildren, indent);
              outputChildren = outputChildren.concat(render(child, options));
            }
          }
        }
        options.formatIndent--;

        if (outputChildren.length > 0) {
          if (options.format && outputChildren[0] != "\n") applyFormat(element, options, output, indent);
          output = output.concat(outputChildren);
          empty = false;
        }
      }

      if (!element.isRoot && renderTag) {
        // render the closing tag
        if (options.format) applyFormat(element, options, output, indent - 1);
        output.push("</");
        output.push(element.tag.name);
        output.push(">");
      }
    }

    // check for empty tags
    if (!element.tag.allowEmpty && empty) {
      return [];
    }

    return output;
  }

  // find a matching tag, and pop to it, if not do nothing
  function pop(stack, tagNameArray, index) {
    index = index || 1;
    if ($.inArray(stack[stack.length - index].tag.name, tagNameArray) > -1) {
      return true;
    } else if (stack.length - (index + 1) > 0
      && pop(stack, tagNameArray, index + 1)) {
      stack.pop();
      return true;
    }
    return false;
  }

  // Element Object
  function Element(tag) {
    if (tag) {
      this.tag = tag;
      this.isRoot = false;
    } else {
      this.tag = new Tag("root");
      this.isRoot = true;
    }
    this.attributes = [];
    this.children = [];

    this.hasAttribute = function (name) {
      for (var i = 0; i < this.attributes.length; i++) {
        if (this.attributes[i].name == name) return true;
      }
      return false;
    };

    this.childrenToString = function () {
      return this.children.join("");
    };

    return this;
  }

  // Attribute Object
  function Attribute(name, value) {
    this.name = name;
    this.value = value;

    return this;
  }

  // Tag object
  function Tag(name, close, rawAttributes, options) {
    this.name = name.toLowerCase();

    this.isSelfClosing = $.inArray(this.name, tagSelfClosing) > -1;
    this.isNonClosing = $.inArray(this.name, tagNonClosing) > -1;
    this.isClosing = (close != undefined && close.length > 0);

    this.isInline = $.inArray(this.name, tagInline) > -1;
    this.disallowNest = $.inArray(this.name, tagDisallowNest) > -1;
    this.requiredParent = tagRequiredParent[$.inArray(this.name, tagRequiredParent) + 1];
    this.allowEmpty = $.inArray(this.name, tagAllowEmpty) > -1;

    this.toProtect = $.inArray(this.name, tagProtect) > -1;

    this.rawAttributes = rawAttributes;
    this.allowedAttributes = tagAttributes[$.inArray(this.name, tagAttributes) + 1];
    this.requiredAttributes = tagAttributesRequired[$.inArray(this.name, tagAttributesRequired) + 1];

    this.render = options && $.inArray(this.name, options.notRenderedTags) == -1;

    return this;
  }

  function startsWithWhitespace(item) {
    while (isElement(item) && item.children.length > 0) {
      item = item.children[0]
    }
    return isText(item) && item.length > 0 && $.htmlClean.isWhitespace(item.charAt(0));
  }

  function endsWithWhitespace(item) {
    while (isElement(item) && item.children.length > 0) {
      item = item.children[item.children.length - 1]
    }
    return isText(item) && item.length > 0 && $.htmlClean.isWhitespace(item.charAt(item.length - 1));
  }

  function isText(item) {
    return item.constructor == String;
  }

  function isInline(item) {
    return isText(item) || item.tag.isInline;
  }

  function isElement(item) {
    return item.constructor == Element;
  }

  function textClean(text) {
    return text.replace(/&nbsp;|\n/g, " ").replace(/\s\s+/g, " ");
  }

  // trim off white space, doesn't use regex
  $.htmlClean.trim = function (text) {
    return $.htmlClean.trimStart($.htmlClean.trimEnd(text));
  };
  $.htmlClean.trimStart = function (text) {
    return text.substring($.htmlClean.trimStartIndex(text));
  };
  $.htmlClean.trimStartIndex = function (text) {
    for (var start = 0; start < text.length - 1 && $.htmlClean.isWhitespace(text.charAt(start)); start++);
    return start;
  };
  $.htmlClean.trimEnd = function (text) {
    return text.substring(0, $.htmlClean.trimEndIndex(text));
  };
  $.htmlClean.trimEndIndex = function (text) {
    for (var end = text.length - 1; end >= 0 && $.htmlClean.isWhitespace(text.charAt(end)); end--);
    return end + 1;
  };
  // checks a char is white space or not
  $.htmlClean.isWhitespace = function (c) {
    return $.inArray(c, whitespace) != -1;
  };

  // tags which are inline
  var tagInline = [
    "a", "abbr", "acronym", "address", "b", "big", "br", "button",
    "caption", "cite", "code", "del", "em", "font",
    "hr", "i", "input", "img", "ins", "label", "legend", "map", "q",
    "samp", "select", "small", "span", "strong", "sub", "sup",
    "tt", "var"];
  var tagDisallowNest = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "th", "td"];
  var tagAllowEmpty = ["th", "td"];
  var tagRequiredParent = [
    null,
    "li", ["ul", "ol"],
    "dt", ["dl"],
    "dd", ["dl"],
    "td", ["tr"],
    "th", ["tr"],
    "tr", ["table", "thead", "tbody", "tfoot"],
    "thead", ["table"],
    "tbody", ["table"],
    "tfoot", ["table"]
  ];
  var tagProtect = ["script", "style", "pre", "code"];
  // tags which self close e.g. <br />
  var tagSelfClosing = ["br", "hr", "img", "link", "meta"];
  // tags which do not close
  var tagNonClosing = ["!doctype", "?xml"];
  // attributes allowed on tags
  var tagAttributes = [
    ["class"], // default, for all tags not mentioned
    "?xml", [],
    "!doctype", [],
    "a", ["accesskey", "class", "href", "name", "title", "rel", "rev", "type", "tabindex"],
    "abbr", ["class", "title"],
    "acronym", ["class", "title"],
    "blockquote", ["cite", "class"],
    "button", ["class", "disabled", "name", "type", "value"],
    "del", ["cite", "class", "datetime"],
    "form", ["accept", "action", "class", "enctype", "method", "name"],
    "input", ["accept", "accesskey", "alt", "checked", "class", "disabled", "ismap", "maxlength", "name", "size", "readonly", "src", "tabindex", "type", "usemap", "value"],
    "img", ["alt", "class", "height", "src", "width"],
    "ins", ["cite", "class", "datetime"],
    "label", ["accesskey", "class", "for"],
    "legend", ["accesskey", "class"],
    "link", ["href", "rel", "type"],
    "meta", ["content", "http-equiv", "name", "scheme"],
    "map", ["name"],
    "optgroup", ["class", "disabled", "label"],
    "option", ["class", "disabled", "label", "selected", "value"],
    "q", ["class", "cite"],
    "td", ["colspan", "rowspan"],
    "th", ["colspan", "rowspan"],
    "script", ["src", "type"],
    "select", ["class", "disabled", "multiple", "name", "size", "tabindex"],
    "style", ["type"],
    "table", ["class", "summary"],
    "textarea", ["accesskey", "class", "cols", "disabled", "name", "readonly", "rows", "tabindex"]
  ];
  var tagAttributesRequired = [[], "img", ["alt"]];
  // white space chars
  var whitespace = [" ", " ", "\t", "\n", "\r", "\f"];

})(jQuery);
/*
 * LiquidMetal, version: 0.1 (2009-02-05)
 *
 * A mimetic poly-alloy of Quicksilver's scoring algorithm, essentially
 * LiquidMetal.
 *
 * For usage and examples, visit:
 * http://github.com/rmm5t/liquidmetal
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2009, Ryan McGeary (ryanonjavascript -[at]- mcgeary [*dot*] org)
 */

var LiquidMetal = function() {
  var SCORE_NO_MATCH = 0.0;
  var SCORE_MATCH = 1.0;
  var SCORE_TRAILING = 0.8;
  var SCORE_TRAILING_BUT_STARTED = 0.9;
  var SCORE_BUFFER = 0.85;

  return {
    score: function(string, abbreviation) {
      // Short circuits
      if (abbreviation.length == 0) return SCORE_TRAILING;
      if (abbreviation.length > string.length) return SCORE_NO_MATCH;

      var scores = this.buildScoreArray(string, abbreviation);

      var sum = 0.0;
      for (var i =0; i < scores.length; i++) {
        sum += scores[i];
      }

      return (sum / scores.length);
    },

    buildScoreArray: function(string, abbreviation) {
      var scores = new Array(string.length);
      var lower = string.toLowerCase();
      var chars = abbreviation.toLowerCase().split("");

      var lastIndex = -1;
      var started = false;
      for (var i =0; i < chars.length; i++) {
        var c = chars[i];
        var index = lower.indexOf(c, lastIndex+1);
        if (index < 0) return fillArray(scores, SCORE_NO_MATCH);
        if (index == 0) started = true;

        if (isNewWord(string, index)) {
          scores[index-1] = 1;
          fillArray(scores, SCORE_BUFFER, lastIndex+1, index-1);
        }
        else if (isUpperCase(string, index)) {
          fillArray(scores, SCORE_BUFFER, lastIndex+1, index);
        }
        else {
          fillArray(scores, SCORE_NO_MATCH, lastIndex+1, index);
        }

        scores[index] = SCORE_MATCH;
        lastIndex = index;
      }

      var trailingScore = started ? SCORE_TRAILING_BUT_STARTED : SCORE_TRAILING;
      fillArray(scores, trailingScore, lastIndex+1);
      return scores;
    }
  };

  function isUpperCase(string, index) {
    var c = string.charAt(index);
    return ("A" <= c && c <= "Z");
  }

   function isNewWord(string, index) {
    var c = string.charAt(index-1);
    return (c == " " || c == "\t");
  }

  function fillArray(array, value, from, to) {
    from = Math.max(from || 0, 0);
    to = Math.min(to || array.length, array.length);
    for (var i = from; i < to; i++) { array[i] = value; }
    return array;
  }
}();
//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//				A A L
//				T C A
//				T K B
//
//   <http://www.attacklab.net/>
//

//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//


//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//


// **************************************************
// GitHub Flavored Markdown modifications by Tekkub
// http://github.github.com/github-flavored-markdown/
//
// Modifications are tagged with "GFM"
// **************************************************

//
// Showdown namespace
//
var Showdown = {};

//
// converter
//
// Wraps all "globals" so that the only thing
// exposed is makeHtml().
//
Showdown.converter = function() {

  // Global hashes, used by various utility routines
  var g_urls;
  var g_titles;
  var g_html_blocks;

  // Used to track when we're inside an ordered or unordered list
  // (see _ProcessListItems() for details):
  var g_list_level = 0;

  // Main function. The order in which other subs are called here is
  // essential. Link and image substitutions need to happen before
  // _EscapeSpecialCharsWithinTagAttributes(), so that any *'s or _'s in the <a>
  // and <img> tags get encoded.
  this.makeHtml = function(text) {

    // Clear the global hashes. If we don't clear these, you get conflicts
    // from other articles when generating a page which contains more than
    // one article (e.g. an index page that shows the N most recent
    // articles):
    g_urls = new Array();
    g_titles = new Array();
    g_html_blocks = new Array();

    // attacklab: Replace ~ with ~T
    // This lets us use tilde as an escape char to avoid md5 hashes
    // The choice of character is arbitray; anything that isn't
    // magic in Markdown will work.
    text = text.replace(/~/g, "~T");

    // attacklab: Replace $ with ~D
    // RegExp interprets $ as a special character
    // when it's in a replacement string
    text = text.replace(/\$/g, "~D");

    // Standardize line endings
    text = text.replace(/\r\n/g, "\n"); // DOS to Unix
    text = text.replace(/\r/g, "\n"); // Mac to Unix

    // Make sure text begins and ends with a couple of newlines:
    text = "\n\n" + text + "\n\n";

    // Convert all tabs to spaces.
    text = _Detab(text);

    // Strip any lines consisting only of spaces and tabs.
    // This makes subsequent regexen easier to write, because we can
    // match consecutive blank lines with /\n+/ instead of something
    // contorted like /[ \t]*\n+/ .
    text = text.replace(/^[ \t]+$/mg, "");

    // Turn block-level HTML blocks into hash entries
    text = _HashHTMLBlocks(text);

    // Strip link definitions, store in hashes.
    text = _StripLinkDefinitions(text);

    text = _RunBlockGamut(text);

    text = _UnescapeSpecialChars(text);

    // attacklab: Restore dollar signs
    text = text.replace(/~D/g, "$$");

    // attacklab: Restore tildes
    text = text.replace(/~T/g, "~");

    // ** GFM **  Auto-link URLs and emails
    text = text.replace(/https?\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!]/g, function(wholeMatch, matchIndex) {
      var left = text.slice(0, matchIndex), right = text.slice(matchIndex);
      if (left.match(/<[^>]+$/) && right.match(/^[^>]*>/)) {
        return wholeMatch
      }
      var href = wholeMatch.replace(/^http:\/\/github.com\//, "https://github.com/");
      return "<a href='" + href + "'>" + wholeMatch + "</a>";
    });
    text = text.replace(/[a-z0-9_\-+=.]+@[a-z0-9\-]+(\.[a-z0-9-]+)+/ig, function(wholeMatch) {
      return "<a href='mailto:" + wholeMatch + "'>" + wholeMatch + "</a>";
    });

    // ** GFM ** Auto-link sha1 if GitHub.nameWithOwner is defined
    text = text.replace(/[a-f0-9]{40}/ig, function(wholeMatch, matchIndex) {
      if (typeof(GitHub) == "undefined" || typeof(GitHub.nameWithOwner) == "undefined") {
        return wholeMatch;
      }
      var left = text.slice(0, matchIndex), right = text.slice(matchIndex);
      if (left.match(/@$/) || (left.match(/<[^>]+$/) && right.match(/^[^>]*>/))) {
        return wholeMatch;
      }
      return "<a href='http://github.com/" + GitHub.nameWithOwner + "/commit/" + wholeMatch + "'>" + wholeMatch.substring(0, 7) + "</a>";
    });

    // ** GFM ** Auto-link user@sha1 if GitHub.nameWithOwner is defined
    text = text.replace(/([a-z0-9_\-+=.]+)@([a-f0-9]{40})/ig, function(wholeMatch, username, sha, matchIndex) {
      if (typeof(GitHub) == "undefined" || typeof(GitHub.nameWithOwner) == "undefined") {
        return wholeMatch;
      }
      GitHub.repoName = GitHub.repoName || _GetRepoName();
      var left = text.slice(0, matchIndex), right = text.slice(matchIndex);
      if (left.match(/\/$/) || (left.match(/<[^>]+$/) && right.match(/^[^>]*>/))) {
        return wholeMatch;
      }
      return "<a href='http://github.com/" + username + "/" + GitHub.repoName + "/commit/" + sha + "'>" + username + "@" + sha.substring(0, 7) + "</a>";
    });

    // ** GFM ** Auto-link user/repo@sha1
    text = text.replace(/([a-z0-9_\-+=.]+\/[a-z0-9_\-+=.]+)@([a-f0-9]{40})/ig, function(wholeMatch, repo, sha) {
      return "<a href='http://github.com/" + repo + "/commit/" + sha + "'>" + repo + "@" + sha.substring(0, 7) + "</a>";
    });

    // ** GFM ** Auto-link #issue if GitHub.nameWithOwner is defined
    text = text.replace(/#([0-9]+)/ig, function(wholeMatch, issue, matchIndex) {
      if (typeof(GitHub) == "undefined" || typeof(GitHub.nameWithOwner) == "undefined") {
        return wholeMatch;
      }
      var left = text.slice(0, matchIndex), right = text.slice(matchIndex);
      if (left == "" || left.match(/[a-z0-9_\-+=.]$/) || (left.match(/<[^>]+$/) && right.match(/^[^>]*>/))) {
        return wholeMatch;
      }
      return "<a href='http://github.com/" + GitHub.nameWithOwner + "/issues/#issue/" + issue + "'>" + wholeMatch + "</a>";
    });

    // ** GFM ** Auto-link user#issue if GitHub.nameWithOwner is defined
    text = text.replace(/([a-z0-9_\-+=.]+)#([0-9]+)/ig, function(wholeMatch, username, issue, matchIndex) {
      if (typeof(GitHub) == "undefined" || typeof(GitHub.nameWithOwner) == "undefined") {
        return wholeMatch;
      }
      GitHub.repoName = GitHub.repoName || _GetRepoName();
      var left = text.slice(0, matchIndex), right = text.slice(matchIndex);
      if (left.match(/\/$/) || (left.match(/<[^>]+$/) && right.match(/^[^>]*>/))) {
        return wholeMatch;
      }
      return "<a href='http://github.com/" + username + "/" + GitHub.repoName + "/issues/#issue/" + issue + "'>" + wholeMatch + "</a>";
    });

    // ** GFM ** Auto-link user/repo#issue
    text = text.replace(/([a-z0-9_\-+=.]+\/[a-z0-9_\-+=.]+)#([0-9]+)/ig, function(wholeMatch, repo, issue) {
      return "<a href='http://github.com/" + repo + "/issues/#issue/" + issue + "'>" + wholeMatch + "</a>";
    });

    return text;
  };


  var _GetRepoName = function() {
    return GitHub.nameWithOwner.match(/^.+\/(.+)$/)[1]
  };

  //
  // Strips link definitions from text, stores the URLs and titles in
  // hash references.
  //
  var _StripLinkDefinitions = function(text) {

    // Link defs are in the form: ^[id]: url "optional title"

    /*
     var text = text.replace(/
     ^[ ]{0,3}\[(.+)\]:  // id = $1  attacklab: g_tab_width - 1
     [ \t]*
     \n?				// maybe *one* newline
     [ \t]*
     <?(\S+?)>?			// url = $2
     [ \t]*
     \n?				// maybe one newline
     [ \t]*
     (?:
     (\n*)				// any lines skipped = $3 attacklab: lookbehind removed
     ["(]
     (.+?)				// title = $4
     [")]
     [ \t]*
     )?					// title is optional
     (?:\n+|$)
     /gm,
     function(){...});
     */
    var text = text.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|\Z)/gm, function (wholeMatch, m1, m2, m3, m4) {
      m1 = m1.toLowerCase();
      g_urls[m1] = _EncodeAmpsAndAngles(m2);  // Link IDs are case-insensitive
      if (m3) {
        // Oops, found blank lines, so it's not a title.
        // Put back the parenthetical statement we stole.
        return m3 + m4;
      } else if (m4) {
        g_titles[m1] = m4.replace(/"/g, "&quot;");
      }

      // Completely remove the definition from the text
      return "";
    });

    return text;
  };


  var _HashHTMLBlocks = function(text) {
    // attacklab: Double up blank lines to reduce lookaround
    text = text.replace(/\n/g, "\n\n");

    // Hashify HTML blocks:
    // We only want to do this for block-level HTML tags, such as headers,
    // lists, and tables. That's because we still want to wrap <p>s around
    // "paragraphs" that are wrapped in non-block-level tags, such as anchors,
    // phrase emphasis, and spans. The list of tags we're looking for is
    // hard-coded:
    var block_tags_a = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del";
    var block_tags_b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math";

    // First, look for nested blocks, e.g.:
    //   <div>
    //     <div>
    //     tags for inner block must be indented.
    //     </div>
    //   </div>
    //
    // The outermost tags must start at the left margin for this to match, and
    // the inner nested divs must be indented.
    // We need to do this before the next, more liberal match, because the next
    // match will start at the first `<div>` and stop at the first `</div>`.

    // attacklab: This regex can be expensive when it fails.
    /*
     var text = text.replace(/
     (						// save in $1
     ^					// start of line  (with /m)
     <($block_tags_a)	// start tag = $2
     \b					// word break
     // attacklab: hack around khtml/pcre bug...
     [^\r]*?\n			// any number of lines, minimally matching
     </\2>				// the matching end tag
     [ \t]*				// trailing spaces/tabs
     (?=\n+)				// followed by a newline
     )						// attacklab: there are sentinel newlines at end of document
     /gm,function(){...}};
     */
    text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, hashElement);

    //
    // Now match more liberally, simply from `\n<tag>` to `</tag>\n`
    //

    /*
     var text = text.replace(/
     (						// save in $1
     ^					// start of line  (with /m)
     <($block_tags_b)	// start tag = $2
     \b					// word break
     // attacklab: hack around khtml/pcre bug...
     [^\r]*?				// any number of lines, minimally matching
     .*</\2>				// the matching end tag
     [ \t]*				// trailing spaces/tabs
     (?=\n+)				// followed by a newline
     )						// attacklab: there are sentinel newlines at end of document
     /gm,function(){...}};
     */
    text = text.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm, hashElement);

    // Special case just for <hr />. It was easier to make a special case than
    // to make the other regex more complicated.

    /*
     text = text.replace(/
     (						// save in $1
     \n\n				// Starting after a blank line
     [ ]{0,3}
     (<(hr)				// start tag = $2
     \b					// word break
     ([^<>])*?			//
     \/?>)				// the matching end tag
     [ \t]*
     (?=\n{2,})			// followed by a blank line
     )
     /g,hashElement);
     */
    text = text.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, hashElement);

    // Special case for standalone HTML comments:

    /*
     text = text.replace(/
     (						// save in $1
     \n\n				// Starting after a blank line
     [ ]{0,3}			// attacklab: g_tab_width - 1
     <!
     (--[^\r]*?--\s*)+
     >
     [ \t]*
     (?=\n{2,})			// followed by a blank line
     )
     /g,hashElement);
     */
    text = text.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, hashElement);

    // PHP and ASP-style processor instructions (<?...?> and <%...%>)

    /*
     text = text.replace(/
     (?:
     \n\n				// Starting after a blank line
     )
     (						// save in $1
     [ ]{0,3}			// attacklab: g_tab_width - 1
     (?:
     <([?%])			// $2
     [^\r]*?
     \2>
     )
     [ \t]*
     (?=\n{2,})			// followed by a blank line
     )
     /g,hashElement);
     */
    text = text.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, hashElement);

    // attacklab: Undo double lines (see comment at top of this function)
    text = text.replace(/\n\n/g, "\n");
    return text;
  };

  var hashElement = function(wholeMatch, m1) {
    var blockText = m1;

    // Undo double lines
    blockText = blockText.replace(/\n\n/g, "\n");
    blockText = blockText.replace(/^\n/, "");

    // strip trailing blank lines
    blockText = blockText.replace(/\n+$/g, "");

    // Replace the element text with a marker ("~KxK" where x is its key)
    blockText = "\n\n~K" + (g_html_blocks.push(blockText) - 1) + "K\n\n";

    return blockText;
  };

  //
  // These are all the transformations that form block-level
  // tags like paragraphs, headers, and list items.
  //
  var _RunBlockGamut = function(text) {
    text = _DoHeaders(text);

    // Do Horizontal Rules:
    var key = hashBlock("<hr />");
    text = text.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, key);
    text = text.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, key);
    text = text.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, key);

    text = _DoLists(text);
    text = _DoCodeBlocks(text);
    text = _DoBlockQuotes(text);

    // We already ran _HashHTMLBlocks() before, in Markdown(), but that
    // was to escape raw HTML in the original Markdown source. This time,
    // we're escaping the markup we've just created, so that we don't wrap
    // <p> tags around block-level tags.
    text = _HashHTMLBlocks(text);
    text = _FormParagraphs(text);

    return text;
  };

  //
  // These are all the transformations that occur *within* block-level
  // tags like paragraphs, headers, and list items.
  //
  var _RunSpanGamut = function(text) {

    text = _DoCodeSpans(text);
    text = _EscapeSpecialCharsWithinTagAttributes(text);
    text = _EncodeBackslashEscapes(text);

    // Process anchor and image tags. Images must come first,
    // because ![foo][f] looks like an anchor.
    text = _DoImages(text);
    text = _DoAnchors(text);

    // Make links out of things like `<http://example.com/>`
    // Must come after _DoAnchors(), because you can use < and >
    // delimiters in inline links like [this](<url>).
    text = _DoAutoLinks(text);
    text = _EncodeAmpsAndAngles(text);
    text = _DoItalicsAndBold(text);

    // Do hard breaks:
    text = text.replace(/  +\n/g, " <br />\n");

    return text;
  };

  //
  // Within tags -- meaning between < and > -- encode [\ ` * _] so they
  // don't conflict with their use in Markdown for code, italics and strong.
  //
  var _EscapeSpecialCharsWithinTagAttributes = function(text) {

    // Build a regex to find HTML tags and comments.  See Friedl's
    // "Mastering Regular Expressions", 2nd Ed., pp. 200-201.
    var regex = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;

    text = text.replace(regex, function(wholeMatch) {
      var tag = wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`");
      tag = escapeCharacters(tag, "\\`*_");
      return tag;
    });

    return text;
  };

  //
  // Turn Markdown link shortcuts into XHTML <a> tags.
  //
  var _DoAnchors = function(text) {
    //
    // First, handle reference-style links: [link text] [id]
    //

    /*
     text = text.replace(/
     (							// wrap whole match in $1
     \[
     (
     (?:
     \[[^\]]*\]		// allow brackets nested one level
     |
     [^\[]			// or anything else
     )*
     )
     \]

     [ ]?					// one optional space
     (?:\n[ ]*)?				// one optional newline followed by spaces

     \[
     (.*?)					// id = $3
     \]
     )()()()()					// pad remaining backreferences
     /g,_DoAnchors_callback);
     */
    text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeAnchorTag);

    //
    // Next, inline-style links: [link text](url "optional title")
    //

    /*
     text = text.replace(/
     (						// wrap whole match in $1
     \[
     (
     (?:
     \[[^\]]*\]	// allow brackets nested one level
     |
     [^\[\]]			// or anything else
     )
     )
     \]
     \(						// literal paren
     [ \t]*
     ()						// no id, so leave $3 empty
     <?(.*?)>?				// href = $4
     [ \t]*
     (						// $5
     (['"])				// quote char = $6
     (.*?)				// Title = $7
     \6					// matching quote
     [ \t]*				// ignore any spaces/tabs between closing quote and )
     )?						// title is optional
     \)
     )
     /g,writeAnchorTag);
     */
    text = text.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeAnchorTag);

    //
    // Last, handle reference-style shortcuts: [link text]
    // These must come last in case you've also got [link test][1]
    // or [link test](/foo)
    //

    /*
     text = text.replace(/
     (		 					// wrap whole match in $1
     \[
     ([^\[\]]+)				// link text = $2; can't contain '[' or ']'
     \]
     )()()()()()					// pad rest of backreferences
     /g, writeAnchorTag);
     */
    text = text.replace(/(\[([^\[\]]+)\])()()()()()/g, writeAnchorTag);

    return text;
  };

  var writeAnchorTag = function(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
    if (m7 == undefined) m7 = "";
    var whole_match = m1;
    var link_text = m2;
    var link_id = m3.toLowerCase();
    var url = m4;
    var title = m7;

    if (url == "") {
      if (link_id == "") {
        // lower-case and turn embedded newlines into spaces
        link_id = link_text.toLowerCase().replace(/ ?\n/g, " ");
      }
      url = "#" + link_id;

      if (g_urls[link_id] != undefined) {
        url = g_urls[link_id];
        if (g_titles[link_id] != undefined) {
          title = g_titles[link_id];
        }
      }
      else {
        if (whole_match.search(/\(\s*\)$/m) > -1) {
          // Special case for explicit empty url
          url = "";
        } else {
          return whole_match;
        }
      }
    }

    url = escapeCharacters(url, "*_");
    var result = "<a href=\"" + url + "\"";

    if (title != "") {
      title = title.replace(/"/g, "&quot;");
      title = escapeCharacters(title, "*_");
      result += " title=\"" + title + "\"";
    }

    result += ">" + link_text + "</a>";

    return result;
  };


  //
  // Turn Markdown image shortcuts into <img> tags.
  //
  var _DoImages = function(text) {
    //
    // First, handle reference-style labeled images: ![alt text][id]
    //

    /*
     text = text.replace(/
     (						// wrap whole match in $1
     !\[
     (.*?)				// alt text = $2
     \]

     [ ]?				// one optional space
     (?:\n[ ]*)?			// one optional newline followed by spaces

     \[
     (.*?)				// id = $3
     \]
     )()()()()				// pad rest of backreferences
     /g,writeImageTag);
     */
    text = text.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, writeImageTag);

    //
    // Next, handle inline images:  ![alt text](url "optional title")
    // Don't forget: encode * and _

    /*
     text = text.replace(/
     (						// wrap whole match in $1
     !\[
     (.*?)				// alt text = $2
     \]
     \s?					// One optional whitespace character
     \(					// literal paren
     [ \t]*
     ()					// no id, so leave $3 empty
     <?(\S+?)>?			// src url = $4
     [ \t]*
     (					// $5
     (['"])			// quote char = $6
     (.*?)			// title = $7
     \6				// matching quote
     [ \t]*
     )?					// title is optional
     \)
     )
     /g,writeImageTag);
     */
    text = text.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, writeImageTag);

    return text;
  };

  var writeImageTag = function(wholeMatch, m1, m2, m3, m4, m5, m6, m7) {
    var whole_match = m1;
    var alt_text = m2;
    var link_id = m3.toLowerCase();
    var url = m4;
    var title = m7;

    if (!title) title = "";

    if (url == "") {
      if (link_id == "") {
        // lower-case and turn embedded newlines into spaces
        link_id = alt_text.toLowerCase().replace(/ ?\n/g, " ");
      }
      url = "#" + link_id;

      if (g_urls[link_id] != undefined) {
        url = g_urls[link_id];
        if (g_titles[link_id] != undefined) {
          title = g_titles[link_id];
        }
      }
      else {
        return whole_match;
      }
    }

    alt_text = alt_text.replace(/"/g, "&quot;");
    url = escapeCharacters(url, "*_");
    var result = "<img src=\"" + url + "\" alt=\"" + alt_text + "\"";

    // attacklab: Markdown.pl adds empty title attributes to images.
    // Replicate this bug.

    //if (title != "") {
    title = title.replace(/"/g, "&quot;");
    title = escapeCharacters(title, "*_");
    result += " title=\"" + title + "\"";
    //}

    result += " />";

    return result;
  };


  var _DoHeaders = function(text) {

    // Setext-style headers:
    //	Header 1
    //	========
    //
    //	Header 2
    //	--------
    //
    text = text.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,
            function(wholeMatch, m1) {
              return hashBlock("<h1>" + _RunSpanGamut(m1) + "</h1>");
            });

    text = text.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,
            function(matchFound, m1) {
              return hashBlock("<h2>" + _RunSpanGamut(m1) + "</h2>");
            });

    // atx-style headers:
    //  # Header 1
    //  ## Header 2
    //  ## Header 2 with closing hashes ##
    //  ...
    //  ###### Header 6
    //

    /*
     text = text.replace(/
     ^(\#{1,6})				// $1 = string of #'s
     [ \t]*
     (.+?)					// $2 = Header text
     [ \t]*
     \#*						// optional closing #'s (not counted)
     \n+
     /gm, function() {...});
     */

    text = text.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,
            function(wholeMatch, m1, m2) {
              var h_level = m1.length;
              return hashBlock("<h" + h_level + ">" + _RunSpanGamut(m2) + "</h" + h_level + ">");
            });

    return text;
  };

  // This declaration keeps Dojo compressor from outputting garbage:
  var _ProcessListItems;

  //
  // Form HTML ordered (numbered) and unordered (bulleted) lists.
  //
  var _DoLists = function(text) {

    // attacklab: add sentinel to hack around khtml/safari bug:
    // http://bugs.webkit.org/show_bug.cgi?id=11231
    text += "~0";

    // Re-usable pattern to match any entirel ul or ol list:

    /*
     var whole_list = /
     (									// $1 = whole list
     (								// $2
     [ ]{0,3}					// attacklab: g_tab_width - 1
     ([*+-]|\d+[.])				// $3 = first list item marker
     [ \t]+
     )
     [^\r]+?
     (								// $4
     ~0							// sentinel for workaround; should be $
     |
     \n{2,}
     (?=\S)
     (?!							// Negative lookahead for another list item marker
     [ \t]*
     (?:[*+-]|\d+[.])[ \t]+
     )
     )
     )/g
     */
    var whole_list = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;

    if (g_list_level) {
      text = text.replace(whole_list, function(wholeMatch, m1, m2) {
        var list = m1;
        var list_type = (m2.search(/[*+-]/g) > -1) ? "ul" : "ol";

        // Turn double returns into triple returns, so that we can make a
        // paragraph for the last item in a list, if necessary:
        list = list.replace(/\n{2,}/g, "\n\n\n");
        var result = _ProcessListItems(list);

        // Trim any trailing whitespace, to put the closing `</$list_type>`
        // up on the preceding line, to get it past the current stupid
        // HTML block parser. This is a hack to work around the terrible
        // hack that is the HTML block parser.
        result = result.replace(/\s+$/, "");
        result = "<" + list_type + ">" + result + "</" + list_type + ">\n";
        return result;
      });
    } else {
      whole_list = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g;
      text = text.replace(whole_list, function(wholeMatch, m1, m2, m3) {
        var runup = m1;
        var list = m2;

        var list_type = (m3.search(/[*+-]/g) > -1) ? "ul" : "ol";
        // Turn double returns into triple returns, so that we can make a
        // paragraph for the last item in a list, if necessary:
        var list = list.replace(/\n{2,}/g, "\n\n\n");
        var result = _ProcessListItems(list);
        result = runup + "<" + list_type + ">\n" + result + "</" + list_type + ">\n";
        return result;
      });
    }

    // attacklab: strip sentinel
    text = text.replace(/~0/, "");

    return text;
  };

  //
  //  Process the contents of a single ordered or unordered list, splitting it
  //  into individual list items.
  //
  _ProcessListItems = function(list_str) {
    // The $g_list_level global keeps track of when we're inside a list.
    // Each time we enter a list, we increment it; when we leave a list,
    // we decrement. If it's zero, we're not in a list anymore.
    //
    // We do this because when we're not inside a list, we want to treat
    // something like this:
    //
    //    I recommend upgrading to version
    //    8. Oops, now this line is treated
    //    as a sub-list.
    //
    // As a single paragraph, despite the fact that the second line starts
    // with a digit-period-space sequence.
    //
    // Whereas when we're inside a list (or sub-list), that line will be
    // treated as the start of a sub-list. What a kludge, huh? This is
    // an aspect of Markdown's syntax that's hard to parse perfectly
    // without resorting to mind-reading. Perhaps the solution is to
    // change the syntax rules such that sub-lists must start with a
    // starting cardinal number; e.g. "1." or "a.".

    g_list_level++;

    // trim trailing blank lines:
    list_str = list_str.replace(/\n{2,}$/, "\n");

    // attacklab: add sentinel to emulate \z
    list_str += "~0";

    /*
     list_str = list_str.replace(/
     (\n)?							// leading line = $1
     (^[ \t]*)						// leading whitespace = $2
     ([*+-]|\d+[.]) [ \t]+			// list marker = $3
     ([^\r]+?						// list item text   = $4
     (\n{1,2}))
     (?= \n* (~0 | \2 ([*+-]|\d+[.]) [ \t]+))
     /gm, function(){...});
     */
    list_str = list_str.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,
            function(wholeMatch, m1, m2, m3, m4) {
              var item = m4;
              var leading_line = m1;
              var leading_space = m2;

              if (leading_line || (item.search(/\n{2,}/) > -1)) {
                item = _RunBlockGamut(_Outdent(item));
              }
              else {
                // Recursion for sub-lists:
                item = _DoLists(_Outdent(item));
                item = item.replace(/\n$/, ""); // chomp(item)
                item = _RunSpanGamut(item);
              }

              return  "<li>" + item + "</li>\n";
            }
            );

    // attacklab: strip sentinel
    list_str = list_str.replace(/~0/g, "");

    g_list_level--;
    return list_str;
  };


  //
  //  Process Markdown `<pre><code>` blocks.
  //
  var _DoCodeBlocks = function(text) {

    /*
     text = text.replace(text,
     /(?:\n\n|^)
     (								// $1 = the code block -- one or more lines, starting with a space/tab
     (?:
     (?:[ ]{4}|\t)			// Lines must start with a tab or a tab-width of spaces - attacklab: g_tab_width
     .*\n+
     )+
     )
     (\n*[ ]{0,3}[^ \t\n]|(?=~0))	// attacklab: g_tab_width
     /g,function(){...});
     */

    // attacklab: sentinel workarounds for lack of \A and \Z, safari\khtml bug
    text += "~0";

    text = text.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(wholeMatch, m1, m2) {
      var codeblock = m1;
      var nextChar = m2;

      codeblock = _EncodeCode(_Outdent(codeblock));
      codeblock = _Detab(codeblock);
      codeblock = codeblock.replace(/^\n+/g, ""); // trim leading newlines
      codeblock = codeblock.replace(/\n+$/g, ""); // trim trailing whitespace

      codeblock = "<pre><code>" + codeblock + "\n</code></pre>";

      return hashBlock(codeblock) + nextChar;
    });

    // attacklab: strip sentinel
    text = text.replace(/~0/, "");

    return text;
  };

  var hashBlock = function(text) {
    text = text.replace(/(^\n+|\n+$)/g, "");
    return "\n\n~K" + (g_html_blocks.push(text) - 1) + "K\n\n";
  };


  //
  //   *  Backtick quotes are used for <code></code> spans.
  //
  //   *  You can use multiple backticks as the delimiters if you want to
  //	 include literal backticks in the code span. So, this input:
  //
  //		 Just type ``foo `bar` baz`` at the prompt.
  //
  //	   Will translate to:
  //
  //		 <p>Just type <code>foo `bar` baz</code> at the prompt.</p>
  //
  //	There's no arbitrary limit to the number of backticks you
  //	can use as delimters. If you need three consecutive backticks
  //	in your code, use four for delimiters, etc.
  //
  //  *  You can use spaces to get literal backticks at the edges:
  //
  //		 ... type `` `bar` `` ...
  //
  //	   Turns to:
  //
  //		 ... type <code>`bar`</code> ...
  //
  var _DoCodeSpans = function(text) {
    /*
     text = text.replace(/
     (^|[^\\])					// Character before opening ` can't be a backslash
     (`+)						// $2 = Opening run of `
     (							// $3 = The code block
     [^\r]*?
     [^`]					// attacklab: work around lack of lookbehind
     )
     \2							// Matching closer
     (?!`)
     /gm, function(){...});
     */

    text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
            function(wholeMatch, m1, m2, m3, m4) {
              var c = m3;
              c = c.replace(/^([ \t]*)/g, "");	// leading whitespace
              c = c.replace(/[ \t]*$/g, "");	// trailing whitespace
              c = _EncodeCode(c);
              return m1 + "<code>" + c + "</code>";
            });

    return text;
  };


  //
  // Encode/escape certain characters inside Markdown code runs.
  // The point is that in code, these characters are literals,
  // and lose their special Markdown meanings.
  //
  var _EncodeCode = function(text) {
    // Encode all ampersands; HTML entities are not
    // entities within a Markdown code span.
    text = text.replace(/&/g, "&amp;");

    // Do the angle bracket song and dance:
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");

    // Now, escape characters that are magic in Markdown:
    text = escapeCharacters(text, "\*_{}[]\\", false);

    return text;
  };


  var _DoItalicsAndBold = function(text) {

    // <strong> must go first:
    text = text.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,
            "<strong>$2</strong>");

    text = text.replace(/(\w)_(\w)/g, "$1~E95E$2"); // ** GFM **  "~E95E" == escaped "_"
    text = text.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,
            "<em>$2</em>");

    return text;
  };


  var _DoBlockQuotes = function(text) {

    /*
     text = text.replace(/
     (								// Wrap whole match in $1
     (
     ^[ \t]*>[ \t]?			// '>' at the start of a line
     .+\n					// rest of the first line
     (.+\n)*					// subsequent consecutive lines
     \n*						// blanks
     )+
     )
     /gm, function(){...});
     */

    text = text.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
            function(wholeMatch, m1) {
              var bq = m1;

              // attacklab: hack around Konqueror 3.5.4 bug:
              // "----------bug".replace(/^-/g,"") == "bug"

              bq = bq.replace(/^[ \t]*>[ \t]?/gm, "~0");	// trim one level of quoting

              // attacklab: clean up hack
              bq = bq.replace(/~0/g, "");

              bq = bq.replace(/^[ \t]+$/gm, "");		// trim whitespace-only lines
              bq = _RunBlockGamut(bq);				// recurse

              bq = bq.replace(/(^|\n)/g, "$1  ");
              // These leading spaces screw with <pre> content, so we need to fix that:
              bq = bq.replace(
                      /(\s*<pre>[^\r]+?<\/pre>)/gm,
                      function(wholeMatch, m1) {
                        var pre = m1;
                        // attacklab: hack around Konqueror 3.5.4 bug:
                        pre = pre.replace(/^  /mg, "~0");
                        pre = pre.replace(/~0/g, "");
                        return pre;
                      });

              return hashBlock("<blockquote>\n" + bq + "\n</blockquote>");
            });
    return text;
  };


  //
  //  Params:
  //    $text - string to process with html <p> tags
  //
  var _FormParagraphs = function(text) {

    // Strip leading and trailing lines:
    text = text.replace(/^\n+/g, "");
    text = text.replace(/\n+$/g, "");

    var grafs = text.split(/\n{2,}/g);
    var grafsOut = new Array();

    //
    // Wrap <p> tags.
    //
    var end = grafs.length;
    for (var i = 0; i < end; i++) {
      var str = grafs[i];

      // if this is an HTML marker, copy it
      if (str.search(/~K(\d+)K/g) >= 0) {
        grafsOut.push(str);
      }
      else if (str.search(/\S/) >= 0) {
        str = _RunSpanGamut(str);
        str = str.replace(/\n/g, "<br />");  // ** GFM **
        str = str.replace(/^([ \t]*)/g, "<p>");
        str += "</p>";
        grafsOut.push(str);
      }

    }

    //
    // Unhashify HTML blocks
    //
    end = grafsOut.length;
    for (var i = 0; i < end; i++) {
      // if this is a marker for an html block...
      while (grafsOut[i].search(/~K(\d+)K/) >= 0) {
        var blockText = g_html_blocks[RegExp.$1];
        blockText = blockText.replace(/\$/g, "$$$$"); // Escape any dollar signs
        grafsOut[i] = grafsOut[i].replace(/~K\d+K/, blockText);
      }
    }

    return grafsOut.join("\n\n");
  };

  // Smart processing for ampersands and angle brackets that need to be encoded.
  var _EncodeAmpsAndAngles = function(text) {

    // Ampersand-encoding based entirely on Nat Irons's Amputator MT plugin:
    //   http://bumppo.net/projects/amputator/
    text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");

    // Encode naked <'s
    text = text.replace(/<(?![a-z\/?\$!])/gi, "&lt;");

    return text;
  };

  //
  //   Parameter:  String.
  //   Returns:	The string, with after processing the following backslash
  //			   escape sequences.
  //
  var _EncodeBackslashEscapes = function(text) {
    // attacklab: The polite way to do this is with the new
    // escapeCharacters() function:
    //
    // 	text = escapeCharacters(text,"\\",true);
    // 	text = escapeCharacters(text,"`*_{}[]()>#+-.!",true);
    //
    // ...but we're sidestepping its use of the (slow) RegExp constructor
    // as an optimization for Firefox.  This function gets called a LOT.

    text = text.replace(/\\(\\)/g, escapeCharacters_callback);
    text = text.replace(/\\([`*_{}\[\]()>#+-.!])/g, escapeCharacters_callback);
    return text;
  };

  var _DoAutoLinks = function(text) {

    text = text.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, "<a href=\"$1\">$1</a>");

    // Email addresses: <address@domain.foo>

    /*
     text = text.replace(/
     <
     (?:mailto:)?
     (
     [-.\w]+
     \@
     [-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+
     )
     >
     /gi, _DoAutoLinks_callback());
     */
    text = text.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function(wholeMatch, m1) {
      return _EncodeEmailAddress(_UnescapeSpecialChars(m1));
    });

    return text;
  };

  //
  //  Input: an email address, e.g. "foo@example.com"
  //
  //  Output: the email address as a mailto link, with each character
  //	of the address encoded as either a decimal or hex entity, in
  //	the hopes of foiling most address harvesting spam bots. E.g.:
  //
  //	<a href="&#x6D;&#97;&#105;&#108;&#x74;&#111;:&#102;&#111;&#111;&#64;&#101;
  //	   x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;">&#102;&#111;&#111;
  //	   &#64;&#101;x&#x61;&#109;&#x70;&#108;&#x65;&#x2E;&#99;&#111;&#109;</a>
  //
  //  Based on a filter by Matthew Wickline, posted to the BBEdit-Talk
  //  mailing list: <http://tinyurl.com/yu7ue>
  //
  var _EncodeEmailAddress = function(addr) {

    // attacklab: why can't javascript speak hex?
    function char2hex(ch) {
      var hexDigits = '0123456789ABCDEF';
      var dec = ch.charCodeAt(0);
      return(hexDigits.charAt(dec >> 4) + hexDigits.charAt(dec & 15));
    }

    var encode = [
      function(ch) { return "&#" + ch.charCodeAt(0) + ";" },
      function(ch) { return "&#x" + char2hex(ch) + ";" },
      function(ch) { return ch }
    ];

    addr = "mailto:" + addr;

    addr = addr.replace(/./g, function(ch) {
      if (ch == "@") {
        // this *must* be encoded. I insist.
        ch = encode[Math.floor(Math.random() * 2)](ch);
      } else if (ch != ":") {
        // leave ':' alone (to spot mailto: later)
        var r = Math.random();
        // roughly 10% raw, 45% hex, 45% dec
        ch = (r > .9 ? encode[2](ch) : r > .45 ? encode[1](ch) : encode[0](ch));
      }
      return ch;
    });

    addr = "<a href=\"" + addr + "\">" + addr + "</a>";
    addr = addr.replace(/">.+:/g, "\">"); // strip the mailto: from the visible part

    return addr;
  };

  //
  // Swap back in all the special characters we've hidden.
  //
  var _UnescapeSpecialChars = function(text) {
    text = text.replace(/~E(\d+)E/g, function(wholeMatch, m1) {
      var charCodeToReplace = parseInt(m1);
      return String.fromCharCode(charCodeToReplace);
    });
    return text;
  };

  //
  // Remove one level of line-leading tabs or spaces
  //
  var _Outdent = function(text) {

    // attacklab: hack around Konqueror 3.5.4 bug:
    // "----------bug".replace(/^-/g,"") == "bug"

    text = text.replace(/^(\t|[ ]{1,4})/gm, "~0"); // attacklab: g_tab_width

    // attacklab: clean up hack
    text = text.replace(/~0/g, "");

    return text;
  };

  // attacklab: Detab's completely rewritten for speed.
  // In perl we could fix it by anchoring the regexp with \G.
  // In javascript we're less fortunate.
  var _Detab = function(text) {
    // expand first n-1 tabs
    text = text.replace(/\t(?=\t)/g, "    "); // attacklab: g_tab_width

    // replace the nth with two sentinels
    text = text.replace(/\t/g, "~A~B");

    // use the sentinel to anchor our regex so it doesn't explode
    text = text.replace(/~B(.+?)~A/g, function(wholeMatch, m1, m2) {
      var leadingText = m1;
      var numSpaces = 4 - leadingText.length % 4;  // attacklab: g_tab_width

      // there *must* be a better way to do this:
      for (var i = 0; i < numSpaces; i++) leadingText += " ";

      return leadingText;
    });

    // clean up sentinels
    text = text.replace(/~A/g, "    ");  // attacklab: g_tab_width
    text = text.replace(/~B/g, "");

    return text;
  };


  //  attacklab: Utility functions
  var escapeCharacters = function(text, charsToEscape, afterBackslash) {
    // First we have to escape the escape characters so that
    // we can build a character class out of them
    var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";

    if (afterBackslash) {
      regexString = "\\\\" + regexString;
    }

    var regex = new RegExp(regexString, "g");
    text = text.replace(regex, escapeCharacters_callback);

    return text;
  };


  var escapeCharacters_callback = function(wholeMatch, m1) {
    var charCodeToEscape = m1.charCodeAt(0);
    return "~E" + charCodeToEscape + "E";
  };

};
(function() {
  var slice = [].slice;

  this.Mercury || (this.Mercury = {});

  jQuery.extend(this.Mercury, {
    version: '0.9.0',
    Regions: Mercury.Regions || {},
    modalHandlers: Mercury.modalHandlers || {},
    lightviewHandlers: Mercury.lightviewHandlers || {},
    dialogHandlers: Mercury.dialogHandlers || {},
    preloadedViews: Mercury.preloadedViews || {},
    ajaxHeaders: function() {
      var headers;
      headers = {};
      headers[Mercury.config.csrfHeader] = Mercury.csrfToken;
      return headers;
    },
    on: function(eventName, callback) {
      return jQuery(window).on("mercury:" + eventName, callback);
    },
    off: function(eventName, callback) {
      return jQuery(window).off("mercury:" + eventName, callback);
    },
    one: function(eventName, callback) {
      return jQuery(window).one("mercury:" + eventName, callback);
    },
    trigger: function(eventName, options) {
      Mercury.log(eventName, options);
      return jQuery(window).trigger("mercury:" + eventName, options);
    },
    notify: function() {
      var args;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      return window.alert(Mercury.I18n.apply(this, args));
    },
    warn: function(message, severity) {
      var e1, e2, error, error1;
      if (severity == null) {
        severity = 0;
      }
      if (console) {
        try {
          return console.warn(message);
        } catch (error) {
          e1 = error;
          if (severity >= 1) {
            try {
              return console.debug(message);
            } catch (error1) {
              e2 = error1;
            }
          }
        }
      } else if (severity >= 1) {
        return Mercury.notify(message);
      }
    },
    deprecated: function(message) {
      if (console && console.trace) {
        message = message + " -- " + (console.trace());
      }
      return Mercury.warn("deprecated: " + message, 1);
    },
    log: function() {
      var e, error;
      if (Mercury.debug && console) {
        if (arguments[0] === 'hide:toolbar' || arguments[0] === 'show:toolbar') {
          return;
        }
        try {
          return console.debug(arguments);
        } catch (error) {
          e = error;
        }
      }
    },
    locale: function() {
      var locale, subLocale, topLocale;
      if (Mercury.determinedLocale) {
        return Mercury.determinedLocale;
      }
      if (Mercury.config.localization.enabled) {
        locale = [];
        if (navigator.language && (locale = navigator.language.toString().split('-')).length) {
          topLocale = Mercury.I18n[locale[0]] || {};
          subLocale = locale.length > 1 ? topLocale["_" + (locale[1].toUpperCase()) + "_"] : void 0;
        }
        if (!Mercury.I18n[locale[0]]) {
          locale = Mercury.config.localization.preferredLocale.split('-');
          topLocale = Mercury.I18n[locale[0]] || {};
          subLocale = locale.length > 1 ? topLocale["_" + (locale[1].toUpperCase()) + "_"] : void 0;
        }
      }
      return Mercury.determinedLocale = {
        top: topLocale || {},
        sub: subLocale || {}
      };
    },
    I18n: function() {
      var args, locale, sourceString, translation;
      sourceString = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      locale = Mercury.locale();
      translation = (locale.sub[sourceString] || locale.top[sourceString] || sourceString || '').toString();
      if (args.length) {
        return translation.printf.apply(translation, args);
      } else {
        return translation;
      }
    }
  });

}).call(this);
(function() {
  String.prototype.titleize = function() {
    return this[0].toUpperCase() + this.slice(1);
  };

  String.prototype.toHex = function() {
    if (this[0] === '#') {
      return this;
    }
    return this.replace(/rgb(a)?\(([0-9|%]+)[\s|,]?\s?([0-9|%]+)[\s|,]?\s?([0-9|%]+)[\s|,]?\s?([0-9|.|%]+\s?)?\)/gi, function(x, alpha, r, g, b, a) {
      return "#" + (parseInt(r).toHex()) + (parseInt(g).toHex()) + (parseInt(b).toHex());
    });
  };

  String.prototype.regExpEscape = function() {
    var escaped, specials;
    specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
    escaped = new RegExp('(\\' + specials.join('|\\') + ')', 'g');
    return this.replace(escaped, '\\$1');
  };

  String.prototype.printf = function() {
    var arg, chunk, chunks, index, j, len, offset, p, re, result;
    chunks = this.split('%');
    result = chunks[0];
    re = /^([sdf])([\s\S%]*)$/;
    offset = 0;
    for (index = j = 0, len = chunks.length; j < len; index = ++j) {
      chunk = chunks[index];
      p = re.exec(chunk);
      if (index === 0 || !p || arguments[index] === null) {
        if (index > 1) {
          offset += 2;
          result += "%" + chunk;
        }
        continue;
      }
      arg = arguments[(index - 1) - offset];
      switch (p[1]) {
        case 's':
          result += arg;
          break;
        case 'd':
        case 'i':
          result += parseInt(arg.toString(), 10);
          break;
        case 'f':
          result += parseFloat(arg);
      }
      result += p[2];
    }
    return result;
  };

  Number.prototype.toHex = function() {
    var result;
    result = this.toString(16).toUpperCase();
    if (result[1]) {
      return result;
    } else {
      return "0" + result;
    }
  };

  Number.prototype.toBytes = function() {
    var bytes, i;
    bytes = parseInt(this);
    i = 0;
    while (1023 < bytes) {
      bytes /= 1024;
      i += 1;
    }
    if (i) {
      return "" + (bytes.toFixed(2)) + ['', ' kb', ' Mb', ' Gb', ' Tb', ' Pb', ' Eb'][i];
    } else {
      return bytes + " bytes";
    }
  };

}).call(this);
(function() {
  this.Mercury.PageEditor = (function() {
    function PageEditor(saveUrl, options1) {
      var token;
      this.saveUrl = saveUrl != null ? saveUrl : null;
      this.options = options1 != null ? options1 : {};
      if (window.mercuryInstance) {
        throw Mercury.I18n('Mercury.PageEditor can only be instantiated once.');
      }
      if (!(this.options.visible === false || this.options.visible === 'false')) {
        this.options.visible = true;
      }
      this.visible = this.options.visible;
      if (!(this.options.saveDataType === false || this.options.saveDataType)) {
        this.options.saveDataType = 'json';
      }
      window.mercuryInstance = this;
      this.regions = [];
      this.initializeInterface();
      if (token = jQuery(Mercury.config.csrfSelector).attr('content')) {
        Mercury.csrfToken = token;
      }
    }

    PageEditor.prototype.initializeInterface = function() {
      var ref, ref1;
      this.focusableElement = jQuery('<input>', {
        "class": 'mercury-focusable',
        type: 'text'
      }).appendTo((ref = this.options.appendTo) != null ? ref : 'body');
      this.iframe = jQuery('<iframe>', {
        id: 'mercury_iframe',
        name: 'mercury_iframe',
        "class": 'mercury-iframe',
        frameborder: '0',
        src: 'about:blank'
      });
      this.iframe.appendTo((ref1 = jQuery(this.options.appendTo).get(0)) != null ? ref1 : 'body');
      this.toolbar = new Mercury.Toolbar(jQuery.extend(true, {}, this.options, this.options.toolbarOptions));
      this.statusbar = new Mercury.Statusbar(jQuery.extend(true, {}, this.options, this.options.statusbarOptions));
      this.resize();
      this.iframe.one('load', (function(_this) {
        return function() {
          return _this.bindEvents();
        };
      })(this));
      this.iframe.on('load', (function(_this) {
        return function() {
          return _this.initializeFrame();
        };
      })(this));
      return this.loadIframeSrc(null);
    };

    PageEditor.prototype.initializeFrame = function() {
      var error, error1, iframeWindow;
      try {
        if (this.iframe.data('loaded')) {
          return;
        }
        this.iframe.data('loaded', true);
        this.document = jQuery(this.iframe.get(0).contentWindow.document);
        jQuery("<style mercury-styles=\"true\">").html(Mercury.config.injectedStyles).appendTo(this.document.find('head'));
        iframeWindow = this.iframe.get(0).contentWindow;
        jQuery.globalEval = function(data) {
          if (data && /\S/.test(data)) {
            return (iframeWindow.execScript || function(data) {
              return iframeWindow["eval"].call(iframeWindow, data);
            })(data);
          }
        };
        iframeWindow.Mercury = Mercury;
        if (window.History && History.Adapter) {
          iframeWindow.History = History;
        }
        this.bindDocumentEvents();
        this.resize();
        this.initializeRegions();
        this.finalizeInterface();
        Mercury.trigger('ready');
        if (iframeWindow.jQuery) {
          iframeWindow.jQuery(iframeWindow).trigger('mercury:ready');
        }
        if (iframeWindow.Event && iframeWindow.Event.fire) {
          iframeWindow.Event.fire(iframeWindow, 'mercury:ready');
        }
        if (iframeWindow.onMercuryReady) {
          iframeWindow.onMercuryReady();
        }
        return this.iframe.css({
          visibility: 'visible'
        });
      } catch (error1) {
        error = error1;
        return Mercury.notify('Mercury.PageEditor failed to load: %s\n\nPlease try refreshing.', error);
      }
    };

    PageEditor.prototype.initializeRegions = function() {
      var i, j, len, len1, ref, ref1, region, results;
      this.regions = [];
      ref = jQuery("[" + Mercury.config.regions.attribute + "]", this.document);
      for (i = 0, len = ref.length; i < len; i++) {
        region = ref[i];
        this.buildRegion(jQuery(region));
      }
      if (!this.visible) {
        return;
      }
      ref1 = this.regions;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        region = ref1[j];
        if (region.focus) {
          region.focus();
          break;
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    PageEditor.prototype.buildRegion = function(region) {
      var base, type;
      if (region.data('region')) {
        region = region.data('region');
      } else {
        type = (region.attr(Mercury.config.regions.attribute) || (typeof (base = Mercury.config.regions).determineType === "function" ? base.determineType(region) : void 0) || 'unknown').titleize();
        if (type === 'Unknown' || !Mercury.Regions[type]) {
          throw Mercury.I18n('Region type is malformed, no data-type provided, or "%s" is unknown for the "%s" region.', type, region.attr('id') || 'unknown');
        }
        if (!Mercury.Regions[type].supported) {
          Mercury.notify('Mercury.Regions.%s is unsupported in this client. Supported browsers are %s.', type, Mercury.Regions[type].supportedText);
          return false;
        }
        region = new Mercury.Regions[type](region, this.iframe.get(0).contentWindow);
        if (this.previewing) {
          region.togglePreview();
        }
      }
      return this.regions.push(region);
    };

    PageEditor.prototype.finalizeInterface = function() {
      var ref;
      this.santizerElement = jQuery('<div>', {
        id: 'mercury_sanitizer',
        contenteditable: 'true',
        style: 'position:fixed;width:100px;height:100px;min-width:0;top:0;left:-100px;opacity:0;overflow:hidden'
      });
      this.santizerElement.appendTo((ref = this.options.appendTo) != null ? ref : this.document.find('body'));
      if (this.snippetToolbar) {
        this.snippetToolbar.release();
      }
      this.snippetToolbar = new Mercury.SnippetToolbar(this.document);
      this.hijackLinksAndForms();
      if (!this.visible) {
        return Mercury.trigger('mode', {
          mode: 'preview'
        });
      }
    };

    PageEditor.prototype.bindDocumentEvents = function() {
      this.document.on('mousedown', function(event) {
        Mercury.trigger('hide:dialogs');
        if (Mercury.region) {
          if (jQuery(event.target).closest("[" + Mercury.config.regions.attribute + "]").get(0) !== Mercury.region.element.get(0)) {
            return Mercury.trigger('unfocus:regions');
          }
        }
      });
      return jQuery(this.document).bind('keydown', (function(_this) {
        return function(event) {
          if (!(event.ctrlKey || event.metaKey)) {
            return;
          }
          if (event.keyCode === 83) {
            Mercury.trigger('action', {
              action: 'save'
            });
            return event.preventDefault();
          }
        };
      })(this));
    };

    PageEditor.prototype.bindEvents = function() {
      Mercury.on('initialize:frame', (function(_this) {
        return function() {
          return setTimeout(_this.initializeFrame, 100);
        };
      })(this));
      Mercury.on('focus:frame', (function(_this) {
        return function() {
          return _this.iframe.focus();
        };
      })(this));
      Mercury.on('focus:window', (function(_this) {
        return function() {
          return setTimeout((function() {
            return _this.focusableElement.focus();
          }), 10);
        };
      })(this));
      Mercury.on('toggle:interface', (function(_this) {
        return function() {
          return _this.toggleInterface();
        };
      })(this));
      Mercury.on('reinitialize', (function(_this) {
        return function() {
          return _this.initializeRegions();
        };
      })(this));
      Mercury.on('mode', (function(_this) {
        return function(event, options) {
          if (options.mode === 'preview') {
            return _this.previewing = !_this.previewing;
          }
        };
      })(this));
      Mercury.on('action', (function(_this) {
        return function(event, options) {
          var action;
          action = Mercury.config.globalBehaviors[options.action] || _this[options.action];
          if (typeof action !== 'function') {
            return;
          }
          event.preventDefault();
          return action.call(_this, options);
        };
      })(this));
      jQuery(window).on('resize', (function(_this) {
        return function() {
          return _this.resize();
        };
      })(this));
      jQuery(window).bind('keydown', (function(_this) {
        return function(event) {
          if (!(event.ctrlKey || event.metaKey)) {
            return;
          }
          if (event.keyCode === 83) {
            Mercury.trigger('action', {
              action: 'save'
            });
            return event.preventDefault();
          }
        };
      })(this));
      return window.onbeforeunload = this.beforeUnload;
    };

    PageEditor.prototype.toggleInterface = function() {
      if (this.visible) {
        this.visible = false;
        this.toolbar.hide();
        this.statusbar.hide();
        if (!this.previewing) {
          Mercury.trigger('mode', {
            mode: 'preview'
          });
        }
        this.previewing = true;
        return this.resize();
      } else {
        this.visible = true;
        this.iframe.animate({
          top: this.toolbar.height(true)
        }, 200, 'easeInOutSine', (function(_this) {
          return function() {
            return _this.resize();
          };
        })(this));
        this.toolbar.show();
        this.statusbar.show();
        Mercury.trigger('mode', {
          mode: 'preview'
        });
        return this.previewing = false;
      }
    };

    PageEditor.prototype.resize = function() {
      var height, toolbarHeight, width;
      width = jQuery(window).width();
      height = this.statusbar.top();
      toolbarHeight = this.toolbar.top() + this.toolbar.height();
      Mercury.displayRect = {
        top: toolbarHeight,
        left: 0,
        width: width,
        height: height - toolbarHeight,
        fullHeight: height
      };
      this.iframe.css({
        top: toolbarHeight,
        left: 0,
        height: height - toolbarHeight
      });
      return Mercury.trigger('resize');
    };

    PageEditor.prototype.iframeSrc = function(url, params) {
      var base;
      if (url == null) {
        url = null;
      }
      if (params == null) {
        params = false;
      }
      url = (url != null ? url : window.location.href).replace((base = Mercury.config).editorUrlRegEx != null ? base.editorUrlRegEx : base.editorUrlRegEx = /([http|https]:\/\/.[^\/]*)\/editor\/?(.*)/i, "$1/$2");
      url = url.replace(/[\?|\&]mercury_frame=true/gi, '').replace(/\&_=\d+/gi, '').replace(/#$/, '');
      if (params) {
        return "" + url + (url.indexOf('?') > -1 ? '&' : '?') + "mercury_frame=true&_=" + (new Date().getTime());
      } else {
        return url;
      }
    };

    PageEditor.prototype.loadIframeSrc = function(url) {
      if (this.document) {
        this.document.off();
      }
      this.iframe.data('loaded', false);
      return this.iframe.get(0).contentWindow.document.location.href = this.iframeSrc(url, true);
    };

    PageEditor.prototype.hijackLinksAndForms = function() {
      var classname, element, i, ignored, j, len, len1, ref, ref1, results;
      ref = jQuery('a, form', this.document);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        element = ref[i];
        ignored = false;
        ref1 = Mercury.config.nonHijackableClasses || [];
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          classname = ref1[j];
          if (jQuery(element).hasClass(classname)) {
            ignored = true;
            continue;
          }
        }
        if (!ignored && (element.target === '' || element.target === '_self') && !jQuery(element).closest("[" + Mercury.config.regions.attribute + "]").length) {
          results.push(jQuery(element).attr('target', '_parent'));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    PageEditor.prototype.beforeUnload = function() {
      if (Mercury.changes && !Mercury.silent) {
        return Mercury.I18n('You have unsaved changes.  Are you sure you want to leave without saving them first?');
      }
      return null;
    };

    PageEditor.prototype.getRegionByName = function(id) {
      var i, len, ref, region;
      ref = this.regions;
      for (i = 0, len = ref.length; i < len; i++) {
        region = ref[i];
        if (region.name === id) {
          return region;
        }
      }
      return null;
    };

    PageEditor.prototype.save = function(callback) {
      var data, method, options, ref, ref1, url;
      url = (ref = (ref1 = this.saveUrl) != null ? ref1 : Mercury.saveUrl) != null ? ref : this.iframeSrc();
      data = this.serialize();
      data = {
        content: data
      };
      if (this.options.saveMethod === 'POST') {
        method = 'POST';
      } else {
        method = 'PUT';
        data['_method'] = method;
      }
      Mercury.log('saving', data);
      options = {
        headers: Mercury.ajaxHeaders(),
        type: method,
        dataType: this.options.saveDataType,
        data: data,
        success: (function(_this) {
          return function(response) {
            Mercury.changes = false;
            Mercury.trigger('saved', response);
            if (typeof callback === 'function') {
              return callback();
            }
          };
        })(this),
        error: (function(_this) {
          return function(response) {
            Mercury.trigger('save_failed', response);
            return Mercury.notify('Mercury was unable to save to the url: %s', url);
          };
        })(this)
      };
      if (this.options.saveStyle !== 'form') {
        options['data'] = jQuery.toJSON(data);
        options['contentType'] = 'application/json';
      }
      return jQuery.ajax(url, options);
    };

    PageEditor.prototype.serialize = function() {
      var i, len, ref, region, serialized;
      serialized = {};
      ref = this.regions;
      for (i = 0, len = ref.length; i < len; i++) {
        region = ref[i];
        serialized[region.name] = region.serialize();
      }
      return serialized;
    };

    return PageEditor;

  })();

}).call(this);
(function() {
  this.Mercury.HistoryBuffer = (function() {
    function HistoryBuffer(maxLength) {
      this.maxLength = maxLength != null ? maxLength : 200;
      this.index = 0;
      this.stack = [];
      this.markerRegExp = /<em class="mercury-marker"><\/em>/g;
    }

    HistoryBuffer.prototype.push = function(item) {
      if (jQuery.type(item) === 'string') {
        if (this.stack[this.index] && this.stack[this.index].replace(this.markerRegExp, '') === item.replace(this.markerRegExp, '')) {
          return;
        }
      } else if (jQuery.type(item) === 'object' && item.html) {
        if (this.stack[this.index] && this.stack[this.index].html === item.html) {
          return;
        }
      }
      this.stack = this.stack.slice(0, this.index + 1);
      this.stack.push(item);
      if (this.stack.length > this.maxLength) {
        this.stack.shift();
      }
      return this.index = this.stack.length - 1;
    };

    HistoryBuffer.prototype.undo = function() {
      if (this.index < 1) {
        return null;
      }
      this.index -= 1;
      return this.stack[this.index];
    };

    HistoryBuffer.prototype.redo = function() {
      if (this.index >= this.stack.length - 1) {
        return null;
      }
      this.index += 1;
      return this.stack[this.index];
    };

    return HistoryBuffer;

  })();

}).call(this);
(function() {
  this.Mercury.tableEditor = function(table, cell, cellContent) {
    Mercury.tableEditor.load(table, cell, cellContent);
    return Mercury.tableEditor;
  };

  jQuery.extend(Mercury.tableEditor, {
    load: function(table1, cell1, cellContent1) {
      this.table = table1;
      this.cell = cell1;
      this.cellContent = cellContent1 != null ? cellContent1 : '';
      this.row = this.cell.parent('tr');
      this.columnCount = this.getColumnCount();
      return this.rowCount = this.getRowCount();
    },
    addColumnBefore: function() {
      return this.addColumn('before');
    },
    addColumnAfter: function() {
      return this.addColumn('after');
    },
    addColumn: function(position) {
      var i, intersecting, j, len, matchOptions, matching, newCell, ref, results, row, rowSpan, sig;
      if (position == null) {
        position = 'after';
      }
      sig = this.cellSignatureFor(this.cell);
      ref = this.table.find('tr');
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        row = ref[i];
        rowSpan = 1;
        matchOptions = position === 'after' ? {
          right: sig.right
        } : {
          left: sig.left
        };
        if (matching = this.findCellByOptionsFor(row, matchOptions)) {
          newCell = jQuery("<" + (matching.cell.get(0).tagName) + ">").html(this.cellContent);
          this.setRowspanFor(newCell, matching.height);
          if (position === 'before') {
            matching.cell.before(newCell);
          } else {
            matching.cell.after(newCell);
          }
          results.push(i += matching.height - 1);
        } else if (intersecting = this.findCellByIntersectionFor(row, sig)) {
          results.push(this.setColspanFor(intersecting.cell, intersecting.width + 1));
        } else {
          results.push(void 0);
        }
      }
      return results;
    },
    removeColumn: function() {
      var adjusting, cell, i, intersecting, j, k, l, len, len1, len2, matching, ref, removing, results, row, sig;
      sig = this.cellSignatureFor(this.cell);
      if (sig.width > 1) {
        return;
      }
      removing = [];
      adjusting = [];
      ref = this.table.find('tr');
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        row = ref[i];
        if (matching = this.findCellByOptionsFor(row, {
          left: sig.left,
          width: sig.width
        })) {
          removing.push(matching.cell);
          i += matching.height - 1;
        } else if (intersecting = this.findCellByIntersectionFor(row, sig)) {
          adjusting.push(intersecting.cell);
        }
      }
      for (k = 0, len1 = removing.length; k < len1; k++) {
        cell = removing[k];
        jQuery(cell).remove();
      }
      results = [];
      for (l = 0, len2 = adjusting.length; l < len2; l++) {
        cell = adjusting[l];
        results.push(this.setColspanFor(cell, this.colspanFor(cell) - 1));
      }
      return results;
    },
    addRowBefore: function() {
      return this.addRow('before');
    },
    addRowAfter: function() {
      return this.addRow('after');
    },
    addRow: function(position) {
      var cell, cellCount, colspan, j, k, l, len, len1, len2, newCell, newRow, previousRow, ref, ref1, ref2, rowCount, rowspan;
      if (position == null) {
        position = 'after';
      }
      newRow = jQuery('<tr>');
      if ((rowspan = this.rowspanFor(this.cell)) > 1 && position === 'after') {
        this.row = jQuery(this.row.nextAll('tr')[rowspan - 2]);
      }
      cellCount = 0;
      ref = this.row.find('th, td');
      for (j = 0, len = ref.length; j < len; j++) {
        cell = ref[j];
        colspan = this.colspanFor(cell);
        newCell = jQuery("<" + cell.tagName + ">").html(this.cellContent);
        this.setColspanFor(newCell, colspan);
        cellCount += colspan;
        if ((rowspan = this.rowspanFor(cell)) > 1 && position === 'after') {
          this.setRowspanFor(cell, rowspan + 1);
          continue;
        }
        newRow.append(newCell);
      }
      if (cellCount < this.columnCount) {
        rowCount = 0;
        ref1 = this.row.prevAll('tr');
        for (k = 0, len1 = ref1.length; k < len1; k++) {
          previousRow = ref1[k];
          rowCount += 1;
          ref2 = jQuery(previousRow).find('td[rowspan], th[rowspan]');
          for (l = 0, len2 = ref2.length; l < len2; l++) {
            cell = ref2[l];
            rowspan = this.rowspanFor(cell);
            if (rowspan - 1 >= rowCount && position === 'before') {
              this.setRowspanFor(cell, rowspan + 1);
            } else if (rowspan - 1 >= rowCount && position === 'after') {
              if (rowspan - 1 === rowCount) {
                newCell = jQuery("<" + cell.tagName + ">").html(this.cellContent);
                this.setColspanFor(newCell, this.colspanFor(cell));
                newRow.append(newCell);
              } else {
                this.setRowspanFor(cell, rowspan + 1);
              }
            }
          }
        }
      }
      if (position === 'before') {
        return this.row.before(newRow);
      } else {
        return this.row.after(newRow);
      }
    },
    removeRow: function() {
      var aboveRow, cell, i, j, k, l, len, len1, len2, len3, m, match, minRowspan, n, prevRowspan, ref, ref1, ref2, ref3, ref4, rowsAbove, rowspan, rowspansMatch, sig;
      rowspansMatch = true;
      prevRowspan = 0;
      minRowspan = 0;
      ref = this.row.find('td, th');
      for (j = 0, len = ref.length; j < len; j++) {
        cell = ref[j];
        rowspan = this.rowspanFor(cell);
        if (prevRowspan && rowspan !== prevRowspan) {
          rowspansMatch = false;
        }
        if (rowspan < minRowspan || !minRowspan) {
          minRowspan = rowspan;
        }
        prevRowspan = rowspan;
      }
      if (!rowspansMatch && this.rowspanFor(this.cell) > minRowspan) {
        return;
      }
      if (minRowspan > 1) {
        for (i = k = 0, ref1 = minRowspan - 2; 0 <= ref1 ? k <= ref1 : k >= ref1; i = 0 <= ref1 ? ++k : --k) {
          jQuery(this.row.nextAll('tr')[i]).remove();
        }
      }
      ref2 = this.row.find('td[rowspan], th[rowspan]');
      for (l = 0, len1 = ref2.length; l < len1; l++) {
        cell = ref2[l];
        sig = this.cellSignatureFor(cell);
        if (sig.height === minRowspan) {
          continue;
        }
        if (match = this.findCellByOptionsFor(this.row.nextAll('tr')[minRowspan - 1], {
          left: sig.left,
          forceAdjacent: true
        })) {
          this.setRowspanFor(cell, this.rowspanFor(cell) - this.rowspanFor(this.cell));
          if (match.direction === 'before') {
            match.cell.before(jQuery(cell).clone());
          } else {
            match.cell.after(jQuery(cell).clone());
          }
        }
      }
      if (this.columnsFor(this.row.find('td, th')) < this.columnCount) {
        rowsAbove = 0;
        ref3 = this.row.prevAll('tr');
        for (m = 0, len2 = ref3.length; m < len2; m++) {
          aboveRow = ref3[m];
          rowsAbove += 1;
          ref4 = jQuery(aboveRow).find('td[rowspan], th[rowspan]');
          for (n = 0, len3 = ref4.length; n < len3; n++) {
            cell = ref4[n];
            rowspan = this.rowspanFor(cell);
            if (rowspan > rowsAbove) {
              this.setRowspanFor(cell, rowspan - this.rowspanFor(this.cell));
            }
          }
        }
      }
      return this.row.remove();
    },
    increaseColspan: function() {
      var cell;
      cell = this.cell.next('td, th');
      if (!cell.length) {
        return;
      }
      if (this.rowspanFor(cell) !== this.rowspanFor(this.cell)) {
        return;
      }
      if (this.cellIndexFor(cell) > this.cellIndexFor(this.cell) + this.colspanFor(this.cell)) {
        return;
      }
      this.setColspanFor(this.cell, this.colspanFor(this.cell) + this.colspanFor(cell));
      return cell.remove();
    },
    decreaseColspan: function() {
      var newCell;
      if (this.colspanFor(this.cell) === 1) {
        return;
      }
      this.setColspanFor(this.cell, this.colspanFor(this.cell) - 1);
      newCell = jQuery("<" + (this.cell.get(0).tagName) + ">").html(this.cellContent);
      this.setRowspanFor(newCell, this.rowspanFor(this.cell));
      return this.cell.after(newCell);
    },
    increaseRowspan: function() {
      var match, nextRow, sig;
      sig = this.cellSignatureFor(this.cell);
      nextRow = this.row.nextAll('tr')[sig.height - 1];
      if (nextRow && (match = this.findCellByOptionsFor(nextRow, {
        left: sig.left,
        width: sig.width
      }))) {
        this.setRowspanFor(this.cell, sig.height + match.height);
        return match.cell.remove();
      }
    },
    decreaseRowspan: function() {
      var match, newCell, nextRow, sig;
      sig = this.cellSignatureFor(this.cell);
      if (sig.height === 1) {
        return;
      }
      nextRow = this.row.nextAll('tr')[sig.height - 2];
      if (match = this.findCellByOptionsFor(nextRow, {
        left: sig.left,
        forceAdjacent: true
      })) {
        newCell = jQuery("<" + (this.cell.get(0).tagName) + ">").html(this.cellContent);
        this.setColspanFor(newCell, this.colspanFor(this.cell));
        this.setRowspanFor(this.cell, sig.height - 1);
        if (match.direction === 'before') {
          return match.cell.before(newCell);
        } else {
          return match.cell.after(newCell);
        }
      }
    },
    getColumnCount: function() {
      return this.columnsFor(this.table.find('thead tr:first-child, tbody tr:first-child, tfoot tr:first-child').first().find('td, th'));
    },
    getRowCount: function() {
      return this.table.find('tr').length;
    },
    cellIndexFor: function(cell) {
      var aboveCell, aboveRow, columns, index, j, k, len, len1, ref, ref1, row, rowsAbove;
      cell = jQuery(cell);
      row = cell.parent('tr');
      columns = this.columnsFor(row.find('td, th'));
      index = this.columnsFor(cell.prevAll('td, th'));
      if (columns < this.columnCount) {
        rowsAbove = 0;
        ref = row.prevAll('tr');
        for (j = 0, len = ref.length; j < len; j++) {
          aboveRow = ref[j];
          rowsAbove += 1;
          ref1 = jQuery(aboveRow).find('td[rowspan], th[rowspan]');
          for (k = 0, len1 = ref1.length; k < len1; k++) {
            aboveCell = ref1[k];
            if (this.rowspanFor(aboveCell) > rowsAbove && this.cellIndexFor(aboveCell) <= index) {
              index += this.colspanFor(aboveCell);
            }
          }
        }
      }
      return index;
    },
    cellSignatureFor: function(cell) {
      var sig;
      sig = {
        cell: jQuery(cell)
      };
      sig.left = this.cellIndexFor(cell);
      sig.width = this.colspanFor(cell);
      sig.height = this.rowspanFor(cell);
      sig.right = sig.left + sig.width;
      return sig;
    },
    findCellByOptionsFor: function(row, options) {
      var cell, j, len, prev, ref, sig;
      ref = jQuery(row).find('td, th');
      for (j = 0, len = ref.length; j < len; j++) {
        cell = ref[j];
        sig = this.cellSignatureFor(cell);
        if (typeof options.right !== 'undefined') {
          if (sig.right === options.right) {
            return sig;
          }
        }
        if (typeof options.left !== 'undefined') {
          if (options.width) {
            if (sig.left === options.left && sig.width === options.width) {
              return sig;
            }
          } else if (!options.forceAdjacent) {
            if (sig.left === options.left) {
              return sig;
            }
          } else if (options.forceAdjacent) {
            if (sig.left > options.left) {
              prev = jQuery(cell).prev('td, th');
              if (prev.length) {
                sig = this.cellSignatureFor(prev);
                sig.direction = 'after';
              } else {
                sig.direction = 'before';
              }
              return sig;
            }
          }
        }
      }
      if (options.forceAdjacent) {
        sig.direction = 'after';
        return sig;
      }
      return null;
    },
    findCellByIntersectionFor: function(row, signature) {
      var cell, j, len, ref, sig;
      ref = jQuery(row).find('td, th');
      for (j = 0, len = ref.length; j < len; j++) {
        cell = ref[j];
        sig = this.cellSignatureFor(cell);
        if (sig.right - signature.left >= 0 && sig.right > signature.left) {
          return sig;
        }
      }
      return null;
    },
    columnsFor: function(cells) {
      var cell, count, j, len;
      count = 0;
      for (j = 0, len = cells.length; j < len; j++) {
        cell = cells[j];
        count += this.colspanFor(cell);
      }
      return count;
    },
    colspanFor: function(cell) {
      return parseInt(jQuery(cell).attr('colspan')) || 1;
    },
    rowspanFor: function(cell) {
      return parseInt(jQuery(cell).attr('rowspan')) || 1;
    },
    setColspanFor: function(cell, value) {
      return jQuery(cell).attr('colspan', value > 1 ? value : null);
    },
    setRowspanFor: function(cell, value) {
      return jQuery(cell).attr('rowspan', value > 1 ? value : null);
    }
  });

}).call(this);
(function() {
  this.Mercury.Dialog = (function() {
    function Dialog(url, name, options) {
      this.url = url;
      this.name = name;
      this.options = options != null ? options : {};
      this.button = this.options["for"];
      this.build();
      this.bindEvents();
      this.preload();
    }

    Dialog.prototype.build = function() {
      var ref;
      this.element = jQuery('<div>', {
        "class": "mercury-dialog mercury-" + this.name + "-dialog loading",
        style: 'display:none'
      });
      return this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
    };

    Dialog.prototype.bindEvents = function() {
      return this.element.on('mousedown', function(event) {
        return event.stopPropagation();
      });
    };

    Dialog.prototype.preload = function() {
      if (this.options.preload) {
        return this.load();
      }
    };

    Dialog.prototype.toggle = function() {
      if (this.visible) {
        return this.hide();
      } else {
        return this.show();
      }
    };

    Dialog.prototype.resize = function() {
      return this.show();
    };

    Dialog.prototype.show = function() {
      Mercury.trigger('hide:dialogs', this);
      this.visible = true;
      if (this.loaded) {
        this.element.css({
          width: 'auto',
          height: 'auto'
        });
        this.position(this.visible);
      } else {
        this.position();
      }
      return this.appear();
    };

    Dialog.prototype.position = function(keepVisible) {};

    Dialog.prototype.appear = function() {
      this.element.css({
        display: 'block',
        opacity: 0
      });
      return this.element.animate({
        opacity: 0.95
      }, 200, 'easeInOutSine', (function(_this) {
        return function() {
          if (!_this.loaded) {
            return _this.load(function() {
              return _this.resize();
            });
          }
        };
      })(this));
    };

    Dialog.prototype.hide = function() {
      this.element.hide();
      return this.visible = false;
    };

    Dialog.prototype.load = function(callback) {
      if (!this.url) {
        return;
      }
      if (Mercury.preloadedViews[this.url]) {
        this.loadContent(Mercury.preloadedViews[this.url]);
        if (Mercury.dialogHandlers[this.name]) {
          Mercury.dialogHandlers[this.name].call(this);
        }
        if (callback) {
          return callback();
        }
      } else {
        return jQuery.ajax(this.url, {
          success: (function(_this) {
            return function(data) {
              _this.loadContent(data);
              if (Mercury.dialogHandlers[_this.name]) {
                Mercury.dialogHandlers[_this.name].call(_this);
              }
              if (callback) {
                return callback();
              }
            };
          })(this),
          error: (function(_this) {
            return function() {
              _this.hide();
              if (_this.button) {
                _this.button.removeClass('pressed');
              }
              return Mercury.notify('Mercury was unable to load %s for the "%s" dialog.', _this.url, _this.name);
            };
          })(this)
        });
      }
    };

    Dialog.prototype.loadContent = function(data) {
      this.loaded = true;
      this.element.removeClass('loading');
      this.element.html(data);
      if (Mercury.config.localization.enabled) {
        return this.element.localize(Mercury.locale());
      }
    };

    return Dialog;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Mercury.Palette = (function(superClass) {
    extend(Palette, superClass);

    function Palette(url, name, options) {
      this.url = url;
      this.name = name;
      this.options = options != null ? options : {};
      Palette.__super__.constructor.apply(this, arguments);
    }

    Palette.prototype.build = function() {
      var ref;
      this.element = jQuery('<div>', {
        "class": "mercury-palette mercury-" + this.name + "-palette loading",
        style: 'display:none'
      });
      return this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
    };

    Palette.prototype.bindEvents = function() {
      Mercury.on('hide:dialogs', (function(_this) {
        return function(event, dialog) {
          if (dialog !== _this) {
            return _this.hide();
          }
        };
      })(this));
      return Palette.__super__.bindEvents.apply(this, arguments);
    };

    Palette.prototype.position = function(keepVisible) {
      var position, width;
      this.element.css({
        top: 0,
        left: 0,
        display: 'block',
        visibility: 'hidden'
      });
      position = this.button.position();
      width = this.element.width();
      if (position.left + width > jQuery(window).width()) {
        position.left = position.left - width + this.button.width();
      }
      return this.element.css({
        top: position.top + this.button.height(),
        left: position.left,
        display: keepVisible ? 'block' : 'none',
        visibility: 'visible'
      });
    };

    return Palette;

  })(Mercury.Dialog);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Mercury.Select = (function(superClass) {
    extend(Select, superClass);

    function Select(url, name, options) {
      this.url = url;
      this.name = name;
      this.options = options != null ? options : {};
      Select.__super__.constructor.apply(this, arguments);
    }

    Select.prototype.build = function() {
      var ref;
      this.element = jQuery('<div>', {
        "class": "mercury-select mercury-" + this.name + "-select loading",
        style: 'display:none'
      });
      return this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
    };

    Select.prototype.bindEvents = function() {
      Mercury.on('hide:dialogs', (function(_this) {
        return function(event, dialog) {
          if (dialog !== _this) {
            return _this.hide();
          }
        };
      })(this));
      this.element.on('mousedown', (function(_this) {
        return function(event) {
          return event.preventDefault();
        };
      })(this));
      return Select.__super__.bindEvents.apply(this, arguments);
    };

    Select.prototype.position = function(keepVisible) {
      var documentHeight, elementHeight, elementWidth, height, left, position, top;
      this.element.css({
        top: 0,
        left: 0,
        display: 'block',
        visibility: 'hidden'
      });
      position = this.button.position();
      elementWidth = this.element.width();
      elementHeight = this.element.height();
      documentHeight = jQuery(document).height();
      top = position.top + (this.button.height() / 2) - (elementHeight / 2);
      if (top < position.top - 100) {
        top = position.top - 100;
      }
      if (top < 20) {
        top = 20;
      }
      height = this.loaded ? 'auto' : elementHeight;
      if (top + elementHeight >= documentHeight - 20) {
        height = documentHeight - top - 20;
      }
      left = position.left;
      if (left + elementWidth > jQuery(window).width()) {
        left = left - elementWidth + this.button.width();
      }
      return this.element.css({
        top: top,
        left: left,
        height: height,
        display: keepVisible ? 'block' : 'none',
        visibility: 'visible'
      });
    };

    return Select;

  })(Mercury.Dialog);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Mercury.Panel = (function(superClass) {
    extend(Panel, superClass);

    function Panel(url, name, options1) {
      this.url = url;
      this.name = name;
      this.options = options1 != null ? options1 : {};
      Panel.__super__.constructor.apply(this, arguments);
    }

    Panel.prototype.build = function() {
      var ref;
      this.element = jQuery('<div>', {
        "class": 'mercury-panel loading',
        style: 'display:none;'
      });
      this.titleElement = jQuery("<h1><span>" + (Mercury.I18n(this.options.title)) + "</span></h1>").appendTo(this.element);
      this.paneElement = jQuery('<div>', {
        "class": 'mercury-panel-pane'
      }).appendTo(this.element);
      if (this.options.closeButton) {
        jQuery('<a/>', {
          "class": 'mercury-panel-close'
        }).appendTo(this.titleElement).css({
          opacity: 0
        });
      }
      return this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
    };

    Panel.prototype.bindEvents = function() {
      Mercury.on('resize', (function(_this) {
        return function() {
          return _this.position(_this.visible);
        };
      })(this));
      Mercury.on('hide:panels', (function(_this) {
        return function(event, panel) {
          if (panel === _this) {
            return;
          }
          _this.button.removeClass('pressed');
          return _this.hide();
        };
      })(this));
      this.titleElement.find('.mercury-panel-close').on('click', function(event) {
        event.preventDefault();
        return Mercury.trigger('hide:panels');
      });
      this.element.on('mousedown', function(event) {
        return event.stopPropagation();
      });
      this.element.on('ajax:beforeSend', (function(_this) {
        return function(event, xhr, options) {
          return options.success = function(content) {
            _this.loadContent(content);
            return _this.resize();
          };
        };
      })(this));
      return Panel.__super__.bindEvents.apply(this, arguments);
    };

    Panel.prototype.show = function() {
      Mercury.trigger('hide:panels', this);
      return Panel.__super__.show.apply(this, arguments);
    };

    Panel.prototype.resize = function() {
      var position, postWidth, preWidth;
      this.titleElement.find('.mercury-panel-close').css({
        opacity: 0
      });
      this.paneElement.css({
        display: 'none'
      });
      preWidth = this.element.width();
      this.paneElement.css({
        visibility: 'hidden',
        width: 'auto',
        display: 'block'
      });
      postWidth = this.element.width();
      this.paneElement.css({
        visibility: 'visible',
        display: 'none'
      });
      position = this.element.offset();
      this.element.animate({
        left: position.left - (postWidth - preWidth),
        width: postWidth
      }, 200, 'easeInOutSine', (function(_this) {
        return function() {
          _this.titleElement.find('.mercury-panel-close').animate({
            opacity: 1
          }, 100);
          _this.paneElement.css({
            display: 'block',
            width: postWidth
          });
          jQuery(_this.paneElement.find('.focusable').get(0)).focus();
          return _this.makeDraggable();
        };
      })(this));
      if (!this.visible) {
        return this.hide();
      }
    };

    Panel.prototype.position = function(keepVisible) {
      var elementWidth, height, left, offset, paneHeight;
      this.element.css({
        display: 'block',
        visibility: 'hidden'
      });
      offset = this.element.offset();
      elementWidth = this.element.width();
      height = Mercury.displayRect.height - 16;
      paneHeight = height - this.titleElement.outerHeight();
      this.paneElement.css({
        height: paneHeight,
        overflowY: paneHeight < 30 ? 'hidden' : 'auto'
      });
      if (!this.moved) {
        left = Mercury.displayRect.width - elementWidth - 20;
      }
      if (left <= 8) {
        left = 8;
      }
      if (this.pinned || elementWidth + offset.left > Mercury.displayRect.width - 20) {
        left = Mercury.displayRect.width - elementWidth - 20;
      }
      this.element.css({
        top: Mercury.displayRect.top + 8,
        left: left,
        height: height,
        display: keepVisible ? 'block' : 'none',
        visibility: 'visible'
      });
      this.makeDraggable();
      if (!keepVisible) {
        return this.element.hide();
      }
    };

    Panel.prototype.loadContent = function(data) {
      this.loaded = true;
      this.element.removeClass('loading');
      this.paneElement.css({
        visibility: 'hidden'
      });
      this.paneElement.html(data);
      if (Mercury.config.localization.enabled) {
        return this.paneElement.localize(Mercury.locale());
      }
    };

    Panel.prototype.makeDraggable = function() {
      var elementWidth;
      elementWidth = this.element.width();
      return this.element.draggable({
        handle: 'h1 span',
        axis: 'x',
        opacity: 0.70,
        scroll: false,
        addClasses: false,
        iframeFix: true,
        containment: [8, 0, Mercury.displayRect.width - elementWidth - 20, 0],
        stop: (function(_this) {
          return function() {
            var left;
            left = _this.element.offset().left;
            _this.moved = true;
            _this.pinned = left > Mercury.displayRect.width - elementWidth - 30 ? true : false;
            return true;
          };
        })(this)
      });
    };

    return Panel;

  })(Mercury.Dialog);

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Mercury.modal = function(url, options) {
    var instance;
    if (options == null) {
      options = {};
    }
    instance = new Mercury.Modal(url, options);
    instance.show();
    return instance;
  };

  this.Mercury.Modal = (function() {
    function Modal(url1, options1) {
      this.url = url1;
      this.options = options1 != null ? options1 : {};
      this.hide = bind(this.hide, this);
    }

    Modal.prototype.show = function(url, options) {
      var base;
      if (url == null) {
        url = null;
      }
      if (options == null) {
        options = null;
      }
      this.url = url || this.url;
      this.options = options || this.options;
      (base = this.options).minWidth || (base.minWidth = 400);
      if (this.options.ujsHandling !== false) {
        this.options.ujsHandling = true;
      }
      Mercury.trigger('focus:window');
      this.initializeModal();
      if (this.visible) {
        this.update();
      } else {
        this.appear();
      }
      if (this.options.content) {
        return setTimeout(((function(_this) {
          return function() {
            return _this.loadContent(_this.options.content);
          };
        })(this)), 500);
      }
    };

    Modal.prototype.initializeModal = function() {
      if (this.initialized) {
        return;
      }
      this.build();
      this.bindEvents();
      return this.initialized = true;
    };

    Modal.prototype.build = function() {
      var ref, ref1;
      this.element = jQuery('.mercury-modal');
      this.overlay = jQuery('.mercury-modal-overlay');
      if (!(this.element.get(0) && this.overlay.get(0))) {
        this.element = jQuery('<div>', {
          "class": 'mercury-modal loading'
        });
        this.element.html('<h1 class="mercury-modal-title"><span></span><a>&times;</a></h1>');
        this.element.append('<div class="mercury-modal-content-container"><div class="mercury-modal-content"></div></div>');
        this.overlay = jQuery('<div>', {
          "class": 'mercury-modal-overlay'
        });
        this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
        this.overlay.appendTo((ref1 = jQuery(this.options.appendTo).get(0)) != null ? ref1 : 'body');
      }
      this.titleElement = this.element.find('.mercury-modal-title');
      this.contentContainerElement = this.element.find('.mercury-modal-content-container');
      return this.contentElement = this.element.find('.mercury-modal-content');
    };

    Modal.prototype.bindEvents = function() {
      Mercury.on('refresh', (function(_this) {
        return function() {
          return _this.resize(true);
        };
      })(this));
      Mercury.on('resize', (function(_this) {
        return function() {
          return _this.position();
        };
      })(this));
      this.overlay.on('click', (function(_this) {
        return function() {
          if (_this.options.allowHideUsingOverlay) {
            return _this.hide();
          }
        };
      })(this));
      this.titleElement.find('a').on('click', (function(_this) {
        return function() {
          return _this.hide();
        };
      })(this));
      if (this.options.ujsHandling) {
        this.element.on('ajax:beforeSend', (function(_this) {
          return function(event, xhr, options) {
            return options.success = function(content) {
              return _this.loadContent(content);
            };
          };
        })(this));
      }
      return jQuery(document).on('keydown', (function(_this) {
        return function(event) {
          if (event.keyCode === 27 && _this.visible) {
            return _this.hide();
          }
        };
      })(this));
    };

    Modal.prototype.appear = function() {
      this.showing = true;
      this.position();
      this.overlay.show();
      return this.overlay.animate({
        opacity: 1
      }, 200, 'easeInOutSine', (function(_this) {
        return function() {
          _this.element.css({
            top: -_this.element.height()
          });
          _this.setTitle();
          _this.element.show();
          return _this.element.animate({
            top: 0
          }, 200, 'easeInOutSine', function() {
            _this.visible = true;
            _this.showing = false;
            return _this.load();
          });
        };
      })(this));
    };

    Modal.prototype.resize = function(keepVisible) {
      var height, titleHeight, visibility, width;
      visibility = keepVisible ? 'visible' : 'hidden';
      titleHeight = this.titleElement.outerHeight();
      width = this.contentElement.outerWidth();
      if (this.contentPane) {
        this.contentPane.css({
          height: 'auto'
        });
      }
      this.contentElement.css({
        height: 'auto',
        visibility: visibility,
        display: 'block'
      });
      height = this.contentElement.outerHeight() + titleHeight;
      if (width < this.options.minWidth) {
        width = this.options.minWidth;
      }
      if (height > Mercury.displayRect.fullHeight || this.options.fullHeight) {
        height = Mercury.displayRect.fullHeight;
      }
      return this.element.stop().animate({
        left: (Mercury.displayRect.width - width) / 2,
        width: width,
        height: height
      }, 200, 'easeInOutSine', (function(_this) {
        return function() {
          var controlHeight;
          _this.contentElement.css({
            visibility: 'visible',
            display: 'block'
          });
          if (_this.contentPane.length) {
            _this.contentElement.css({
              height: height - titleHeight,
              overflow: 'visible'
            });
            controlHeight = _this.contentControl.length ? _this.contentControl.outerHeight() + 10 : 0;
            _this.contentPane.css({
              height: height - titleHeight - controlHeight - 20
            });
            return _this.contentPane.find('.mercury-display-pane').css({
              width: width - 20
            });
          } else {
            return _this.contentElement.css({
              height: height - titleHeight,
              overflow: 'auto'
            });
          }
        };
      })(this));
    };

    Modal.prototype.position = function() {
      var controlHeight, height, titleHeight, viewportWidth, width;
      viewportWidth = Mercury.displayRect.width;
      if (this.contentPane) {
        this.contentPane.css({
          height: 'auto'
        });
      }
      this.contentElement.css({
        height: 'auto'
      });
      this.element.css({
        width: 'auto',
        height: 'auto',
        display: 'block',
        visibility: 'hidden'
      });
      width = this.element.width();
      height = this.element.height();
      if (width < this.options.minWidth) {
        width = this.options.minWidth;
      }
      if (height > Mercury.displayRect.fullHeight || this.options.fullHeight) {
        height = Mercury.displayRect.fullHeight;
      }
      titleHeight = this.titleElement.outerHeight();
      if (this.contentPane && this.contentPane.length) {
        this.contentElement.css({
          height: height - titleHeight,
          overflow: 'visible'
        });
        controlHeight = this.contentControl.length ? this.contentControl.outerHeight() + 10 : 0;
        this.contentPane.css({
          height: height - titleHeight - controlHeight - 20
        });
        this.contentPane.find('.mercury-display-pane').css({
          width: width - 20
        });
      } else {
        this.contentElement.css({
          height: height - titleHeight,
          overflow: 'auto'
        });
      }
      return this.element.css({
        left: (viewportWidth - width) / 2,
        width: width,
        height: height,
        display: this.visible ? 'block' : 'none',
        visibility: 'visible'
      });
    };

    Modal.prototype.update = function() {
      this.reset();
      this.resize();
      return this.load();
    };

    Modal.prototype.load = function() {
      this.setTitle();
      if (!this.url) {
        return;
      }
      this.element.addClass('loading');
      if (Mercury.preloadedViews[this.url]) {
        return setTimeout(((function(_this) {
          return function() {
            return _this.loadContent(Mercury.preloadedViews[_this.url]);
          };
        })(this)), 10);
      } else {
        return jQuery.ajax(this.url, {
          headers: Mercury.ajaxHeaders(),
          type: this.options.loadType || 'GET',
          data: this.options.loadData,
          success: (function(_this) {
            return function(data) {
              return _this.loadContent(data);
            };
          })(this),
          error: (function(_this) {
            return function() {
              _this.hide();
              return Mercury.notify("Mercury was unable to load %s for the modal.", _this.url);
            };
          })(this)
        });
      }
    };

    Modal.prototype.loadContent = function(data, options) {
      if (options == null) {
        options = null;
      }
      this.initializeModal();
      this.options = options || this.options;
      this.setTitle();
      this.loaded = true;
      this.element.removeClass('loading');
      this.contentElement.html(data);
      this.contentElement.css({
        display: 'none',
        visibility: 'hidden'
      });
      this.contentPane = this.element.find('.mercury-display-pane-container');
      this.contentControl = this.element.find('.mercury-display-controls');
      if (this.options.afterLoad) {
        this.options.afterLoad.call(this);
      }
      if (this.options.handler) {
        if (Mercury.modalHandlers[this.options.handler]) {
          if (typeof Mercury.modalHandlers[this.options.handler] === 'function') {
            Mercury.modalHandlers[this.options.handler].call(this);
          } else {
            jQuery.extend(this, Mercury.modalHandlers[this.options.handler]);
            this.initialize();
          }
        } else if (Mercury.lightviewHandlers[this.options.handler]) {
          if (typeof Mercury.lightviewHandlers[this.options.handler] === 'function') {
            Mercury.lightviewHandlers[this.options.handler].call(this);
          } else {
            jQuery.extend(this, Mercury.lightviewHandlers[this.options.handler]);
            this.initialize();
          }
        }
      }
      if (Mercury.config.localization.enabled) {
        this.element.localize(Mercury.locale());
      }
      this.element.find('.modal-close').on('click', this.hide);
      return this.resize();
    };

    Modal.prototype.setTitle = function() {
      var closeButton;
      this.titleElement.find('span').html(Mercury.I18n(this.options.title));
      closeButton = this.titleElement.find('a');
      if (this.options.closeButton === false) {
        return closeButton.hide();
      } else {
        return closeButton.show();
      }
    };

    Modal.prototype.serializeForm = function() {
      return this.element.find('form').serializeObject() || {};
    };

    Modal.prototype.reset = function() {
      this.titleElement.find('span').html('');
      return this.contentElement.html('');
    };

    Modal.prototype.hide = function() {
      if (this.showing) {
        return;
      }
      this.options = {};
      Mercury.trigger('focus:frame');
      this.element.hide();
      this.overlay.hide();
      this.reset();
      return this.visible = false;
    };

    return Modal;

  })();

}).call(this);
(function() {
  var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Mercury.lightview = function(url, options) {
    var base;
    if (options == null) {
      options = {};
    }
    (base = Mercury.lightview).instance || (base.instance = new Mercury.Lightview(url, options));
    Mercury.lightview.instance.show(url, options);
    return Mercury.lightview.instance;
  };

  this.Mercury.Lightview = (function() {
    function Lightview(url1, options1) {
      this.url = url1;
      this.options = options1 != null ? options1 : {};
      this.hide = bind(this.hide, this);
    }

    Lightview.prototype.show = function(url, options) {
      this.url = url || this.url;
      this.options = options || this.options;
      if (this.options.ujsHandling !== false) {
        this.options.ujsHandling = true;
      }
      Mercury.trigger('focus:window');
      this.initializeLightview();
      if (this.visible) {
        this.update();
      } else {
        this.appear();
      }
      if (this.options.content) {
        return setTimeout(((function(_this) {
          return function() {
            return _this.loadContent(_this.options.content);
          };
        })(this)), 500);
      }
    };

    Lightview.prototype.initializeLightview = function() {
      if (this.initialized) {
        return;
      }
      this.build();
      this.bindEvents();
      return this.initialized = true;
    };

    Lightview.prototype.build = function() {
      var ref, ref1;
      this.element = jQuery('<div>', {
        "class": 'mercury-lightview loading'
      });
      this.element.html('<h1 class="mercury-lightview-title"><span></span></h1>');
      this.element.append('<div class="mercury-lightview-content"></div>');
      this.overlay = jQuery('<div>', {
        "class": 'mercury-lightview-overlay'
      });
      this.titleElement = this.element.find('.mercury-lightview-title');
      if (this.options.closeButton) {
        this.titleElement.append('<a class="mercury-lightview-close"></a>');
      }
      this.contentElement = this.element.find('.mercury-lightview-content');
      this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
      return this.overlay.appendTo((ref1 = jQuery(this.options.appendTo).get(0)) != null ? ref1 : 'body');
    };

    Lightview.prototype.bindEvents = function() {
      Mercury.on('refresh', (function(_this) {
        return function() {
          return _this.resize(true);
        };
      })(this));
      Mercury.on('resize', (function(_this) {
        return function() {
          if (_this.visible) {
            return _this.position();
          }
        };
      })(this));
      this.overlay.on('click', (function(_this) {
        return function() {
          if (!_this.options.closeButton) {
            return _this.hide();
          }
        };
      })(this));
      this.titleElement.find('.mercury-lightview-close').on('click', (function(_this) {
        return function() {
          return _this.hide();
        };
      })(this));
      if (this.options.ujsHandling) {
        this.element.on('ajax:beforeSend', (function(_this) {
          return function(event, xhr, options) {
            return options.success = function(content) {
              return _this.loadContent(content);
            };
          };
        })(this));
      }
      return jQuery(document).on('keydown', (function(_this) {
        return function(event) {
          if (event.keyCode === 27 && _this.visible) {
            return _this.hide();
          }
        };
      })(this));
    };

    Lightview.prototype.appear = function() {
      this.showing = true;
      this.position();
      this.overlay.show().css({
        opacity: 0
      });
      return this.overlay.animate({
        opacity: 1
      }, 200, 'easeInOutSine', (function(_this) {
        return function() {
          _this.setTitle();
          _this.element.show().css({
            opacity: 0
          });
          return _this.element.stop().animate({
            opacity: 1
          }, 200, 'easeInOutSine', function() {
            _this.visible = true;
            _this.showing = false;
            return _this.load();
          });
        };
      })(this));
    };

    Lightview.prototype.resize = function(keepVisible) {
      var height, titleHeight, viewportHeight, viewportWidth, visibility, width;
      visibility = keepVisible ? 'visible' : 'hidden';
      viewportWidth = Mercury.displayRect.width;
      viewportHeight = Mercury.displayRect.fullHeight;
      titleHeight = this.titleElement.outerHeight();
      width = this.contentElement.outerWidth();
      if (width > viewportWidth - 40 || this.options.fullSize) {
        width = viewportWidth - 40;
      }
      if (this.contentPane) {
        this.contentPane.css({
          height: 'auto'
        });
      }
      this.contentElement.css({
        height: 'auto',
        visibility: visibility,
        display: 'block'
      });
      height = this.contentElement.outerHeight() + titleHeight;
      if (height > viewportHeight - 20 || this.options.fullSize) {
        height = viewportHeight - 20;
      }
      if (width < 300) {
        width = 300;
      }
      if (height < 150) {
        height = 150;
      }
      return this.element.stop().animate({
        top: ((viewportHeight - height) / 2) + 10,
        left: (Mercury.displayRect.width - width) / 2,
        width: width,
        height: height
      }, 200, 'easeInOutSine', (function(_this) {
        return function() {
          var controlHeight;
          _this.contentElement.css({
            visibility: 'visible',
            display: 'block'
          });
          if (_this.contentPane.length) {
            _this.contentElement.css({
              height: height - titleHeight,
              overflow: 'visible'
            });
            controlHeight = _this.contentControl.length ? _this.contentControl.outerHeight() : 0;
            _this.contentPane.css({
              height: height - titleHeight - controlHeight - 40
            });
            return _this.contentPane.find('.mercury-display-pane').css({
              width: width - 40
            });
          } else {
            return _this.contentElement.css({
              height: height - titleHeight - 30,
              overflow: 'auto'
            });
          }
        };
      })(this));
    };

    Lightview.prototype.position = function() {
      var controlHeight, height, titleHeight, viewportHeight, viewportWidth, width;
      viewportWidth = Mercury.displayRect.width;
      viewportHeight = Mercury.displayRect.fullHeight;
      if (this.contentPane) {
        this.contentPane.css({
          height: 'auto'
        });
      }
      this.contentElement.css({
        height: 'auto'
      });
      this.element.css({
        width: 'auto',
        height: 'auto',
        display: 'block',
        visibility: 'hidden'
      });
      width = this.contentElement.width() + 40;
      height = this.contentElement.height() + this.titleElement.outerHeight() + 30;
      if (width > viewportWidth - 40 || this.options.fullSize) {
        width = viewportWidth - 40;
      }
      if (height > viewportHeight - 20 || this.options.fullSize) {
        height = viewportHeight - 20;
      }
      if (width < 300) {
        width = 300;
      }
      if (height < 150) {
        height = 150;
      }
      titleHeight = this.titleElement.outerHeight();
      if (this.contentPane && this.contentPane.length) {
        this.contentElement.css({
          height: height - titleHeight,
          overflow: 'visible'
        });
        controlHeight = this.contentControl.length ? this.contentControl.outerHeight() : 0;
        this.contentPane.css({
          height: height - titleHeight - controlHeight - 40
        });
        this.contentPane.find('.mercury-display-pane').css({
          width: width - 40
        });
      } else {
        this.contentElement.css({
          height: height - titleHeight - 30,
          overflow: 'auto'
        });
      }
      return this.element.css({
        top: ((viewportHeight - height) / 2) + 10,
        left: (viewportWidth - width) / 2,
        width: width,
        height: height,
        display: this.visible ? 'block' : 'none',
        visibility: 'visible'
      });
    };

    Lightview.prototype.update = function() {
      this.reset();
      this.resize();
      return this.load();
    };

    Lightview.prototype.load = function() {
      this.setTitle();
      if (!this.url) {
        return;
      }
      this.element.addClass('loading');
      if (Mercury.preloadedViews[this.url]) {
        return setTimeout(((function(_this) {
          return function() {
            return _this.loadContent(Mercury.preloadedViews[_this.url]);
          };
        })(this)), 10);
      } else {
        return jQuery.ajax(this.url, {
          headers: Mercury.ajaxHeaders(),
          type: this.options.loadType || 'GET',
          data: this.options.loadData,
          success: (function(_this) {
            return function(data) {
              return _this.loadContent(data);
            };
          })(this),
          error: (function(_this) {
            return function() {
              _this.hide();
              return Mercury.notify('Mercury was unable to load %s for the lightview.', _this.url);
            };
          })(this)
        });
      }
    };

    Lightview.prototype.loadContent = function(data, options) {
      if (options == null) {
        options = null;
      }
      this.initializeLightview();
      this.options = options || this.options;
      this.setTitle();
      this.loaded = true;
      this.element.removeClass('loading');
      this.contentElement.html(data);
      this.contentElement.css({
        display: 'none',
        visibility: 'hidden'
      });
      this.contentPane = this.element.find('.mercury-display-pane-container');
      this.contentControl = this.element.find('.mercury-display-controls');
      if (this.options.afterLoad) {
        this.options.afterLoad.call(this);
      }
      if (this.options.handler) {
        if (Mercury.modalHandlers[this.options.handler]) {
          if (typeof Mercury.modalHandlers[this.options.handler] === 'function') {
            Mercury.modalHandlers[this.options.handler].call(this);
          } else {
            jQuery.extend(this, Mercury.modalHandlers[this.options.handler]);
            this.initialize();
          }
        } else if (Mercury.lightviewHandlers[this.options.handler]) {
          if (typeof Mercury.lightviewHandlers[this.options.handler] === 'function') {
            Mercury.lightviewHandlers[this.options.handler].call(this);
          } else {
            jQuery.extend(this, Mercury.lightviewHandlers[this.options.handler]);
            this.initialize();
          }
        }
      }
      if (Mercury.config.localization.enabled) {
        this.element.localize(Mercury.locale());
      }
      this.element.find('.lightview-close').on('click', this.hide);
      return this.resize();
    };

    Lightview.prototype.setTitle = function() {
      return this.titleElement.find('span').html(Mercury.I18n(this.options.title));
    };

    Lightview.prototype.serializeForm = function() {
      return this.element.find('form').serializeObject() || {};
    };

    Lightview.prototype.reset = function() {
      this.titleElement.find('span').html('');
      return this.contentElement.html('');
    };

    Lightview.prototype.hide = function() {
      if (this.showing) {
        return;
      }
      this.options = {};
      Mercury.trigger('focus:frame');
      this.element.hide();
      this.overlay.hide();
      this.reset();
      return this.visible = false;
    };

    return Lightview;

  })();

}).call(this);
(function() {
  this.Mercury.Statusbar = (function() {
    function Statusbar(options1) {
      this.options = options1 != null ? options1 : {};
      this.visible = this.options.visible;
      this.build();
      this.bindEvents();
    }

    Statusbar.prototype.build = function() {
      var ref;
      this.element = jQuery('<div>', {
        "class": 'mercury-statusbar'
      });
      this.aboutElement = jQuery('<a>', {
        "class": "mercury-statusbar-about"
      }).appendTo(this.element).html("Mercury Editor v" + Mercury.version);
      this.pathElement = jQuery('<div>', {
        "class": 'mercury-statusbar-path'
      }).appendTo(this.element);
      if (!this.visible) {
        this.element.css({
          visibility: 'hidden'
        });
      }
      return this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
    };

    Statusbar.prototype.bindEvents = function() {
      Mercury.on('region:update', (function(_this) {
        return function(event, options) {
          if (options.region && jQuery.type(options.region.path) === 'function') {
            return _this.setPath(options.region.path());
          }
        };
      })(this));
      return this.aboutElement.on('click', (function(_this) {
        return function() {
          return Mercury.lightview('/mercury/lightviews/about.html', {
            title: "Mercury Editor v" + Mercury.version
          });
        };
      })(this));
    };

    Statusbar.prototype.height = function() {
      return this.element.outerHeight();
    };

    Statusbar.prototype.top = function() {
      var currentTop, top;
      top = this.element.offset().top;
      currentTop = parseInt(this.element.css('bottom')) < 0 ? top - this.element.outerHeight() : top;
      if (this.visible) {
        return currentTop;
      } else {
        return top + this.element.outerHeight();
      }
    };

    Statusbar.prototype.setPath = function(elements) {
      var element, i, len, path;
      path = [];
      for (i = 0, len = elements.length; i < len; i++) {
        element = elements[i];
        path.push("<a>" + (element.tagName.toLowerCase()) + "</a>");
      }
      return this.pathElement.html("<span><strong>" + (Mercury.I18n('Path:')) + " </strong>" + (path.reverse().join(' &raquo; ')) + "</span>");
    };

    Statusbar.prototype.show = function() {
      this.visible = true;
      this.element.css({
        opacity: 0,
        visibility: 'visible'
      });
      return this.element.animate({
        opacity: 1
      }, 200, 'easeInOutSine');
    };

    Statusbar.prototype.hide = function() {
      this.visible = false;
      return this.element.css({
        visibility: 'hidden'
      });
    };

    return Statusbar;

  })();

}).call(this);
(function() {
  var hasProp = {}.hasOwnProperty;

  this.Mercury.Toolbar = (function() {
    function Toolbar(options1) {
      this.options = options1 != null ? options1 : {};
      this.visible = this.options.visible;
      this.build();
      this.bindEvents();
    }

    Toolbar.prototype.build = function() {
      var button, buttonName, buttons, container, expander, options, ref, ref1, toolbar, toolbarName;
      this.element = jQuery('<div>', {
        "class": 'mercury-toolbar-container',
        style: 'width:10000px'
      });
      this.element.css({
        width: '100%'
      });
      this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
      ref1 = Mercury.config.toolbars;
      for (toolbarName in ref1) {
        if (!hasProp.call(ref1, toolbarName)) continue;
        buttons = ref1[toolbarName];
        if (buttons._custom) {
          continue;
        }
        toolbar = jQuery('<div>', {
          "class": "mercury-toolbar mercury-" + toolbarName + "-toolbar"
        }).appendTo(this.element);
        if (buttons._regions) {
          toolbar.attr('data-regions', buttons._regions);
        }
        container = jQuery('<div>', {
          "class": 'mercury-toolbar-button-container'
        }).appendTo(toolbar);
        for (buttonName in buttons) {
          if (!hasProp.call(buttons, buttonName)) continue;
          options = buttons[buttonName];
          if (buttonName === '_regions') {
            continue;
          }
          button = this.buildButton(buttonName, options);
          if (button) {
            button.appendTo(container);
          }
        }
        if (container.css('white-space') === 'nowrap') {
          expander = new Mercury.Toolbar.Expander(toolbarName, {
            appendTo: toolbar,
            "for": container
          });
          expander.appendTo(this.element);
        }
        if (Mercury.config.toolbars['primary'] && toolbarName !== 'primary') {
          toolbar.addClass('disabled');
        }
      }
      if (!this.visible) {
        return this.element.css({
          display: 'none'
        });
      }
    };

    Toolbar.prototype.buildButton = function(name, options) {
      var action, button, group, handled, opts, summary, title;
      if (name[0] === '_') {
        return false;
      }
      switch (jQuery.type(options)) {
        case 'array':
          title = options[0], summary = options[1], handled = options[2];
          return new Mercury.Toolbar.Button(name, title, summary, handled, {
            appendDialogsTo: this.element
          });
        case 'object':
          group = new Mercury.Toolbar.ButtonGroup(name, options);
          for (action in options) {
            if (!hasProp.call(options, action)) continue;
            opts = options[action];
            button = this.buildButton(action, opts);
            if (button) {
              button.appendTo(group);
            }
          }
          return group;
        case 'string':
          return jQuery('<hr>', {
            "class": "mercury-" + (options === '-' ? 'line-separator' : 'separator')
          });
        default:
          throw Mercury.I18n('Unknown button structure -- please provide an array, object, or string for "%s".', name);
      }
    };

    Toolbar.prototype.bindEvents = function() {
      Mercury.on('region:focused', (function(_this) {
        return function(event, options) {
          var i, len, ref, regions, results, toolbar;
          ref = _this.element.find(".mercury-toolbar");
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            toolbar = ref[i];
            toolbar = jQuery(toolbar);
            if (regions = toolbar.data('regions')) {
              if (regions.split(',').indexOf(options.region.type()) > -1) {
                results.push(toolbar.removeClass('disabled'));
              } else {
                results.push(void 0);
              }
            } else {
              results.push(void 0);
            }
          }
          return results;
        };
      })(this));
      Mercury.on('region:blurred', (function(_this) {
        return function(event, options) {
          var i, len, ref, regions, results, toolbar;
          ref = _this.element.find(".mercury-toolbar");
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            toolbar = ref[i];
            toolbar = jQuery(toolbar);
            if (regions = toolbar.data('regions')) {
              if (regions.split(',').indexOf(options.region.type()) > -1) {
                results.push(toolbar.addClass('disabled'));
              } else {
                results.push(void 0);
              }
            } else {
              results.push(void 0);
            }
          }
          return results;
        };
      })(this));
      this.element.on('click', function() {
        return Mercury.trigger('hide:dialogs');
      });
      return this.element.on('mousedown', function(event) {
        return event.preventDefault();
      });
    };

    Toolbar.prototype.height = function(force) {
      if (force == null) {
        force = false;
      }
      if (this.visible || force) {
        return this.element.outerHeight();
      } else {
        return 0;
      }
    };

    Toolbar.prototype.top = function() {
      if (this.visible) {
        return this.element.offset().top;
      } else {
        return 0;
      }
    };

    Toolbar.prototype.show = function() {
      this.visible = true;
      this.element.css({
        top: -this.element.outerHeight(),
        display: 'block'
      });
      return this.element.animate({
        top: 0
      }, 200, 'easeInOutSine');
    };

    Toolbar.prototype.hide = function() {
      this.visible = false;
      return this.element.hide();
    };

    return Toolbar;

  })();

}).call(this);
(function() {
  var hasProp = {}.hasOwnProperty;

  this.Mercury.Toolbar.Button = (function() {
    function Button(name, title, summary, types, options1) {
      this.name = name;
      this.title = title;
      this.summary = summary != null ? summary : null;
      this.types = types != null ? types : {};
      this.options = options1 != null ? options1 : {};
      if (this.title) {
        this.title = Mercury.I18n(this.title);
      }
      if (this.summary) {
        this.summary = Mercury.I18n(this.summary);
      }
      this.build();
      this.bindEvents();
      return this.element;
    }

    Button.prototype.build = function() {
      var mixed, ref, ref1, result, results, type;
      this.element = jQuery('<div>', {
        title: (ref = this.summary) != null ? ref : this.title,
        "class": "mercury-button mercury-" + this.name + "-button"
      }).html("<em>" + this.title + "</em>");
      this.element.data('expander', "<div class=\"mercury-expander-button\" data-button=\"" + this.name + "\"><em></em><span>" + this.title + "</span></div>");
      this.handled = {};
      ref1 = this.types;
      results = [];
      for (type in ref1) {
        if (!hasProp.call(ref1, type)) continue;
        mixed = ref1[type];
        switch (type) {
          case 'preload':
            results.push(true);
            break;
          case 'regions':
            this.element.addClass('disabled');
            results.push(this.handled[type] = jQuery.isFunction(mixed) ? mixed.call(this, this.name) : mixed);
            break;
          case 'toggle':
            results.push(this.handled[type] = true);
            break;
          case 'mode':
            results.push(this.handled[type] = mixed === true ? this.name : mixed);
            break;
          case 'context':
            results.push(this.handled[type] = jQuery.isFunction(mixed) ? mixed : Mercury.Toolbar.Button.contexts[this.name]);
            break;
          case 'palette':
            this.element.addClass("mercury-button-palette");
            result = jQuery.isFunction(mixed) ? mixed.call(this, this.name) : mixed;
            results.push(this.handled[type] = typeof result === 'string' ? new Mercury.Palette(result, this.name, this.defaultDialogOptions()) : result);
            break;
          case 'select':
            this.element.addClass("mercury-button-select").find('em').html(this.title);
            result = jQuery.isFunction(mixed) ? mixed.call(this, this.name) : mixed;
            results.push(this.handled[type] = typeof result === 'string' ? new Mercury.Select(result, this.name, this.defaultDialogOptions()) : result);
            break;
          case 'panel':
            this.element.addClass('mercury-button-panel');
            this.handled['toggle'] = true;
            result = jQuery.isFunction(mixed) ? mixed.call(this, this.name) : mixed;
            results.push(this.handled[type] = typeof result === 'string' ? new Mercury.Panel(result, this.name, this.defaultDialogOptions()) : result);
            break;
          case 'modal':
            results.push(this.handled[type] = jQuery.isFunction(mixed) ? mixed.call(this, this.name) : mixed);
            break;
          case 'lightview':
            results.push(this.handled[type] = jQuery.isFunction(mixed) ? mixed.call(this, this.name) : mixed);
            break;
          default:
            throw Mercury.I18n('Unknown button type \"%s\" used for the \"%s\" button.', type, this.name);
        }
      }
      return results;
    };

    Button.prototype.bindEvents = function() {
      Mercury.on('button', (function(_this) {
        return function(event, options) {
          if (options.action === _this.name) {
            return _this.element.click();
          }
        };
      })(this));
      Mercury.on('mode', (function(_this) {
        return function(event, options) {
          if (_this.handled.mode === options.mode && _this.handled.toggle) {
            return _this.togglePressed();
          }
        };
      })(this));
      Mercury.on('region:update', (function(_this) {
        return function(event, options) {
          var element;
          if (_this.handled.context && options.region && jQuery.type(options.region.currentElement) === 'function') {
            element = options.region.currentElement();
            if (element.length && _this.handled.context.call(_this, element, options.region.element)) {
              return _this.element.addClass('active');
            } else {
              return _this.element.removeClass('active');
            }
          } else {
            return _this.element.removeClass('active');
          }
        };
      })(this));
      Mercury.on('region:focused', (function(_this) {
        return function(event, options) {
          if (_this.handled.regions && options.region && options.region.type()) {
            if (_this.handled.regions.indexOf(options.region.type()) > -1) {
              return _this.element.removeClass('disabled');
            } else {
              return _this.element.addClass('disabled');
            }
          }
        };
      })(this));
      Mercury.on('region:blurred', (function(_this) {
        return function() {
          if (_this.handled.regions) {
            return _this.element.addClass('disabled');
          }
        };
      })(this));
      this.element.on('mousedown', (function(_this) {
        return function() {
          return _this.element.addClass('active');
        };
      })(this));
      this.element.on('mouseup', (function(_this) {
        return function() {
          return _this.element.removeClass('active');
        };
      })(this));
      return this.element.on('click', (function(_this) {
        return function(event) {
          if (_this.element.closest('.disabled').length) {
            return;
          }
          return _this.handleClick(event);
        };
      })(this));
    };

    Button.prototype.handleClick = function(event) {
      var handled, mixed, ref, type;
      handled = false;
      ref = this.handled;
      for (type in ref) {
        if (!hasProp.call(ref, type)) continue;
        mixed = ref[type];
        switch (type) {
          case 'toggle':
            if (!this.handled.mode) {
              this.togglePressed();
            }
            break;
          case 'mode':
            handled = true;
            Mercury.trigger('mode', {
              mode: mixed
            });
            break;
          case 'modal':
            handled = this.handleModal(event);
            break;
          case 'lightview':
            handled = this.handleLightview(event);
            break;
          case 'palette':
          case 'select':
          case 'panel':
            handled = this.handleDialog(event, type);
        }
      }
      if (!handled) {
        Mercury.trigger('action', {
          action: this.name
        });
      }
      if (this.options['regions'] && this.options['regions'].length) {
        return Mercury.trigger('focus:frame');
      }
    };

    Button.prototype.handleModal = function(event) {
      Mercury.modal(this.handled.modal, {
        title: this.summary || this.title,
        handler: this.name
      });
      return true;
    };

    Button.prototype.handleLightview = function(event) {
      Mercury.lightview(this.handled.lightview, {
        title: this.summary || this.title,
        handler: this.name,
        closeButton: true
      });
      return true;
    };

    Button.prototype.handleDialog = function(event, type) {
      event.stopPropagation();
      this.handled[type].toggle();
      return true;
    };

    Button.prototype.defaultDialogOptions = function() {
      return {
        title: this.summary || this.title,
        preload: this.types.preload,
        appendTo: this.options.appendDialogsTo || 'body',
        closeButton: true,
        "for": this.element
      };
    };

    Button.prototype.togglePressed = function() {
      return this.element.toggleClass('pressed');
    };

    return Button;

  })();

  this.Mercury.Toolbar.Button.contexts = {
    backColor: function(node) {
      return this.element.css('background-color', node.css('background-color'));
    },
    foreColor: function(node) {
      return this.element.css('background-color', node.css('color'));
    },
    bold: function(node) {
      var weight;
      weight = node.css('font-weight');
      return weight === 'bold' || weight > 400;
    },
    italic: function(node) {
      return node.css('font-style') === 'italic';
    },
    overline: function(node) {
      var i, len, parent, ref;
      if (node.css('text-decoration') === 'overline') {
        return true;
      }
      ref = node.parentsUntil(this.element);
      for (i = 0, len = ref.length; i < len; i++) {
        parent = ref[i];
        if (jQuery(parent).css('text-decoration') === 'overline') {
          return true;
        }
      }
      return false;
    },
    strikethrough: function(node, region) {
      return node.css('text-decoration') === 'line-through' || !!node.closest('strike', region).length;
    },
    underline: function(node, region) {
      return node.css('text-decoration') === 'underline' || !!node.closest('u', region).length;
    },
    subscript: function(node, region) {
      return !!node.closest('sub', region).length;
    },
    superscript: function(node, region) {
      return !!node.closest('sup', region).length;
    },
    justifyLeft: function(node) {
      return node.css('text-align').indexOf('left') > -1;
    },
    justifyCenter: function(node) {
      return node.css('text-align').indexOf('center') > -1;
    },
    justifyRight: function(node) {
      return node.css('text-align').indexOf('right') > -1;
    },
    justifyFull: function(node) {
      return node.css('text-align').indexOf('justify') > -1;
    },
    insertOrderedList: function(node, region) {
      return !!node.closest('ol', region.element).length;
    },
    insertUnorderedList: function(node, region) {
      return !!node.closest('ul', region.element).length;
    }
  };

}).call(this);
(function() {
  this.Mercury.Toolbar.ButtonGroup = (function() {
    function ButtonGroup(name, options1) {
      this.name = name;
      this.options = options1 != null ? options1 : {};
      this.build();
      this.bindEvents();
      this.regions = this.options._regions;
      return this.element;
    }

    ButtonGroup.prototype.build = function() {
      this.element = jQuery('<div>', {
        "class": "mercury-button-group mercury-" + this.name + "-group"
      });
      if (this.options._context || this.options._regions) {
        return this.element.addClass('disabled');
      }
    };

    ButtonGroup.prototype.bindEvents = function() {
      Mercury.on('region:update', (function(_this) {
        return function(event, options) {
          var context, element;
          context = Mercury.Toolbar.ButtonGroup.contexts[_this.name];
          if (context) {
            if (options.region && jQuery.type(options.region.currentElement) === 'function') {
              element = options.region.currentElement();
              if (element.length && context.call(_this, element, options.region.element)) {
                return _this.element.removeClass('disabled');
              } else {
                return _this.element.addClass('disabled');
              }
            }
          }
        };
      })(this));
      Mercury.on('region:focused', (function(_this) {
        return function(event, options) {
          if (_this.regions && options.region && options.region.type()) {
            if (_this.regions.indexOf(options.region.type()) > -1) {
              if (!_this.options._context) {
                return _this.element.removeClass('disabled');
              }
            } else {
              return _this.element.addClass('disabled');
            }
          }
        };
      })(this));
      return Mercury.on('region:blurred', (function(_this) {
        return function(event, options) {
          if (_this.options.regions) {
            return _this.element.addClass('disabled');
          }
        };
      })(this));
    };

    return ButtonGroup;

  })();

  this.Mercury.Toolbar.ButtonGroup.contexts = {
    table: function(node, region) {
      return !!node.closest('table', region).length;
    }
  };

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Mercury.Toolbar.Expander = (function(superClass) {
    extend(Expander, superClass);

    function Expander(name, options) {
      this.name = name;
      this.options = options;
      this.container = this.options["for"];
      Expander.__super__.constructor.call(this, null, this.name, this.options);
      return this.element;
    }

    Expander.prototype.build = function() {
      var ref;
      this.container.css({
        whiteSpace: 'normal',
        visibility: 'hidden',
        display: 'block'
      });
      this.container.css({
        visibility: 'visible'
      });
      this.trigger = jQuery('<div>', {
        "class": 'mercury-toolbar-expander'
      }).appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
      this.element = jQuery('<div>', {
        "class": "mercury-palette mercury-expander mercury-" + this.name + "-expander",
        style: 'display:none'
      });
      return this.windowResize();
    };

    Expander.prototype.bindEvents = function() {
      Mercury.on('hide:dialogs', (function(_this) {
        return function(event, dialog) {
          if (dialog !== _this) {
            return _this.hide();
          }
        };
      })(this));
      Mercury.on('resize', (function(_this) {
        return function() {
          return _this.windowResize();
        };
      })(this));
      Expander.__super__.bindEvents.apply(this, arguments);
      this.trigger.click((function(_this) {
        return function(event) {
          var button, hiddenButtons, i, len, ref;
          event.stopPropagation();
          hiddenButtons = [];
          ref = _this.container.find('.mercury-button');
          for (i = 0, len = ref.length; i < len; i++) {
            button = ref[i];
            button = jQuery(button);
            if (button.position().top > 5) {
              hiddenButtons.push(button.data('expander'));
            }
          }
          _this.loadContent(hiddenButtons.join(''));
          return _this.toggle();
        };
      })(this));
      return this.element.click((function(_this) {
        return function(event) {
          var button, buttonName;
          buttonName = jQuery(event.target).closest('[data-button]').data('button');
          button = _this.container.find(".mercury-" + buttonName + "-button");
          return button.click();
        };
      })(this));
    };

    Expander.prototype.windowResize = function() {
      if (jQuery(window).width() === this.container.outerWidth()) {
        this.trigger.show();
      } else {
        this.trigger.hide();
      }
      return this.hide();
    };

    Expander.prototype.position = function(keepVisible) {
      var position, width;
      this.element.css({
        top: 0,
        left: 0,
        display: 'block',
        visibility: 'hidden'
      });
      position = this.trigger.position();
      width = this.element.width();
      if (position.left + width > jQuery(window).width()) {
        position.left = position.left - width + this.trigger.width();
      }
      return this.element.css({
        top: position.top + this.trigger.height(),
        left: position.left,
        display: keepVisible ? 'block' : 'none',
        visibility: 'visible'
      });
    };

    return Expander;

  })(Mercury.Palette);

}).call(this);
(function() {
  this.Mercury.tooltip = function(forElement, content, options) {
    if (options == null) {
      options = {};
    }
    Mercury.tooltip.show(forElement, content, options);
    return Mercury.tooltip;
  };

  jQuery.extend(Mercury.tooltip, {
    show: function(forElement1, content1, options1) {
      this.forElement = forElement1;
      this.content = content1;
      this.options = options1 != null ? options1 : {};
      this.document = this.forElement.get(0).ownerDocument;
      this.initialize();
      if (this.visible) {
        return this.update();
      } else {
        return this.appear();
      }
    },
    initialize: function() {
      if (this.initialized) {
        return;
      }
      this.build();
      this.bindEvents();
      return this.initialized = true;
    },
    build: function() {
      var ref;
      this.element = jQuery('<div>', {
        "class": 'mercury-tooltip'
      });
      return this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
    },
    bindEvents: function() {
      var i, len, parent, ref;
      Mercury.on('resize', (function(_this) {
        return function() {
          if (_this.visible) {
            return _this.position();
          }
        };
      })(this));
      this.element.on('mousedown', function(event) {
        event.preventDefault();
        return event.stopPropagation();
      });
      ref = this.forElement.parentsUntil(jQuery('body', this.document));
      for (i = 0, len = ref.length; i < len; i++) {
        parent = ref[i];
        if (!(parent.scrollHeight > parent.clientHeight)) {
          continue;
        }
        jQuery(parent).on('scroll', (function(_this) {
          return function() {
            if (_this.visible) {
              return _this.position();
            }
          };
        })(this));
      }
      return jQuery(this.document).on('scroll', (function(_this) {
        return function() {
          if (_this.visible) {
            return _this.position();
          }
        };
      })(this));
    },
    appear: function() {
      this.update();
      this.element.show();
      return this.element.animate({
        opacity: 1
      }, 200, 'easeInOutSine', (function(_this) {
        return function() {
          return _this.visible = true;
        };
      })(this));
    },
    update: function() {
      this.element.html(this.content);
      return this.position();
    },
    position: function() {
      var left, offset, top, width;
      offset = this.forElement.offset();
      width = this.element.width();
      top = offset.top + (Mercury.displayRect.top - jQuery(this.document).scrollTop()) + this.forElement.outerHeight();
      left = offset.left - jQuery(this.document).scrollLeft();
      if ((left + width + 25) > Mercury.displayRect.width) {
        left = left - (left + width + 25) - Mercury.displayRect.width;
      }
      left = left <= 0 ? 0 : left;
      return this.element.css({
        top: top,
        left: left
      });
    },
    hide: function() {
      if (!this.initialized) {
        return;
      }
      this.element.hide();
      return this.visible = false;
    }
  });

}).call(this);
(function() {
  var hasProp = {}.hasOwnProperty;

  this.Mercury.Snippet = (function() {
    Snippet.all = [];

    Snippet.displayOptionsFor = function(name, options, displayOptions) {
      var snippet;
      if (options == null) {
        options = {};
      }
      if (displayOptions == null) {
        displayOptions = true;
      }
      if (displayOptions) {
        Mercury.modal(this.optionsUrl(name), jQuery.extend({
          title: 'Snippet Options',
          handler: 'insertSnippet',
          snippetName: name,
          loadType: Mercury.config.snippets.method
        }, options));
      } else {
        snippet = Mercury.Snippet.create(name);
        Mercury.trigger('action', {
          action: 'insertSnippet',
          value: snippet
        });
      }
      return Mercury.snippet = null;
    };

    Snippet.optionsUrl = function(name) {
      var url;
      url = Mercury.config.snippets.optionsUrl;
      if (typeof url === 'function') {
        url = url();
      }
      return url.replace(':name', name);
    };

    Snippet.previewUrl = function(name) {
      var url;
      url = Mercury.config.snippets.previewUrl;
      if (typeof url === 'function') {
        url = url();
      }
      return url.replace(':name', name);
    };

    Snippet.create = function(name, options) {
      var instance;
      instance = new Mercury.Snippet(name, this.uniqueId(), options);
      this.all.push(instance);
      return instance;
    };

    Snippet.uniqueId = function() {
      var i, identities, identity, ref, snippet;
      ref = [0, "snippet_0"], i = ref[0], identity = ref[1];
      identities = (function() {
        var j, len, ref1, results;
        ref1 = this.all;
        results = [];
        for (j = 0, len = ref1.length; j < len; j++) {
          snippet = ref1[j];
          results.push(snippet.identity);
        }
        return results;
      }).call(this);
      while (identities.indexOf(identity) !== -1) {
        i += 1;
        identity = "snippet_" + i;
      }
      return identity;
    };

    Snippet.find = function(identity) {
      var j, len, ref, snippet;
      ref = this.all;
      for (j = 0, len = ref.length; j < len; j++) {
        snippet = ref[j];
        if (snippet.identity === identity) {
          return snippet;
        }
      }
      return null;
    };

    Snippet.load = function(snippets) {
      var details, identity, instance, results;
      results = [];
      for (identity in snippets) {
        if (!hasProp.call(snippets, identity)) continue;
        details = snippets[identity];
        instance = new Mercury.Snippet(details.name, identity, details);
        results.push(this.all.push(instance));
      }
      return results;
    };

    Snippet.clearAll = function() {
      delete this.all;
      return this.all = [];
    };

    function Snippet(name1, identity1, options) {
      this.name = name1;
      this.identity = identity1;
      if (options == null) {
        options = {};
      }
      this.version = 0;
      this.data = '';
      this.wrapperTag = 'div';
      this.wrapperClass = '';
      this.history = new Mercury.HistoryBuffer();
      this.setOptions(options);
    }

    Snippet.prototype.getHTML = function(context, callback) {
      var element, elementClass;
      if (callback == null) {
        callback = null;
      }
      elementClass = this.name + "-snippet";
      if (this.wrapperClass) {
        elementClass += " " + this.wrapperClass;
      }
      element = jQuery("<" + this.wrapperTag + ">", {
        "class": elementClass,
        contenteditable: "false",
        'data-snippet': this.identity,
        'data-version': this.version
      }, context);
      element.html("[" + this.identity + "]");
      this.loadPreview(element, callback);
      return element;
    };

    Snippet.prototype.getText = function(callback) {
      return "[--" + this.identity + "--]";
    };

    Snippet.prototype.loadPreview = function(element, callback) {
      if (callback == null) {
        callback = null;
      }
      return jQuery.ajax(Snippet.previewUrl(this.name), {
        headers: Mercury.ajaxHeaders(),
        type: Mercury.config.snippets.method,
        data: this.options,
        success: (function(_this) {
          return function(data) {
            _this.data = data;
            element.html(data);
            if (callback) {
              return callback();
            }
          };
        })(this),
        error: (function(_this) {
          return function() {
            return Mercury.notify('Error loading the preview for the \"%s\" snippet.', _this.name);
          };
        })(this)
      });
    };

    Snippet.prototype.displayOptions = function() {
      Mercury.snippet = this;
      return Mercury.modal(Snippet.optionsUrl(this.name), {
        title: 'Snippet Options',
        handler: 'insertSnippet',
        loadType: Mercury.config.snippets.method,
        loadData: this.options
      });
    };

    Snippet.prototype.setOptions = function(options1) {
      this.options = options1;
      delete this.options['authenticity_token'];
      delete this.options['utf8'];
      if (this.options.wrapperTag) {
        this.wrapperTag = this.options.wrapperTag;
      }
      if (this.options.wrapperClass) {
        this.wrapperClass = this.options.wrapperClass;
      }
      this.version += 1;
      return this.history.push(this.options);
    };

    Snippet.prototype.setVersion = function(version) {
      if (version == null) {
        version = null;
      }
      version = parseInt(version);
      if (version && this.history.stack[version - 1]) {
        this.version = version;
        this.options = this.history.stack[version - 1];
        return true;
      }
      return false;
    };

    Snippet.prototype.serialize = function() {
      return $.extend({
        name: this.name
      }, this.options);
    };

    return Snippet;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Mercury.SnippetToolbar = (function(superClass) {
    extend(SnippetToolbar, superClass);

    function SnippetToolbar(document, options1) {
      this.document = document;
      this.options = options1 != null ? options1 : {};
      this._boundEvents = [];
      SnippetToolbar.__super__.constructor.call(this, this.options);
    }

    SnippetToolbar.prototype.build = function() {
      var button, buttonName, options, ref, ref1, results;
      this.element = jQuery('<div>', {
        "class": 'mercury-toolbar mercury-snippet-toolbar',
        style: 'display:none'
      });
      this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
      ref1 = Mercury.config.toolbars.snippets;
      results = [];
      for (buttonName in ref1) {
        if (!hasProp.call(ref1, buttonName)) continue;
        options = ref1[buttonName];
        button = this.buildButton(buttonName, options);
        if (button) {
          results.push(button.appendTo(this.element));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    SnippetToolbar.prototype.bindEvents = function() {
      this.bindReleasableEvent(Mercury, 'show:toolbar', (function(_this) {
        return function(event, options) {
          if (!options.snippet) {
            return;
          }
          options.snippet.mouseout(function() {
            return _this.hide();
          });
          return _this.show(options.snippet);
        };
      })(this));
      this.bindReleasableEvent(Mercury, 'hide:toolbar', (function(_this) {
        return function(event, options) {
          if (!(options.type && options.type === 'snippet')) {
            return;
          }
          return _this.hide(options.immediately);
        };
      })(this));
      this.bindReleasableEvent(jQuery(this.document), 'scroll', (function(_this) {
        return function() {
          if (_this.visible) {
            return _this.position();
          }
        };
      })(this));
      this.element.mousemove((function(_this) {
        return function() {
          return clearTimeout(_this.hideTimeout);
        };
      })(this));
      return this.element.mouseout((function(_this) {
        return function() {
          return _this.hide();
        };
      })(this));
    };

    SnippetToolbar.prototype.bindReleasableEvent = function(target, eventName, handler) {
      target.on(eventName, handler);
      return this._boundEvents.push([target, eventName, handler]);
    };

    SnippetToolbar.prototype.show = function(snippet) {
      this.snippet = snippet;
      Mercury.tooltip.hide();
      this.position();
      return this.appear();
    };

    SnippetToolbar.prototype.position = function() {
      var left, offset, top;
      offset = this.snippet.offset();
      top = offset.top + Mercury.displayRect.top - jQuery(this.document).scrollTop() - this.height() + 10;
      left = offset.left - jQuery(this.document).scrollLeft();
      return this.element.css({
        top: top,
        left: left
      });
    };

    SnippetToolbar.prototype.appear = function() {
      clearTimeout(this.hideTimeout);
      if (this.visible) {
        return;
      }
      this.visible = true;
      this.element.css({
        display: 'block',
        opacity: 0
      });
      return this.element.stop().animate({
        opacity: 1
      }, 200, 'easeInOutSine');
    };

    SnippetToolbar.prototype.hide = function(immediately) {
      if (immediately == null) {
        immediately = false;
      }
      clearTimeout(this.hideTimeout);
      if (immediately) {
        this.element.hide();
        return this.visible = false;
      } else {
        return this.hideTimeout = setTimeout((function(_this) {
          return function() {
            _this.element.stop().animate({
              opacity: 0
            }, 300, 'easeInOutSine', function() {
              return _this.element.hide();
            });
            return _this.visible = false;
          };
        })(this), 500);
      }
    };

    SnippetToolbar.prototype.release = function() {
      var eventName, handler, i, len, ref, ref1, target;
      this.element.off();
      this.element.remove();
      ref = this._boundEvents;
      for (i = 0, len = ref.length; i < len; i++) {
        ref1 = ref[i], target = ref1[0], eventName = ref1[1], handler = ref1[2];
        target.off(eventName, handler);
      }
      return this._boundEvents = [];
    };

    return SnippetToolbar;

  })(Mercury.Toolbar);

}).call(this);
(function() {
  this.Mercury.Region = (function() {
    function Region(element1, window, options1) {
      this.element = element1;
      this.window = window;
      this.options = options1 != null ? options1 : {};
      Mercury.log("building " + (this.type()), this.element, this.options);
      this.document = this.window.document;
      this.name = this.element.attr(Mercury.config.regions.identifier);
      this.history = new Mercury.HistoryBuffer();
      this.build();
      this.bindEvents();
      this.pushHistory();
      this.element.data('region', this);
    }

    Region.prototype.type = function() {
      return 'unknown';
    };

    Region.prototype.build = function() {};

    Region.prototype.focus = function() {};

    Region.prototype.bindEvents = function() {
      Mercury.on('mode', (function(_this) {
        return function(event, options) {
          if (options.mode === 'preview') {
            return _this.togglePreview();
          }
        };
      })(this));
      Mercury.on('focus:frame', (function(_this) {
        return function() {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          return _this.focus();
        };
      })(this));
      Mercury.on('action', (function(_this) {
        return function(event, options) {
          if (_this.previewing || Mercury.region !== _this || event.isDefaultPrevented()) {
            return;
          }
          if (options.action) {
            return _this.execCommand(options.action, options);
          }
        };
      })(this));
      this.element.on('mousemove', (function(_this) {
        return function(event) {
          var snippet;
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          snippet = jQuery(event.target).closest('[data-snippet]');
          if (snippet.length) {
            _this.snippet = snippet;
            if (_this.snippet.data('snippet')) {
              return Mercury.trigger('show:toolbar', {
                type: 'snippet',
                snippet: _this.snippet
              });
            }
          }
        };
      })(this));
      return this.element.on('mouseout', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          return Mercury.trigger('hide:toolbar', {
            type: 'snippet',
            immediately: false
          });
        };
      })(this));
    };

    Region.prototype.content = function(value, filterSnippets) {
      var container, i, len, ref, snippet;
      if (value == null) {
        value = null;
      }
      if (filterSnippets == null) {
        filterSnippets = false;
      }
      if (value !== null) {
        return this.element.html(value);
      } else {
        container = document.createElement('div');
        container.innerHTML = this.element.html().replace(/^\s+|\s+$/g, '');
        container = $(container);
        if (filterSnippets) {
          ref = container.find('[data-snippet]');
          for (i = 0, len = ref.length; i < len; i++) {
            snippet = ref[i];
            snippet = jQuery(snippet);
            snippet.attr({
              contenteditable: null,
              'data-version': null
            });
            snippet.html("[" + (snippet.data('snippet')) + "]");
          }
        }
        return container.html();
      }
    };

    Region.prototype.togglePreview = function() {
      if (this.previewing) {
        this.previewing = false;
        this.element.attr(Mercury.config.regions.attribute, this.type());
        if (Mercury.region === this) {
          return this.focus();
        }
      } else {
        this.previewing = true;
        this.element.removeAttr(Mercury.config.regions.attribute);
        return Mercury.trigger('region:blurred', {
          region: this
        });
      }
    };

    Region.prototype.execCommand = function(action, options) {
      if (options == null) {
        options = {};
      }
      this.focus();
      if (action !== 'redo') {
        this.pushHistory();
      }
      Mercury.log('execCommand', action, options.value);
      return Mercury.changes = true;
    };

    Region.prototype.pushHistory = function() {
      return this.history.push(this.content());
    };

    Region.prototype.snippets = function() {
      var element, i, len, ref, snippet, snippets;
      snippets = {};
      ref = this.element.find('[data-snippet]');
      for (i = 0, len = ref.length; i < len; i++) {
        element = ref[i];
        snippet = Mercury.Snippet.find(jQuery(element).data('snippet'));
        if (!snippet) {
          continue;
        }
        snippets[snippet.identity] = snippet.serialize();
      }
      return snippets;
    };

    Region.prototype.dataAttributes = function() {
      var attr, data, i, len, ref;
      data = {};
      ref = Mercury.config.regions.dataAttributes;
      for (i = 0, len = ref.length; i < len; i++) {
        attr = ref[i];
        data[attr] = (this.container || this.element).attr('data-' + attr);
      }
      return data;
    };

    Region.prototype.serialize = function() {
      return {
        type: this.type(),
        data: this.dataAttributes(),
        value: this.content(null, true),
        snippets: this.snippets()
      };
    };

    return Region;

  })();

}).call(this);
(function() {
  var hasProp = {}.hasOwnProperty;

  this.Mercury.uploader = function(file, options) {
    if (Mercury.config.uploading.enabled) {
      Mercury.uploader.show(file, options);
    }
    return Mercury.uploader;
  };

  jQuery.extend(Mercury.uploader, {
    show: function(file, options1) {
      this.options = options1 != null ? options1 : {};
      this.file = new Mercury.uploader.File(file);
      if (this.file.errors) {
        alert("Error: " + this.file.errors);
        return;
      }
      if (!this.supported()) {
        return;
      }
      Mercury.trigger('focus:window');
      this.initialize();
      return this.appear();
    },
    initialize: function() {
      if (this.initialized) {
        return;
      }
      this.build();
      this.bindEvents();
      return this.initialized = true;
    },
    supported: function() {
      var xhr;
      xhr = new XMLHttpRequest;
      if (window.Uint8Array && window.ArrayBuffer && !XMLHttpRequest.prototype.sendAsBinary) {
        XMLHttpRequest.prototype.sendAsBinary = function(datastr) {
          var data, i, index, len, ui8a;
          ui8a = new Uint8Array(datastr.length);
          for (index = i = 0, len = datastr.length; i < len; index = ++i) {
            data = datastr[index];
            ui8a[index] = datastr.charCodeAt(index) & 0xff;
          }
          return this.send(ui8a.buffer);
        };
      }
      return !!(xhr.upload && xhr.sendAsBinary && (Mercury.uploader.fileReaderSupported() || Mercury.uploader.formDataSupported()));
    },
    fileReaderSupported: function() {
      return !!window.FileReader;
    },
    formDataSupported: function() {
      return !!window.FormData;
    },
    build: function() {
      var ref, ref1;
      this.element = jQuery('<div>', {
        "class": 'mercury-uploader',
        style: 'display:none'
      });
      this.element.append('<div class="mercury-uploader-preview"><b><img/></b></div>');
      this.element.append('<div class="mercury-uploader-details"></div>');
      this.element.append('<div class="mercury-uploader-progress"><span></span><div class="mercury-uploader-indicator"><div><b>0%</b></div></div></div>');
      this.updateStatus('Processing...');
      this.overlay = jQuery('<div>', {
        "class": 'mercury-uploader-overlay',
        style: 'display:none'
      });
      this.element.appendTo((ref = jQuery(this.options.appendTo).get(0)) != null ? ref : 'body');
      return this.overlay.appendTo((ref1 = jQuery(this.options.appendTo).get(0)) != null ? ref1 : 'body');
    },
    bindEvents: function() {
      return Mercury.on('resize', (function(_this) {
        return function() {
          return _this.position();
        };
      })(this));
    },
    appear: function() {
      this.fillDisplay();
      this.position();
      this.overlay.show();
      return this.overlay.animate({
        opacity: 1
      }, 200, 'easeInOutSine', (function(_this) {
        return function() {
          _this.element.show();
          return _this.element.animate({
            opacity: 1
          }, 200, 'easeInOutSine', function() {
            _this.visible = true;
            return _this.loadImage();
          });
        };
      })(this));
    },
    position: function() {
      var height, width;
      width = this.element.outerWidth();
      height = this.element.outerHeight();
      return this.element.css({
        top: (Mercury.displayRect.height - height) / 2,
        left: (Mercury.displayRect.width - width) / 2
      });
    },
    fillDisplay: function() {
      var details;
      details = [Mercury.I18n('Name: %s', this.file.name), Mercury.I18n('Size: %s', this.file.readableSize), Mercury.I18n('Type: %s', this.file.type)];
      return this.element.find('.mercury-uploader-details').html(details.join('<br/>'));
    },
    loadImage: function() {
      if (Mercury.uploader.fileReaderSupported()) {
        return this.file.readAsDataURL((function(_this) {
          return function(result) {
            _this.element.find('.mercury-uploader-preview b').html(jQuery('<img>', {
              src: result
            }));
            return _this.upload();
          };
        })(this));
      } else {
        return this.upload();
      }
    },
    upload: function() {
      var formData, xhr;
      xhr = new XMLHttpRequest;
      jQuery.each(['onloadstart', 'onprogress', 'onload', 'onabort', 'onerror'], (function(_this) {
        return function(index, eventName) {
          return xhr.upload[eventName] = function(event) {
            return _this.uploaderEvents[eventName].call(_this, event);
          };
        };
      })(this));
      xhr.onload = (function(_this) {
        return function(event) {
          var error, error1, response, src;
          if (event.currentTarget.status >= 400) {
            _this.updateStatus('Error: Unable to upload the file');
            Mercury.notify('Unable to process response: %s', event.currentTarget.status);
            return _this.hide();
          } else {
            try {
              response = Mercury.config.uploading.handler ? Mercury.config.uploading.handler(event.target.responseText) : jQuery.parseJSON(event.target.responseText);
              src = response.url || response.image.url;
              if (!src) {
                throw 'Malformed response from server.';
              }
              Mercury.trigger('action', {
                action: 'insertImage',
                value: {
                  src: src
                }
              });
              return _this.hide();
            } catch (error1) {
              error = error1;
              _this.updateStatus('Error: Unable to upload the file');
              Mercury.notify('Unable to process response: %s', error);
              return _this.hide();
            }
          }
        };
      })(this);
      xhr.open('post', Mercury.config.uploading.url, true);
      xhr.setRequestHeader('Accept', 'application/json, text/javascript, text/html, application/xml, text/xml, */*');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader(Mercury.config.csrfHeader, Mercury.csrfToken);
      if (Mercury.uploader.fileReaderSupported()) {
        return this.file.readAsBinaryString((function(_this) {
          return function(result) {
            var multipart;
            multipart = new Mercury.uploader.MultiPartPost(Mercury.config.uploading.inputName, _this.file, result);
            _this.file.updateSize(multipart.delta);
            xhr.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + multipart.boundary);
            return xhr.sendAsBinary(multipart.body);
          };
        })(this));
      } else {
        formData = new FormData();
        formData.append(Mercury.config.uploading.inputName, this.file.file, this.file.file.name);
        return xhr.send(formData);
      }
    },
    updateStatus: function(message, loaded) {
      var percent;
      this.element.find('.mercury-uploader-progress span').html(Mercury.I18n(message).toString());
      if (loaded) {
        percent = Math.floor(loaded * 100 / this.file.size) + '%';
        this.element.find('.mercury-uploader-indicator div').css({
          width: percent
        });
        return this.element.find('.mercury-uploader-indicator b').html(percent).show();
      }
    },
    hide: function(delay) {
      if (delay == null) {
        delay = 0;
      }
      return setTimeout((function(_this) {
        return function() {
          return _this.element.animate({
            opacity: 0
          }, 200, 'easeInOutSine', function() {
            return _this.overlay.animate({
              opacity: 0
            }, 200, 'easeInOutSine', function() {
              _this.overlay.hide();
              _this.element.hide();
              _this.reset();
              _this.visible = false;
              return Mercury.trigger('focus:frame');
            });
          });
        };
      })(this), delay * 1000);
    },
    reset: function() {
      this.element.find('.mercury-uploader-preview b').html('');
      this.element.find('.mercury-uploader-indicator div').css({
        width: 0
      });
      this.element.find('.mercury-uploader-indicator b').html('0%').hide();
      return this.updateStatus('Processing...');
    },
    uploaderEvents: {
      onloadstart: function() {
        return this.updateStatus('Uploading...');
      },
      onprogress: function(event) {
        return this.updateStatus('Uploading...', event.loaded);
      },
      onabort: function() {
        this.updateStatus('Aborted');
        return this.hide(1);
      },
      onload: function() {
        return this.updateStatus('Successfully uploaded...', this.file.size);
      },
      onerror: function() {
        this.updateStatus('Error: Unable to upload the file');
        return this.hide(3);
      }
    }
  });

  Mercury.uploader.File = (function() {
    function File(file1) {
      var errors;
      this.file = file1;
      this.fullSize = this.size = this.file.size || this.file.fileSize;
      this.readableSize = this.size.toBytes();
      this.name = this.file.name || this.file.fileName;
      this.type = this.file.type || this.file.fileType;
      errors = [];
      if (this.size >= Mercury.config.uploading.maxFileSize) {
        errors.push(Mercury.I18n('Too large'));
      }
      if (!(Mercury.config.uploading.allowedMimeTypes.indexOf(this.type) > -1)) {
        errors.push(Mercury.I18n('Unsupported format'));
      }
      if (errors.length) {
        this.errors = errors.join(' / ');
      }
    }

    File.prototype.readAsDataURL = function(callback) {
      var reader;
      if (callback == null) {
        callback = null;
      }
      reader = new FileReader();
      reader.readAsDataURL(this.file);
      return reader.onload = (function(_this) {
        return function() {
          if (callback) {
            return callback(reader.result);
          }
        };
      })(this);
    };

    File.prototype.readAsBinaryString = function(callback) {
      var reader;
      if (callback == null) {
        callback = null;
      }
      reader = new FileReader();
      reader.readAsBinaryString(this.file);
      return reader.onload = (function(_this) {
        return function() {
          if (callback) {
            return callback(reader.result);
          }
        };
      })(this);
    };

    File.prototype.updateSize = function(delta) {
      return this.fullSize = this.size + delta;
    };

    return File;

  })();

  Mercury.uploader.MultiPartPost = (function() {
    function MultiPartPost(inputName, file1, contents, formInputs) {
      this.inputName = inputName;
      this.file = file1;
      this.contents = contents;
      this.formInputs = formInputs != null ? formInputs : {};
      this.boundary = 'Boundaryx20072377098235644401115438165x';
      this.body = '';
      this.buildBody();
      this.delta = this.body.length - this.file.size;
    }

    MultiPartPost.prototype.buildBody = function() {
      var boundary, name, ref, value;
      boundary = '--' + this.boundary;
      ref = this.formInputs;
      for (name in ref) {
        if (!hasProp.call(ref, name)) continue;
        value = ref[name];
        this.body += boundary + "\r\nContent-Disposition: form-data; name=\"" + name + "\"\r\n\r\n" + (unescape(encodeURIComponent(value))) + "\r\n";
      }
      return this.body += boundary + "\r\nContent-Disposition: form-data; name=\"" + this.inputName + "\"; filename=\"" + this.file.name + "\"\r\nContent-Type: " + this.file.type + "\r\nContent-Transfer-Encoding: binary\r\n\r\n" + this.contents + "\r\n" + boundary + "--";
    };

    return MultiPartPost;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  this.Mercury.Regions.Full = (function(superClass) {
    var type;

    extend(Full, superClass);

    Full.supported = document.designMode && !jQuery.browser.konqueror && (!jQuery.browser.msie || (jQuery.browser.msie && parseFloat(jQuery.browser.version, 10) >= 10));

    Full.supportedText = "Chrome 10+, Firefox 4+, Safari 5+, Opera 11.64+";

    type = 'full';

    Full.prototype.type = function() {
      return type;
    };

    function Full(element1, window, options1) {
      this.element = element1;
      this.window = window;
      this.options = options1 != null ? options1 : {};
      Full.__super__.constructor.apply(this, arguments);
    }

    Full.prototype.build = function() {
      var e, element, error1, i, len, ref;
      if (jQuery.browser.mozilla && this.content() === '') {
        this.content('&nbsp;');
      }
      this.element.data({
        originalOverflow: this.element.css('overflow')
      });
      this.element.css({
        overflow: 'auto'
      });
      this.specialContainer = jQuery.browser.mozilla && this.element.get(0).tagName !== 'DIV';
      this.element.get(0).contentEditable = true;
      ref = this.element.find('[data-snippet]');
      for (i = 0, len = ref.length; i < len; i++) {
        element = ref[i];
        element.contentEditable = false;
        jQuery(element).attr('data-version', '1');
      }
      if (!this.document.mercuryEditing) {
        this.document.mercuryEditing = true;
        try {
          this.document.execCommand('styleWithCSS', false, false);
          this.document.execCommand('insertBROnReturn', false, true);
          this.document.execCommand('enableInlineTableEditing', false, false);
          return this.document.execCommand('enableObjectResizing', false, false);
        } catch (error1) {
          e = error1;
        }
      }
    };

    Full.prototype.bindEvents = function() {
      Full.__super__.bindEvents.apply(this, arguments);
      Mercury.on('region:update', (function(_this) {
        return function() {
          var anchor, currentElement, table;
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          setTimeout((function() {
            return _this.selection().forceSelection(_this.element.get(0));
          }), 1);
          currentElement = _this.currentElement();
          if (currentElement.length) {
            table = currentElement.closest('table', _this.element);
            if (table.length) {
              Mercury.tableEditor(table, currentElement.closest('tr, td'), '<br/>');
            }
            anchor = currentElement.closest('a', _this.element);
            if (anchor.length && anchor.attr('href')) {
              return Mercury.tooltip(anchor, "<a href=\"" + (anchor.attr('href')) + "\" target=\"_blank\">" + (anchor.attr('href')) + "</a>", {
                position: 'below'
              });
            } else {
              return Mercury.tooltip.hide();
            }
          }
        };
      })(this));
      this.element.on('dragenter', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          if (!Mercury.snippet) {
            event.preventDefault();
          }
          return event.originalEvent.dataTransfer.dropEffect = 'copy';
        };
      })(this));
      this.element.on('dragover', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          if (!Mercury.snippet) {
            event.preventDefault();
          }
          return event.originalEvent.dataTransfer.dropEffect = 'copy';
        };
      })(this));
      this.element.on('drop', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          clearTimeout(_this.dropTimeout);
          _this.dropTimeout = setTimeout((function() {
            return _this.element.trigger('possible:drop');
          }), 1);
          if (!event.originalEvent.dataTransfer.files.length) {
            return;
          }
          event.preventDefault();
          _this.focus();
          return Mercury.uploader(event.originalEvent.dataTransfer.files[0]);
        };
      })(this));
      this.element.on('possible:drop', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          if (Mercury.snippet) {
            _this.focus();
            Mercury.Snippet.displayOptionsFor(Mercury.snippet.name, {}, Mercury.snippet.hasOptions);
            return _this.document.execCommand('undo', false, null);
          }
        };
      })(this));
      this.element.on('paste', (function(_this) {
        return function(event) {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          if (_this.specialContainer) {
            event.preventDefault();
            return;
          }
          if (_this.pasting) {
            return;
          }
          Mercury.changes = true;
          return _this.handlePaste(event.originalEvent);
        };
      })(this));
      this.element.on('focus', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          Mercury.region = _this;
          setTimeout((function() {
            return _this.selection().forceSelection(_this.element.get(0));
          }), 1);
          return Mercury.trigger('region:focused', {
            region: _this
          });
        };
      })(this));
      this.element.on('blur', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          Mercury.trigger('region:blurred', {
            region: _this
          });
          return Mercury.tooltip.hide();
        };
      })(this));
      this.element.on('click', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return jQuery(event.target).closest('a').attr('target', '_parent');
          }
        };
      })(this));
      this.element.on('dblclick', (function(_this) {
        return function(event) {
          var image;
          if (_this.previewing) {
            return;
          }
          image = jQuery(event.target).closest('img', _this.element);
          if (image.length) {
            _this.selection().selectNode(image.get(0), true);
            return Mercury.trigger('button', {
              action: 'insertMedia'
            });
          }
        };
      })(this));
      this.element.on('mouseup', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          _this.pushHistory();
          return Mercury.trigger('region:update', {
            region: _this
          });
        };
      })(this));
      this.element.on('keydown', (function(_this) {
        return function(event) {
          var container;
          if (_this.previewing) {
            return;
          }
          switch (event.keyCode) {
            case 90:
              if (!event.metaKey) {
                return;
              }
              event.preventDefault();
              if (event.shiftKey) {
                _this.execCommand('redo');
              } else {
                _this.execCommand('undo');
              }
              return;
            case 13:
              if (jQuery.browser.webkit && _this.selection().commonAncestor().closest('li, ul, ol', _this.element).length === 0) {
                event.preventDefault();
                _this.document.execCommand('insertParagraph', false, null);
              } else if (_this.specialContainer || jQuery.browser.opera) {
                event.preventDefault();
                _this.document.execCommand('insertHTML', false, '<br/>');
              }
              break;
            case 9:
              event.preventDefault();
              container = _this.selection().commonAncestor();
              if (container.closest('li', _this.element).length) {
                if (!event.shiftKey) {
                  _this.execCommand('indent');
                } else if (container.parents('ul, ol').length > 1) {
                  _this.execCommand('outdent');
                }
              } else {
                _this.execCommand('insertHTML', {
                  value: '&nbsp;&nbsp;'
                });
              }
          }
          if (event.metaKey) {
            switch (event.keyCode) {
              case 66:
                _this.execCommand('bold');
                event.preventDefault();
                break;
              case 73:
                _this.execCommand('italic');
                event.preventDefault();
                break;
              case 85:
                _this.execCommand('underline');
                event.preventDefault();
            }
          }
          return _this.pushHistory(event.keyCode);
        };
      })(this));
      return this.element.on('keyup', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          Mercury.trigger('region:update', {
            region: _this
          });
          return Mercury.changes = true;
        };
      })(this));
    };

    Full.prototype.focus = function() {
      var e, error1;
      if (Mercury.region !== this) {
        setTimeout(((function(_this) {
          return function() {
            return _this.element.focus();
          };
        })(this)), 10);
        try {
          this.selection().selection.collapseToStart();
        } catch (error1) {
          e = error1;
        }
      } else {
        setTimeout(((function(_this) {
          return function() {
            return _this.element.focus();
          };
        })(this)), 10);
      }
      Mercury.trigger('region:focused', {
        region: this
      });
      return Mercury.trigger('region:update', {
        region: this
      });
    };

    Full.prototype.content = function(value, filterSnippets, includeMarker) {
      var container, content, element, error, error1, i, index, j, len, len1, ref, ref1, selection, snippet, version;
      if (value == null) {
        value = null;
      }
      if (filterSnippets == null) {
        filterSnippets = true;
      }
      if (includeMarker == null) {
        includeMarker = false;
      }
      if (value !== null) {
        container = jQuery('<div>').appendTo(this.document.createDocumentFragment());
        container.html(value);
        ref = container.find('[data-snippet]');
        for (i = 0, len = ref.length; i < len; i++) {
          element = ref[i];
          element.contentEditable = false;
          element = jQuery(element);
          if (snippet = Mercury.Snippet.find(element.data('snippet'))) {
            if (element.data('version')) {
              snippet.setVersion(element.data('version'));
            } else {
              try {
                version = parseInt(element.html().match(/\/(\d+)\]/)[1]);
                if (version) {
                  snippet.setVersion(version);
                  element.attr({
                    'data-version': version
                  });
                  element.html(snippet.data);
                }
              } catch (error1) {
                error = error1;
              }
            }
          }
        }
        this.element.html(container.html());
        return this.selection().selectMarker(this.element);
      } else {
        this.element.find('meta').remove();
        if (includeMarker) {
          selection = this.selection();
          selection.placeMarker();
        }
        container = jQuery('<div>').appendTo(this.document.createDocumentFragment());
        container.html(this.element.html().replace(/^\s+|\s+$/g, ''));
        if (filterSnippets) {
          ref1 = container.find('[data-snippet]');
          for (index = j = 0, len1 = ref1.length; j < len1; index = ++j) {
            element = ref1[index];
            element = jQuery(element);
            if (snippet = Mercury.Snippet.find(element.data("snippet"))) {
              snippet.data = element.html();
            }
            element.html("[" + (element.data("snippet")) + "/" + (element.data("version")) + "]");
            element.attr({
              contenteditable: null,
              'data-version': null
            });
          }
        }
        content = container.html();
        if (includeMarker) {
          selection.removeMarker();
        }
        return content;
      }
    };

    Full.prototype.togglePreview = function() {
      if (this.previewing) {
        this.element.get(0).contentEditable = true;
        this.element.css({
          overflow: 'auto'
        });
      } else {
        this.content(this.content());
        this.element.get(0).contentEditable = false;
        this.element.css({
          overflow: this.element.data('originalOverflow')
        });
        this.element.blur();
      }
      return Full.__super__.togglePreview.apply(this, arguments);
    };

    Full.prototype.execCommand = function(action, options) {
      var error, error1, handler, sibling;
      if (options == null) {
        options = {};
      }
      Full.__super__.execCommand.apply(this, arguments);
      if (handler = Mercury.config.behaviors[action] || Mercury.Regions.Full.actions[action]) {
        handler.call(this, this.selection(), options);
      } else {
        if (action === 'indent') {
          sibling = this.element.get(0).previousSibling;
        }
        if (action === 'insertHTML' && options.value && options.value.get) {
          options.value = jQuery('<div>').html(options.value).html();
        }
        try {
          this.document.execCommand(action, false, options.value);
        } catch (error1) {
          error = error1;
          if (action === 'indent' && this.element.prev() !== sibling) {
            this.element.prev().remove();
          }
        }
      }
      return this.element.find('img').one('error', function() {
        return jQuery(this).attr({
          src: '/assets/mercury/missing-image.png',
          title: 'Image not found'
        });
      });
    };

    Full.prototype.pushHistory = function(keyCode) {
      var keyCodes, knownKeyCode, waitTime;
      keyCodes = [13, 46, 8];
      waitTime = 2.5;
      if (keyCode) {
        knownKeyCode = keyCodes.indexOf(keyCode);
      }
      clearTimeout(this.historyTimeout);
      if (knownKeyCode >= 0 && knownKeyCode !== this.lastKnownKeyCode) {
        this.history.push(this.content(null, false, true));
      } else if (keyCode) {
        this.historyTimeout = setTimeout(((function(_this) {
          return function() {
            return _this.history.push(_this.content(null, false, true));
          };
        })(this)), waitTime * 1000);
      } else {
        this.history.push(this.content(null, false, true));
      }
      return this.lastKnownKeyCode = knownKeyCode;
    };

    Full.prototype.selection = function() {
      return new Mercury.Regions.Full.Selection(this.window.getSelection(), this.document);
    };

    Full.prototype.path = function() {
      var container;
      container = this.selection().commonAncestor();
      if (!container) {
        return [];
      }
      if (container.get(0) === this.element.get(0)) {
        return [];
      } else {
        return container.parentsUntil(this.element);
      }
    };

    Full.prototype.currentElement = function() {
      var element, selection;
      element = [];
      selection = this.selection();
      if (selection.range) {
        element = selection.commonAncestor();
        if (element.get(0).nodeType === 3) {
          element = element.parent();
        }
      }
      return element;
    };

    Full.prototype.handlePaste = function(event) {
      var sanitizer, selection;
      if (Mercury.config.pasting.sanitize === 'text' && event.clipboardData) {
        this.execCommand('insertHTML', {
          value: event.clipboardData.getData('text/plain')
        });
        event.preventDefault();
      } else {
        selection = this.selection();
        selection.placeMarker();
        sanitizer = jQuery('#mercury_sanitizer', this.document).focus();
        return setTimeout((function(_this) {
          return function() {
            var content;
            content = _this.sanitize(sanitizer);
            selection.selectMarker(_this.element);
            selection.removeMarker();
            _this.element.focus();
            return _this.execCommand('insertHTML', {
              value: content
            });
          };
        })(this), 1);
      }
    };

    Full.prototype.sanitize = function(sanitizer) {
      var allowed, allowedAttributes, allowedTag, attr, content, element, i, j, len, len1, ref, ref1, ref2, ref3;
      sanitizer.find("[" + Mercury.config.regions.attribute + "]").remove();
      sanitizer.find('[src*="webkit-fake-url://"]').remove();
      if (Mercury.config.pasting.sanitize) {
        switch (Mercury.config.pasting.sanitize) {
          case 'blacklist':
            sanitizer.find('[style]').removeAttr('style');
            sanitizer.find('[class="Apple-style-span"]').removeClass('Apple-style-span');
            content = sanitizer.html();
            break;
          case 'whitelist':
            ref = sanitizer.find('*');
            for (i = 0, len = ref.length; i < len; i++) {
              element = ref[i];
              allowed = false;
              ref1 = Mercury.config.pasting.whitelist;
              for (allowedTag in ref1) {
                allowedAttributes = ref1[allowedTag];
                if (element.tagName.toLowerCase() === allowedTag.toLowerCase()) {
                  allowed = true;
                  ref2 = jQuery(element.attributes);
                  for (j = 0, len1 = ref2.length; j < len1; j++) {
                    attr = ref2[j];
                    if (ref3 = attr.name, indexOf.call(allowedAttributes, ref3) < 0) {
                      jQuery(element).removeAttr(attr.name);
                    }
                  }
                  break;
                }
              }
              if (!allowed) {
                jQuery(element).replaceWith(jQuery(element).contents());
              }
            }
            content = sanitizer.html();
            break;
          default:
            content = sanitizer.text();
        }
      } else {
        content = sanitizer.html();
        if (content.indexOf('<!--StartFragment-->') > -1 || content.indexOf('="mso-') > -1 || content.indexOf('<o:') > -1 || content.indexOf('="Mso') > -1) {
          content = sanitizer.text();
        }
      }
      sanitizer.html('');
      return content;
    };

    Full.actions = {
      insertRowBefore: function() {
        return Mercury.tableEditor.addRow('before');
      },
      insertRowAfter: function() {
        return Mercury.tableEditor.addRow('after');
      },
      insertColumnBefore: function() {
        return Mercury.tableEditor.addColumn('before');
      },
      insertColumnAfter: function() {
        return Mercury.tableEditor.addColumn('after');
      },
      deleteColumn: function() {
        return Mercury.tableEditor.removeColumn();
      },
      deleteRow: function() {
        return Mercury.tableEditor.removeRow();
      },
      increaseColspan: function() {
        return Mercury.tableEditor.increaseColspan();
      },
      decreaseColspan: function() {
        return Mercury.tableEditor.decreaseColspan();
      },
      increaseRowspan: function() {
        return Mercury.tableEditor.increaseRowspan();
      },
      decreaseRowspan: function() {
        return Mercury.tableEditor.decreaseRowspan();
      },
      undo: function() {
        return this.content(this.history.undo());
      },
      redo: function() {
        return this.content(this.history.redo());
      },
      horizontalRule: function() {
        return this.execCommand('insertHTML', {
          value: '<hr/>'
        });
      },
      removeFormatting: function(selection) {
        return selection.insertTextNode(selection.textContent());
      },
      backColor: function(selection, options) {
        return selection.wrap("<span style=\"background-color:" + (options.value.toHex()) + "\">", true);
      },
      overline: function(selection) {
        return selection.wrap('<span style="text-decoration:overline">', true);
      },
      style: function(selection, options) {
        return selection.wrap("<span class=\"" + options.value + "\">", true);
      },
      replaceHTML: function(selection, options) {
        return this.content(options.value);
      },
      insertImage: function(selection, options) {
        return this.execCommand('insertHTML', {
          value: jQuery('<img/>', options.value)
        });
      },
      insertTable: function(selection, options) {
        return this.execCommand('insertHTML', {
          value: options.value
        });
      },
      insertLink: function(selection, options) {
        var anchor;
        anchor = jQuery("<" + options.value.tagName + ">", this.document).attr(options.value.attrs).html(options.value.content);
        return selection.insertNode(anchor);
      },
      replaceLink: function(selection, options) {
        var anchor, html;
        anchor = jQuery("<" + options.value.tagName + ">", this.document).attr(options.value.attrs).html(options.value.content);
        selection.selectNode(options.node);
        html = jQuery('<div>').html(selection.content()).find('a').html();
        return selection.replace(jQuery(anchor, selection.context).html(html));
      },
      insertSnippet: function(selection, options) {
        var existing, snippet;
        snippet = options.value;
        if ((existing = this.element.find("[data-snippet=" + snippet.identity + "]")).length) {
          selection.selectNode(existing.get(0));
        }
        return selection.insertNode(snippet.getHTML(this.document));
      },
      editSnippet: function() {
        var snippet;
        if (!this.snippet) {
          return;
        }
        snippet = Mercury.Snippet.find(this.snippet.data('snippet'));
        return snippet.displayOptions();
      },
      removeSnippet: function() {
        if (this.snippet) {
          this.snippet.remove();
        }
        return Mercury.trigger('hide:toolbar', {
          type: 'snippet',
          immediately: true
        });
      }
    };

    return Full;

  })(Mercury.Region);

  Mercury.Regions.Full.Selection = (function() {
    function Selection(selection1, context1) {
      this.selection = selection1;
      this.context = context1;
      if (!(this.selection.rangeCount >= 1)) {
        return;
      }
      this.range = this.selection.getRangeAt(0);
      this.fragment = this.range.cloneContents();
      this.clone = this.range.cloneRange();
      this.collapsed = this.selection.isCollapsed;
    }

    Selection.prototype.commonAncestor = function(onlyTag) {
      var ancestor;
      if (onlyTag == null) {
        onlyTag = false;
      }
      if (!this.range) {
        return null;
      }
      ancestor = this.range.commonAncestorContainer;
      if (ancestor.nodeType === 3 && onlyTag) {
        ancestor = ancestor.parentNode;
      }
      return jQuery(ancestor);
    };

    Selection.prototype.wrap = function(element, replace) {
      if (replace == null) {
        replace = false;
      }
      element = jQuery(element, this.context).html(this.fragment);
      if (replace) {
        this.replace(element);
      }
      return element;
    };

    Selection.prototype.textContent = function() {
      return this.content().textContent;
    };

    Selection.prototype.htmlContent = function() {
      var content;
      content = this.content();
      return jQuery('<div>').html(content).html();
      return null;
    };

    Selection.prototype.content = function() {
      return this.range.cloneContents();
    };

    Selection.prototype.is = function(elementType) {
      var content;
      content = this.content();
      if (jQuery(content).length === 1 && jQuery(content.firstChild).is(elementType)) {
        return jQuery(content.firstChild);
      }
      return false;
    };

    Selection.prototype.forceSelection = function(element) {
      var lastChild, range;
      if (!jQuery.browser.webkit) {
        return;
      }
      range = this.context.createRange();
      if (this.range) {
        if (this.commonAncestor(true).closest('[data-snippet]').length) {
          lastChild = this.context.createTextNode("\x00");
          element.appendChild(lastChild);
        }
      } else {
        if (element.lastChild && element.lastChild.nodeType === 3 && element.lastChild.textContent.replace(/^[\s+|\n+]|[\s+|\n+]$/, '') === '') {
          lastChild = element.lastChild;
          element.lastChild.textContent = "\x00";
        } else {
          lastChild = this.context.createTextNode("\x00");
          element.appendChild(lastChild);
        }
      }
      if (lastChild) {
        range.setStartBefore(lastChild);
        range.setEndBefore(lastChild);
        return this.selection.addRange(range);
      }
    };

    Selection.prototype.selectMarker = function(context) {
      var markers, range;
      markers = context.find('em.mercury-marker');
      if (!markers.length) {
        return;
      }
      range = this.context.createRange();
      range.setStartBefore(markers.get(0));
      if (markers.length >= 2) {
        range.setEndBefore(markers.get(1));
      }
      markers.remove();
      this.selection.removeAllRanges();
      return this.selection.addRange(range);
    };

    Selection.prototype.placeMarker = function() {
      var rangeEnd, rangeStart;
      if (!this.range) {
        return;
      }
      this.startMarker = jQuery('<em class="mercury-marker"/>', this.context).get(0);
      this.endMarker = jQuery('<em class="mercury-marker"/>', this.context).get(0);
      rangeEnd = this.range.cloneRange();
      rangeEnd.collapse(false);
      rangeEnd.insertNode(this.endMarker);
      if (!this.range.collapsed) {
        rangeStart = this.range.cloneRange();
        rangeStart.collapse(true);
        rangeStart.insertNode(this.startMarker);
      }
      this.selection.removeAllRanges();
      return this.selection.addRange(this.range);
    };

    Selection.prototype.removeMarker = function() {
      jQuery(this.startMarker).remove();
      return jQuery(this.endMarker).remove();
    };

    Selection.prototype.insertTextNode = function(string) {
      var node;
      node = this.context.createTextNode(string);
      this.range.extractContents();
      this.range.insertNode(node);
      this.range.selectNodeContents(node);
      return this.selection.addRange(this.range);
    };

    Selection.prototype.insertNode = function(element) {
      if (element.get) {
        element = element.get(0);
      }
      if (jQuery.type(element) === 'string') {
        element = jQuery(element, this.context).get(0);
      }
      this.range.deleteContents();
      this.range.insertNode(element);
      this.range.selectNodeContents(element);
      return this.selection.addRange(this.range);
    };

    Selection.prototype.selectNode = function(node, removeExisting) {
      if (removeExisting == null) {
        removeExisting = false;
      }
      this.range.selectNode(node);
      if (removeExisting) {
        this.selection.removeAllRanges();
      }
      return this.selection.addRange(this.range);
    };

    Selection.prototype.replace = function(element, collapse) {
      if (element.get) {
        element = element.get(0);
      }
      if (jQuery.type(element) === 'string') {
        element = jQuery(element, this.context).get(0);
      }
      this.range.deleteContents();
      this.range.insertNode(element);
      this.range.selectNodeContents(element);
      this.selection.addRange(this.range);
      if (collapse) {
        return this.range.collapse(false);
      }
    };

    return Selection;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Mercury.Regions.Image = (function(superClass) {
    var type;

    extend(Image, superClass);

    Image.supported = document.getElementById;

    Image.supportedText = "Chrome 10+, Firefox 4+, IE 7+, Safari 5+, Opera 8+";

    type = 'image';

    Image.prototype.type = function() {
      return type;
    };

    function Image(element, window, options1) {
      this.element = element;
      this.window = window;
      this.options = options1 != null ? options1 : {};
      Image.__super__.constructor.apply(this, arguments);
    }

    Image.prototype.bindEvents = function() {
      Mercury.on('mode', (function(_this) {
        return function(event, options) {
          if (options.mode === 'preview') {
            return _this.togglePreview();
          }
        };
      })(this));
      Mercury.on('focus:frame', (function(_this) {
        return function() {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          return _this.focus();
        };
      })(this));
      Mercury.on('action', (function(_this) {
        return function(event, options) {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          if (options.action) {
            return _this.execCommand(options.action, options);
          }
        };
      })(this));
      this.element.on('dragenter', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          event.preventDefault();
          return event.originalEvent.dataTransfer.dropEffect = 'copy';
        };
      })(this));
      this.element.on('dragover', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          event.preventDefault();
          return event.originalEvent.dataTransfer.dropEffect = 'copy';
        };
      })(this));
      this.element.on('drop', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          if (event.originalEvent.dataTransfer.files.length) {
            event.preventDefault();
            _this.focus();
            return Mercury.uploader(event.originalEvent.dataTransfer.files[0]);
          }
        };
      })(this));
      return this.element.on('focus', (function(_this) {
        return function() {
          return _this.focus();
        };
      })(this));
    };

    Image.prototype.togglePreview = function() {
      if (this.previewing) {
        this.previewing = false;
        this.element.attr(Mercury.config.regions.attribute, type);
        return this.build();
      } else {
        this.previewing = true;
        this.element.removeAttr(Mercury.config.regions.attribute);
        return Mercury.trigger('region:blurred', {
          region: this
        });
      }
    };

    Image.prototype.focus = function() {
      if (this.previewing) {
        return;
      }
      Mercury.region = this;
      Mercury.trigger('region:focused', {
        region: this
      });
      return Mercury.trigger('region:update', {
        region: this
      });
    };

    Image.prototype.execCommand = function(action, options) {
      var handler;
      if (options == null) {
        options = {};
      }
      Image.__super__.execCommand.apply(this, arguments);
      if (handler = Mercury.Regions.Image.actions[action]) {
        return handler.call(this, options);
      }
    };

    Image.prototype.pushHistory = function() {
      return this.history.push({
        src: this.element.attr('src')
      });
    };

    Image.prototype.updateSrc = function(src) {
      return this.element.attr('src', src);
    };

    Image.prototype.serialize = function() {
      return {
        type: type,
        data: this.dataAttributes(),
        attributes: {
          src: this.element.attr('src')
        }
      };
    };

    Image.actions = {
      undo: function() {
        var prev;
        if (prev = this.history.undo()) {
          return this.updateSrc(prev.src);
        }
      },
      redo: function() {
        var next;
        if (next = this.history.redo()) {
          return this.updateSrc(next.src);
        }
      },
      insertImage: function(options) {
        return this.updateSrc(options.value.src);
      }
    };

    return Image;

  })(Mercury.Region);

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Mercury.Regions.Markdown = (function(superClass) {
    var type;

    extend(Markdown, superClass);

    Markdown.supported = document.getElementById;

    Markdown.supportedText = "Chrome 10+, Firefox 4+, IE 7+, Safari 5+, Opera 8+";

    type = 'markdown';

    Markdown.prototype.type = function() {
      return type;
    };

    function Markdown(element1, window1, options1) {
      this.element = element1;
      this.window = window1;
      this.options = options1 != null ? options1 : {};
      Markdown.__super__.constructor.apply(this, arguments);
      this.converter = new Showdown.converter();
    }

    Markdown.prototype.build = function() {
      var height, value, width;
      width = '100%';
      height = this.element.height();
      value = this.element.html().replace(/^\s+|\s+$/g, '').replace('&gt;', '>');
      this.textarea = jQuery('<textarea>', this.document).val(value).addClass('mercury-textarea');
      this.textarea.css({
        border: 0,
        background: 'transparent',
        display: 'block',
        'overflow-y': 'hidden',
        width: width,
        height: height,
        fontFamily: '"Courier New", Courier, monospace'
      });
      this.element.empty().append(this.textarea);
      this.previewElement = jQuery('<div>', this.document);
      this.element.append(this.previewElement);
      this.container = this.element;
      this.container.data('region', this);
      this.element = this.textarea;
      return this.resize();
    };

    Markdown.prototype.dataAttributes = function() {
      var attr, data, i, len, ref;
      data = {};
      ref = Mercury.config.regions.dataAttributes;
      for (i = 0, len = ref.length; i < len; i++) {
        attr = ref[i];
        data[attr] = this.container.attr('data-' + attr);
      }
      return data;
    };

    Markdown.prototype.bindEvents = function() {
      Mercury.on('mode', (function(_this) {
        return function(event, options) {
          if (options.mode === 'preview') {
            return _this.togglePreview();
          }
        };
      })(this));
      Mercury.on('focus:frame', (function(_this) {
        return function() {
          if (!_this.previewing && Mercury.region === _this) {
            return _this.focus();
          }
        };
      })(this));
      Mercury.on('action', (function(_this) {
        return function(event, options) {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          if (options.action) {
            return _this.execCommand(options.action, options);
          }
        };
      })(this));
      Mercury.on('unfocus:regions', (function(_this) {
        return function() {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          _this.element.blur();
          _this.container.removeClass('focus');
          return Mercury.trigger('region:blurred', {
            region: _this
          });
        };
      })(this));
      this.element.on('dragenter', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          event.preventDefault();
          return event.originalEvent.dataTransfer.dropEffect = 'copy';
        };
      })(this));
      this.element.on('dragover', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          event.preventDefault();
          return event.originalEvent.dataTransfer.dropEffect = 'copy';
        };
      })(this));
      this.element.on('drop', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          if (Mercury.snippet) {
            event.preventDefault();
            _this.focus();
            Mercury.Snippet.displayOptionsFor(Mercury.snippet.name, {}, Mercury.snippet.hasOptions);
          }
          if (event.originalEvent.dataTransfer.files.length) {
            event.preventDefault();
            _this.focus();
            return Mercury.uploader(event.originalEvent.dataTransfer.files[0]);
          }
        };
      })(this));
      this.element.on('focus', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          Mercury.region = _this;
          _this.container.addClass('focus');
          return Mercury.trigger('region:focused', {
            region: _this
          });
        };
      })(this));
      this.element.on('keydown', (function(_this) {
        return function(event) {
          var end, lineText, number, selection, start, text;
          if (_this.previewing) {
            return;
          }
          _this.resize();
          switch (event.keyCode) {
            case 90:
              if (!event.metaKey) {
                return;
              }
              event.preventDefault();
              if (event.shiftKey) {
                _this.execCommand('redo');
              } else {
                _this.execCommand('undo');
              }
              return;
            case 13:
              selection = _this.selection();
              text = _this.element.val();
              start = text.lastIndexOf('\n', selection.start);
              end = text.indexOf('\n', selection.end);
              if (end < start) {
                end = text.length;
              }
              if (text[start] === '\n') {
                start = text.lastIndexOf('\n', selection.start - 1);
              }
              if (text[start + 1] === '-') {
                selection.replace('\n- ', false, true);
                event.preventDefault();
              }
              if (/\d/.test(text[start + 1])) {
                lineText = text.substring(start, end);
                if (/(\d+)\./.test(lineText)) {
                  number = parseInt(RegExp.$1);
                  selection.replace("\n" + (number += 1) + ". ", false, true);
                  event.preventDefault();
                }
              }
              break;
            case 9:
              event.preventDefault();
              _this.execCommand('insertHTML', {
                value: '  '
              });
          }
          if (event.metaKey) {
            switch (event.keyCode) {
              case 66:
                _this.execCommand('bold');
                event.preventDefault();
                break;
              case 73:
                _this.execCommand('italic');
                event.preventDefault();
                break;
              case 85:
                _this.execCommand('underline');
                event.preventDefault();
            }
          }
          return _this.pushHistory(event.keyCode);
        };
      })(this));
      this.element.on('keyup', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          Mercury.changes = true;
          _this.resize();
          return Mercury.trigger('region:update', {
            region: _this
          });
        };
      })(this));
      this.element.on('mouseup', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          _this.focus();
          return Mercury.trigger('region:focused', {
            region: _this
          });
        };
      })(this));
      return this.previewElement.on('click', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return $(event.target).closest('a').attr('target', '_parent');
          }
        };
      })(this));
    };

    Markdown.prototype.focus = function() {
      return this.element.focus();
    };

    Markdown.prototype.content = function(value, filterSnippets) {
      if (value == null) {
        value = null;
      }
      if (filterSnippets == null) {
        filterSnippets = true;
      }
      if (value !== null) {
        if (jQuery.type(value) === 'string') {
          return this.element.val(value);
        } else {
          this.element.val(value.html);
          return this.selection().select(value.selection.start, value.selection.end);
        }
      } else {
        return this.element.val();
      }
    };

    Markdown.prototype.contentAndSelection = function() {
      return {
        html: this.content(null, false),
        selection: this.selection().serialize()
      };
    };

    Markdown.prototype.togglePreview = function() {
      var value;
      if (this.previewing) {
        this.previewing = false;
        this.container.attr(Mercury.config.regions.attribute, type);
        this.previewElement.hide();
        this.element.show();
        if (Mercury.region === this) {
          return this.focus();
        }
      } else {
        this.previewing = true;
        this.container.removeAttr(Mercury.config.regions.attribute);
        value = this.converter.makeHtml(this.element.val());
        this.previewElement.html(value);
        this.previewElement.show();
        this.element.hide();
        return Mercury.trigger('region:blurred', {
          region: this
        });
      }
    };

    Markdown.prototype.execCommand = function(action, options) {
      var handler;
      if (options == null) {
        options = {};
      }
      Markdown.__super__.execCommand.apply(this, arguments);
      if (handler = Mercury.Regions.Markdown.actions[action]) {
        handler.call(this, this.selection(), options);
      }
      return this.resize();
    };

    Markdown.prototype.pushHistory = function(keyCode) {
      var keyCodes, knownKeyCode, waitTime;
      keyCodes = [13, 46, 8];
      waitTime = 2.5;
      if (keyCode) {
        knownKeyCode = keyCodes.indexOf(keyCode);
      }
      clearTimeout(this.historyTimeout);
      if (knownKeyCode >= 0 && knownKeyCode !== this.lastKnownKeyCode) {
        this.history.push(this.contentAndSelection());
      } else if (keyCode) {
        this.historyTimeout = setTimeout(((function(_this) {
          return function() {
            return _this.history.push(_this.contentAndSelection());
          };
        })(this)), waitTime * 1000);
      } else {
        this.history.push(this.contentAndSelection());
      }
      return this.lastKnownKeyCode = knownKeyCode;
    };

    Markdown.prototype.selection = function() {
      return new Mercury.Regions.Markdown.Selection(this.element);
    };

    Markdown.prototype.resize = function() {
      this.element.css({
        height: this.element.get(0).scrollHeight - 100
      });
      return this.element.css({
        height: this.element.get(0).scrollHeight
      });
    };

    Markdown.prototype.snippets = function() {};

    Markdown.actions = {
      undo: function() {
        return this.content(this.history.undo());
      },
      redo: function() {
        return this.content(this.history.redo());
      },
      insertHTML: function(selection, options) {
        var element;
        if (options.value.get && (element = options.value.get(0))) {
          options.value = jQuery('<div>').html(element).html();
        }
        return selection.replace(options.value, false, true);
      },
      insertImage: function(selection, options) {
        return selection.replace('![add alt text](' + encodeURI(options.value.src) + ')', true);
      },
      insertTable: function(selection, options) {
        return selection.replace(options.value.replace(/<br>|<br\/>/ig, ''), false, true);
      },
      insertLink: function(selection, options) {
        return selection.replace("[" + options.value.content + "](" + options.value.attrs.href + " 'optional title')", true);
      },
      insertUnorderedList: function(selection) {
        return selection.addList('unordered');
      },
      insertOrderedList: function(selection) {
        return selection.addList('ordered');
      },
      style: function(selection, options) {
        return selection.wrap("<span class=\"" + options.value + "\">", '</span>');
      },
      formatblock: function(selection, options) {
        var wrapper, wrapperName, wrappers;
        wrappers = {
          h1: ['# ', ' #'],
          h2: ['## ', ' ##'],
          h3: ['### ', ' ###'],
          h4: ['#### ', ' ####'],
          h5: ['##### ', ' #####'],
          h6: ['###### ', ' ######'],
          pre: ['    ', ''],
          blockquote: ['> ', ''],
          p: ['\n', '\n']
        };
        for (wrapperName in wrappers) {
          wrapper = wrappers[wrapperName];
          selection.unWrapLine("" + wrapper[0], "" + wrapper[1]);
        }
        if (options.value === 'blockquote') {
          Mercury.Regions.Markdown.actions.indent.call(this, selection, options);
          return;
        }
        return selection.wrapLine("" + wrappers[options.value][0], "" + wrappers[options.value][1]);
      },
      bold: function(selection) {
        return selection.wrap('**', '**');
      },
      italic: function(selection) {
        return selection.wrap('_', '_');
      },
      subscript: function(selection) {
        return selection.wrap('<sub>', '</sub>');
      },
      superscript: function(selection) {
        return selection.wrap('<sup>', '</sup>');
      },
      indent: function(selection) {
        return selection.wrapLine('> ', '', false, true);
      },
      outdent: function(selection) {
        return selection.unWrapLine('> ', '', false, true);
      },
      horizontalRule: function(selection) {
        return selection.replace('\n- - -\n');
      },
      insertSnippet: function(selection, options) {
        var snippet;
        snippet = options.value;
        return selection.replace(snippet.getText());
      }
    };

    return Markdown;

  })(Mercury.Region);

  Mercury.Regions.Markdown.Selection = (function() {
    function Selection(element1) {
      this.element = element1;
      this.el = this.element.get(0);
      this.getDetails();
    }

    Selection.prototype.serialize = function() {
      return {
        start: this.start,
        end: this.end
      };
    };

    Selection.prototype.getDetails = function() {
      this.length = this.el.selectionEnd - this.el.selectionStart;
      this.start = this.el.selectionStart;
      this.end = this.el.selectionEnd;
      return this.text = this.element.val().substr(this.start, this.length);
    };

    Selection.prototype.replace = function(text, select, placeCursor) {
      var changed, savedVal, val;
      if (select == null) {
        select = false;
      }
      if (placeCursor == null) {
        placeCursor = false;
      }
      this.getDetails();
      val = this.element.val();
      savedVal = this.element.val();
      this.element.val(val.substr(0, this.start) + text + val.substr(this.end, val.length));
      changed = this.element.val() !== savedVal;
      if (select) {
        this.select(this.start, this.start + text.length);
      }
      if (placeCursor) {
        this.select(this.start + text.length, this.start + text.length);
      }
      return changed;
    };

    Selection.prototype.select = function(start1, end1) {
      this.start = start1;
      this.end = end1;
      this.element.focus();
      this.el.selectionStart = this.start;
      this.el.selectionEnd = this.end;
      return this.getDetails();
    };

    Selection.prototype.wrap = function(left, right) {
      this.getDetails();
      this.deselectNewLines();
      this.replace(left + this.text + right, this.text !== '');
      if (this.text === '') {
        return this.select(this.start + left.length, this.start + left.length);
      }
    };

    Selection.prototype.wrapLine = function(left, right, selectAfter, reselect) {
      var end, savedSelection, start, text;
      if (selectAfter == null) {
        selectAfter = true;
      }
      if (reselect == null) {
        reselect = false;
      }
      this.getDetails();
      savedSelection = this.serialize();
      text = this.element.val();
      start = text.lastIndexOf('\n', this.start);
      end = text.indexOf('\n', this.end);
      if (end < start) {
        end = text.length;
      }
      if (text[start] === '\n') {
        start = text.lastIndexOf('\n', this.start - 1);
      }
      this.select(start + 1, end);
      this.replace(left + this.text + right, selectAfter);
      if (reselect) {
        return this.select(savedSelection.start + left.length, savedSelection.end + left.length);
      }
    };

    Selection.prototype.unWrapLine = function(left, right, selectAfter, reselect) {
      var changed, end, leftRegExp, rightRegExp, savedSelection, start, text;
      if (selectAfter == null) {
        selectAfter = true;
      }
      if (reselect == null) {
        reselect = false;
      }
      this.getDetails();
      savedSelection = this.serialize();
      text = this.element.val();
      start = text.lastIndexOf('\n', this.start);
      end = text.indexOf('\n', this.end);
      if (end < start) {
        end = text.length;
      }
      if (text[start] === '\n') {
        start = text.lastIndexOf('\n', this.start - 1);
      }
      this.select(start + 1, end);
      window.something = this.text;
      leftRegExp = new RegExp("^" + (left.regExpEscape()));
      rightRegExp = new RegExp((right.regExpEscape()) + "$");
      changed = this.replace(this.text.replace(leftRegExp, '').replace(rightRegExp, ''), selectAfter);
      if (reselect && changed) {
        return this.select(savedSelection.start - left.length, savedSelection.end - left.length);
      }
    };

    Selection.prototype.addList = function(type) {
      var end, index, line, lines, start, text;
      text = this.element.val();
      start = text.lastIndexOf('\n', this.start);
      end = text.indexOf('\n', this.end);
      if (end < start) {
        end = text.length;
      }
      if (text[start] === '\n') {
        start = text.lastIndexOf('\n', this.start - 1);
      }
      this.select(start + 1, end);
      lines = this.text.split('\n');
      if (type === 'unordered') {
        return this.replace("- " + lines.join("\n- "), true);
      } else {
        return this.replace(((function() {
          var i, len, results;
          results = [];
          for (index = i = 0, len = lines.length; i < len; index = ++i) {
            line = lines[index];
            results.push((index + 1) + ". " + line);
          }
          return results;
        })()).join('\n'), true);
      }
    };

    Selection.prototype.deselectNewLines = function() {
      var length, text;
      text = this.text;
      length = text.replace(/\n+$/g, '').length;
      return this.select(this.start, this.start + length);
    };

    Selection.prototype.placeMarker = function() {
      return this.wrap('[mercury-marker]', '[mercury-marker]');
    };

    Selection.prototype.removeMarker = function() {
      var end, start, val;
      val = this.element.val();
      start = val.indexOf('[mercury-marker]');
      if (!(start > -1)) {
        return;
      }
      end = val.indexOf('[mercury-marker]', start + 1) - '[mercury-marker]'.length;
      this.element.val(this.element.val().replace(/\[mercury-marker\]/g, ''));
      return this.select(start, end);
    };

    Selection.prototype.textContent = function() {
      return this.text;
    };

    return Selection;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Mercury.Regions.Simple = (function(superClass) {
    var type;

    extend(Simple, superClass);

    Simple.supported = document.getElementById;

    Simple.supportedText = "Chrome 10+, Firefox 4+, IE 7+, Safari 5+, Opera 8+";

    type = 'simple';

    Simple.prototype.type = function() {
      return type;
    };

    function Simple(element1, window, options1) {
      this.element = element1;
      this.window = window;
      this.options = options1 != null ? options1 : {};
      Mercury.log("building " + type, this.element, this.options);
      Simple.__super__.constructor.apply(this, arguments);
    }

    Simple.prototype.build = function() {
      var height, value, width;
      if (this.element.css('display') === 'block') {
        width = '100%';
        height = this.element.height();
      } else {
        width = this.element.width();
        height = this.element.height();
      }
      value = this.element.text();
      this.textarea = jQuery('<textarea>', this.document).val(value).addClass('mercury-textarea');
      this.textarea.css({
        border: 0,
        background: 'transparent',
        'overflow-y': 'hidden',
        width: width,
        height: height,
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        fontStyle: 'inherit',
        color: 'inherit',
        'min-height': 0,
        padding: '0',
        margin: 0,
        'border-radius': 0,
        display: 'inherit',
        lineHeight: 'inherit',
        textAlign: 'inherit'
      });
      this.element.empty().append(this.textarea);
      this.container = this.element;
      this.container.data('region', this);
      this.element = this.textarea;
      return this.resize();
    };

    Simple.prototype.bindEvents = function() {
      Mercury.on('mode', (function(_this) {
        return function(event, options) {
          if (options.mode === 'preview') {
            return _this.togglePreview();
          }
        };
      })(this));
      Mercury.on('focus:frame', (function(_this) {
        return function() {
          if (!_this.previewing && Mercury.region === _this) {
            return _this.focus();
          }
        };
      })(this));
      Mercury.on('action', (function(_this) {
        return function(event, options) {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          if (options.action) {
            return _this.execCommand(options.action, options);
          }
        };
      })(this));
      Mercury.on('unfocus:regions', (function(_this) {
        return function() {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          _this.element.blur();
          _this.container.removeClass('focus');
          return Mercury.trigger('region:blurred', {
            region: _this
          });
        };
      })(this));
      return this.bindElementEvents();
    };

    Simple.prototype.bindElementEvents = function() {
      this.element.on('focus', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          Mercury.region = _this;
          _this.container.addClass('focus');
          return Mercury.trigger('region:focused', {
            region: _this
          });
        };
      })(this));
      this.element.on('keydown', (function(_this) {
        return function(event) {
          var end, lineText, number, selection, start, text;
          if (_this.previewing) {
            return;
          }
          _this.resize();
          switch (event.keyCode) {
            case 90:
              if (!event.metaKey) {
                return;
              }
              event.preventDefault();
              if (event.shiftKey) {
                _this.execCommand('redo');
              } else {
                _this.execCommand('undo');
              }
              return;
            case 13:
              selection = _this.selection();
              text = _this.element.val();
              start = text.lastIndexOf('\n', selection.start);
              end = text.indexOf('\n', selection.end);
              if (end < start) {
                end = text.length;
              }
              if (text[start] === '\n') {
                start = text.lastIndexOf('\n', selection.start - 1);
              }
              if (text[start + 1] === '-') {
                selection.replace('\n- ', false, true);
              }
              if (/\d/.test(text[start + 1])) {
                lineText = text.substring(start, end);
                if (/(\d+)\./.test(lineText)) {
                  number = parseInt(RegExp.$1);
                  selection.replace("\n" + (number += 1) + ". ", false, true);
                }
              }
              event.preventDefault();
              break;
            case 9:
              event.preventDefault();
              _this.execCommand('insertHTML', {
                value: '  '
              });
          }
          return _this.pushHistory(event.keyCode);
        };
      })(this));
      this.element.on('keyup', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          Mercury.changes = true;
          _this.resize();
          return Mercury.trigger('region:update', {
            region: _this
          });
        };
      })(this));
      this.element.on('mouseup', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          _this.focus();
          return Mercury.trigger('region:focused', {
            region: _this
          });
        };
      })(this));
      return this.element.on('paste', (function(_this) {
        return function(event) {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          if (_this.specialContainer) {
            event.preventDefault();
            return;
          }
          if (_this.pasting) {
            return;
          }
          Mercury.changes = true;
          return _this.handlePaste(event.originalEvent);
        };
      })(this));
    };

    Simple.prototype.handlePaste = function(event) {
      this.execCommand('insertHTML', {
        value: event.clipboardData.getData('text/plain').replace(/\n/g, ' ')
      });
      event.preventDefault();
    };

    Simple.prototype.path = function() {
      return [this.container.get(0)];
    };

    Simple.prototype.focus = function() {
      return this.element.focus();
    };

    Simple.prototype.content = function(value, filterSnippets) {
      if (value == null) {
        value = null;
      }
      if (filterSnippets == null) {
        filterSnippets = true;
      }
      if (value !== null) {
        if (jQuery.type(value) === 'string') {
          return this.element.val(value);
        } else {
          this.element.val(value.html);
          return this.selection().select(value.selection.start, value.selection.end);
        }
      } else {
        return this.element.val();
      }
    };

    Simple.prototype.contentAndSelection = function() {
      return {
        html: this.content(null, false),
        selection: this.selection().serialize()
      };
    };

    Simple.prototype.togglePreview = function() {
      var value;
      if (this.previewing) {
        this.previewing = false;
        this.element = this.container;
        this.container.attr(Mercury.config.regions.attribute, type);
        this.build();
        this.bindElementEvents();
        if (Mercury.region === this) {
          return this.focus();
        }
      } else {
        this.previewing = true;
        value = jQuery('<div></div>').text(this.element.val()).html();
        this.container.removeAttr(Mercury.config.regions.attribute);
        this.container.html(value);
        return Mercury.trigger('region:blurred', {
          region: this
        });
      }
    };

    Simple.prototype.execCommand = function(action, options) {
      var handler;
      if (options == null) {
        options = {};
      }
      Simple.__super__.execCommand.apply(this, arguments);
      if (handler = Mercury.Regions.Simple.actions[action]) {
        handler.call(this, this.selection(), options);
      }
      return this.resize();
    };

    Simple.prototype.pushHistory = function(keyCode) {
      var keyCodes, knownKeyCode, waitTime;
      keyCodes = [13, 46, 8];
      waitTime = 2.5;
      if (keyCode) {
        knownKeyCode = keyCodes.indexOf(keyCode);
      }
      clearTimeout(this.historyTimeout);
      if (knownKeyCode >= 0 && knownKeyCode !== this.lastKnownKeyCode) {
        this.history.push(this.contentAndSelection());
      } else if (keyCode) {
        this.historyTimeout = setTimeout(((function(_this) {
          return function() {
            return _this.history.push(_this.contentAndSelection());
          };
        })(this)), waitTime * 1000);
      } else {
        this.history.push(this.contentAndSelection());
      }
      return this.lastKnownKeyCode = knownKeyCode;
    };

    Simple.prototype.selection = function() {
      return new Mercury.Regions.Simple.Selection(this.element);
    };

    Simple.prototype.resize = function() {
      this.element.css({
        height: this.element.get(0).scrollHeight - 100
      });
      return this.element.css({
        height: this.element.get(0).scrollHeight
      });
    };

    Simple.prototype.snippets = function() {};

    Simple.actions = {
      undo: function() {
        return this.content(this.history.undo());
      },
      redo: function() {
        return this.content(this.history.redo());
      },
      insertHTML: function(selection, options) {
        var element;
        if (options.value.get && (element = options.value.get(0))) {
          options.value = jQuery('<div>').html(element).html();
        }
        return selection.replace(options.value, false, true);
      }
    };

    return Simple;

  })(Mercury.Region);

  Mercury.Regions.Simple.Selection = (function() {
    function Selection(element1) {
      this.element = element1;
      this.el = this.element.get(0);
      this.getDetails();
    }

    Selection.prototype.serialize = function() {
      return {
        start: this.start,
        end: this.end
      };
    };

    Selection.prototype.getDetails = function() {
      this.length = this.el.selectionEnd - this.el.selectionStart;
      this.start = this.el.selectionStart;
      this.end = this.el.selectionEnd;
      return this.text = this.element.val().substr(this.start, this.length);
    };

    Selection.prototype.replace = function(text, select, placeCursor) {
      var changed, savedVal, val;
      if (select == null) {
        select = false;
      }
      if (placeCursor == null) {
        placeCursor = false;
      }
      this.getDetails();
      val = this.element.val();
      savedVal = this.element.val();
      this.element.val(val.substr(0, this.start) + text + val.substr(this.end, val.length));
      changed = this.element.val() !== savedVal;
      if (select) {
        this.select(this.start, this.start + text.length);
      }
      if (placeCursor) {
        this.select(this.start + text.length, this.start + text.length);
      }
      return changed;
    };

    Selection.prototype.select = function(start1, end1) {
      this.start = start1;
      this.end = end1;
      this.element.focus();
      this.el.selectionStart = this.start;
      this.el.selectionEnd = this.end;
      return this.getDetails();
    };

    Selection.prototype.wrap = function(left, right) {
      this.getDetails();
      this.deselectNewLines();
      this.replace(left + this.text + right, this.text !== '');
      if (this.text === '') {
        return this.select(this.start + left.length, this.start + left.length);
      }
    };

    Selection.prototype.deselectNewLines = function() {
      var length, text;
      text = this.text;
      length = text.replace(/\n+$/g, '').length;
      return this.select(this.start, this.start + length);
    };

    Selection.prototype.placeMarker = function() {
      return this.wrap('[mercury-marker]', '[mercury-marker]');
    };

    Selection.prototype.removeMarker = function() {
      var end, start, val;
      val = this.element.val();
      start = val.indexOf('[mercury-marker]');
      if (!(start > -1)) {
        return;
      }
      end = val.indexOf('[mercury-marker]', start + 1) - '[mercury-marker]'.length;
      this.element.val(this.element.val().replace(/\[mercury-marker\]/g, ''));
      return this.select(start, end);
    };

    Selection.prototype.textContent = function() {
      return this.text;
    };

    return Selection;

  })();

}).call(this);
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.Mercury.Regions.Snippets = (function(superClass) {
    var type;

    extend(Snippets, superClass);

    Snippets.supported = document.getElementById;

    Snippets.supportedText = "Chrome 10+, Firefox 4+, IE 7+, Safari 5+, Opera 8+";

    type = 'snippets';

    Snippets.prototype.type = function() {
      return type;
    };

    function Snippets(element, window, options1) {
      this.element = element;
      this.window = window;
      this.options = options1 != null ? options1 : {};
      Mercury.log("building " + type, this.element, this.options);
      Snippets.__super__.constructor.apply(this, arguments);
      this.makeSortable();
    }

    Snippets.prototype.build = function() {
      var i, len, ref, snippet;
      ref = this.element.find('[data-snippet]');
      for (i = 0, len = ref.length; i < len; i++) {
        snippet = ref[i];
        jQuery(snippet).attr('data-version', 0);
      }
      if (this.element.css('minHeight') === '0px') {
        return this.element.css({
          minHeight: 20
        });
      }
    };

    Snippets.prototype.bindEvents = function() {
      Snippets.__super__.bindEvents.apply(this, arguments);
      Mercury.on('unfocus:regions', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          if (Mercury.region === _this) {
            _this.element.removeClass('focus');
            _this.element.sortable('destroy');
            return Mercury.trigger('region:blurred', {
              region: _this
            });
          }
        };
      })(this));
      Mercury.on('focus:window', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          if (Mercury.region === _this) {
            _this.element.removeClass('focus');
            _this.element.sortable('destroy');
            return Mercury.trigger('region:blurred', {
              region: _this
            });
          }
        };
      })(this));
      this.element.on('mouseup', (function(_this) {
        return function() {
          if (_this.previewing) {
            return;
          }
          _this.focus();
          return Mercury.trigger('region:focused', {
            region: _this
          });
        };
      })(this));
      this.element.on('dragover', (function(_this) {
        return function(event) {
          if (_this.previewing) {
            return;
          }
          event.preventDefault();
          return event.originalEvent.dataTransfer.dropEffect = 'copy';
        };
      })(this));
      this.element.on('drop', (function(_this) {
        return function(event) {
          if (_this.previewing || !Mercury.snippet) {
            return;
          }
          _this.focus();
          event.preventDefault();
          return Mercury.Snippet.displayOptionsFor(Mercury.snippet.name, {}, Mercury.snippet.hasOptions);
        };
      })(this));
      jQuery(this.document).on('keydown', (function(_this) {
        return function(event) {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          switch (event.keyCode) {
            case 90:
              if (!event.metaKey) {
                return;
              }
              event.preventDefault();
              if (event.shiftKey) {
                return _this.execCommand('redo');
              } else {
                return _this.execCommand('undo');
              }
          }
        };
      })(this));
      return jQuery(this.document).on('keyup', (function(_this) {
        return function() {
          if (_this.previewing || Mercury.region !== _this) {
            return;
          }
          return Mercury.changes = true;
        };
      })(this));
    };

    Snippets.prototype.focus = function() {
      Mercury.region = this;
      this.makeSortable();
      return this.element.addClass('focus');
    };

    Snippets.prototype.togglePreview = function() {
      if (this.previewing) {
        this.makeSortable();
      } else {
        this.element.sortable('destroy');
        this.element.removeClass('focus');
      }
      return Snippets.__super__.togglePreview.apply(this, arguments);
    };

    Snippets.prototype.execCommand = function(action, options) {
      var handler;
      if (options == null) {
        options = {};
      }
      Snippets.__super__.execCommand.apply(this, arguments);
      if (handler = Mercury.Regions.Snippets.actions[action]) {
        return handler.call(this, options);
      }
    };

    Snippets.prototype.makeSortable = function() {
      return this.element.sortable('destroy').sortable({
        document: this.document,
        scroll: false,
        containment: 'parent',
        items: '[data-snippet]',
        opacity: 0.4,
        revert: 100,
        tolerance: 'pointer',
        beforeStop: (function(_this) {
          return function() {
            Mercury.trigger('hide:toolbar', {
              type: 'snippet',
              immediately: true
            });
            return true;
          };
        })(this),
        stop: (function(_this) {
          return function() {
            setTimeout((function() {
              return _this.pushHistory();
            }), 100);
            return true;
          };
        })(this)
      });
    };

    Snippets.actions = {
      undo: function() {
        return this.content(this.history.undo());
      },
      redo: function() {
        return this.content(this.history.redo());
      },
      insertSnippet: function(options) {
        var existing, snippet;
        snippet = options.value;
        if ((existing = this.element.find("[data-snippet=" + snippet.identity + "]")).length) {
          return existing.replaceWith(snippet.getHTML(this.document, (function(_this) {
            return function() {
              return _this.pushHistory();
            };
          })(this)));
        } else {
          return this.element.append(snippet.getHTML(this.document, (function(_this) {
            return function() {
              return _this.pushHistory();
            };
          })(this)));
        }
      },
      editSnippet: function() {
        var snippet;
        if (!this.snippet) {
          return;
        }
        snippet = Mercury.Snippet.find(this.snippet.data('snippet'));
        return snippet.displayOptions();
      },
      removeSnippet: function() {
        if (this.snippet) {
          this.snippet.remove();
        }
        return Mercury.trigger('hide:toolbar', {
          type: 'snippet',
          immediately: true
        });
      }
    };

    return Snippets;

  })(Mercury.Region);

}).call(this);
(function() {
  this.Mercury.dialogHandlers.backColor = function() {
    return this.element.find('.picker, .last-picked').on('click', (function(_this) {
      return function(event) {
        var color;
        color = jQuery(event.target).css('background-color');
        _this.element.find('.last-picked').css({
          background: color
        });
        _this.button.css({
          backgroundColor: color
        });
        return Mercury.trigger('action', {
          action: 'backColor',
          value: color
        });
      };
    })(this));
  };

}).call(this);
(function() {
  this.Mercury.dialogHandlers.foreColor = function() {
    return this.element.find('.picker, .last-picked').on('click', (function(_this) {
      return function(event) {
        var color;
        color = jQuery(event.target).css('background-color').toHex();
        _this.element.find('.last-picked').css({
          background: color
        });
        _this.button.css({
          backgroundColor: color
        });
        return Mercury.trigger('action', {
          action: 'foreColor',
          value: color
        });
      };
    })(this));
  };

}).call(this);
(function() {
  this.Mercury.dialogHandlers.formatblock = function() {
    return this.element.find('[data-tag]').on('click', (function(_this) {
      return function(event) {
        var tag;
        tag = jQuery(event.target).data('tag');
        return Mercury.trigger('action', {
          action: 'formatblock',
          value: tag
        });
      };
    })(this));
  };

}).call(this);
(function() {
  this.Mercury.dialogHandlers.snippetPanel = function() {
    this.element.find('input.filter').on('keyup', (function(_this) {
      return function() {
        var i, len, ref, results, snippet, value;
        value = _this.element.find('input.filter').val();
        ref = _this.element.find('li[data-filter]');
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          snippet = ref[i];
          if (LiquidMetal.score(jQuery(snippet).data('filter'), value) === 0) {
            results.push(jQuery(snippet).hide());
          } else {
            results.push(jQuery(snippet).show());
          }
        }
        return results;
      };
    })(this));
    return this.element.find('img[data-snippet]').on('dragstart', function() {
      return Mercury.snippet = {
        name: jQuery(this).data('snippet'),
        hasOptions: !(jQuery(this).data('options') === false)
      };
    });
  };

}).call(this);
(function() {
  this.Mercury.dialogHandlers.style = function() {
    return this.element.find('[data-class]').on('click', (function(_this) {
      return function(event) {
        var className;
        className = jQuery(event.target).data('class');
        return Mercury.trigger('action', {
          action: 'style',
          value: className
        });
      };
    })(this));
  };

}).call(this);
(function() {
  this.Mercury.modalHandlers.htmlEditor = function() {
    var content;
    content = Mercury.region.content(null, true, false);
    this.element.find('textarea').val(content);
    return this.element.find('form').on('submit', (function(_this) {
      return function(event) {
        var value;
        event.preventDefault();
        value = _this.element.find('textarea').val();
        Mercury.trigger('action', {
          action: 'replaceHTML',
          value: value
        });
        return _this.hide();
      };
    })(this));
  };

}).call(this);
(function() {
  this.Mercury.modalHandlers.insertCharacter = function() {
    return this.element.find('.character').on('click', (function(_this) {
      return function(event) {
        Mercury.trigger('action', {
          action: 'insertHTML',
          value: "&" + (jQuery(event.target).attr('data-entity')) + ";"
        });
        return _this.hide();
      };
    })(this));
  };

}).call(this);
(function() {
  this.Mercury.modalHandlers.insertLink = {
    initialize: function() {
      this.editing = false;
      this.content = null;
      this.element.find('.control-label input').on('click', this.onLabelChecked);
      this.element.find('.controls .optional, .controls .required').on('focus', this.onInputFocused);
      this.element.find('#link_target').on('change', (function(_this) {
        return function() {
          return _this.onChangeTarget();
        };
      })(this));
      this.initializeForm();
      return this.element.find('form').on('submit', (function(_this) {
        return function(event) {
          event.preventDefault();
          _this.validateForm();
          if (!_this.valid) {
            _this.resize();
            return;
          }
          _this.submitForm();
          return _this.hide();
        };
      })(this));
    },
    initializeForm: function() {
      var a, bookmarkSelect, href, img, newBookmarkInput, selection;
      this.fillExistingBookmarks();
      if (!(Mercury.region && Mercury.region.selection)) {
        return;
      }
      selection = Mercury.region.selection();
      if (selection.textContent) {
        this.element.find('#link_text').val(selection.textContent());
      }
      if (selection && selection.commonAncestor) {
        a = selection.commonAncestor(true).closest('a');
      }
      if (selection.htmlContent) {
        img = /<img/.test(selection.htmlContent());
      }
      if (!(img || a && a.length)) {
        return false;
      }
      this.element.find('#link_text_container').hide();
      if (img) {
        this.content = selection.htmlContent();
      }
      if (!(a && a.length)) {
        return false;
      }
      this.editing = a;
      if (a.attr('href') && a.attr('href').indexOf('#') === 0) {
        bookmarkSelect = this.element.find('#link_existing_bookmark');
        bookmarkSelect.val(a.attr('href').replace(/[^#]*#/, ''));
        bookmarkSelect.closest('.control-group').find('input[type=radio]').prop('checked', true);
      } else {
        this.element.find('#link_external_url').val(a.attr('href'));
      }
      if (a.attr('name')) {
        newBookmarkInput = this.element.find('#link_new_bookmark');
        newBookmarkInput.val(a.attr('name'));
        newBookmarkInput.closest('.control-group').find('input[type=radio]').prop('checked', true);
      }
      if (a.attr('target')) {
        this.element.find('#link_target').val(a.attr('target'));
      }
      if (a.attr('href') && a.attr('href').indexOf('javascript:void') === 0) {
        href = a.attr('href');
        this.element.find('#link_external_url').val(href.match(/window.open\('([^']+)',/)[1]);
        this.element.find('#link_target').val('popup');
        this.element.find('#link_popup_width').val(href.match(/width=(\d+),/)[1]);
        this.element.find('#link_popup_height').val(href.match(/height=(\d+),/)[1]);
        return this.element.find('#popup_options').show();
      }
    },
    fillExistingBookmarks: function() {
      var bookmarkSelect, i, len, ref, results, tag;
      bookmarkSelect = this.element.find('#link_existing_bookmark');
      ref = jQuery('a[name]', window.mercuryInstance.document);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        tag = ref[i];
        results.push(bookmarkSelect.append(jQuery('<option>', {
          value: jQuery(tag).attr('name')
        }).text(jQuery(tag).text())));
      }
      return results;
    },
    onLabelChecked: function() {
      var forInput;
      forInput = jQuery(this).closest('.control-label').attr('for');
      return jQuery(this).closest('.control-group').find("#" + forInput).focus();
    },
    onInputFocused: function() {
      return jQuery(this).closest('.control-group').find('input[type=radio]').prop('checked', true);
    },
    onChangeTarget: function() {
      this.element.find(".link-target-options").hide();
      this.element.find("#" + (this.element.find('#link_target').val()) + "_options").show();
      return this.resize(true);
    },
    addInputError: function(input, message) {
      input.after('<span class="help-inline error-message">' + Mercury.I18n(message) + '</span>').closest('.control-group').addClass('error');
      return this.valid = false;
    },
    clearInputErrors: function() {
      this.element.find('.control-group.error').removeClass('error').find('.error-message').remove();
      return this.valid = true;
    },
    validateForm: function() {
      var el, type;
      this.clearInputErrors();
      type = this.element.find('input[name=link_type]:checked').val();
      el = this.element.find("#link_" + type);
      if (!el.val()) {
        this.addInputError(el, "can't be blank");
      }
      if (!this.editing && !this.content) {
        el = this.element.find('#link_text');
        if (!el.val()) {
          return this.addInputError(el, "can't be blank");
        }
      }
    },
    submitForm: function() {
      var args, attrs, content, target, type, value;
      content = this.element.find('#link_text').val();
      target = this.element.find('#link_target').val();
      type = this.element.find('input[name=link_type]:checked').val();
      switch (type) {
        case 'existing_bookmark':
          attrs = {
            href: "#" + (this.element.find('#link_existing_bookmark').val())
          };
          break;
        case 'new_bookmark':
          attrs = {
            name: "" + (this.element.find('#link_new_bookmark').val())
          };
          break;
        default:
          attrs = {
            href: this.element.find("#link_" + type).val()
          };
      }
      switch (target) {
        case 'popup':
          args = {
            width: parseInt(this.element.find('#link_popup_width').val()) || 500,
            height: parseInt(this.element.find('#link_popup_height').val()) || 500,
            menubar: 'no',
            toolbar: 'no'
          };
          attrs['href'] = "javascript:void(window.open('" + attrs['href'] + "', 'popup_window', '" + (jQuery.param(args).replace(/&/g, ',')) + "'))";
          break;
        default:
          if (target) {
            attrs['target'] = target;
          }
      }
      value = {
        tagName: 'a',
        attrs: attrs,
        content: this.content || content
      };
      if (this.editing) {
        return Mercury.trigger('action', {
          action: 'replaceLink',
          value: value,
          node: this.editing.get(0)
        });
      } else {
        return Mercury.trigger('action', {
          action: 'insertLink',
          value: value
        });
      }
    }
  };

}).call(this);
(function() {
  this.Mercury.modalHandlers.insertMedia = {
    initialize: function() {
      this.element.find('.control-label input').on('click', this.onLabelChecked);
      this.element.find('.controls .optional, .controls .required').on('focus', (function(_this) {
        return function(event) {
          return _this.onInputFocused($(event.target));
        };
      })(this));
      this.focus('#media_image_url');
      this.initializeForm();
      return this.element.find('form').on('submit', (function(_this) {
        return function(event) {
          event.preventDefault();
          _this.validateForm();
          if (!_this.valid) {
            _this.resize();
            return;
          }
          _this.submitForm();
          return _this.hide();
        };
      })(this));
    },
    initializeForm: function() {
      var iframe, image, selection, src;
      if (!(Mercury.region && Mercury.region.selection)) {
        return;
      }
      selection = Mercury.region.selection();
      if (image = typeof selection.is === "function" ? selection.is('img') : void 0) {
        this.element.find('#media_image_url').val(image.attr('src'));
        this.element.find('#media_image_alignment').val(image.attr('align'));
        this.element.find('#media_image_float').val(image.attr('style') != null ? image.css('float') : '');
        this.element.find('#media_image_width').val(image.width() || '');
        this.element.find('#media_image_height').val(image.height() || '');
        this.focus('#media_image_url');
      }
      if (iframe = typeof selection.is === "function" ? selection.is('iframe') : void 0) {
        src = iframe.attr('src');
        if (/^https?:\/\/www.youtube.com\//i.test(src)) {
          this.element.find('#media_youtube_url').val((src.match(/^https?/)[0]) + "://youtu.be/" + (src.match(/\/embed\/(\w+)/)[1]));
          this.element.find('#media_youtube_width').val(iframe.width());
          this.element.find('#media_youtube_height').val(iframe.height());
          return this.focus('#media_youtube_url');
        } else if (/^https?:\/\/player.vimeo.com\//i.test(src)) {
          this.element.find('#media_vimeo_url').val((src.match(/^https?/)[0]) + "://vimeo.com/" + (src.match(/\/video\/(\w+)/)[1]));
          this.element.find('#media_vimeo_width').val(iframe.width());
          this.element.find('#media_vimeo_height').val(iframe.height());
          return this.focus('#media_vimeo_url');
        }
      }
    },
    focus: function(selector) {
      return setTimeout(((function(_this) {
        return function() {
          return _this.element.find(selector).focus();
        };
      })(this)), 300);
    },
    onLabelChecked: function() {
      var forInput;
      forInput = jQuery(this).closest('.control-label').attr('for');
      return jQuery(this).closest('.control-group').find("#" + forInput).focus();
    },
    onInputFocused: function(input) {
      input.closest('.control-group').find('input[type=radio]').prop('checked', true);
      if (input.closest('.media-options').length) {
        return;
      }
      this.element.find(".media-options").hide();
      this.element.find("#" + (input.attr('id').replace('media_', '')) + "_options").show();
      return this.resize(true);
    },
    addInputError: function(input, message) {
      input.after('<span class="help-inline error-message">' + Mercury.I18n(message) + '</span>').closest('.control-group').addClass('error');
      return this.valid = false;
    },
    clearInputErrors: function() {
      this.element.find('.control-group.error').removeClass('error').find('.error-message').remove();
      return this.valid = true;
    },
    validateForm: function() {
      var el, type, url;
      this.clearInputErrors();
      type = this.element.find('input[name=media_type]:checked').val();
      el = this.element.find("#media_" + type);
      switch (type) {
        case 'youtube_url':
          url = this.element.find('#media_youtube_url').val();
          if (!/^https?:\/\/youtu.be\//.test(url)) {
            return this.addInputError(el, "is invalid");
          }
          break;
        case 'vimeo_url':
          url = this.element.find('#media_vimeo_url').val();
          if (!/^https?:\/\/vimeo.com\//.test(url)) {
            return this.addInputError(el, "is invalid");
          }
          break;
        default:
          if (!el.val()) {
            return this.addInputError(el, "can't be blank");
          }
      }
    },
    submitForm: function() {
      var alignment, attrs, code, float, height, protocol, type, url, value, width;
      type = this.element.find('input[name=media_type]:checked').val();
      switch (type) {
        case 'image_url':
          attrs = {
            src: this.element.find('#media_image_url').val()
          };
          if (alignment = this.element.find('#media_image_alignment').val()) {
            attrs['align'] = alignment;
          }
          attrs['style'] = '';
          if (float = this.element.find('#media_image_float').val()) {
            attrs['style'] += 'float: ' + float + '; ';
          }
          if (width = this.element.find('#media_image_width').val()) {
            attrs['style'] += 'width: ' + width + 'px; ';
          }
          if (height = this.element.find('#media_image_height').val()) {
            attrs['style'] += 'height: ' + height + 'px;';
          }
          return Mercury.trigger('action', {
            action: 'insertImage',
            value: attrs
          });
        case 'youtube_url':
          url = this.element.find('#media_youtube_url').val();
          code = url.replace(/https?:\/\/youtu.be\//, '');
          protocol = 'http';
          if (/^https:/.test(url)) {
            protocol = 'https';
          }
          value = jQuery('<iframe>', {
            width: parseInt(this.element.find('#media_youtube_width').val(), 10) || 560,
            height: parseInt(this.element.find('#media_youtube_height').val(), 10) || 349,
            src: protocol + "://www.youtube.com/embed/" + code + "?wmode=transparent",
            frameborder: 0,
            allowfullscreen: 'true'
          });
          return Mercury.trigger('action', {
            action: 'insertHTML',
            value: value
          });
        case 'vimeo_url':
          url = this.element.find('#media_vimeo_url').val();
          code = url.replace(/^https?:\/\/vimeo.com\//, '');
          protocol = 'http';
          if (/^https:/.test(url)) {
            protocol = 'https';
          }
          value = jQuery('<iframe>', {
            width: parseInt(this.element.find('#media_vimeo_width').val(), 10) || 400,
            height: parseInt(this.element.find('#media_vimeo_height').val(), 10) || 225,
            src: protocol + "://player.vimeo.com/video/" + code + "?title=1&byline=1&portrait=0&color=ffffff",
            frameborder: 0
          });
          return Mercury.trigger('action', {
            action: 'insertHTML',
            value: value
          });
      }
    }
  };

}).call(this);
(function() {
  this.Mercury.modalHandlers.insertSnippet = function() {
    return this.element.find('form').on('submit', (function(_this) {
      return function(event) {
        var serializedForm, snippet;
        event.preventDefault();
        serializedForm = _this.element.find('form').serializeObject();
        if (Mercury.snippet) {
          snippet = Mercury.snippet;
          snippet.setOptions(serializedForm);
          Mercury.snippet = null;
        } else {
          snippet = Mercury.Snippet.create(_this.options.snippetName, serializedForm);
        }
        Mercury.trigger('action', {
          action: 'insertSnippet',
          value: snippet
        });
        return _this.hide();
      };
    })(this));
  };

}).call(this);
(function() {
  this.Mercury.modalHandlers.insertTable = {
    initialize: function() {
      this.table = this.element.find('#table_display table');
      this.table.on('click', (function(_this) {
        return function(event) {
          return _this.onCellClick($(event.target));
        };
      })(this));
      this.element.find('#table_alignment').on('change', (function(_this) {
        return function() {
          return _this.setTableAlignment();
        };
      })(this));
      this.element.find('#table_border').on('keyup', (function(_this) {
        return function() {
          return _this.setTableBorder();
        };
      })(this));
      this.element.find('#table_spacing').on('keyup', (function(_this) {
        return function() {
          return _this.setTableCellSpacing();
        };
      })(this));
      this.element.find('[data-action]').on('click', (function(_this) {
        return function(event) {
          event.preventDefault();
          return _this.onActionClick(jQuery(event.target).data('action'));
        };
      })(this));
      this.selectFirstCell();
      return this.element.find('form').on('submit', (function(_this) {
        return function(event) {
          event.preventDefault();
          _this.submitForm();
          return _this.hide();
        };
      })(this));
    },
    selectFirstCell: function() {
      var firstCell;
      firstCell = this.table.find('td, th').first();
      firstCell.addClass('selected');
      return Mercury.tableEditor(this.table, firstCell, '&nbsp;');
    },
    onCellClick: function(cell) {
      this.cell = cell;
      this.table = this.cell.closest('table');
      this.table.find('.selected').removeAttr('class');
      this.cell.addClass('selected');
      return Mercury.tableEditor(this.table, this.cell, '&nbsp;');
    },
    onActionClick: function(action) {
      if (!action) {
        return;
      }
      return Mercury.tableEditor[action]();
    },
    setTableAlignment: function() {
      return this.table.attr({
        align: this.element.find('#table_alignment').val()
      });
    },
    setTableBorder: function() {
      var border;
      border = parseInt(this.element.find('#table_border').val(), 10);
      if (isNaN(border)) {
        return this.table.removeAttr('border');
      } else {
        return this.table.attr({
          border: border
        });
      }
    },
    setTableCellSpacing: function() {
      var cellspacing;
      cellspacing = parseInt(this.element.find('#table_spacing').val(), 10);
      if (isNaN(cellspacing)) {
        return this.table.removeAttr('cellspacing');
      } else {
        return this.table.attr({
          cellspacing: cellspacing
        });
      }
    },
    submitForm: function() {
      var html, value;
      this.table.find('.selected').removeAttr('class');
      this.table.find('td, th').html('<br/>');
      html = jQuery('<div>').html(this.table).html();
      value = html.replace(/^\s+|\n/gm, '').replace(/(<\/.*?>|<table.*?>|<tbody>|<tr>)/g, '$1\n');
      return Mercury.trigger('action', {
        action: 'insertTable',
        value: value
      });
    }
  };

}).call(this);
(function() {
  if (Mercury.onload) {
    Mercury.onload();
  }

  jQuery(window).trigger('mercury:loaded');

}).call(this);
$(document).ready(function() {
    $('.nav-top li.menu-icon a').click(function() {
        navTop = $('.nav-top');
        if (navTop.attr("class") === "nav-top") {
            navTop.attr("class", "nav-top responsive");
        } else {
            navTop.attr("class", "nav-top");
        }
    });
});
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
