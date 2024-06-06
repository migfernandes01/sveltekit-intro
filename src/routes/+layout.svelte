<script>
    import Header from './header.svelte';
    import Footer from './footer.svelte';
</script>

<Header />
<slot />    <!-- This is where the content of the route will be rendered -->
<Footer />