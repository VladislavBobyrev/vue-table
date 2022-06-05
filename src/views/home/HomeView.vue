<template> 
  <app-table
    v-if="isTable"
  />

  <button @click="toggleTable" :class="{'danger': isTable}">{{isTable ?  "Удалить": "Сгенерировать"}}</button>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from 'vue'
import AppTable from '@/components/appTable/AppTable.vue'

export default defineComponent({
  components: {AppTable},
  setup() {
    const instance = getCurrentInstance();
    
    const isTable = ref(false)
    const toggleTable = () => {
      isTable.value = ! isTable.value
      instance?.proxy?.$forceUpdate();
    }
    return{
      isTable,
      toggleTable,
    }
  },
})
</script>
