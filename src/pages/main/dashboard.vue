<template>
  <q-page class='q-pa-sm'>
    <div class='row justify-center q-my-md'>
      <q-input
        outlined
        label='Cari SN logger'
        v-model='keyword'>

        <template v-slot:append>
          <q-icon name='search' />
        </template>
      </q-input>
    </div>
    <div class='row'>
      <div v-for='i in 10' class='col-12 col-sm-6 col-md-4 col-lg-3' :key='i'>
        <router-link :to="'/logger/1102-'+ i" class='link-nodecor'>
          <q-card flat class='q-ma-sm'>
            <q-card-section>
              <div class='flex justify-between items-start q-mb-sm'>
                <div>
                  <h1 class='text-h6 text-blue-grey-8 text-bold q-mt-none q-mb-none'>
                    1102-{{ i }}
                  </h1>
                  <p class='text-subtitle-2 text-blue-grey-5 q-my-none'>
                    BBWS Sulawesi 2
                  </p>
                </div>
                <div class='q-ml-auto'>
                  <span class='text-subtitle-2 text-blue-grey-5 q-mr-xs'>100%</span>
                  <q-icon name='lens' class='text-green' />
                </div>
              </div>

              <div>
                { chart }
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
