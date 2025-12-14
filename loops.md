# Loops & Iteration Methods Cheat Sheet

#### What is a side effect?

- A side effect happens when a function does something outside its own scope—something that affects the world outside the function.

  - Examples:

    - Logging to the console: console.log(item)

    - Modifying a global variable

    - Updating the DOM (like changing the text on a webpage)

    - Writing to a file (in Node.js)

#### 1️⃣ for loop (classic)

```js
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

- **Purpose:** General-purpose loop for arrays or numbers; total control over iteration

- **Returns:** Nothing

- **Use when:** You need indexes, want to break or continue, or loop in reverse

- **Avoid when:** Simple iteration with side effects or transformation (use forEach or map instead)

#### 2️⃣ for...of loop (ES6)

```js
for (const item of array) {
  console.log(item);
}
```

- **Purpose:** Iterate over values of an array, string, or other iterable

- **Returns:** Nothing

- **Use when:** You just need each value; want to break or continue

- **Avoid when:** You need a new transformed array (use map)

#### 3️⃣ for...in loop

```js
for (const key in object) {
  console.log(key, object[key]);
}
```

- **Purpose:** Iterate over enumerable keys of an object

- **Returns:** Nothing

- **Use when:** You want keys of an object (careful with inherited properties)

- **Avoid when:** Iterating arrays (may include extra properties)

#### 4️⃣ forEach (array method)

```js
array.forEach((item) => console.log(item));
```

- **Purpose:** Run a function for each array element (side effects only)

- **Returns:** undefined

- **Use when:** Logging, updating external variables, modifying DOM, side effects

- **Avoid when:** You want to create a new array (use map) or stop early (cannot break)

#### 5️⃣ map (array method)

```js
const doubled = array.map((item) => item * 2);
```

- **Purpose:** Transform an array into a new array of the same length

- **Returns:** New array

- **Use when:** You want a transformed array

- **Avoid when:** You only want side effects (use forEach)

#### 6️⃣ filter (array method)

```js
const evens = array.filter((item) => item % 2 === 0);
```

- **Purpose:** Select subset of array elements based on condition

- **Returns:** New array (may be shorter)

- **Use when:** You want to remove unwanted elements

- **Avoid when:** You need transformation (use map)

#### 7️⃣ reduce (array method)

```js
const sum = array.reduce((acc, item) => acc + item, 0);
```

- **Purpose:** Accumulate all elements into one value

- **Returns:** Single value (number, string, object, array, etc.)

- **Use when:** Sum, product, combine objects, flatten arrays

- **Avoid when:** You just need side effects (use forEach)

#### 8️⃣ Object.keys()

```js
Object.keys(obj).forEach((key) => console.log(key, obj[key]));
```

- **Purpose:** Get array of object keys to iterate over

- **Returns:** Array of keys

- **Use when:** You want array methods (map, filter, reduce) for object keys

- **Avoid when:** You only need values (use Object.values)

#### 9️⃣ Object.values()

```js
Object.values(obj).forEach((value) => console.log(value));
```

- **Purpose:** Get array of object values to iterate over

- **Returns:** Array of values

- **Use when:** You only need the values

- **Avoid when:** You also need keys (use Object.entries)

#### 0️⃣ Object.entries()

```js
Object.entries(obj).forEach(([key, value]) => console.log(key, value));
```

- **Purpose:** Get array of [key, value] pairs for iteration

- **Returns:** Array of [key, value] arrays

- **Use when:** You want both key and value and can use array methods (map, filter)

- **Avoid when:** You only need keys or values (use Object.keys/Object.values)
