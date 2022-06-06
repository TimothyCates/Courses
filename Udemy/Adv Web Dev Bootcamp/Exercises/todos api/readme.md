# Todo's App

The idea behind this project is to first learn to make a simple express api, and then attach a single page application to it. This being web development the first application is a todo application. This course wants to use jquery for handling XHR's but, I'm going to take the liberty of using fetch, at the time this course was made fetch did not have great browser support, and now it does.

## Included Code

The goal of this lesson was not to learn to style an app, but more on building the actual app so style's we're included.

### Css

```Css
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700'); 
 
body {
	font-family: 'Montserrat', sans-serif;
	background: #ecf0f1;
}

/*****************************HEADER STYLES*****************************/
header {
	text-align: center;
}
header h1 {
	font-size: 64px;
	font-weight: 300;
	margin: 80px 0 25px;
	color: #2c3e50;
}
header h1 span {
	font-weight: 700;
}
header h2 {
	color: #bdc3c7;
	font-weight:300;
}
/*****************************FORM STYLES*****************************/

.form {
	width: 800px;
	margin: 50px auto 20px;
}

#todoInput {
	width: 100%;
	height: 60px;
	background: none;
	border: none;
	border-bottom: 1px solid #34495e;
	outline: none;
	font: 300 28px 'Ubuntu', sans-serif;
	padding: 20px;
	color: #34495e;
}

/*****************************LIST STYLES*****************************/
.list {
	width: 800px;
	margin: 0 auto;
}
.task {
	width: 100%;
	height: 60px;
	line-height: 60px;
	font-size: 20px;
	padding: 0 20px;
	color: #34495e;
	transition: all .3s ease;
}
.task:hover {
	background: rgba(0, 0, 0, .02);
	cursor: pointer;
}

.task:hover span{
	opacity: 1;
}

.done {
	text-decoration: line-through;
	color: #bdc3c7;
}

li span {
  float: right;
  color: #c0392b;
  transition: all 0.3s;
  opacity: 0;
}

li span:hover {
  color: #e74c3c
}
```
