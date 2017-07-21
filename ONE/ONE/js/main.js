var homeArr = [];
$.ajax({
    type: "get",
    async: false,
    url: "http://v3.wufazhuce.com:8000/api/onelist/idlist",
    success: function(data) {
        var dayData = data.data
        homeArr = dayData.slice(0, 7);
    }
})

var html = "";
var acticle = "";
var acticleLi = "";
var qusetion = "";
var qusetionLi = "";
getToday(homeArr[0]) //获取今天的数据 单独进行请求数据

for (var i = 1; i < homeArr.length; i++) {
    getDay(homeArr[i])
} //获取剩下6天的数据

$("#carousel-custom").append(html);
$("#acticle-custom").append(acticle);
$("#question-custom").append(qusetion);
$("#acticle-list").append(acticleLi)
$("#question-list").append(qusetionLi)

function getToday(day) {
    $.ajax({
        type: "get",
        async: false,
        url: "http://v3.wufazhuce.com:8000/api/onelist/" + day + "/0?",
        success: function(data) {
            var dayData = data.data;
            var contentList = dayData.content_list
                // console.log(contentList)
            html = `<div class="item active">
                            <a href="#"><img class="img-responsive" src="${contentList[0].img_url}" alt=""></a>
                            <div class="fp-one-imagen-footer">${contentList[0].title}</div>
                            <div class="fp-one-cita-wrapper">
                                <div class="fp-one-titulo-pubdate">
                                    <p class="titulo">VOL.1719</p>
                                    <p class="dom">21</p>
                                    <p class="may">Jun 2017</p>
                                </div>
                                <div class="fp-one-cita">
                                    <a href="">${contentList[0].forward}</a>
                                </div>
                            </div>
                        </div>`
            acticle = `<p class="one-titulo"> VOL.1719 </p>
                                <p class="one-articulo-titulo">
                                    <a href="#">${contentList[5].title}
                                        <small>-${contentList[5].author.user_name}</small>
                                    </a>
                                </p> `
            qusetion = `<p class="one-titulo">VOL.1719</p>
                                <p class="one-cuestion-titulo">
                                    <a href="#">${contentList[2].title}</a>
                                </p> `
        }
    })
}

function getDay(day) {
    $.ajax({
        type: "get",
        async: false,
        url: "http://v3.wufazhuce.com:8000/api/onelist/" + day + "/0?",
        success: function(data) {
            var dayData = data.data;
            console.log(dayData)
            var contentList = dayData.content_list
            console.log(contentList)
            html += `<div class="item">
                            <a href="#"><img class="img-responsive" src="${contentList[0].img_url}" alt=""></a>
                            <div class="fp-one-imagen-footer">${contentList[0].title}</div>
                            <div class="fp-one-cita-wrapper">
                                <div class="fp-one-titulo-pubdate">
                                    <p class="titulo">VOL.1719</p>
                                    <p class="dom">21</p>
                                    <p class="may">Jun 2017</p>
                                </div>
                                <!--文字-->
                                <div class="fp-one-cita">
                                    <a href="">${contentList[0].forward}</a>
                                </div>
                            </div>
                        </div>`
            acticleLi += `<li>
                                    <span class="text-muted">VOL.1713</span>
                                    <a href="">${contentList[5].title}
                                        <small>- ${contentList[5].author.user_name}</small>
                                    </a>
                                </li>`

            qusetionLi += `<li>
                                    <span class="text-muted">VOL.1716</span>
                                    <a href="#">${contentList[5].title}</a>
                                </li>`
        }
    })
}