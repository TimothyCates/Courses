# findIndex

This is an exercise in understanding callback functions, I will need to write my own implementation of the findIndex function. The function needs to be able to pass the test cases defined below.

## Test Cases

```javascript
var arr = [3,4,6,2,1];
findIndex(arr, function(num, index, array) {
  return num === 6;
});
```

```javascript
var arr = [5,11,13,8,6,7];
findIndex(arr, function(num, index, array) {
  return num % 2 === 0;
});
```

```javascript
var langs = ["Java", "C++", "Python", "Ruby"];
findIndex(langs, function(lang, index, arr) {
  return lang === "JavaScript";
});
```

```javascript
var langs = ["Java", "C++", "JavaScript"];
findIndex(langs, function(lang, index, arr) {
  lang === "JavaScript";
});
```
