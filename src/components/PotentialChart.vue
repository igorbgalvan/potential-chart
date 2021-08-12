<template>
  <div class="col-5">
    <md-card>
      <md-card-header>
        <div class="md-title">Potential Chart</div>
      </md-card-header>

      <md-divider></md-divider>

      <md-card-content>
        <!-- add graphic here -->
        <div
          class="ml-6 mb-6 grid grid-cols-4 w-96 gap-x-4 gap-y-1 rounded-xl"
        >
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
      </md-card-content>
    </md-card>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "ApexBarChartsGrouped",
  data() {
    return {
      series: [
        {
          data: [44, 55, 41],
          name: "Green",
        },
        {
          data: [53, 32, 33],
          name: "Yellow",
        },
        {
          data: [60, 15, 25],
          name: "RED",
        },
      ],
      chartOptions: {
        colors: ["#00e396", "#feb019", "#ff4560"],
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 1000,
        },
        title: {
          text: "Bar Charts Grouped",
          align: "left",
          style: {
            color: "#FFF",
          },
        },
        legend: {
          labels: {
            colors: "#FFF",
          },
        },
        chart: {
          type: "bar",
          height: 430,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        xaxis: {
          categories: [2001, 2002, 2003],
          labels: {
            style: {
              colors: "#fff",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: "#fff",
            },
          },
        },
      },
    };
  },
};
</script>
