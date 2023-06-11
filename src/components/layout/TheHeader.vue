<template>
  <header>
    <h2>Kanban Board</h2>
    <div class="actions">
      <el-button @click="addNewTicket" type="primary" icon="Plus" size="large">Add ticket</el-button>
    </div>
    <TicketForm @close="isModalOpen = false" :isOpen="isModalOpen" mode="new"></TicketForm>
  </header>
</template>

<script>
import TicketForm from '../kanban/TicketForm.vue';

export default {
  data() {
    return {
      isModalOpen: false,
    };
  },
  components: {
    TicketForm
  },
  methods: {
    addNewTicket() {
      this.isModalOpen = true;
    }
  }
}
</script>

<style scoped>
header {
  /* width: 100%; */
  height: 5rem;
  color: black;
  box-shadow: 0 2px 13px 1px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  margin-bottom: 3%;
}
.actions {
  display: flex;
  gap: .5rem;
  align-items: center;
  justify-items: center;
}
</style>