<template>
  <!--TODO: add base-card component -->
  <div class="common-layout">
        <el-row :gutter="20" justify="space-between">
          <el-col :span="6"  v-for="column in kanbanData" :key="column.id">
            <kanban-column :title="column.title" :tickets="column.tickets" :column="column">
            </kanban-column>
          </el-col>
        </el-row>
  </div>
</template>

<script>
import { useKanbanStore } from '../../stores/KanbanStore';
import KanbanColumn from './KanbanColumn.vue';

export default {
  setup() {
    const kanbanStore = useKanbanStore();

    return { kanbanStore };
  },
  components: {
    KanbanColumn
  },
  computed: {
    kanbanData() {
      return this.kanbanStore.kanbanData;
    }
  }
}
</script>

<style>
.el-row {
  padding: 0 10%;
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>