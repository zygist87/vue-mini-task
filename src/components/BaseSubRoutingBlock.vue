<template>
  <div class="career">
    <ul v-for="job in career" :key="job.company">
      <li>{{job.year}} - {{job.company}} -- {{job.position}}</li><br/>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BaseSubRoutingBlock',
  data () {
    return {
      career: [
        { year: '1990-1999', company: 'company1', position: 'Cleaner' },
        { year: '1999-2002', company: 'company2', position: 'Physicist' },
        { year: '2002-2012', company: 'company3', position: 'President' },
        { year: '2012-2019', company: 'company4', position: 'Front-end developer' }
      ]
    }
  }
}
</script>

<style lang="scss">
.career {
  margin-top: 20px;
  background-color: #eeeff3;
  color: black;
  margin-right: 30px;
  height: 120px;
  line-height: 6px;
  // padding-left: 20px;
  padding-top: 10px;
  align-items: center;
  display: block;
}
</style>
