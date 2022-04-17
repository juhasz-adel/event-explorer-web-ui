<template>
  <div class="container">
    <section class="row">
      <article class="col-sm-6">
        <div class="profile" :id="user.id">
          <p>E-mail cím: {{ user.email }}</p>
          <p>Teljes név: {{ user.lastName }} {{ user.firstName }}</p>
          <p>Születési idő: {{ formatDate(user.birthDate) }}</p>
        </div>
      </article>
      <article class="col-sm-6">
        <h5>Események amiken eddig részt vettél:</h5>
        <div class="card" v-for="userEvent in userEvents" :key="userEvent.id">
          <div class="card-body">
            <h5 class="card-title">{{ userEvent.name }}</h5>
            <p class="card-text">Szervező: {{ userEvent.organizer.name }}</p>
            <p class="card-text">
              Kezdés: {{ formatStartDate(userEvent.startDate) }}
            </p>
            <p class="card-text">
              Vége: {{ formatStartDate(userEvent.endDate) }}
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
    formatDate(date) {
      return date.toString().substring(0, 10);
    },
    formatStartDate(date) {
      return date.toString().replace("T", " ");
    },
  },
  mounted() {
    const { id } = user;

    getUser(id).then((response) => (this.user = response.data));
    getUserEvents(id).then((response) => (this.userEvents = response.data));
  },
};
</script>
