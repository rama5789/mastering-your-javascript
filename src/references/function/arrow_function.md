# Arrow Functions :

- Arrow functions were introduced in ES6.
- Arrow functions allow us to write shorter function syntax.

### Before :

```javascript
hello = function () {
  return 'Hello World!';
};
```

### With Arrow Function :

```javascript
hello = () => {
  return 'Hello World!';
};
```

### Arrow Function returns Value by Default :

If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword.

- This works only if the function has only one statement.

```javascript
hello = () => 'Hello World!';
```

### Arrow Function With Parameters :

If you have parameters, you pass them inside the parentheses:

```javascript
hello = (val) => 'Hello ' + val;
```

### Arrow Function Without Parentheses :

In fact, if you have only one parameter, you can skip the parentheses as well

```javascript
hello = (val) => 'Hello ' + val;
```
