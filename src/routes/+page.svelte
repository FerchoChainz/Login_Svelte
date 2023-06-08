<script>
  import { onMount } from 'svelte';
  import Layout from './+layout.svelte';
  import Register from './Register.svelte';
  import Login from './login.svelte';
  import Contain from './Contain.svelte';
  import "../assets/main.css";

  onMount(() => {
    const script = document.createElement('script');
    script.src = '/src/routes/main.js'; // Ruta al archivo JavaScript
    script.async = true;
    document.body.appendChild(script);
  });
</script>


<Layout title ="mi app">
  <Contain/>
</Layout> 
