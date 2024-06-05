<script lang="ts">
    import {page} from "$app/stores";

    const greetings = {
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour',
    }

    const { lang } = $page.params;
    const greeting: string = greetings[lang] ?? greetings.en;
</script>

<h1>{greeting}</h1>