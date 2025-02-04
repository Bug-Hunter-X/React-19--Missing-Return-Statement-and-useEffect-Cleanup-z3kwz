```javascript
// Incorrect usage of a functional component
function MyComponent(props) {
  // Missing return statement
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Missing cleanup function in useEffect hook
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);
}
```