$(document).ready(function () {
    function getCountFrom(url, i) {
        $.ajax({
            url: url,
            data: {op: ''},
            type: 'POST',
            success: function (data, textStatus, jqXHR) {
                $('h2[class="number"]').eq(i).text(data.length);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $('h2[class="number"]').eq(i).text('...');
            }
        });
    }
    getCountFrom('controller/FiliereController.php', 0);
    getCountFrom('controller/ClasseController.php', 1);
    //var ctx = document.getElementById('myChart').getContext('2d');

    $.ajax({
        url: 'controller/countController1.php',
        data: {op: ''},
        type: 'POST',
        success: function(data, textStatus, jqXHR) {
            label = [];
            datas = [];
            for (i = 0; i < data.length; i++) {
                label.push('Classe de:'+data[i].filiere);
                datas.push(data[i].nbr);
            }
            console.log(label);
            new Chart(document.getElementById("myChart"), {
                type: 'bar',
                data: {
                    labels:label, //["Africa", "Asia", "Europe", "Latin America", "North America"],  //à modifier
                            datasets: [
                                {
                                    label: "Nombre des Classes",
                                    backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                                    data:datas  //[2478, 5267, 734, 784, 433]  //à modifier
                                }
                            ]
                },
                options: {
                    legend: {display: false},
                    title: {
                        display: true,
                        text: 'nombre des Classes par Filiere'
                    },
                    responsive: false,
                }
            });

        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
    /*$.ajax({
        url: 'http://localhost/tarphp/controller/ClasseController.php',
        data: {op: 'count'},
        type: 'POST',
        success: function (data, textStatus, jqXHR) {
            var x = Array();
            var y = Array();
            data.forEach(function (e) {
                x.push(e.fil);
                y.push(e.nbr);
            });
            showGraph(x, y);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });*/
    /*function showGraph(x, y) {
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: x,
                datasets: [{
                        data: y,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    y: {
                        title: {
                            display: true,
                            text: 'Nombre de classes'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Filière'
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Nombre de classe par filière'
                    }
                }
            }
        });
    }*/
});

