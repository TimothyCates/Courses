# Random Image App

The goal of this app is to take a random dog image api, and create a AJAX app that on the click of a button changes the image to be that of a random dog, without reloading the webpage. This is mostly to hammer in the concepts of raw XHR outside of a library.

## Starter Code

### Html

```html
<div class="container">
  <h1>Welcome To Random Dog Pictures</h1>
   <img id="photo" src="https://images.dog.ceo/breeds/kelpie/n02105412_2067.jpg" alt="">
  <button id="btn">Get Random Dog!</button>
</div>
```

### Css

```css
img {
  height: 200px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin: 20px;
}
```
