# Random Box (React)

The goal of this project is to create a inline react application that renders a box of a random color, with the text inside being a random size. This is mostly just to get you use to using JSX and embedding javascript inside of it, and its 100% now how any code should be written, obviously.

## Starter Code

### Html

Note: this code is directly from the course, for whatever reason it contains errors, They are fixed in my solution but it is kinda annoying that a course's starter code is not able to run without some tweaking, but I digress.

```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JSX Exercise</title>
    <script src="https://unpkg.com/react@16.0.0-rc.2/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.0.0-rc.2/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">
    class RandomBox extends React.Component {
      render() {
        <div>
          Make a box here!
        </div>
        );
      }
    }

    ReactDOM.render(<RandomBox />, document.getElementById('app'));
  </script>
</body>
</html>
```
