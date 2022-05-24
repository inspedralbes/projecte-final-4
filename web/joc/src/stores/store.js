// stores/counter.js
import { defineStore } from 'pinia'

export const AdminStore = defineStore('adminUser', {
  state: () => {
    return { user: "" }
  },
  actions: {
    login() {
      this.user="admin"
    },
  },
  
})