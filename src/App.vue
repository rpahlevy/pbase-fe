<template>
  <div id="q-app" class=''>
    <div v-if="$auth.ready()">
      <router-view />
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
