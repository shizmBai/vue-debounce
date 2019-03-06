<template>
	<div id="app">
		<h1>My Todo App!</h1>
		<!-- <TodoList/> -->
		<router-view />
		<p>111111111111111</p>
	</div>
</template>

<script>
// import TodoList from './components/TodoList.vue'

export default {
	
}
</script>

<style>
#app {
	max-width: 400px;
	margin: 0 auto;
	line-height: 1.4;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

h1 {
	text-align: center;
}
</style>