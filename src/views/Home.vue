<template>
  <div class="container-fluid">
    <section class="row text-center">
      <article
        class="card mt-2 col-xs-12 col-sm-12 col-md-6 col-lg-3"
        v-for="event in events"
        :key="event.id"
      >
        <div class="card-body">
          <h5 class="card-title">{{ event.name }}</h5>
          <p class="card-text">Helyszín: {{ event.location.name }}</p>
          <p class="card-text">
            Időpont: {{ convertToReadableDateAndTime(event.startDate) }}
          </p>
          <p class="card-text">Szervező: {{ event.organizer.name }}</p>
          <button
            v-if="isLoggedIn()"
            class="btn btn-primary"
            :id="event.id"
            :key="event.id"
            v-on:click="attendToEvent(event.id)"
          >
            Érdekel
          </button>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { getEvents } from "../services/eventService";
import { attend } from "../services/attendanceService";
import { convertToReadableDateAndTime } from "../utils/dateFormatters";
import user from "../config/user.config.json";
import { isLoggedIn } from "../utils/userLoggedInChecker";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      events: [
        {
          id: 0,
          name: "",
          organizer: { name: "" },
          location: { name: "" },
          startDate: "",
        },
      ],
    };
  },
  methods: {
    convertToReadableDateAndTime(date) {
      return convertToReadableDateAndTime(date);
    },
    attendToEvent(eventId) {
      const { id: userId } = user;
      attend(userId, eventId);
    },
    isLoggedIn() {
      const { id: userId } = user;
      return isLoggedIn(userId);
    },
  },
  mounted() {
    getEvents().then((response) => (this.events = response.data));
  },
};
</script>
