Chart.defaults.global.animation = false;
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.scaleFontSize = 10;
Chart.defaults.global.responsive = true;
Chart.defaults.Line.pointDot = false;
Chart.defaults.Line.scaleShowVerticalLines = false;
Chart.defaults.Bar.barValueSpacing = 1;
Chart.defaults.Bar.scaleShowVerticalLines = false;

var chartsTemperatureConfig = {
    scaleBeginAtZero: true,
    datasetFill: false
};

var chartsBarometerConfig = {
    scaleOverride: true,
    scaleStartValue: 990,
    scaleSteps: 5,
    scaleStepWidth: 10,
};

var current_temp_ctx = document.getElementById('current-temp-chart').getContext('2d');
var current_barometer_ctx = document.getElementById('current-barometer-chart').getContext('2d');
var current_rain_ctx = document.getElementById('current-rain-chart').getContext('2d');
var current_wind_ctx = document.getElementById('current-wind-chart').getContext('2d');
var previous_temp_ctx = document.getElementById('previous-temp-chart').getContext('2d');
var previous_barometer_ctx = document.getElementById('previous-barometer-chart').getContext('2d');
var previous_rain_ctx = document.getElementById('previous-rain-chart').getContext('2d');
var previous_wind_ctx = document.getElementById('previous-wind-chart').getContext('2d');

$(document).on("click", ".btn-mode", function() {
    var mode = $(this).data('mode')
    var time = $(this).data('time')
    if(mode == "data")
        var old_mode = "graphs"
    else
        var old_mode = "data"
    $("#container-" + time + "-" + old_mode).hide();
    $("#container-" + time + "-" + mode).show();
    if(mode == "graphs")
    {
        if (time == "current")
        {
            current_temp_chart = new Chart(current_temp_ctx).Line(current_temp_chart_data,chartsTemperatureConfig);
            document.getElementById('current-temp-legend').innerHTML = current_temp_chart.generateLegend();
            current_barometer_chart = new Chart(current_barometer_ctx).Line(current_barometer_chart_data,chartsBarometerConfig);
            document.getElementById('current-barometer-legend').innerHTML = current_barometer_chart.generateLegend();
            current_rain_chart = new Chart(current_rain_ctx).Bar(current_rain_chart_data);
            document.getElementById('current-rain-legend').innerHTML = current_rain_chart.generateLegend();
            current_wind_chart = new Chart(current_wind_ctx).Line(current_wind_chart_data);
            document.getElementById('current-wind-legend').innerHTML = current_wind_chart.generateLegend();
        }
        else
        {
            previous_temp_chart = new Chart(previous_temp_ctx).Line(previous_temp_chart_data,chartsTemperatureConfig);
            document.getElementById('previous-temp-legend').innerHTML = previous_temp_chart.generateLegend();
            previous_barometer_chart = new Chart(previous_barometer_ctx).Line(previous_barometer_chart_data,chartsBarometerConfig);
            document.getElementById('previous-barometer-legend').innerHTML = previous_barometer_chart.generateLegend();
            previous_rain_chart = new Chart(previous_rain_ctx).Bar(previous_rain_chart_data);
            document.getElementById('previous-rain-legend').innerHTML = previous_rain_chart.generateLegend();
            previous_wind_chart = new Chart(previous_wind_ctx).Line(previous_wind_chart_data);
            document.getElementById('previous-wind-legend').innerHTML = previous_wind_chart.generateLegend();
        }
    }
    else
    {
        if (time == "current")
        {
            current_temp_chart.destroy()
            current_barometer_chart.destroy()
            current_rain_chart.destroy()
            current_wind_chart.destroy()
        }
        else
        {
            previous_temp_chart.destroy()
            previous_barometer_chart.destroy()
            previous_rain_chart.destroy()
            previous_wind_chart.destroy()
        }
    }
});
