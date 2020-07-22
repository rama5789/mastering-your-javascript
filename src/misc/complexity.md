# Computational Complexity :

> https://www.toptal.com/developers/sorting-algorithms

> https://www.bigocheatsheet.com/

- The **computational complexity**, or simply the **complexity** of an **algorithm** is the _number of resources required for running it_.
- The amount of required resources varies based on the input size, so the **complexity** is generally expressed as a **function of (n)**, where **(n)** is the _size of the input_.
- When analyzing an algorithm, we can consider the _nature of the resource_ in two distinct types, **time and space**.
- If _size of the memory space needed in solving a problem_, that connotates **space complexity**.
- When the required resource is the _time needed for running the algorithm_, then that is **time complexity**.

# A. Time Complexity :

> https://en.wikipedia.org/wiki/Time_complexity

- There are **3 cases** in analyzing the time complexity of an algorithm:
- Let’s say we have an unsorted list [4, 9, 2, 6, 3, 5, 8, 1, 7] and using **Linear Search** we need to find the index of a value.

### a. Best Case :

- This is the complexity of solving the problem for the **best input**.
- In our example, the best case is to search for the value 4, since this is the **first** value of the list and _it is found in the first iteration_.

### b. Average Case :

- This complexity is defined with respect to the distribution of the values in the input data.
- This example may not be the best, but we could say that the average-case would be when we’re searching for some value in the **middle** of the list like the value 3.

### c. Worst Case :

- This is the complexity of solving the problem for the **worst input** of size (n). In our example, the worst-case is to search for the value 7, which is the **last** element from the list.

Usually, when describing the time complexity of an algorithm, we are talking about the **worst-case**. So how do we describe the time complexity of an algorithm? We use a mathematical notation called **Big-O**.

## The Big-O Notation :

- A mathematical notation that describes the _limiting behavior of a function when the argument tends towards a particular value or infinity_.
- It is also known as **Bachmann–Landau** Notation or **Asymptotic** Notation.
- In computer science, Big-O notation is used to classify algorithms according to _how their running time or space requirements grow as the input size grows_.
- This notation characterizes functions according to their growth rates.
- Different _functions with the **same growth rate**_ may be represented using the **same O notation**.
- The Big-O notation gives us the _algorithm’s approximate run time_ in the **worst case**.
- When using the Big-O notation, we describe the _algorithm’s efficiency based on the increasing size of the input data (n)_. For example, if the input is a string, the (n) will be the length of the string. If it is a list, the (n) will be the length of the list and so on.

## Time Complexities :

- We will only be focusing on 4 of the most common time complexities expressed using the Big-O notation:

### Constant Time Complexity : O(1) :

- An algorithm is said to be **constant time** if it is bounded by a _value that does not depend on the size of the input_.
- No matter the size of the input data, _the running time will always be the same_.

```javascript
const getFirstValue = (list) => {
  return list[0];
};

let arr = ['big', 'fat', 'steak'];
console.log(getFirstValue(arr)); // big => Always returns the first value
// Hence, not dependent on the size of the input list.
```

- As you notice, the function getFirstValue always returns the first value of the list. An algorithm with constant time complexity is excellent since we don’t need to worry about the input size.

### Logarithmic Time Complexity : O(log n) :

- **Logarithmic time** complexity in an algorithm is when _it reduces the size of the input data in each step_.
- Algorithms with logarithmic time complexity are commonly found in operations on **binary trees** or when using **binary search**.
- For example, using a sorted list, we need to check if an element exists through binary search.

```javascript
```

### Exponential Time Complexity : O(2^n) :

```javascript
```

### Factorial Time Complexity : O(n!) :

```javascript
```
