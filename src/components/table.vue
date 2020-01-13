<template>
	<table class="responsible-table">
		<caption data-cy="table-caption">
			<slot name="caption"></slot>
		</caption>
		<thead data-cy="table-head">
			<tr>
				<th v-for="(col, indexCol) in columns" :key="indexCol">{{col.title}}</th>
			</tr>
		</thead>
		<tbody  data-cy="table-body">
			<tr
				v-for="(row, indexRow) in rows"
				:key="indexRow"
				class="grid"
			>
				<slot name="row" :row="row" :index="indexRow"></slot>
			</tr>
		</tbody>
		<tfoot data-cy="table-footer">
			<slot name="footer"></slot>
		</tfoot>
	</table>
</template>
<script>
export default {
	name: 'responsive-table',
	props: {
		columns: {
			default: () => [],
			type: Array,
		},
		rows: {
			default: () => [],
			type: Array,
		},
	},
};
</script>
<style lang="scss" scoped>
.responsible-table {
	border-collapse: collapse;
	width: 100%;
}
.grid {}
</style>
