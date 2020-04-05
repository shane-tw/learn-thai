import Vue from 'vue'
import ReferenceItem from '@/components/ReferenceItem/ReferenceItem.vue'
import consonants from '@/consts/consonants'

export default Vue.extend({
  name: 'Home',
  components: {
    ReferenceItem
  },
  data: () => ({
    consonants
  })
})
