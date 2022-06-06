<template> 
  <app-table
    v-if="isTable"
  />

  <!-- <button @click="toggleTable" :class="{'danger': isTable}">{{isTable ?  "Удалить": "Сгенерировать"}}</button> -->
  <button @click="toggleTable" v-else>{{isTable ?  "Удалить": "Сгенерировать"}}</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AppTable from '@/components/appTable/AppTable.vue'

export default defineComponent({
  components: {AppTable},
  setup() { 
    const isTable = ref(false)
    const toggleTable = () => isTable.value = !isTable.value
    
    return{
      isTable,
      toggleTable,
    }
  },
})
</script>
