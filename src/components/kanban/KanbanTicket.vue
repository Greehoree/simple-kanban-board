<template>
  <div class="ticket-container">
    <slot name="title">
      <h3>{{title}}</h3>
    </slot>
    <div class="body">
      <p>Status: {{ status }}</p>
    </div>
    <div class="actions">
      <ui-icon-button @mouseup="moveLeft" icon="chevron_left" color="primary" :disabled="isFirst" size="small"></ui-icon-button>
      <ui-icon-button @mouseup="moveRight" icon="chevron_right" color="primary" :disabled="isLast" size="small"></ui-icon-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['title', 'status', 'isLast', 'isFirst'],
  emits: ['moveLeft', 'moveRight'],
  methods: {
    moveLeft() {
      this.$emit('moveLeft');
    },
    moveRight() {
      this.$emit('moveRight');
    }
  },
  created() {
    console.log('last',this.isLast);
    console.log('first', this.isFirst)
  },
}
</script>

<style scoped>
.ticket-container {
  background-color: rgba(0,0,0, .2);
}
.actions {
  display: flex;
  justify-content: space-around;
}
</style>