# An minimal example for the idb typing issue

ref: https://github.com/jakearchibald/idb/issues/327

## How to try

```
$ npm i
$ npm run build

> build
> tsc

node_modules/idb/build/entry.d.ts:121:18 - error TS2430: Interface 'TypedDOMStringList<T>' incorrectly extends interface 'DOMStringList'.
  The types returned by '[Symbol.iterator]()' are incompatible between these types.
    Type 'IterableIterator<T>' is missing the following properties from type 'ArrayIterator<string>': map, filter, take, drop, and 9 more.

121 export interface TypedDOMStringList<T extends string> extends DOMStringList {
                     ~~~~~~~~~~~~~~~~~~
```
