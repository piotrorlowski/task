<template>
  <div id="items">
    <h1>{{items.name}}</h1>
    <div class="item" v-for="array, index in arrays" :key="index">
      <h3>{{renderHeading(array)}}</h3>
      <ul>
        <li v-for="item in array.sort((a, b) => b.id - a.id)" :key="item.id"  :class="{'only-one': array.length === 1}">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'

  const props = defineProps(['items'])

  const items20 = props.items.items.filter(item => item.score === 20);
  const items30 = props.items.items.filter(item => item.score === 30);
  const items50 = props.items.items.filter(item => item.score === 50);

  const arrays = reactive([items20, items30, items50]);

  const renderHeading = array => {
    const score = array[0].score
    const headings = {
      50: 'Items with Score 50',
      30: 'Items with Score 30',
      20: 'Items with Score 20',
    }
    return headings[score];
  }
</script>
