<template lang="">
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-brand-wrapper">
          <a href="./index.html" class="logo">
            <!-- <img src="./assets/images/logo.svg" alt="Filmlane logo" /> -->
          </a>

          <div class="footer-links-wrapper">
            <span>
              <a href="./index.html" class="footer-link">Home</a>
            </span>

            <span>
              <a href="#" class="footer-link">Movie</a>
            </span>

            <span>
              <a href="#" class="footer-link">TV Show</a>
            </span>

            <span>
              <a href="#" class="footer-link">Web Series</a>
            </span>

            <span>
              <a href="#" class="footer-link">Pricing</a>
            </span>
          </div>
        </div>

        <div class="divider"></div>

        <div class="quick-links-and-socials-wrapper">
          <div class="quicklinks-wrapper">
            <span>
              <a href="#" class="quicklink">Faq</a>
            </span>

            <span>
              <a href="#" class="quicklink">Help center</a>
            </span>

            <span>
              <a href="#" class="quicklink">Terms of use</a>
            </span>

            <span>
              <a href="#" class="quicklink">Privacy</a>
            </span>
          </div>

          <div class="socials-wrapper">
            <span>
              <a href="#" class="social-link">
                <q-icon name="lab la-facebook"></q-icon>
              </a>
            </span>

            <span>
              <a href="#" class="social-link">
                <q-icon name="lab la-twitter"></q-icon>
              </a>
            </span>

            <span>
              <a href="#" class="social-link">
                <q-icon name="lab la-instagram"></q-icon>
              </a>
            </span>

            <span>
              <a href="#" class="social-link">
                <q-icon name="lab la-linkedin-in"></q-icon>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          &copy; <a href="#">Movies</a> {{ currentYear }} . All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterSection",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<style lang=""></style>
