- Duplicate 'src' forlder to 'src-no-context'
- review data flow and passed props
- identify prop drilling problem
- use the context api to fix the (very small) prop drilling problem
- create a new context 'QuizContext' with the reducer we created earlier
- create a custom provider component 'QuizProvider' and prive all the state to the app
- crate a custom hook to consume state all over the application
- delete all unnecessary props
- IMPORTANT note how you actually need state right in App component.
  this means you need to wrap the whole App into the context (hint: try in index.js)
