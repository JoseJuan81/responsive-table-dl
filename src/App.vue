<template>
  <div id="app" data-cy="app">
	<HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
	name: 'app',
	components: {
		HelloWorld,
	},
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

.responsive-table.table-main-container {

	table.wm-table {

		tbody[data-cy="table-body"] {

			tr.row {
				border-bottom: 1px solid cornflowerblue;
			}
			tr.row:hover {
				border: 2px solid cornflowerblue;
			}
			tr.row:nth-child(odd) {
				background-color: aliceblue !important;
			}
		}
	}
}
</style>
