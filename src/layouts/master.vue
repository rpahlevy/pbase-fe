<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title>
          primabase Cloud
        </q-toolbar-title>
        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header>&nbsp;</q-item-label>
        <q-item clickable tag="a" to="/lokasi">
          <q-item-section avatar>
            <q-icon name="room" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lokasi</q-item-label>
            <q-item-label caption>Pos Pengamatan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/dashboard">
          <q-item-section avatar>
            <q-icon name="speaker_phone" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logger</q-item-label>
            <q-item-label caption>primabot</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
