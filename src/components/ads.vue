<template>
    <div id="ad_container" class="container py-5">
        <div class="row">
            <div class="col mb-4 left">
                <div class="card" style="width: 18rem;">
                <img src="https://i2.wp.com/illumni.co/wp-content/uploads/2019/01/dummy-ad-300x600.jpg?ssl=1" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
            <div class="col mb-4 mid">
                <div class="card" style="width: 18rem;">
                <img src="https://i2.wp.com/illumni.co/wp-content/uploads/2019/01/dummy-ad-300x600.jpg?ssl=1" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>
            <div class="col mb-4 right">
                <div class="card" style="width: 18rem;">
                <img src="https://i2.wp.com/illumni.co/wp-content/uploads/2019/01/dummy-ad-300x600.jpg?ssl=1" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'ads'
    
}
</script>

<style lang='scss'>
    #ad_containter{
        background: #000 !important;
    }

    .card{
        margin: auto;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    .card:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    
</style>