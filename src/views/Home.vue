<template>
  <div class="container">
    <section class="row mt-3 justify-content-md-center">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <select class="form-control" v-model="selectedCategoryId">
          <option value="0">Kérlek válassz kategóriát...</option>
          <option
            :id="category.id"
            v-for="category in categories"
            v-bind:key="category.id"
            v-bind:value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <button class="btn btn-primary w-100" v-on:click="filter()">
          Szűrés
        </button>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
        <button class="btn btn-primary w-100" v-on:click="restoreFilter()">
          Szűrés törlése
        </button>
      </div>
    </section>
    <section class="row text-center">
      <article
        class="card mt-2 col-xs-12 col-sm-12 col-md-6 col-lg-4"
        v-for="event in events"
        :key="event.id"
      >
        <div class="card-body">
          <h5 class="card-title">{{ event.name }}</h5>
          <p class="card-text">Helyszín:<br />{{ event.location.name }}</p>
          <p class="card-text">
            Időpont:<br />
            {{ convertToReadableDateAndTime(event.startDate) }}
          </p>
          <p class="card-text">Szervező:<br />{{ event.organizer.name }}</p>
          <p class="card-text">
            Maximum létszám:<br />{{ event.location.maximumHeadCount }} fő
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
import { getCategoryEvents } from "../services/categoryEventsService";
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
      selectedCategoryId: 0,
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
    filter() {
      getCategoryEvents(this.selectedCategoryId).then(
        (response) => (this.events = response.data)
      );
    },
    restoreFilter() {
      getEvents().then((response) => (this.events = response.data));
    },
  },
  mounted() {
    getEvents().then((response) => (this.events = response.data));
    getCategories().then((response) => (this.categories = response.data));
  },
};
</script>
