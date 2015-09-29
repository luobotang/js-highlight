# js-highlight

Highlight JavaScript code with support of [PEG.js](https://github.com/pegjs/pegjs).

## install

```bash
npm install js-highlight
```

## usage

```html
<link rel="stylesheet" href="highlight.css">

<pre data-src="code-example"></pre>

<script type="text/sourcecode" id="code-example">
function sayHi() {
    console.log('Hello, world');
}

sayHi();
</script>
<script src="highlight.min.js"></script>
```
