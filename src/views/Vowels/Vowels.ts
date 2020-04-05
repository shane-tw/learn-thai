import Vue from 'vue'
import ReferenceItem from '@/components/ReferenceItem/ReferenceItem.vue'
import vowels from '@/consts/vowels'

export default Vue.extend({
  name: 'Vowels',
  components: {
    ReferenceItem
  },
  data: () => ({
    vowels
  })
})
