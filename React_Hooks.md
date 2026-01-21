# Common REACT hooks

### useState Hook

- useState is a React Hook that lets a functional component store and update state.
- When state changes → component re-renders.

  ```jsx
  const [state, setState] = useState(initialValue);
  ```

### useCallback

- It is a hook that lets us cache a function definition between re-renders.
- used for memoization and optimization.
- suppose we have a function that runs a lot when a state changes, then it is a good idea to cache that function to save processing power.

  ```jsx
  const cachedFunction = useCallback(fn, dependencies);
  ```

### useEffect Hook

- useEffect is a hook that let us synchronize a component with external system.
  ```jsx
  useEffect((callback) => {}, [dependecies]);
  ```

### useRef Hook

- it is used to get a reference of a component/element
  ```jsx

  ```
