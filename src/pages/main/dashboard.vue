<template>
  <q-page class='q-px-sm'>
    <q-input
      outlined
      v-model='keyword'
      placeholder='1902-3'
      class='text-h5 q-my-md'>

      <template v-slot:append>
        <q-icon name='search' />
      </template>
    </q-input>

    <div class='ui horizontal divider'>LOGGERS (30/30)</div>

    <div class='row q-col-gutter-md q-mb-md'>
      <div v-for='i in 10' class='col-12 col-sm-6 col-md-3 col-lg-3' :key='i'>
        <router-link :to="'/logger/1102-'+ i" class='link-nodecor'>
          <q-card flat bordered class=''>
            <q-card-section class='text-h6 text-grey'>
              <div class='flex items-start q-mb-md'>
                <div>
                  <h1 class='text-h5 text-grey-9 text-bold q-mt-none q-mb-none'>
                    1102-{{ i }}
                  </h1>
                  <p class='text-subtitle1 q-my-none'>
                    BBWS Sulawesi 2
                  </p>
                </div>

                <div class='q-ml-auto'>
                  <span class='text-h5 q-mr-xs'>
                    <span>20:30</span>
                  </span>
                </div>
              </div>

              <div class='flex items-start text-grey-9'>
                <div class=''>
                  <q-icon name='battery_full' />
                  100%
                </div>
                <div class='q-ml-auto'>
                  <q-icon name='signal_cellular_alt' />
                  30/30
                </div>
              </div>
            </q-card-section>
          </q-card>
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'dashboard',

  data () {
    return {
      keyword: ''
    }
  }
}
</script>
