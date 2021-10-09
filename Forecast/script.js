var data = [1.2,1.5,1.8,1.3,1.4,1.6,1.7,1.9,2.1,2.5,2.2,2.6,2.4,2.8,2.7,2.9,3.1,3.3,3.1,3.6,3.2,3.4]/*[100,175, 142, 134, 154, 155, 165, 123, 111, 125, 199, 133, 154, 112, 132, 145, 144, 132, 134, 134, 143, 121, 123, 131, 142, 154, 122, 123, 141, 145, 111, 123, 156, 113, 179][100, 324, 675, 125, 231, 456, 786, 981, 1324, 100, 324, 675, 125, 231, 456, 786, 981, 798, 924, 1054, 1324, 100, 324, 675,  786, 981, 798, 924, 1054, 1324, 675, 125, 231, 456, 786, 981, 798, 924, 1054, 1324, 100, 324, 675, 125, 231, 456, 786, 981, 798, 1324]*/
/*{* /  / / only an array is expected here/*}*/


var labels = ['24 Aug', '1 Oct', '8 Nov', '16 Dec', '24 Jan', '2 Mar', '9 Apr', '17 May', '26 June', '4 July', '12 Aug', '20 Sep', '24 Aug', '26 June', '4 July', '12 Aug', '20 Sep', '24 Aug', '24 Aug', '1 Oct', '8 Nov', '16 Dec'/*, '24 Jan', '2 Mar', '9 Apr', '17 May', '26 June', '4 July', '12 Aug', '20 Sep'*/]
let context = document.getElementById("myChart").getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Roboto, sans-serif';
Chart.defaults.global.defaultFontSize = 22;
Chart.defaults.global.defaultFontColor = '#777';


var chartData = {
    labels: labels,
    datasets: [{
        label: 'Population',
        data: data,
        backgroundColor:
            '#bed3fc',
        fill: false,
        borderColor: '#756ff9',
        borderWidth: 3,
        hoverBorderWidth: 3,
        hoverOffset: 14

    }]
};
var options = {
    scales: {
        yAxes: [{
            ticks: {
                suggestedMax: 4,
                suggestedMin: 0
            }
        }]
    },
    chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    },
    title: {
        display: true,
        text: 'Motherson Sumi Systems Limited [24 Aug - 20 Sep]',
        fontSize: 35,
        fontColor: '#000'
    },
    legend: {
        display: false,
        position: 'top',
        labels: {
            fontColor: '#000'
        }
    },
    layout: {
        // tension: false,
        padding: {
            left: 50,
            right: 0,
            bottom: 0,
            top: 0
        }
    },
    tooltips: {
        enabled: true
    },
    elements: {
        line: {
            tension: 0
        }
    },
    transitions: {
        show: {
            animations: {

                y: {
                    from: 100
                }
            }
        },
        hide: {
            animations: {

                y: {
                    to: 100
                }
            }
        }
    }

};

config = {
    type: 'line',
    data: chartData,
    options: options
};
window.myChart = new Chart(context, config);

/*********************************************/
document.getElementById('btn-bar').onclick = function () {
    myChart.destroy();
    // myChart = new Chart(context, {
    //     type: 'bar',
    //     data: chartData
    // });
    config = {
        type: 'bar',
        data: chartData,
        options: options
    };
    window.myChart = new Chart(context, config);

};
document.getElementById('btn-line').onclick = function () {
    myChart.destroy();
    // myChart = new Chart(context, {
    //     type: 'bar',
    //     data: chartData
    // });
    config = {
        type: 'line',
        data: chartData,
        options: options
    };
    window.myChart = new Chart(context, config);
};

var n = 0;
myChart.config.data.labels[n + 2].display = none;





/* Colors
'rgba(255, 100, 132, .4)',
'rgba(255, 206, 86, .4)',
'rgba(75, 192, 192, .4)',
'rgba(153, 102, 255, .4)',
'rgba(255, 159, 64, .4)',
'rgba(255, 99, 132, .4)',
'rgba(255, 206, 86, .4)',
'rgba(75, 192, 192, .4)',
'rgba(153, 102, 255, .4)',
'rgba(255, 159, 64, .4)',
'rgba(255, 99, 132, .4)' */








/* For Border Changing Properties

barborder();
function barborder() {
    if (myChart.config.type === 'bar') {
        myChart.config.data.datasets[0].borderWidth = 1.5;
    }
} */


