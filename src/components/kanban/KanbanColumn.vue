<template>
  <div class="column">
    <header>
      <h3> {{ title }}</h3>
    </header>
    <div class="tickets-container">
      <slot>

      </slot>
      <!-- <KanbanTicket v-for="ticket in tickets" :key="ticket.title" :title="ticket.title" :status="title"></KanbanTicket> -->
    </div>
  </div>
</template>

<script>
// import KanbanTicket from './KanbanTicket.vue'

export default {
  components: {
    // KanbanTicket
  },
  props: ['title']
}
</script>

<style scoped>
.column {
  border: 2px solid black;
  min-height: 600px;
  min-width: 300px;
}
header {
  border: 3px dashed black;
  margin-bottom: 1rem;
}
.tickets-container {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  
}
</style>