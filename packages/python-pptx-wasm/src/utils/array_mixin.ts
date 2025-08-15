import type { Type } from './types';

export const MutableArrayMixin = <T, B extends Type>(Base: B) => {
  abstract class Class extends Base implements Iterable<T> {
    abstract get length(): number;
    abstract getItem(index: number): T;

    /**
     * items are readonly if not implemented
     */
    setItem?(index: number, value: T): void;

    // @ts-expect-error
    map<U>(callback: (value: T, index: number, array: this) => U, thisArg?: any): U[];
    // @ts-expect-error
    forEach(callback: (value: T, index: number, array: this) => void, thisArg?: any): void;
    // @ts-expect-error
    filter(callback: (value: T, index: number, array: this) => boolean, thisArg?: any): T[];
    // @ts-expect-error
    find(callback: (value: T, index: number, array: this) => boolean, thisArg?: any): T | undefined;
    // @ts-expect-error
    some(callback: (value: T, index: number, array: this) => boolean, thisArg?: any): boolean;
    // @ts-expect-error
    every(callback: (value: T, index: number, array: this) => boolean, thisArg?: any): boolean;

    [index: number]: T;

    constructor(...args: ConstructorParameters<Type<B>>) {
      super(...args);
      return new Proxy(this, {
        get(target, prop, receiver) {
          if (prop === Symbol.iterator) return target[Symbol.iterator].bind(target);

          if (typeof prop === 'string' && /^\d+$/.test(prop)) {
            return target.getItem(Number(prop));
          }
          if (prop === 'length') return target.length;

          const banned = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse', 'fill', 'copyWithin'];
          if (banned.includes(prop as string)) return undefined;

          const arrayLikeMethods = {
            map: (cb: any, thisArg?: any) => Array.from(target).map((v, i) => cb.call(thisArg, v, i, target)),
            forEach: (cb: any, thisArg?: any) => Array.from(target).forEach((v, i) => cb.call(thisArg, v, i, target)),
            filter: (cb: any, thisArg?: any) => Array.from(target).filter((v, i) => cb.call(thisArg, v, i, target)),
            find: (cb: any, thisArg?: any) => Array.from(target).find((v, i) => cb.call(thisArg, v, i, target)),
            some: (cb: any, thisArg?: any) => Array.from(target).some((v, i) => cb.call(thisArg, v, i, target)),
            every: (cb: any, thisArg?: any) => Array.from(target).every((v, i) => cb.call(thisArg, v, i, target))
          };

          if (prop in arrayLikeMethods) {
            return (arrayLikeMethods as any)[prop];
          }

          return Reflect.get(target, prop, receiver);
        },

        has(target, prop) {
          if (typeof prop === 'string' && /^\d+$/.test(prop)) {
            const index = Number(prop);
            return index >= 0 && index < target.length;
          }
          return Reflect.has(target, prop);
        },

        set(target, prop, value, receiver) {
          if (typeof prop === 'string' && /^\d+$/.test(prop)) {
            if (typeof target.setItem === 'function') {
              const index = Number(prop);
              if (index >= 0 && index < target.length) {
                target.setItem(index, value);
                return true;
              }
              return false;
            }
            return false;
          }

          // allow setting non-index properties
          return Reflect.set(target, prop, value, receiver);
        }
      });
    }

    [Symbol.iterator](): Iterator<T> {
      let i = 0;
      const len = this.length;
      return {
        next: () => {
          if (i < len) return { value: this.getItem(i++), done: false };
          return { value: undefined, done: true };
        }
      };
    }
  }

  return Class;
};
