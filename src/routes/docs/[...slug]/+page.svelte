<script>
    import { page } from "$app/stores";

    const slugArr = $page.params.slug.split("/");
    console.log(slugArr);
</script>

<h1>Docs homepage</h1>
{slugArr}