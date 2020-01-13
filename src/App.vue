<template>
  <div id="app" data-cy="app">
	<ResponsiveTable
		:columns="columns"
		:rows="rows"
	>
		<template v-slot:caption><span>Este es el slot del caption</span></template>
		<template v-slot:row="{ row }">
			<td>{{row.name}}</td>
			<td>{{row.lastName}}</td>
			<td>{{row.age}}</td>
			<td>{{row.gender}}</td>
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
			{ id: 1, title: 'Nombre' },
			{ id: 2, title: 'Apellido' },
			{ id: 3, title: 'Edad' },
			{ id: 4, title: 'Sexo' },
			{ id: 5, title: 'Acciones' },
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
	name: 'app',
	components: {
		ResponsiveTable,
	},
	data,
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
