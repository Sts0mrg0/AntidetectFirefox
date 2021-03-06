// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-9-2
description: >
    Array.prototype.reduce considers new value of elements in array
    after it is called
---*/

  function callbackfn(prevVal, curVal, idx, obj)
  {
    arr[3] = -2;
    arr[4] = -1;
    return prevVal + curVal;
  }

  var arr = [1,2,3,4,5];

assert.sameValue(arr.reduce(callbackfn), 3, 'arr.reduce(callbackfn)');

reportCompare(0, 0);
