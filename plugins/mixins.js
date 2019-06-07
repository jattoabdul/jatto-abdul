import Vue from 'vue'

Vue.mixin({
  methods: {
    back() {
      if (document.referrer.indexOf(window.location.host) !== -1) {
        this.$router.back()
      } else {
        this.$router.push(this.$route.path.split('/').slice(0, -1).join('/'))
      }
    },
    shortName(name) {
      if (!name) return ''
      if (name.split(' ').length > 1) {
        return name.split(' ')[0]
      }
      if (name.length > 12) {
        return name.substr(0, 12) + '..'
      }
      return name
    },
    extractNum(str) {
      const strMatch = str.match(/\d+/g)
      if (!strMatch) return ''
      return strMatch.join('')
    },
    expectedDateStart(shipmentDate) {
      if (!shipmentDate) return ''

      return this.formatDate(new Date(new Date(shipmentDate).getTime() + (1000 * 60 * 60 * 24 * 10)))
    },
    expectedDate(shipmentDate) {
      if (!shipmentDate) return ''

      return this.formatDate(new Date(new Date(shipmentDate).getTime() + (1000 * 60 * 60 * 24 * 14)))
    },
    formatDate(time) {
      const dateTime = new Date(time)
      return `${this.$monthShort[dateTime.getMonth()]} ${dateTime.getDate()}, ${dateTime.getFullYear()}`
    },
    isEqual(value, other) {
      // Get the value type
      const type = Object.prototype.toString.call(value)

      // If the two objects are not the same type, return false
      if (type !== Object.prototype.toString.call(other)) return false

      // If items are not an object or array, return false
      if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false

      // Compare the length of the length of the two items
      const valueLen = type === '[object Array]' ? value.length : Object.keys(value).length
      const otherLen = type === '[object Array]' ? other.length : Object.keys(other).length
      if (valueLen !== otherLen) return false

      // Compare two items
      const compare = (item1, item2) => {
        // Get the object type
        const itemType = Object.prototype.toString.call(item1)

        // If an object or array, compare recursively
        if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
          if (!this.isEqual(item1, item2)) return false
        } else { // Otherwise, do a simple comparison
          // If the two items are not the same type, return false
          if (itemType !== Object.prototype.toString.call(item2)) return false

          // Else if it's a function, convert to a string and compare
          // Otherwise, just compare
          if (itemType === '[object Function]') {
            if (item1.toString() !== item2.toString()) return false
          } else if (item1 !== item2) return false
        }
      }

      // Compare properties
      if (type === '[object Array]') {
        for (let i = 0; i < valueLen; i++) {
          if (compare(value[i], other[i]) === false) return false
        }
      } else {
        for (const key in value) {
          if (value.hasOwnProperty(key)) {
            if (compare(value[key], other[key]) === false) return false
          }
        }
      }

      // If nothing failed, return true
      return true
    }
  }
})
