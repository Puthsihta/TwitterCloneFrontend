<template>
  <div
    role="alert"
    class="[rounded border-s-4 border-red-500 bg-red-50 p-4 absolute z-10 top-3 right-3] hidden">
    <strong class="block font-medium text-red-800">
      {{ msg }}
    </strong>

    <p class="mt-2 text-sm text-red-700">
      {{ des }}
    </p>
  </div>
</template>
<script>
export default {
  name: "Alert",
  props: {
    msg: String,
    des: String,
  },
};
</script>
