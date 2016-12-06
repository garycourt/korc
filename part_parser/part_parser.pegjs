{
  var trim = function (str) {
    return str.replace(/\s+$/, "");
  };
  
  var $garbage = [];
}

START = NIL blocks:PROPERTIES NIL EOF_GARBAGE
{
  if ($garbage.length) blocks.$garbage = $garbage;
  return blocks;
}

EOF = !.
WS = " " / "\t" / "\uFEFF" { return; }
LF = "\r" / "\n" { return; }
COMMENT = "//" [^\n]+ { return; }
NIL = (WS / LF / COMMENT)* { return; }

ANY = text:[^\n]+ { return trim(text.join("")); }
VAR = text:[0-9A-Za-z_,]+ { return text.join(""); }
SLASH = text:("/" !"/") { return "/"; }
VALUE = text:([^\n/] / SLASH)+ { return trim(text.join("")); }

VARIABLE = NIL name:VAR WS* "=" WS* value:VALUE? NIL
{
  return [name, value];
}

BLOCK = type:VAR NIL "{" NIL properties:PROPERTIES NIL ("}" NIL / EOF)  /* GARBAGE: EOF */
{
  return [type, properties];
}

PROPERTIES = properties:(BLOCK / VARIABLE / GARBAGE)*
{
  var block = {};
  for (var x = 0, xl = properties.length; x < xl; ++x) {
    var value = properties[x];
    if (Array.isArray(value)) {
      if (Object.prototype.hasOwnProperty.call(block, value[0])) {
        if (Array.isArray(block[value[0]])) {
          block[value[0]].push(value[1]);
        } else {
          block[value[0]] = [ block[value[0]] , value[1] ];
        }
      } else {
        block[value[0]] = [ value[1] ];
      }
    }
  }
  return block;
}

/* Ignores illegal entries */

GARBAGE = garbage:[^\n{}]+ ("\n" / EOF) 
{
  $garbage.push({
    start : location().start,
    end	  : location().end,
    value : garbage.join("")
  });
  return; 
}

EOF_GARBAGE = garbage:.* EOF
{
  if (garbage.length) $garbage.push({
    start : location().start,
    end	  : location().end,
    value : garbage.join("")
  });
  return; 
}