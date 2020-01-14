<template>
  <div class="hello">
    <h1>Tabla Web y movil</h1>
    <ResponsiveTable
      class="responsive-table"
      :break-point="550"
      :columns="columns"
      :rows="rows"
    >
		<template v-slot:caption><span>Este es el slot del caption</span></template>
		<template v-slot:row="{ row }">
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
  </div>
</template>

<script>
import ResponsiveTable from '@/components/table.vue';

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
	name: 'HelloWorld',
	components: {
		ResponsiveTable,
	},
	data,
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

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
