<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <q-page class='q-py-xl'>
        <template>
          <div class="row justify-center">
            <div class="col-10 col-sm-5 col-md-4 col-lg-2">
              <h1 class='text-h4 q-mt-none q-mb-none'>Selamat datang</h1>
              <p class="text-subtitle1 q-mb-xl">Silahkan LOGIN untuk melanjutkan</p>

              <q-form
                @submit.prevent="handleLogin"
                class="q-gutter-md"
              >
                <q-input
                  autofocus
                  filled
                  bg-color='white'
                  color='blue-grey-8'
                  label="Username"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Masukkan username']"
                  v-model='username'
                />

                <q-input
                  filled
                  bg-color='white'
                  color='blue-grey-8'
                  type="password"
                  label="Password"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Masukkan password' ]"
                  v-model='password'
                />

                <q-toggle v-model="save_login" label="Simpan sesi login" />

                <div class='row justify-center q-mt-lg'>
                  <q-btn
                    label="Login"
                    type="submit"
                    color="primary"
                    size='lg'
                    class='q-px-xl text-bold'
                    :loading='submitting'>

                    <template v-slot:loading>
                      <q-spinner-facebook />
                    </template>
                  </q-btn>
                </div>
              </q-form>

            </div>
          </div>
        </template>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'login',

  data () {
    return {
      username: '',
      password: '',
      save_login: true,
      submitting: false
    }
  },

  methods: {
    handleLogin () {
      if (this.submitting) {
        return
      }

      this.submitting = true

      setTimeout(() => {
        this.submitting = false

        if (this.username !== 'adem' || this.password !== 'adem') {
          this.$q.notify({
            position: 'bottom',
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Username / password salah',
            timeout: 1000
          })
          // this.resetForm(false)
          return
        }

        this.$router.push({ path: '/dashboard' })
      }, 1500)
    },

    resetForm (resetUsername) {
      this.password = ''
      this.submitting = false
      if (resetUsername) {
        this.username = ''
      }
    }
  }
}
</script>
