// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('../node_modules/bootstrap/less/bootstrap.less')
import Vue from 'vue'
import App from './App'
import router from './router'
import io from 'socket.io-client'
import store from './store'
import SweetAlert2 from 'sweetalert2'
import FullCalendar from 'vue-fullcalendar'

Vue.use(SweetAlert2)
Vue.use(FullCalendar)


let socket = io('http://localhost:3000')

socket.on('CONNECTED', function(data) {
    console.log(data)
    socket.emit('update', { data: 'blarg', boardId: '3289748320' })
})



new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})