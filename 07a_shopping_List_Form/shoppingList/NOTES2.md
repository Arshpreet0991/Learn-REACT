# Handling Forms with multiple Inputs.

- To handle multiple user inputs, we can add more states. In the above example, to get the last name of a user, we can add:
  ```js
  const [lastName, setLastName] = useState("");
  ```
- But if we have 20 fields, managing 20 separate states becomes very difficult. This approach doesn’t scale.
- To handle forms with multiple inputs more efficiently, we can `use a single state object that holds multiple input values`.

## Sign Up Form example

- We are creating a signup form two input fields.
  - 1st text box represents `first name`
  - 2nd text box represents `last name`
- we will create state named formData.
  - formData is an object with keys named firstName and lastName

```jsx
export default function SignUpForm() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handleChange = (evt) => {
    const fieldName = evt.target.name;
    // Name of the field that will change according to the selected input field
    const newValue = evt.target.value; // value that the fieldName changed to

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          name="firstName"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          name="lastName"
        />

        <button>Submit</button>
      </div>
    </>
  );
}
```

""

### How the Multi-Input Form Works

- We create a **generic `handleChange` method** that can handle any number of fields in the state object.
  - For example, if we add a `password` field in the future, we only need to create the input element and attach the same `onChange` method.
  - This approach is very useful for scaling forms.

- Each input box has a `name` attribute that matches a key in the `formData` state object. **Very important:** the state keys must match the input `name` attributes to correctly link the input to the state.

- When the user types, `onChange` fires and receives an event (`evt`).

- `evt.target` is the input element that triggered the event.

- `evt.target.name` gives the key of the state object to update (e.g., `"firstName"`).

- `evt.target.value` gives the current value typed by the user.

- In `setFormData`, we use `currData[fieldName] = newValue` to dynamically update the correct property.

- React re-renders, and the updated `formData` value is reflected in the input through `value={formData.firstName}` (or the corresponding field).

- Using this pattern, **one handler can efficiently manage multiple inputs** without creating separate state handlers for each input.
