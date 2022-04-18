<template>
  <div class="container">
    <section class="row text-center mt-5">
      <article
        class="col-sm-12"
        v-if="upcomingUserEvents.length === 0 && furtherUserEvents.length === 0"
      >
        <h5>Sajnos nincsenek eseményeid...</h5>
      </article>
      <article class="col-sm-6">
        <div class="upcoming-events" v-if="upcomingUserEvents.length > 0">
          <h5>Eseményeid ebben a hónapban:</h5>
          <div
            class="card mb-1"
            v-for="upcomingUserEvent in upcomingUserEvents"
            :key="upcomingUserEvent.id"
          >
            <div class="card-body">
              <h5 class="card-title">{{ upcomingUserEvent.name }}</h5>
              <p class="card-text">
                Kezdés:
                {{ convertToReadableDateAndTime(upcomingUserEvent.startDate) }}
              </p>
            </div>
          </div>
        </div>
      </article>
      <article class="col-sm-6">
        <div class="further-events" v-if="furtherUserEvents.length > 0">
          <h5>Későbbi eseményeid:</h5>
          <div
            class="card mb-1"
            v-for="furtherUserEvent in furtherUserEvents"
            :key="furtherUserEvent.id"
          >
            <div class="card-body">
              <h5 class="card-title">{{ furtherUserEvent.name }}</h5>
              <p class="card-text">
                Kezdés:
                {{ convertToReadableDateAndTime(furtherUserEvent.startDate) }}
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
import { convertToReadableDateAndTime } from "../utils/dateFormatters";
import user from "../config/user.config.json";

export default {
  name: "Events",
  components: {},
  data() {
    return {
      upcomingUserEvents: [
        {
          id: 0,
          name: "",
          startDate: "",
        },
      ],
      furtherUserEvents: [
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
    getUserEvents(id, true).then(
      (response) => (this.upcomingUserEvents = response.data)
    );
    getUserEvents(id, false).then(
      (response) => (this.furtherUserEvents = response.data)
    );
  },
};
</script>
