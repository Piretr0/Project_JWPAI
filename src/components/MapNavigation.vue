<template>
  <div class="container">
    <q-btn
      round
      color="white"
      text-color="indigo"
      icon="layers"
      @click="$emit('toggleLayersManager')"
    />
    <q-btn round color="white" text-color="indigo" icon="add" @click="$emit('scaleUp')" />
    <q-btn round color="white" text-color="indigo" icon="remove" @click="$emit('scaleDown')" />
    <draw-menu />
  </div>
</template>

<script>
import DrawMenu from "./DrawMenu";

export default {
  name: "MapNavigation",
  components: {
    DrawMenu
  }
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
}

.container * {
  margin: 2px 0;
}
</style>
