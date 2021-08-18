<template>
  <div class="min-w-min lg:w-3/12 overflow-auto">
    <div
      class="
        grid grid-row-2
        bg-white
        shadow-xl
        rounded-xl
        border border-grey-300
      "
    >
      <div class="divide-y divide-gray-200 divide-solid">
        <div>
          <h1 class="ml-2 mb-2 mt-2 text-sm">POTENTIAL CHART</h1>
        </div>
        <div>
          <div class="m-8 grid grid-cols-4 w-96 gap-x-4 gap-y-1 rounded-xl">
            <div class="col-1 h-24 w-24 bg-yellow-300 rounded-tl-lg"></div>
            <div class="col-1 h-24 w-24 bg-blue-300"></div>
            <div class="col-1 h-24 w-24 bg-green-300"></div>
            <div class="col-1 h-24 w-24 bg-green-300 rounded-tr-lg"></div>

            <div class="col-1 object-left-top h-24 w-24 bg-yellow-300"></div>
            <div class="col-1 h-24 w-24 bg-yellow-300"></div>
            <div class="col-1 h-24 w-24 bg-blue-300"></div>
            <div class="col-1 h-24 w-24 bg-green-300"></div>

            <div class="col-1 h-24 w-24 bg-red-300"></div>
            <div class="col-1 h-24 w-24 bg-yellow-300"></div>
            <div class="col-1 h-24 w-24 bg-yellow-300"></div>
            <div class="col-1 h-24 w-24 bg-blue-300"></div>

            <div class="col-1 h-24 w-24 bg-red-300 rounded-bl-lg"></div>
            <div class="col-1 h-24 w-24 bg-red-300"></div>
            <div class="col-1 h-24 w-24 bg-yellow-300"></div>
            <div class="col-1 h-24 w-24 bg-yellow-300 rounded-br-lg"></div>
          </div>
        </div>
      </div>
      <!-- add graphic here -->
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "Potential Chart",
  data() {
    return {};
  },
};
</script>
