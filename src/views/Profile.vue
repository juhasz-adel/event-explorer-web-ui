<template>
  <div class="container">
    <section class="row text-center">
      <article class="col-sm-6">
        <div class="profile" :id="user.id">
          <p>E-mail cím: {{ user.email }}</p>
          <p>Teljes név: {{ user.lastName }} {{ user.firstName }}</p>
          <p>Születési idő: {{ convertToDateOnly(user.birthDate) }}</p>
        </div>
      </article>
      <article class="col-sm-6">
        <h5>Események amiken eddig részt vettél:</h5>
        <div
          class="card mb-1"
          v-for="userEvent in userEvents"
          :key="userEvent.id"
        >
          <div class="card-body">
            <h5 class="card-title">{{ userEvent.name }}</h5>
            <p class="card-text">Szervező: {{ userEvent.organizer.name }}</p>
            <p class="card-text">
              Kezdés: {{ convertToReadableDateAndTime(userEvent.startDate) }}
            </p>
            <p class="card-text">
              Vége: {{ convertToReadableDateAndTime(userEvent.endDate) }}
            </p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { getUser } from "../services/userService";
import { getUserEvents } from "../services/userEventsService";
import user from "../config/user.config.json";
import {
  convertToDateOnly,
  convertToReadableDateAndTime,
} from "../utils/dateFormatters";

export default {
  name: "Profile",
  components: {},
  data() {
    return {
      user: {
        id: 0,
        email: "",
        password: "",
        lastName: "",
        firstName: "",
        birthDate: "",
      },
      userEvents: [
        {
          id: 0,
          name: "",
          organizer: { name: "" },
          startDate: "",
          endDate: "",
        },
      ],
    };
  },
  methods: {
    convertToDateOnly(date) {
      return convertToDateOnly(date);
    },
    convertToReadableDateAndTime(date) {
      return convertToReadableDateAndTime(date);
    },
  },
  mounted() {
    const { id } = user;

    getUser(id).then((response) => (this.user = response.data));
    getUserEvents(id).then((response) => (this.userEvents = response.data));
  },
};
</script>
