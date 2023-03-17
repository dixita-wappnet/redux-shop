# Three Core Concepts 

| Cake Shop Scenario | Redux | Purpose |
|--------------------|-------|---------|
| Shop               | Store |Holds the state of your application |
| Intention to BUY_CAKE | Action | Describes what happened |
| Shopkeeper | Reducer | Ties the store and actions together |


- A `store` that holds the state of your application.
- An `action` that describes the changes in the state of the application.
- A `reducer` which actually carries out the state transition depending on the action.

# Three Principles 

## First Principle 

- "The state of your whole application is stored in an object tree within a single store"
- Maintain our application state in a single object which would be managed by the Redux store

### Cake Shop :- 

- Let's assume we are tracking the number of cakes on the shelf
``` 
   {
     numberOfCakes: 10
   }     
```

## Second Principle 

- "The only way to change the state is to emit an action, an object describing what happened"
- To update the state of your app, you need to let Redux know about that with an action.
- Not allowed to directly update the state object

### Cake Shop :- 

- Let the shopkeeper know about our action - BUY_CAKE
```
{
  type:BUY_CAKE
}
```

## Third Principle 

- "To specify how the state tree is transformed by actions, you write pure reducers".
- Reducer - (previousState, action) => newState

### Cake Shop 

- Reducer is the shopkeeper
```
const reducer = (state, action) => {
      switch (action.type) {
          case BUY_CAKE: return {
             numberOfCakes: state.numOfCakes - 1
          }
      }
}
``` 

# Actions 

- The only way your application can interact with the store.
- Carry some information from your app to the redux store.
- Plain JavaScript objects.
- Have a 'type' property is typically defined as string constants.
- The 'type' property is typically defined as string constants.

# Reducers 

- Specify how the app's state changes in response to actions sent to the store.
- Function that accepts state and action as arguements, and returns the next state of the application
- (previousState, action) => newState 
