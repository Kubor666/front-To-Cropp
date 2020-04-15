<template>
	<div id="footer">
		<nav class="container g-primary">
			<div class="row foot-color">
			<div class="col-4 col-md-2">
				© Oskar & Kubor
			</div>
			<div class="col-2 col-md-7">
			</div>
			<div class="col-6 right col-md-3">
				Want more ? Let us know
			</div>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
    name: 'NavFooter'
    
}
</script>

<style lang="scss">

	#footer{
		color: #fff;
		position: absolute;
		bottom: 0px;
		width: 100%;
		background: #056CF2;
	}

	.foot-color{
		margin-bottom: 10px;
		margin-top: 10px;
	}

	.right{
		text-align: right;
	}

</style>