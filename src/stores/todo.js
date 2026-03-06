import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
  }),
  getters: {
    countTodos: (state) => state.todos.length,
  },
  actions: {
    async fetchTodos() {
      try {
        const response = await axios.get("http://localhost:3100/tasks");
        this.todos = response.data;
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    },
    toggleStatus(id) {
      const numericId = Number(id);
      const foundIndex = this.todos.findIndex((t) => t.id === numericId);
      if (foundIndex < 0) return null;
      const current = this.todos[foundIndex];
      const updated = {
        ...current,
        completedAt: current.completedAt ? null : new Date().toISOString(),
      };
      this.todos = [
        ...this.todos.slice(0, foundIndex),
        updated,
        ...this.todos.slice(foundIndex + 1),
      ];
      return updated;
    },
    addTodo(todo) {
      this.todos.push({
        id: this.todos.length + 1,
        name: todo,
        description: "description",
        createdAt: new Date().toISOString(),
        completedAt: null,
      });
      this.todos = JSON.parse(JSON.stringify(this.todos));
    },
    clearAll() {
      this.todos = [];
    },
  },
});
