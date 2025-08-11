# Redux Tutorial Project

This project is a simple demonstration of **Redux** concepts, including synchronous and asynchronous actions, reducers, store, and middleware.  
It fetches a list of users from an API and manages state using Redux.

---

## 📚 Topics Covered

### 1. **Redux Basics**
- **Store** → Centralized place where the entire state of the application is stored.
- **Actions** → Plain JavaScript objects that describe what happened.  
  Example:
  ```js
  { type: 'FETCH_USERS_REQUEST' }
````

* **Reducers** → Functions that take the current state and action, and return the new state.
* **Dispatch** → Method used to send actions to the store.
* **Subscribe** → Method to listen for state updates.

---

### 2. **Middleware in Redux**

Middleware is a way to **extend Redux** with custom functionality. It sits between **dispatching an action** and the moment it reaches the reducer.

#### Common Middleware:

* **redux-logger** → Logs actions and state changes.
* **redux-thunk** → Allows dispatching functions for async operations.

Example of applying middleware:

```js
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
```

---

### 3. **Asynchronous Actions**

* In Redux, actions are usually synchronous.
* To handle async operations like API calls, we use **redux-thunk** middleware.
* Instead of returning an object, we return a function that can dispatch multiple actions.

Example:

```js
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user.name);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message));
            });
    };
};
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Redux-tutorial
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Async Actions Example

```bash
node asyncActions.js
```

You should see:

```
{ loading: true, users: [], error: '' }
{ loading: false, users: [ 'Leanne Graham', ... ], error: '' }
```

---

## 📦 Project Structure

```
Redux-tutorial/
│-- node_modules/        # Ignored in .gitignore
│-- asyncActions.js      # Example of async Redux actions with thunk
│-- actionTypes.js       # Action type constants
│-- actions.js           # Action creators
│-- reducer.js           # Reducer function
│-- store.js             # Redux store configuration
│-- package.json         # Dependencies and scripts
│-- .gitignore           # Node modules ignored
│-- README.md            # Documentation
```

---

## 🛠 Technologies Used

* **JavaScript (ES6)**
* **Redux**
* **Redux Thunk**
* **Axios**

---


