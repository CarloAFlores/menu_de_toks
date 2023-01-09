<template>
<Menu_modal />
</template>

<script>
// @ is an alias to /src
import Menu_modal from "@/components/Menu_modal.vue";
import DespegablePractica from "@/components/DespegablePractica.vue";
export default {
  name: 'HomeView',
  components: {Menu_modal,DespegablePractica}
}
</script>
