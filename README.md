# Tabla Web y Móvil
<p>
This component can be used in web and movil screens.
You only have to do few thing to add the right styles.
The funtionallity works with <code>display: grid</code> and <code>grid-template-columns: repeat(auto-fit, minmax(20px, 1fr))</code> for each table's row.
</p>
<p align="center">
<img src="https://travis-ci.org/JoseJuan81/responsive-table.svg?branch=dev">
<img alt="GitHub" src="https://img.shields.io/github/license/josejuan81/responsive-table">
	<img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/josejuan81/responsive-table/dev">
<img alt="npm" src="https://img.shields.io/npm/dm/responsive-table-dl">
</p>

<img src="https://japi-static.s3.amazonaws.com/japi-sales-error/Captura-de-pantalla-2020-01-14-a-la%28s%29-12.00.47.png">
<img src="https://japi-static.s3.amazonaws.com/japi-sales-error/Captura-de-pantalla-2020-01-14-a-la%28s%29-12.01.10.png">

## Install
```bash
npm install responsive-table-dl
```

## Vue Use
***Global***
> in your main.js

```js
import ResponsiveTable from 'responsive-table-dl';
Vue.use(ResponsiveTable);
```
***Local (file.vue)***
> in your script section

```js
import ResponsiveTable from 'responsive-table-dl';
```

## Example
in your file.vue

```html
<template>
	<ResponsiveTable
      class="responsive-table"
      :break-point="550"
      :columns="columns"
      :rows="rows"
    >
		<template v-slot:caption><span>Este es el slot del caption</span></template>
		<template v-slot:row="{ row, index }">
			<td class="cell1">{{row.name}}</td>
			<td class="cell2">{{row.lastName}}</td>
			<td class="cell3">{{row.age}}</td>
			<td class="cell4">{{row.gender}}</td>
			<td class="actions">Acciones</td>
		</template>
		<template v-slot:footer>
			<tr>
				<td colspan="5">Este es el slot del footer</td>
			</tr>
		</template>
	</ResponsiveTable>
</template>
```
```js
<script>
import ResponsiveTable from 'responsive-table-dl';

function data() {
	return {
		columns: [
			{ id: 1, title: 'Nombre', movil: true },
			{ id: 2, title: 'Apellido', movil: false },
			{ id: 3, title: 'Edad', movil: true },
			{ id: 4, title: 'Sexo', movil: false },
			{ id: 5, title: 'Acciones', movil: true },
		],
		rows: [
			{
				id: 1, name: 'José', lastName: 'López', age: 30, gender: 'Hombre',
			},
			{
				id: 2, name: 'Carlota', lastName: 'Mendoza', age: 3, gender: 'Mujer',
			},
			{
				id: 3, name: 'Noah', lastName: 'Dominguez', age: 6, gender: 'Hombre',
			},
			{
				id: 4, name: 'Andres', lastName: 'Segura', age: 69, gender: 'Hombre',
			},
			{
				id: 5, name: 'Ada', lastName: 'López', age: 70, gender: 'Mujer',
			},
		],
	};
}
export default {
	name: 'some-component',
	components: {
		ResponsiveTable,
	},
	data,
};
</script>
```
```scss
<style scoped lang="scss">

.cell1 {
	grid-column: 1/2;
	grid-row: 1;
}
.cell2 {
	grid-column: 1/2;
	grid-row: 2;
}
.cell3 {
	grid-column: 2/3;
	grid-row: 1;
}
.cell4 {
	grid-column: 2/3;
	grid-row: 2;
}
.actions {
	grid-column: 3/4;
	grid-row: 1;
}
</style>
```
in your App.vue
```scss
<style scoped lang="scss">
.responsive-table.table-main-container {

	table.wm-table {

		tbody[data-cy="table-body"] {

			tr.row-table {
				border-bottom: 1px solid cornflowerblue;
			}
			tr.row-table:hover {
				border: 2px solid cornflowerblue;
			}
			tr.row-table:nth-child(odd) {
				background-color: aliceblue !important;
			}
		}
	}
}
</style>
```
> `.responsive-table` is the class defined out the component by the user. This class is used to modify styles inside the component.
 
> `.table-main-container` and the others below are classes inside the component. The user can change theses classes values to style the table.
### Props
This table use the following props

name | type | value | rules
:--- | :--- | :--- | :---
**columns** | `Array` | [{}, {}] | Every array's item must to be an Object with TITLE key ([{ title: 'Nombre' }]). Is required `movil: true` or `movil:false` key:value in every columns' array's object. If `movil: false`, that column will hide in movil version. e.j [{ title: 'Nombre', movil: true }, { title: 'Edad', movil: false }]
**rows** | `Array` | [{}, {}] | Like **columns**, every array's item must to be an Object.
**break-point** | `Number` | any (400, 500, ...) | In this point (screen width in pixels) the table change from web to movil version or vice versa.

### Slots
Avaliable slots

name | description
:--- | :--- 
**caption** | This slot is used to define a table caption. Is like a table title. [see here](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)
**row** | This slot is used to define de object's properties to show as cell value. Every row is a rows' item. You can get the row's index if you need it. Is required add classes in every row's property to define the desired position in movil version. See classes `cell1, cell2, cell3, cell4 and actions` in example before.
**footer** | This slot is used to define information about the data in the table. It Usually used for pagination or totals

