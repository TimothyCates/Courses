# Flexbox Sidebar

This is a simple exercise using flexbox. Colt wants us to split two sections up using flexbox so that items in one section are at the top of the sidebar, and the other section are at the bottom.

## Starter Code

### Html

```html
<div class="sidebar">
  <!-- This section shoudl be at the top-->
  <div class="section">
    <div class="item">Messages</div>
    <div class="item">Friends</div>
    <div class="item">User Profile</div>
  </div>
  <!-- This section should be at the botto -->
  <div class="section">
    <div class="item">Settings</div>
    <div class="item">Questions?</div>
  </div>
</div>
```

### Css

```css
@import url('https://fonts.googleapis.com/css?family=Raleway:200');

body {
 margin: 0;
  background: #ecf0f1;
}

.sidebar {
  height: 100vh;
  width: 15vw;
  font-family: raleway;
  background: #34495e;
}

.item {
  color: white;
  font-size: 20px;
}
```
