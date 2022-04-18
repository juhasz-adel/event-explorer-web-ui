<template>
  <div class="container">
    <section class="row mt-3">
      <div class="form-group">
        <label>Kategóriák</label>
        <select class="form-control">
          <option value="0">Kérlek válassz kategóriát...</option>
          <option
            v-for="category in categories"
            :id="category.id"
            v-bind:key="category.id"
          >
            {{ category.name }}
          </option>
        </select>
        <button class="btn btn-primary">Szűrés</button>
      </div>
    </section>
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
          <p class="card-text">
            Maximum létszám: {{ event.location.maximumHeadCount }} fő
          </p>
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
import { getCategories } from "../services/categoryService";
import { attend } from "../services/attendanceService";
import { convertToReadableDateAndTime } from "../utils/dateFormatters";
import { isLoggedIn } from "../utils/userLoggedInChecker";
import user from "../config/user.config.json";

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
          location: { name: "", maximumHeadCount: 0 },
          startDate: "",
        },
      ],
      categories: [{ id: 0, name: "" }],
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
    getCategories().then((response) => (this.categories = response.data));
  },
};
</script>
