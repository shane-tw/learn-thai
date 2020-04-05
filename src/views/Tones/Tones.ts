import Vue from 'vue'
import ReferenceItem from '@/components/ReferenceItem/ReferenceItem.vue'
import toneMarks from '@/consts/tone-marks'

export default Vue.extend({
  name: 'Tones',
  components: {
    ReferenceItem
  },
  data: () => ({
    toneMarks
  })
})
