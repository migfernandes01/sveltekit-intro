<script>
    import { goto, beforeNavigate, afterNavigate } from '$app/navigation'
    function handleClick() {
        console.log('Order placed');
        goto('/products');
    } 

    beforeNavigate((navigation) => {
        console.log({before: navigation});
    });

    afterNavigate((navigation) => {
        console.log({after: navigation});
    });
</script>

<h1>Welcome home!</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={handleClick}>Place order</button>