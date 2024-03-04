<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- leftbar -->
    <LeftBar />
    <!-- middle -->
    <MiddleBar />
    <!-- rightbar -->
    <RightBar />
  </div>
</template>

<script>
import LeftBar from "@/components/LeftBar.vue";
import MiddleBar from "@/components/MiddleBar.vue";
import RightBar from "@/components/RightBar.vue";

export default {
  components: { LeftBar, MiddleBar, RightBar },
  name: "HomePage",
};
</script>
