<template>
    <div class="container">
            <full-calendar :events="fcEvents" locale="en"></full-calendar>            
    </div>
</template>


<script>

let calendarEvents = [
  {
    title: 'Perfect Day for Rain',
    start: '2016-08-25',
    end: '2017-05-25'
  },
  {
    title: 'Wait another month for VueConf',
    start: '2017-05-21',
    end: '2017-05-22',
    cssClass: 'vueconf'
  },
  {
    title: 'A single sunny day',
    start: '2017-05-29',
    end: '2017-05-29'
  }
]

export default {
  data () {
    return {
      fcEvents : calendarEvents
    }
  }
}
</script>


<style>

</style>