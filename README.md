# Babylon CheckboxWithLabel

This component mimics the functionality provided by a checkbox and a label but without a checkbox input element.

## Usage

```js
<CheckboxWithLabel
  id="my-checkbox"
  value="is-checked"
  checked
  onChange={ (e) => console.warn(`Checkbox changed: checked? ${e.target.checked} value: ${e.target.value}`) }
  label="Select this checkbox"
/>
```

All the props you pass to it will be forwarded to the `Checkbox` component, while the `label` prop
will be used to display the label copy.

Alternatively you also use the `Checkbox` component by itself:

```js
<Checkbox
  id="my-checkbox"
  value="is-checked"
  checked
  onChange={ (e) => console.warn(`Checkbox changed: checked? ${e.target.checked} value: ${e.target.value}`) }
/>
```

## Install it

```
npm install
```

## Run it

```
npm start
```

## Test it

```
npm test
```
