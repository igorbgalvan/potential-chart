<template>
  <div class="col-5">
    <md-card>
      <md-card-header>
        <div class="md-title">Potential Chart</div>
      </md-card-header>

      <md-divider></md-divider>

      <md-card-content>
        <!-- add graphic here -->
        <div id="chart">
        </div>
      </md-card-content>
    </md-card>
  </div>
</template>

<style scoped>
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
  display: inline-block;
  text-align: left;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {
    width: 8.33%;
  }
  .col-s-2 {
    width: 16.66%;
  }
  .col-s-3 {
    width: 25%;
  }
  .col-s-4 {
    width: 33.33%;
  }
  .col-s-5 {
    width: 41.66%;
  }
  .col-s-6 {
    width: 50%;
  }
  .col-s-7 {
    width: 58.33%;
  }
  .col-s-8 {
    width: 66.66%;
  }
  .col-s-9 {
    width: 75%;
  }
  .col-s-10 {
    width: 83.33%;
  }
  .col-s-11 {
    width: 91.66%;
  }
  .col-s-12 {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
  .col-1 {
    width: 8.33%;
  }
  .col-2 {
    width: 16.66%;
  }
  .col-3 {
    width: 25%;
  }
  .col-4 {
    width: 33.33%;
  }
  .col-5 {
    width: 41.66%;
  }
  .col-6 {
    width: 50%;
  }
  .col-7 {
    width: 58.33%;
  }
  .col-8 {
    width: 66.66%;
  }
  .col-9 {
    width: 75%;
  }
  .col-10 {
    width: 83.33%;
  }
  .col-11 {
    width: 91.66%;
  }
  .col-12 {
    width: 100%;
  }
}
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
