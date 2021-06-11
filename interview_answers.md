<!-- # Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve? -->

Context API avoids prop drilling and redux by producing global variables that pass around inside the components no matter how deep it is.

<!-- 2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? -->


Actions are transferable javascript objects with a  labeled type property. Action creators are functions that compartmentalize the actions and eventually return the data to the reducer.
 The reducer are presets for the actions that are in constant change depending on the selected case statement. 
However,the store is an immutable state tree in Redux and runs independently while holding the current application state. The store also updates, callbacks, and runs other methods that are needed to operate a component(s).


<!--  3. What does `redux-thunk` allow us to do? How does it change our `action-creators`? -->
Redux-Thunk makes asynchronous calls by using functions that receive a dispatch for an argument.


<!--  4. What is your favorite state management system you've learned and this sprint? Please explain why! 
-->

My favorite state management system is context API. It avoids props drilling, which can be a time burden in most cases.