import Vue from 'vue'
import ReferenceItem from '@/components/ReferenceItem/ReferenceItem.vue'
import numbers from '@/consts/numbers'

export default Vue.extend({
  name: 'Numbers',
  components: {
    ReferenceItem
  },
  data: () => ({
    numbers
  })
})
