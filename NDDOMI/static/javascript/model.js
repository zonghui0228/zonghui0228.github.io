// 鑾峰彇 URL 涓殑 鍙傛暟
var params = new URLSearchParams(window.location.search);
var model_id = params.get('method');

const links = document.querySelectorAll('a.language');

const href = links[2].getAttribute('href');

// 涓嫳鏂囬〉闈㈡樉绀哄尯鍒�
var subject_data_select
var en_page = 0

if (href.includes('model.html')) {
    links[2].setAttribute('href', `model.html?method=${model_id}`);
    subject_data_select = subject_data
} else if (href.includes('model_zh.html')) {
    links[2].setAttribute('href', `model_zh.html?method=${model_id}`);
    subject_data_select = subject_data_en
    en_page = 1
}
;

if (en_page == 0) {
    // 鑾峰彇 content
    document.getElementById('model_id').innerHTML = model_id.split("*")[0];

// 鍔犺浇table content
    var tbody = document.querySelector("#table-body");
    const data_selected = subject_data_select.find(item => item['model name'] === model_id);

// 鍔犺浇瀵瑰簲鐨勬ā鍨嬫弿杩�
    var model_description = document.getElementById("model_description");
    var creator = document.getElementById("creator");
    var URL = document.getElementById("URL");
    var Prompt_format = document.getElementById("prompt_format")
// 璁剧疆鍏冪礌鐨勫唴瀹�
    model_description.innerHTML = data_selected["model description"];
    creator.innerHTML = data_selected["creator"];
    URL.innerHTML = data_selected["URL"];
    Prompt_format.innerHTML = data_selected["prompt_format"];
// 寰幆閬嶅巻鎵€鏈夌鐩殑鏁版嵁
    data_selected.subjects.forEach(function (subject) {

        // 鍒涘缓涓€涓柊鐨勮〃鏍艰
        const row = document.createElement('tr');

        // 鍒涘缓琛ㄦ牸鍗曞厓鏍煎苟灏嗙鐩暟鎹彃鍏ュ叾涓�
        const superCategoryCell = document.createElement('td');
        superCategoryCell.textContent = subject["Super Category"];
        row.appendChild(superCategoryCell);

        const subjectNameCell = document.createElement('td');
        subjectNameCell.textContent = subject['绉戠洰鍚嶇О'];
        row.appendChild(subjectNameCell);

        const accuracyCell = document.createElement('td');
        accuracyCell.textContent = subject['鍑嗙‘鐜�'];
        row.appendChild(accuracyCell);

        // const cotAccuracyCell = document.createElement('td');
        // cotAccuracyCell.textContent = subject['COT 鍑嗙‘鐜�'];
        // row.appendChild(cotAccuracyCell);

        // 灏嗘柊鐨勮〃鏍艰鎻掑叆tbody涓�
        tbody.appendChild(row);
    });

//缁樺埗鏌辩姸鍥�
    var subjects_all = [];
    var accuracy = [];
    var cot_accuracy = [];

//鎻愬彇鏁版嵁
    data_selected.subjects.forEach(function (subject) {
        var min_subjects = subject["Super Category"] + "_" + subject["绉戠洰鍚嶇О"];
        var acc = parseFloat(subject["鍑嗙‘鐜�"]);
        var cot_acc = parseFloat(subject["COT 鍑嗙‘鐜�"]);
        subjects_all.push(min_subjects);
        accuracy.push(acc);
        cot_accuracy.push(cot_acc);
    });

// 缁樺埗鍥捐〃
    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: subjects_all,
            datasets: [
                {
                    label: "鍑嗙‘鐜�",
                    data: accuracy,
                    backgroundColor: "rgba(205, 0, 47, 1)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1
                },
                // {
                //     label: "COT鍑嗙‘鐜�",
                //     data: cot_accuracy,
                //     backgroundColor: "rgba(5, 70, 158, 1)",
                //     borderColor: "rgba(54, 162, 235, 1)",
                //     borderWidth: 1
                // }
            ]
        },
        options: {
            debug: true,
            scales: {
                x: {
                    ticks: {
                        // fontSize: 3, // 璋冩暣x杞存爣绛惧瓧浣撳ぇ灏�
                        maxRotation: 40,
                        minRotation: 40
                    }
                },
                y: {
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        }
    });
}
// 鑻辨枃鐣岄潰
else {
    // 鑾峰彇 content
     document.getElementById('model_id').innerHTML = model_id.split("*")[0];

// 鍔犺浇table content
    var tbody = document.querySelector("#table-body");
    const data_selected = subject_data_select.find(item => item['model name'] === model_id);

// 鍔犺浇瀵瑰簲鐨勬ā鍨嬫弿杩�
    var model_description = document.getElementById("model_description");
    var creator = document.getElementById("creator");
    var URL = document.getElementById("URL");
    var Prompt_format = document.getElementById("prompt_format")
// 璁剧疆鍏冪礌鐨勫唴瀹�
    model_description.innerHTML = data_selected["model description"];
    creator.innerHTML = data_selected["creator"];
    URL.innerHTML = data_selected["URL"];
    Prompt_format.innerHTML = data_selected["prompt_format"];
// 寰幆閬嶅巻鎵€鏈夌鐩殑鏁版嵁
    data_selected.subjects.forEach(function (subject) {
        // 鍒涘缓涓€涓柊鐨勮〃鏍艰
        const row = document.createElement('tr');

        // 鍒涘缓琛ㄦ牸鍗曞厓鏍煎苟灏嗙鐩暟鎹彃鍏ュ叾涓�
        const superCategoryCell = document.createElement('td');
        superCategoryCell.textContent = subject["Super Category"];
        row.appendChild(superCategoryCell);

        const subjectNameCell = document.createElement('td');
        subjectNameCell.textContent = subject["Subject name"];
        row.appendChild(subjectNameCell);

        const accuracyCell = document.createElement('td');
        accuracyCell.textContent = subject["Accuracy"];
        row.appendChild(accuracyCell);

        // const cotAccuracyCell = document.createElement('td');
        // cotAccuracyCell.textContent = subject["COT Accuracy"];
        // row.appendChild(cotAccuracyCell);

        // 灏嗘柊鐨勮〃鏍艰鎻掑叆tbody涓�
        tbody.appendChild(row);
    });

//缁樺埗鏌辩姸鍥�
    var subjects_all = [];
    var accuracy = [];
    var cot_accuracy = [];

//鎻愬彇鏁版嵁
    data_selected.subjects.forEach(function (subject) {
        var min_subjects = subject["Super Category"].slice(0, 3) + "_" + subject["Subject name"];
        var acc = parseFloat(subject["Accuracy"]);
        var cot_acc = parseFloat(subject["COT Accuracy"]);
        subjects_all.push(min_subjects);
        accuracy.push(acc);
        cot_accuracy.push(cot_acc);
    });

// 缁樺埗鍥捐〃
    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: subjects_all,
            datasets: [
                {
                    label: "Accuracy",
                    data: accuracy,
                    backgroundColor: "rgba(205, 0, 47, 1)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1
                },
                // {
                //     label: "COT-Accuracy",
                //     data: cot_accuracy,
                //     backgroundColor: "rgba(5, 70, 158, 1)",
                //     borderColor: "rgba(54, 162, 235, 1)",
                //     borderWidth: 1
                // }
            ]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        // fontSize: 3, // 璋冩暣x杞存爣绛惧瓧浣撳ぇ灏�
                        maxRotation: 40,
                        minRotation: 40
                    }
                },
                y: {
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        }
    });
}