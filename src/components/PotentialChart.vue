<template>
  <div class="min-w-min">
    <div
      class="
        m-1
        grid grid-row-2
        bg-white
        shadow-xl
        rounded-xl
        border border-grey-300
      "
    >
      <div class="divide-y divide-gray-200 divide-solid overflow-hidden">
        <div class="flex flex-col items-center md:flex-row">
          <h1 class="ml-2 mb-2 mt-2 text-sm">POTENTIAL CHART</h1>
        </div>
        <div>
          <div class="overflow-auto md:overflow-visible md:m-6">
            <div class="flex flex-row-2">
              <div>
                <div class="m-2 flex flex-col-2 justify-center items-center">
                  <div class="">
                    <p class="w-6 text-gray-500 transform -rotate-90">
                      People/Culture
                    </p>
                  </div>
                  <div class="grid grid-cols-4 gap-1">
                    <div class="h-24 w-24 bg-yellow-300 rounded-tl-lg"></div>
                    <div class="h-24 w-24 bg-blue-300"></div>
                    <div class="h-24 w-24 bg-green-300"></div>
                    <div class="h-24 w-24 bg-green-300 rounded-tr-lg"></div>

                    <div class="h-24 w-24 bg-yellow-300"></div>
                    <div class="h-24 w-24 bg-yellow-300"></div>
                    <div class="h-24 w-24 bg-blue-300"></div>
                    <div class="h-24 w-24 bg-green-300"></div>

                    <div class="h-24 w-24 bg-red-300"></div>
                    <div class="h-24 w-24 bg-yellow-300"></div>
                    <div class="h-24 w-24 bg-yellow-300"></div>
                    <div class="h-24 w-24 bg-blue-300"></div>

                    <div class="h-24 w-24 bg-red-300 rounded-bl-lg"></div>
                    <div class="h-24 w-24 bg-red-300"></div>
                    <div class="h-24 w-24 bg-yellow-300"></div>
                    <div class="h-24 w-24 bg-yellow-300 rounded-br-lg"></div>
                  </div>
                </div>
                <div>
                  <div class="flex -mt-2 flex-col items-center justify-center">
                    <p class="w-6 text-gray-500">Skill/Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mb-6 ml-6 mr-6 flex flex-col">
          <div class="inline-flex items-center gap-1 mb-1">
            <span class="rounded-full h-4 w-4 bg-red-300"></span>
            <span class="text-gray-500">No Hire</span>
          </div>
          <div class="inline-flex items-center gap-1 mb-1">
            <span class="rounded-full h-4 w-4 bg-yellow-300"></span>
            <span class="text-gray-500">Discussion Needed</span>
          </div>
          <div class="inline-flex items-center gap-1 mb-1">
            <span class="rounded-full h-4 w-4 bg-blue-300"></span>
            <span class="text-gray-500">Coaching Needed</span>
          </div>
          <div class="inline-flex items-center gap-1">
            <span class="rounded-full h-4 w-4 bg-green-300"></span>
            <span class="text-gray-500">Hire</span>
          </div>
        </div>
      </div>
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
