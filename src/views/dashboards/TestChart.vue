
<script>
import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
  mounted () {
    let data = {
        datasets: [{
            label: 'FCF Yield - PE',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }],
            backgroundColor: 'red'
        }]
    }

    let options = {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                display: true,
            }]
        },
        title: {
            display: true,
            // text: 'Custom Chart Title'
        },
        tooltips: {
           callbacks: {
              label: function(tooltipItem, data) {
                let labelArray = ['Red', 'Blue', 'Purple']
                var label = labelArray[tooltipItem.index];
                return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
              }
           }
        }
    }
    this.renderChart(data, options)
  }
}
</script>