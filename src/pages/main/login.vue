<template>
  <q-layout view="hHh lpR fFf">

    <q-page-container>
      <q-page class='q-py-xl'>
        <template>
          <div class="row justify-center">
            <div class="col-10 col-sm-5 col-md-4 col-lg-2">
              <h1 class='text-h4 q-mt-none q-mb-none'>Login</h1>

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

      this.$auth.login({
        headers: {
          'Authorization': 'Basic ' + window.btoa(this.username + ':' + this.password)
        },
        rememberMe: this.save_login,
        success (res) {
          var response = res.data
          if (response.status === '200') {

          }
          this.submitting = false
        },
        error (e) {
          console.log(e)
          this.submitting = false
        },
        makeRequest: false,
        fetchUser: false,
        redirect: {
          path: '/dashboard'
        }
      })
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
