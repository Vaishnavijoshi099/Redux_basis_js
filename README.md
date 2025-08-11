# Redux Basics in JavaScript

This repository contains basic **Redux** examples implemented in plain JavaScript to demonstrate core concepts such as **store**, **reducers**, **actions**, and **combineReducers**.

The examples here are kept **framework-agnostic** (no React) to focus purely on understanding Redux fundamentals.

---

## 📚 Topics Covered

1. **Redux Store**
   - Centralized state management.
   - Created using `createStore` from Redux.
   - Holds the entire state tree of your application.

2. **Actions**
   - Plain JavaScript objects describing what happened.
   - Must have a `type` property.
   - Example:
     ```js
     { type: "BUY_FOOTBALL" }
     ```

3. **Reducers**
   - Pure functions that take the current state and an action, then return a new state.
   - Example:
     ```js
     const footballReducer = (state = { footballs: 20 }, action) => {
       switch (action.type) {
         case "BUY_FOOTBALL":
           return { ...state, footballs: state.footballs - 1 };
         default:
           return state;
       }
     };
     ```

4. **combineReducers**
   - A Redux helper function that combines multiple reducers into a single root reducer.
   - Allows separation of logic for different parts of the state.

5. **Dispatch**
   - The only way to update the state.
   - Sends an action to the store.
   - Example:
     ```js
     store.dispatch(buyFootball());
     ```

6. **Subscription**
   - Listens for state changes using `store.subscribe`.

---

## 📂 Files in this Repo

1. **`Sports.js`**
   - Demonstrates multiple reducers (`footballReducer`, `batReducer`) combined using `combineReducers`.
   - Tracks and updates football and bat inventory.

2. **`GroceryShop.js`**
   - Example showing purchase of grocery items via Redux actions.
   - Focuses on a single reducer.

3. **`PenStore.js`**
   - Demonstrates managing inventory for pens.
   - Good starter example for understanding `createStore` and dispatching actions.

4. **`index.js`**
   - Entry point that imports and runs the examples.

---

## 🛠 Installation & Run

```bash
# Clone the repository
git clone https://github.com/Vaishnavijoshi099/Redux_basis_js.git

# Navigate into the folder
cd Redux_basis_js

# Install dependencies
npm install

# Run any example file
node Sports.js
node GroceryShop.js
node PenStore.js
````

---

## 🔍 Example Output

Running `node Sports.js`:

```
initial state { football: { footballs: 20 }, bat: { bats: 50 } }
Updated state { football: { footballs: 18 }, bat: { bats: 50 } }
Updated state { football: { footballs: 18 }, bat: { bats: 49 } }
Updated state { football: { footballs: 15 }, bat: { bats: 49 } }
Updated state { football: { footballs: 15 }, bat: { bats: 47 } }
```

---

## 📖 Learning Notes

* Always use **pure functions** for reducers.
* Never mutate the state directly; return a **new object**.
* `combineReducers` is optional but highly recommended for multiple state slices.
* Redux can be used without React — as shown here — to clearly understand its mechanics.

---
