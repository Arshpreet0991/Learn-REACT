# State variables in react

- State variables are variables declared inside a component whose values can change across re-renders.
- Anything we expect to change its value and will cause a component refresh/ re-render, should probably go into a state.
- State update → re-render.

## Using state

- to use states, we use a React hook(function) called useState.

- useState returns us an array with two elements. first element is always the variable which holds the value, and second element always holds a function which will set the value of the first element.

  ```js
  const [count, setCount] = useState(0);

  // here, count is the variable which holds the current value
  // setCount is a function which is called to change the value of count.
  // useState(0), 0 here refers to a default value of count.
  ```

## Working of states

- The following example shows how to use states in a component.

```js
export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(15)}> Increment </button>
    </>
  );
}
```

- Here, the function counter(which is a component) is executed, and the value of state variable count is 0.
- then in the return statement, when the button is clicked, setCount(15) is called. This schedules the state variable count = 15, **BUT ONLY ON NEXT RENDER.**
- Now, since the setCount was called after clicking the button, this triggers a re-render.
- Now the function is again executed line by line, but when the code reaches **const [count, setCount]= useState(0)**, count is not assigned the default value, it is now assigned 15.
- **_State values are frozen during a render. They never change until the next render happens._**

## rendering in Batches

- consider the following example:

```js
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
}
```

- here, when the button is clicked, setCount is called.
- if we go by normal js, the count should be equal to 3 by the end of third _setCount()_. But it doesnt happen.
- because, when the first _setCount(count +1)_ is called, it works like this:
  - count = 0 (default values)
  - count = count + 1 (count = 0 + 1)
  - Thus, count = 1
  - This first _setCount_, will schedule a re-render. The re-render is scheduled for the next render, before that, the value of the count is not updated, thus count is still equal to 0.
- Now, we come to the 2nd setCount().
  - here, since the original value of the count is still 0, we again get the same:
  - count=0 (default values)
  - count=count + 1
  - count=1
  - setCount again triggers a re-render for future, but the values of count remains 0/
- same thing happens with the 3rd setCount.
- So, when the render happens, we only get the count=1, and not count =3.
- because all the setCount were setting the value of the count to 1.
- Therefore, react renders in batches. It only renders the final value, instead of rendering in step by step.
- If in anycase, we need to access the latest value in the current state, we use an updater function like this:

```js
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
setCount((prev) => prev + 1);
```

- Here, prev contains the latest value, which is not yet rendered.
