<template>
  <div class="container">
    <section class="row text-center mt-5">
      <article class="col-sm-12" v-if="userEvents.length === 0">
        <h5>Nincsenek eseményeid...</h5>
      </article>
      <article class="col-sm-6">
        <div class="upcoming-events" v-if="userEvents.length !== 0">
          <h5>Eseményeid ebben a hónapban:</h5>
        </div>
      </article>
      <article class="col-sm-6">
        <div class="further-events" v-if="userEvents.length !== 0">
          <h5>Későbbi események:</h5>
          <div
            class="card mb-1"
            v-for="userEvent in userEvents"
            :key="userEvent.id"
          >
            <div class="card-body">
              <h5 class="card-title">{{ userEvent.name }}</h5>
              <p class="card-text">
                Kezdés: {{ convertToReadableDateAndTime(userEvent.startDate) }}
              </p>
            </div>
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
import { convertToReadableDateAndTime } from "../utils/dateFormatters";

export default {
  name: "Events",
  components: {},
  data() {
    return {
      userEvents: [
        {
          id: 0,
          name: "",
          startDate: "",
        },
      ],
    };
  },
  methods: {
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
