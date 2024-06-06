<header class="layout-header">Header</header>
<slot />    <!-- This is where the content of the route will be rendered -->
<footer class="layout-footer">Footer</footer>

<style>
    .layout-header {
        background-color: #333;
        color: #f4a261;
        font-size: 30px;
        text-align: center; 
        padding: 10px;
    }
    .layout-footer {
        background-color: #333;
        color: #f4a261;
        font-size: 30px;
        text-align: center;
        padding: 10px;
    }
</style>