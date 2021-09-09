<template>
  <div class="min-w-min">
    <div
      class="
        m-1
        grid grid-row-2
        bg-white
        shadow-xl
        rounded-xl
        border border-gray-300
      "
    >
      <div class="divide-y divide-gray-200 divide-solid overflow-hidden">
        <div class="flex flex-col items-center md:flex-row">
          <h1 class="ml-2 mb-2 mt-2 text-sm">POTENTIAL CHART</h1>
        </div>
        <div>
          <div class="overflow-auto md:overflow-visible md:m-6">
            <div class="flex flex-row">
              <div class="m-2 flex flex-row justify-center items-center">
                <div class="flex-shrink w-6 text-gray-500 transform -rotate-90">
                  People/Culture
                </div>
                <div class="overflow-auto">
                  <div
                    class="grid grid-cols-4 relative"
                    style="width: 400px; height: 400px"
                    ref="grid"
                  >
                    <div
                      class="bg-yellow-300 rounded-tl-lg"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-blue-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-green-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-green-300 rounded-tr-lg"
                      style="width: 96px; height: 96px"
                    ></div>

                    <div
                      class="bg-yellow-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-yellow-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-blue-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-green-300"
                      style="width: 96px; height: 96px"
                    ></div>

                    <div
                      class="bg-red-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-yellow-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-yellow-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-blue-300"
                      style="width: 96px; height: 96px"
                    ></div>

                    <div
                      class="bg-red-300 rounded-bl-lg"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-red-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-yellow-300"
                      style="width: 96px; height: 96px"
                    ></div>
                    <div
                      class="bg-yellow-300 rounded-br-lg"
                      style="width: 96px; height: 96px"
                    ></div>
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
img {
}
.element {
  background: url(../assets/vector.svg);
  background-size: 120%;
  border: none !important;
}

.pointer-avatar{
width: 48px; height: 68px;
}

.pointer-picture{
  width: 32px; height: 32px; top:16px; left: 8px;
}
</style>

<script>
export default {
  name: "Potential Chart",
  data() {
    return {
      data: [
        {
          x: 200,
          y: 200,
          entries: [
            {
              name: "Daniel",
              hard: 2.1,
              soft: 2,
              picture: "https://i.pravatar.cc/150?img=igorbraga",
            },
            {
              name: "igor",
              soft: 2.1,
              hard: 2,
              picture: "https://i.pravatar.cc/300",
            },
          ],
        },
        {
          x: 270,
          y: 270,
          entries: [
            {
              name: "igor",
              soft: 2.1,
              hard: 2,
              picture: "https://i.pravatar.cc/150?img=igor",
            },
          ],
        },
        {
          x: 100,
          y: 100,
          entries: [
            {
              name: "igor",
              soft: 2.1,
              hard: 2,
              picture: "https://i.pravatar.cc/150?img=igorbrga",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    //${this.data[0].entries[0].picture}
    this.data.forEach((element) => {
      if (element.entries.length > 1) {
        this.$refs.grid.insertAdjacentHTML(
          "beforeend",
          `<div class="absolute pointer-avatar border border-0 element z-10" style="top: ${element.y}px; right: ${element.x}px">
          <img src="${element.entries[0].picture}" class="absolute pointer-picture rounded-full">
          </div>`
        );
      } else {
        this.$refs.grid.insertAdjacentHTML(
          "beforeend",
          `<div class="absolute border border-0 pointer-avatar element" style="top: ${element.y}px; right: ${element.x}px">
          <img src="${element.entries[0].picture}" class="absolute pointer-picture rounded-full">
          </div>`
        );
      }
    });
  },
};
</script>
