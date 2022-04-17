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

      <div class="col-sm-6" style="font-size: 20px">
        <p>Események amiken eddig részt vettél:</p>
        <p>
          Pályválasztási nap <br />
          Helyszín: Szent-Györgyi Albert Agóra <br />
          Időpont: 2021.09.15.
        </p>
        <p>
          Diótörő <br />
          Helyszín: Móra Ferenc Múzeum<br />
          Időpont: 2021.11.25.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { getUser } from "../services/userService";
import userConfig from "../config/loggedInUser.json";

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
    };
  },
  methods: {
    formatDate(date) {
      return date.toString().substring(0, 10);
    },
  },
  mounted() {
    getUser(userConfig.loggedInUserId).then(
      (response) => (this.user = response.data)
    );
  },
};
</script>
