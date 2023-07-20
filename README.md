# Softryzen Project

## 📚 Best practices

> "Any fool can write code that a computer can understand. Good programmers
> write code that humans can understand." - Martin Fowler

- [ ] [Cheat sheet 1](https://my-js.org/docs/other/best-practices#%D1%88%D0%BF%D0%B0%D1%80%D0%B3%D0%B0%D0%BB%D0%BA%D0%B0-%D0%BF%D0%BE-react)
- [ ] [Cheat sheet 2](https://my-js.org/docs/other/react-philosophies)
- [ ] [Cheat sheet 3](https://alexkondov.com/tao-of-react/)

## 🥁 Getting started

1. Clone repo

```bash
git@github.com:SoftRyzenStudio/softryzen-project.git
```

> if you haven't access to repo - write to me in telegram
> [@denjosser](https://t.me/denjosser)

1. Recommended for use **npm** - `npm install`
2. Create file `.env.local` in the project root using `.env.local.example` as a
   template
3. `npm run dev`
4. Open `http://localhost:3000`.

## 📜 Scripts

- `npm run dev` - run development server
- `npm run build` - build project
- `npm run lint` - run eslint
- `npm run check-types` - check types
- `npm run check-format` - run prettier check
- `npm run check-lint` - run eslint check
- `npm run format` - run prettier format
- `npm run test-all` - run all checks

## Structure of the project

> Attention! The project structure is not final and can be changed at any time.

**💁‍♀️ Create a components folder for each module**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```
# ✅ Good

├── components
    ├── Header
        ├── index.ts
        ├── Header.tsx
        ├── Header.types.ts
    ├── Footer
        ├── index.ts
        ├── Footer.tsx
        ├── Footer.types.ts
```

</details>

---

**💁‍♀️ Reusable css classes should be placed in the `styles` folder .**

<details>

<summary><b>💡 Example:</b></summary>

<br/>

```css
/*globals.css */

@layer components {
  .your-class {
    @apply ...;
  }
}
```

</details>

---

**💁‍♀️ Description of object structure**

<details>

<summary><b>💡 Structure: </b></summary>

<br/>

```

├── components -> folder with reusable components
  ├── common -> components that are used in more than one module
    ├── NameComponent -> folders for each component
      ├── NameComponent.tsx -> main component
      ├── NameComponent.types.ts -> types for component
      ├── index.ts -> file for re-export
  ├── buttons -> components that are used as buttons
  ├── form -> components that are used in forms
  ├── typography -> components that are used as typography
├── data -> data for the project ( from graphql, json, etc.)
├── pages -> pages of the project
├── public -> static files
├── styles -> global styles
├── utils -> helpers, functions, etc.
├── hooks -> custom users hooks
```

</details>

---

## 📚 Components API

Each component has its own API. You can find it in the component's folder. This
is a list of more common components and their API.

This is example of API for component `Title` and `Paragraph`

- ### Heading

| Prop        | Default     | Description                                            |
| ----------- | ----------- | ------------------------------------------------------ |
| `content`   | `undefined` | any content from WP                                    |
| `tag`       | `h2`        | choose the tag of title you'd need: `h1`, `h2` or `h3` |
| `variant`   | `dark`      | choose the color you'd need: `dark` or `light`         |
| `className` | `undefined` | add custom or additional css class you'd need          |

- ### Paragraph

| Prop        | Type        | Default value | Description                                                                        |
| ----------- | ----------- | ------------- | ---------------------------------------------------------------------------------- |
| `variant`   | `string`    | 'dark'        | Determines the color scheme of the paragraph. Values can be `'dark'` or `'white'`. |
| `children`  | `ReactNode` | `undefined`   | The content to be rendered within the paragraph.                                   |
| `className` | `string`    | `undefined`   | Additional CSS classes to be added to the paragraph.                               |

- ### CardWrapper

| Prop        | Type        | Default value | Description                                                                                                                  |
| ----------- | ----------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `hovered`   | `boolean`   | `true`        | Determines if the card should display a hover effect. If `true`, the card will display a hover effect. If `false`, it won't. |
| `tag`       | `string`    | `li`          | The HTML tag to be used for the CardWrapper. If not specified, the component defaults to using the `li` tag.                 |
| `children`  | `ReactNode` | `undefined`   | The content to be rendered within the CardWrapper.                                                                           |
| `className` | `string`    | `undefined`   | Additional CSS classes to be added to the CardWrapper.                                                                       |

- ### Section

  | Prop        | Type        | Default     | Description                                              |
  | ----------- | ----------- | ----------- | -------------------------------------------------------- |
  | `children`  | `ReactNode` | `undefined` | undefined The content to be rendered within the section. |
  | `className` | `string`    | `undefined` | An optional CSS class to be applied to the section       |

- ### BtnLink

| Prop        | Default     | Description                                                     |
| ----------- | ----------- | --------------------------------------------------------------- |
| `variant`   | `primary`   | choose the color you'd need: 'ghost' or 'secondary' or 'simple' |
| `disabled`  | `false`     | choose the display variant you'd need: 'true' or 'false'        |
| `href`      | `string`    | add a link you`d need                                           |
| `arrow`     | `false`     | add an arrow if you'd need it: 'true' or 'false' or 'simple'    |
| `className` | `undefined` | add custom or additional css class you'd need                   |
