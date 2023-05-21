'use strict';
import assert from 'power-assert';

const somefunc = (inparr, element, firstInd=0) => {
    if (!inparr[firstInd]) return -1;
    for (let i=firstInd; i<inparr.length; i++)
    {
        if (inparr[i]===element) return i;
    }
    return -1;
}

let l = {
    name: 'SomeDude',
    age: 18,
    friends: ['ThatOtherDude', 'Dudette'],
    lastfield: 'dummyvalue'
}
assert(l.age === 20);
//findIndexOf(l);
console.log(somefunc([10, 'same', 324, 65535, 23, 824, 326, 158, true, {}], 'same'));