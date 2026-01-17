# Forms in React

- In vanilla JavaScript, we usually use HTML forms to collect user input.
- The user enters data into an input field (for example, text).
- When the form is submitted, JavaScript reads the value from the input element.

- In React, we do not rely on the DOM to read input values at submit time.
- Instead, we create state variables for form inputs.
- As the user types, the input’s `onChange` event updates the state in real time.
- Because of this, the current input value is always available in state, even before the form is submitted.

### Example of a React Form

- Suppose we are working with a text input to collect user input.
- In React, the input element has a `value` attribute that is set from state. So, the state variable is set to value.
- The `value` attribute determines what is displayed in the input field.
- We also add an `onChange` handler to the input.
- The `onChange` handler updates the state as the user types, keeping the input and state in sync.

```js
export default function NormalForm() {
  const [username, setUsername] = useState("");

  return (
    <>
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold mb-7">Registration Form</p>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button>Submit</button>
      </div>
    </>
  );
}
```

- The `username` state is bound to the input’s `value` attribute.
- The `value` determines what is displayed in the text box.
- The `onChange` handler updates the state whenever the user types.
- Flow in real time:
  user types -> onChange fires -> state is updated via setUsername -> React re-renders -> value attribute sets the input display

### Accessing Input Values with `e.target` in React

- In the `onChange` handler, `e.target` refers to the element that triggered the event.
- `e.target.value` gives the current text inside an input element.
- This is how we “select” and access the value of an input element in React.
- Whichever element triggers an event, `e.target` lets us access that element.
- `e.target` always refers to the DOM element that triggered the event, no matter what type of element it is.
- For example:
  - If it’s an `<input>`, `e.target.value` gives what the user typed.
  - If it’s a `<button>` or `<select>`, `e.target` still points to that element, and you can access its properties.
