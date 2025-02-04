# React 19 Bug: Missing Return Statement and useEffect Cleanup

This repository demonstrates a common bug in React 19: forgetting to include a return statement in a functional component and omitting the cleanup function in the useEffect hook.

## Bug Description

The `bug.js` file contains a functional component (`MyComponent`) with two issues:

1. **Missing Return Statement:** The component lacks a `return` statement, meaning it doesn't render any JSX, causing unexpected behavior.
2. **Missing Cleanup in useEffect:** The `useEffect` hook sets up an interval, but lacks a cleanup function to clear the interval when the component unmounts. This leads to memory leaks.

## Solution

The `bugSolution.js` file provides the corrected code with the missing return statement and a cleanup function in the `useEffect` hook to avoid memory leaks.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console for warnings and unexpected behavior in the `bug.js` version.
5. Compare with the corrected version in `bugSolution.js`.