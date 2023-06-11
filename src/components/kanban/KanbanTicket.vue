<template>
  <el-card>
    <header>
      <h5>
        {{ ticket.name }}
      </h5>
      <div class="header-actions">
        <el-button icon="Edit" @click="openModal" size="small" circle></el-button>
      </div>
    </header>
    <div>
      <p class="description">
        {{ ticket.description }}
      </p>
    </div>
    <footer>
      <h5>Status: <el-text :type="statusColor"> {{ column.title }}</el-text></h5>
      <div class="actions">
        <el-button @click="moveLeft" :disabled="isFirst" icon="Back" size="small" circle></el-button>
        <el-button @click="moveRight" :disabled="isLast" icon="Right" size="small" circle></el-button>
      </div>
    </footer>
    <TicketForm @close="isModalOpen = false" :isOpen="isModalOpen" mode="edit" :editableTicket="modalData"></TicketForm>
  </el-card>
</template>

<script>
import { useKanbanStore } from '../../stores/KanbanStore';
import TicketForm from './TicketForm.vue';

export default {
  setup() {
    const kanbanStore = useKanbanStore();
    
    return {kanbanStore};
  },
  components: {
    TicketForm
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
  props: ['isLast', 'isFirst', 'ticket', 'column'],
  computed: {
    statusColor() {
      if (this.isLast) {
        return 'danger';
      } else if (this.isFirst) {
        return 'primary';
      } else {
        return 'warning';
      }
    },
    modalData() {
      return {
        ...this.ticket,
        ticketId: this.column.id
      }
    }
  },
  methods: {
    moveRight() {
      console.log('ticket',this.ticket);
      this.kanbanStore.moveTicket('right', this.ticket.id);
    },
    moveLeft() {
      this.kanbanStore.moveTicket('left', this.ticket.id);
    },
    openModal() {
      this.isModalOpen = true;
    }
  }

}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
}
.ticket-container {
  background-color: rgba(0,0,0, .2);
}
.actions {
  display: flex;
  justify-content: space-between;
}

.description {
  font-size: 14px;
}
</style>