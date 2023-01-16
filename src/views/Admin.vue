<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main>
    <div>
      <div class="heading-text">
        <h1>Summary</h1>
      </div>
      <div :class="currentLayout">
        <card style="width: 400px" id="card-layout">
          <cardBody>
            <cardTitle> <h1>Weekly Profit</h1></cardTitle>
            <p>$35100</p>
          </cardBody>
        </card>
        <card style="width: 400px" id="card-layout">
          <cardBody>
            <cardTitle> <h1>Monthly Profit</h1></cardTitle>
            <p>$1053000</p>
          </cardBody>
        </card>
        <card style="width: 400px" id="card-layout">
          <cardBody>
            <cardTitle> <h1>Total Profit</h1></cardTitle>
            <p>$9005300</p>
          </cardBody>
        </card>
      </div>
    </div>
    <div>
      <h1>Clients Chart and Statistics</h1>
    </div>
    <hr />
    <Chart>
      <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
      <ChartCategoryAxis>
        <ChartCategoryAxisItem :categories="categories">
          <ChartCategoryAxisTitle :text="'New clients per day'" />
        </ChartCategoryAxisItem>
      </ChartCategoryAxis>
      <ChartSeries>
        <ChartSeriesItem
          :name="'Jane Doe'"
          :type="'bar'"
          :stack="{ type: '100%' }"
          :data-items="firstSeries"
        />
        <ChartSeriesItem
          :name="'John Gabriel'"
          :type="'bar'"
          :data-items="secondSeries"
        />
        <ChartSeriesItem
          :name="'Kelvin Mark'"
          :type="'bar'"
          :data-items="thirdSeries"
        />
      </ChartSeries>
    </Chart>
  </main>
</template>
<script>
import { Card, CardBody, CardTitle } from "@progress/kendo-vue-layout";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartCategoryAxisTitle,
  ChartLegend,
} from "@progress/kendo-vue-charts";
import "@progress/kendo-theme-default";
import "hammerjs";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'admin',
  components: {
    card: Card,
    cardBody: CardBody,
    cardTitle: CardTitle,
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisTitle,
    ChartLegend,
  },
  data(){
    return {
      currentLayout: "k-card-deck",
      data: ["k-card-list", "k-card-group", "k-card-deck"],
      firstSeries: [1, 2, 3],
      secondSeries: [1, 3, 1],
      thirdSeries: [1, 5, 3],
      categories: [
        new Date(),
        new Date().setDate(new Date().getDate() + 1),
        new Date().setDate(new Date().getDate() + 2),
      ],
    };
  },
  methods: {
    handleChange: function (e) {
      this.currentLayout = e.value;
    },
  },
};
</script>
<style>
#card-layout {
  /* background: #000; */
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 4rem;
  margin: 4.5rem, 2rem;
}
</style>
