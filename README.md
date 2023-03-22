## Waste recognation system


### Tailwind configure for website
```
npm init -y
npm install tailwindcss
```
Create src & public folder. Then create style.css in src folder, add this lines:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Add scripts to package.json:
```
"build-css": "tailwindcss build src/styles.css -o public/styles.css",
"watch-css": "npx tailwindcss -i ./src/styles.css -o ./public/styles.css --watch"
```
Create config file and update:
```
`npx tailwindcss init`
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Start tailwind and open live-server:
```
npm run build-css
npm run watch-css
```
