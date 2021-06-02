<template>
  <div class="button" v-for="button in buttonList" :key="button.type">
    <YButton  :type="button.type" @click="handleClick(button.type)">{{button.type}}</YButton>
  </div>
  
  <y-button>a</y-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const buttonList = [
      {type: 'defalut'},
      {type: 'primary'},
      {type: 'success'},
      {type: 'warning'},
      {type: 'danger'},
      {type: 'info'},
    ]

    const handleClick = (type: string) => {
      alert(type)
    }

    return {
      buttonList,
      handleClick,
    }
  },
})
</script>

<style lang="scss" scoped>
.button {
  display: inline-block;
  margin: 10px;
}
</style>