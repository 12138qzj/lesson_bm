// 作业问题1

// ## 在index.jsp中加入函数

window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop; //滚动条滚动的长度
    var height = document.body.scrollHeight - window.screen.availHeight; //网页页面整体高度  -  浏览器可见区域高度

    if (t >= height) {
        begin = begin + 15;

        $.post("${pageContext.request.contextPath}/content/list", { num: begin }, function(responseData) {
            console.log(responseData);
            if (responseData.status == 0) {
                // 此时证明是成功的
                let datas = responseData.data; // 此时是数组
                for (let i = 0; i < datas.length; i++) {
                    let xxx = datas[i];
                    // 创建一个div ，向 div 中填充内容
                    let e = $("<div style=\"margin-bottom: 10px;box-shadow: 0px 1px 3px #2d2c2c ;\" onclick='discuss(" + xxx.id + ")'>\n" +
                        "                <div >\n" +
                        "                    <div style=\"text-align: left ; padding-left: 10px; padding-top: 10px\">" + xxx.user.username + "</div>\n" +
                        "                    <div style=\"text-align: center\">" + xxx.content + "</div>\n" +
                        "                </div>\n" +
                        "                <div style=\"text-align: right ; padding-bottom: 10px ; padding-right: 10px;\">\n" +
                        "                   " + xxx.publishTime + " <i class='fa fa-thumbs-up'></i>&nbsp;" + xxx.likeCount + "\n" +
                        "                </div>\n" +
                        "            </div>");

                    // 追加一个元素
                    $("#contentList").append(e);
                }
            }
        }, "JSON");

    }
}



// 作业问题2


// ## 在ContentListServlet.java中加入
// if (begin = -1)
//     List < Content > list = contentServices.list1();
// else
//     List < Content > list = contentServices.list(begin);



// ##
// 在ContentDao.java中加入
// public List < Content > list1() {
//     String SQL = "select  top 10   id , " + column + " from" + TableNames.CONTENT_TABLE_NAME + " order by like_count ";
//     ResultSet resultSet = JDBCHelper.query(SQL);
//     List < Content > warp = warp(resultSet);
//     return warp;
// }






// ##
// 在index.jsp中加入函数