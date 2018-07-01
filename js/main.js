$( document ).ready(function() {
    setupSR();

});
function showCitationsChart(){
    Highcharts.chart('publication-chart', {
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Citations'
        },
        subtitle: {
            text: 'Source: Google Scholar'
        },
        xAxis: {
            categories: [
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Cites',
            color:'#e2cbb7',
            data: [1, 11, 3, 13, 24, 55, 27]

        }]
    });
}
function showCitationsCountUp(){
    doCountUp('citations_count', 143);
    doCountUp('h_index_count', 6);
    doCountUp('i10_index_count', 4);
}
function doCountUp(id, value){
    var numAnim = new CountUp(id, 0, value);
    if (!numAnim.error) {
        numAnim.start();
    } else {
        $('#'+id).text(value);
        console.error(numAnim.error);
    } 
}
function setupSR(){
    window.sr = ScrollReveal({
        afterReveal: function (el) {
            var id = el.id;
            if(id === 'publications'){
                showCitationsChart();
                showCitationsCountUp();
            }
        },
    });
    sr.reveal('.scroll-reveal');
}
