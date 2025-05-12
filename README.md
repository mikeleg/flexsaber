# Flexsaber

![Flexsaber Logo](./logo.png)

**Flexsaber** is a declarative Web Components library for building flexible layouts using Flexbox. Designed to work in plain HTML, frontend frameworks, or no-code environments. Precise, modular, and powerful like a lightsaber.

---

## 🚀 Installation
```bash
npm install flexsaber
```
---

## 🧪 Usage Example
```html
<fx-container spacing="24" scroll>
  <fx-row gap="16" wrap align="center" justify="space-between">
    <fx-item size="200px" grow="1">Item A</fx-item>
    <fx-item size="200px">Item B</fx-item>
  </fx-row>
</fx-container>
```

---

## 🧩 Components
- `<fx-container>`: Full-space container with optional scroll and padding
- `<fx-row>`: Horizontal flex container
- `<fx-column>`: Vertical flex container
- `<fx-item>`: Child element with optional `size`, `grow`, `shrink`, and `align`

---

## ⚙️ Attributes
All sizing values are in pixels (omit the `px` suffix).

| Attribute   | Description                            |
|-------------|----------------------------------------|
| `gap`       | Uniform spacing between children       |
| `row-gap`   | Vertical spacing override              |
| `col-gap`   | Horizontal spacing override            |
| `wrap`      | Enables wrapping                       |
| `align`     | Align items vertically (e.g. center)   |
| `justify`   | Align items horizontally (e.g. start)  |
| `grow`      | Flex-grow value                        |
| `shrink`    | Flex-shrink value                      |
| `size`      | Flex-basis (initial size)              |

---

## 🛡 License
MIT © 2025 Michele Gatti
