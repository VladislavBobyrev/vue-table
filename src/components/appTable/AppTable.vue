<template>
  <section class="table">
    <div class="table-head">
      <span class="table-head__name">Наименование
      </span>
      <span class="table-head__price">Цена</span>
      <span class="table-head__amount">Количество</span>
      <span class="table-head__cost">Стоимость</span>
    </div>
    <div class="table-body">
      <div class="table-line" v-for="object in objects" :key='object.name'>
        <input type="text" class="table-body__name" :value="object.name"/>
        <input type="text" class="table-body__price" :value="object.price"/>
        <input type="text" class="table-body__amount" :value="object.amount"/>
        <input type="text" class="table-body__cost" :value="object.cost"/>
      </div>
    </div>
  </section>
 <div class="result-price"><h2>Итоговая стоимость:</h2><span>{{result}}</span></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getObjects} from '@/use/getObjects'

export default defineComponent({
  setup() {
    // загружаем данные о таблице
    let objects = getObjects(50)

    const cost:number[] = []
    
    // добавляем в объект поле cost
    const getCost = [...objects].filter((val) => {
      if(val.price > 0) {
        val.cost = val.price * val.amount
        cost.push(val.cost)
      }
    })

    // итоговая стоимость
    const result  = cost.reduce((previousValue, currentValue)  => currentValue + previousValue)

    return {
      objects,
      cost,
      result,
    }
  },
})
</script>
