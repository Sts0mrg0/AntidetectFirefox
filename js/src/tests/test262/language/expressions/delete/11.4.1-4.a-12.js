// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
es5id: 11.4.1-4.a-12
description: delete operator returns false when deleting a property(length)
flags: [noStrict]
---*/

  var a = [1,2,3]
  a.x = 10;
  var d = delete a.length

assert.sameValue(d, false, 'd');
assert.sameValue(a.length, 3, 'a.length');

reportCompare(0, 0);