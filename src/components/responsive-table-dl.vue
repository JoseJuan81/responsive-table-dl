<template>
	<div class="table-main-container">
		<table class="wm-table-dl">
			<caption data-cy="table-caption">
				<slot name="caption"></slot>
			</caption>
			<thead data-cy="table-head">
				<tr :class="{ 'columns-movil-dl': breakIt }">
					<th v-for="(col, indexCol) in filterColumns" :key="indexCol">{{col.title}}</th>
				</tr>
			</thead>
			<tbody data-cy="table-body">
				<tr
					v-for="(row, indexRow) in rows"
					:key="indexRow"
					:class="[
						'row-table-dl',
						{ 'table-movil-dl': breakIt },
					]"
				>
					<slot name="row" :row="row" :index="indexRow"></slot>
				</tr>
			</tbody>
			<tfoot data-cy="table-footer">
				<slot name="footer"></slot>
			</tfoot>
		</table>
	</div>
</template>
<script>

function created() {
	this.breakIt = window.innerWidth <= this.breakPoint;
	window.addEventListener('resize', () => {
		this.breakIt = window.innerWidth <= this.breakPoint;
	});
}

function filterColumns() {
	if (this.breakIt) {
		return this.columns.filter(c => c.movil);
	}
	return this.columns;
}

function data() {
	return {
		breakIt: false,
	};
}

export default {
	name: 'responsive-table-dl',
	created,
	computed: {
		filterColumns,
	},
	data,
	props: {
		breakPoint: {
			default: 768,
			type: Number,
		},
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
<style lang="scss">
table.wm-table-dl {
	border-collapse: collapse;
	width: 100%;
}


.columns-movil-dl,
.table-movil-dl {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
}

.row-table-dl {
	background-color: transparent;
}
</style>
