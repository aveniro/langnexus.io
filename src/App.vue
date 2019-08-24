<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		font-family: $default-font;
	}

	html, body, #app {
		width: 100%;
		height: 100%;
	}
</style>