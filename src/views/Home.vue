<template>
    <div class="home">
		<div class="main">
			<div class="header">
				<div v-lcode="'login'" class="button"></div>
				<div v-lcode="'signup'" class="button"></div>
			</div>

			<div class="title-subtitle-container">
				<div class="title-subtitle">
					<h2 v-no-localize>langnexus.io</h2>
					<h3 v-lcode="'language-love'"></h3>
				</div>
			</div>
		
			<div class="footer">
				<span class="down-arrow">&#709;</span>
			</div>
		</div>
		
		<div class="lang-select">

		</div>
    </div>
</template>

<script>
    export default {
        name: "home",
        components: {}
    };
</script>

<style lang="scss" scoped>
	html {
		background-image: $background-gradient;
	}

	.home {
		width: 100%;
		display: flex;
		flex-direction: column;

		.main {
			width: 100%;
			height: 100vh;

			display: flex;
			flex-direction: column;

			.header {
				display: flex;
				flex-direction: row;

				width: 100%;

				justify-content: flex-end;

				.button {
					@include button(6em, 2em);
					margin: 0.5em;
				}
			}

			.title-subtitle-container {
				@include fullscreen;

				.title-subtitle {
					margin: 5% 0 0 10%;

					h2 {
						font-size: 40px;
						margin-bottom: 0.25em;
					}

					h3 {
						font-size: 20px;
					}
				}
			}

			.footer {
				height: 3em;

				display: flex;
				justify-content: center;

				@keyframes bounce {
					from { height: 3em; }
					to { height: 3.5em; }
				}

				animation-name: bounce;
				animation-duration: 700ms;
				animation-iteration-count: infinite;
				animation-direction: alternate;
				
				.down-arrow {
					font-size: 30px;
					font-family: "Roboto";
				}
			}
		}

		.lang-select {
			height: 100vh;
			width: 100%;

			background: rgba(black, 0.05);
		}
	}
</style>