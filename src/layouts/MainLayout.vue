<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <div class="mobile-menu-btn">
          <q-btn
            flat
            dense
            color="white"
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>
        <div class="gt-xs desktop-links">
          <!-- <q-avatar>
          <img src="~assets/photography-camera-logo-png_3061450.png" />
        </q-avatar> -->
          <div class="toolbar-title">Movies</div>
          <div class="nav-links-wrapper">
            <span v-for="link in navLinks" :key="link.title">
              <router-link class="text-uppercase text-white" :to="link.route">
                {{ link.title }}</router-link
              >
            </span>
          </div>

          <div class="action-buttons">
            <q-icon size="sm" name="search"></q-icon>
            <q-btn label="Sign In"></q-btn>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header class="header">Movies </q-item-label>

        <EssentialLink
          v-for="link in navLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },
  data() {
    return {
      // essentialLinks: navLinks,
      leftDrawerOpen: false,
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
  computed: {
    navLinks() {
      return [
        {
          title: "Home",
          route: "#",
        },
        {
          title: "Movie",
          route: "#",
        },
        {
          title: "Tv Show",
          route: "#",
        },
        {
          title: "Popular",
          route: "#",
        },
        {
          title: "Genre",
          route: "#",
        },
        {
          title: "Upcoming",
          route: "#",
        },
      ];
    },
  },

  // setup() {
  //   const leftDrawerOpen = ref(false);

  //   return {
  //     essentialLinks: navLinks,
  //     leftDrawerOpen,
  //     toggleLeftDrawer() {
  //       leftDrawerOpen.value = !leftDrawerOpen.value;
  //     },
  //   };
  // },
});
</script>
