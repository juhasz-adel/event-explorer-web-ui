<template>
  <div class="container">
    <section class="row">
      <article
        class="card mt-3 mb-3 col-xs-12 col-sm-6 col-md-4 col-lg-3"
        v-for="event in events"
        :key="event.id"
      >
        <div class="card-body">
          <h5 class="card-title">{{ event.name }}</h5>
          <p class="card-text">Szervező: {{ event.organizer.name }}</p>
          <p class="card-text">Időpont: {{ formatDate(event.startDate) }}</p>
          <button class="btn btn-primary" :id="event.id" :key="event.id">
            Érdekel
          </button>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { getEvents } from "../services/eventService";

export default {
  name: "Events",
  components: {},
  data() {
    return {
      events: [],
    };
  },
  methods: {
    formatDate(date) {
      return date.toString().replace("T", " ");
    },
  },
  mounted() {
    getEvents().then((response) => (this.events = response.data));
  },
};
</script>
