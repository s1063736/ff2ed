// 假登入開關
var _loading = 0;
var _login = 0;
data_api = 'get_setting.php';

// 判定登入.點數.抽次數.兌換道具.集點.抽到的卡

// 登出
function logout_dg() {
    $("#logout-form").submit();
}


get_setting();

function get_setting() {
    $.post(data_api,{
            type : 'login',
            user : $(".account").text() // 抓account文字
        
        },function(_res){
            let res = JSON.parse(_res);
            if ( res.status == -99){
                // 沒登入
                $(".stamp1, .stamp2, .stamp3, .stamp4, .stamp5").hide();
                $(".cardBtn").attr("onclick","loginReminder();");
                $(".buyRecord").attr("onclick","loginReminder();");
                $(".buyRecord").removeAttr("data-activity");
                $('.mask2').hide();

        }else if ( res.status == 1 ){
            $('.mask2').hide();
            $('.mask2StageBox >button').attr('style','visibility: hidden;');
            $('.mask2StageBox >button >img').attr('style','visibility: hidden;');
            $('.login').html('登出')

            // 判定道具陣列，播放動畫
            for ( $n = 0 ; $n <=3 ; $n++ ){
                if ( res.lottery_content[$n].id != 0 ){
                    $('.cardBox > .card'+[$n]+'').addClass("turnOverCard");
                    $('.cardFace'+$n+' > .icon').html('<img src="img/icon/icon_img'+res.lottery_content[$n].img+'.png">');
                    $('.cardFace'+$n+' > .iconPrice1').html('原價'+res.lottery_content[$n].price+'');
                    $('.cardFace'+$n+' > .iconPrice2').html('折扣價'+res.lottery_content[$n].sale_price+'');
                    $('.buttonBox'+$n+' > .detailed ').attr('onclick','cardDetail('+res.lottery_content[$n].content+')')
                    $('.buttonBox'+$n+' > .iconBuy ').attr('onclick','buy('+res.lottery_content[$n].content+')')

                    var Entity_num = [65,66]
                    function checkNum3(Entity_num){
                        return Entity_num == (res.lottery_content[$n].img);
                    }
                    if( Entity_num.some(checkNum3) == true ){
                        $('.cardFace'+$n+' > .iconName').html(''+res.lottery_content[$n].item_name+'(僅限台灣地區玩家領取)');
                    }else{
                        $('.cardFace'+$n+' > .iconName').html(''+res.lottery_content[$n].item_name+'');
                    }
                }
                
            }
            
            // 抓角色
            if ( res.char.length == 0 ) {
                $(".charSelect option").remove();
                $(".charSelect").append(
                $("<option></option>").attr("value", "0").text("請選擇角色"));
            } else {
                $(".charSelect option").remove();
                $(".charSelect").append(
                $("<option></option>").attr("value", "0").text("請選擇角色"));
                res.char.forEach((i) => {
                $(".charSelect").append(
                    $("<option></option>").attr("value", i.CharID).text(i.CharName));
                });
            }
            $('.pointsBox > span').html(res.point);

            // 階段獎勵
            if( res.accumulate > 0 && res.refresh_list.length > 0 ){
                //印翻卡值
                $('.stageText > span').html(res.accumulate);
                if( res.accumulate== 1 || res.accumulate==50 || res.accumulate== 100 || 
                    res.accumulate== 150 || res.accumulate==250 || res.accumulate== 350 || res.accumulate==500 ){
                        $('.mask2').show();
                        $('.mask2StageBox >button:nth-child('+(res.refresh_list.length+1)+')').attr('style','visibility: visible;');;
                        $('.mask2StageBox >button:nth-child('+(res.refresh_list.length+1)+')').attr('onclick','stageExchange('+res.refresh_list.length+')');
                        $('.mask2StageBox >button:nth-child('+(res.refresh_list.length+1)+') >img').attr('style','visibility: visible;');;
                    }
                // 獎勵已兌換，換圖
                for( $i = 0 ; $i < res.refresh_list.length ; $i++ ){
                    $('.stageLine > .box > .stage'+$i+'').html('<img src="img/stageRedeened'+($i+1)+'.png">');
                }
                
            }

            // 集點卡印章
            $(".stamp1, .stamp2, .stamp3, .stamp4, .stamp5").hide();
            if( res.stamp > 0 ){
                if ( res.stamp == 68 ){
                    $(".stamp1").show();
                }else if( res.stamp == 69 ){
                    $(".stamp1, .stamp2").show();
                }else if( res.stamp == 70 ){
                    $(".stamp1, .stamp2, .stamp3").show();
                }else if( res.stamp == 71 ){
                    $(".stamp1, .stamp2, .stamp3, .stamp4").show();
                }else if( res.stamp == 72 ){
                    $('.mask2').show();
                    // 集點卡增加zindex
                    var pointCardBoxZ = document.querySelector('.pointCardBox');
                    pointCardBoxZ.style.zIndex = 3;
                    $(".stamp1, .stamp2, .stamp3, .stamp4, .stamp5").show();
                    $('.pointCard').attr('onclick','pointCardExchange()');
                    $('.pointCard').addClass('pointCard_Animation');
                }
            }

            // 免費.付費次數顯示
            if ( res.refresh_num > 0 ){
                $(".cardBtnBox > .cardBtn > .text ").html("每日免費"+res.refresh_num+"次");
            }else {
                $(".cardBtnBox > .cardBtn > .text ").html("消耗5點數抽卡1次");
            }
            // 抽卡API函式
            $('.cardBtn').attr("onclick","lotteryReminder("+res.refresh_num+");");

        }
    })
};

// 抽獎資料撈取
function cha() {
    var $loading = showLoading();
    $.post(data_api,{
        type: "Get_char",
        user : $(".account").text()
    },
    function (_res) {
        let res = JSON.parse(_res);
        if ( res.char.length == 0 ) {
            $(".charSelect option").remove();
            $(".charSelect").append(
            $("<option></option>").attr("value", "0").text("請選擇角色"));
        } else {
            $(".charSelect option").remove();
            $(".charSelect").append(
            $("<option></option>").attr("value", "0").text("請選擇角色"));
            res.char.forEach((i) => {
            $(".charSelect").append(
                $("<option></option>").attr("value", i.CharID).text(i.CharName));
            });
        }
    }
    ,
    "json"
    ).always(function() {
        $loading.remove();
    });
}

// 請先登入 跳窗
function loginReminder() {
    $(".centerEmpty").html('請先登入');
    $(".windowsEmpty").show();
}

// 請先兌換 跳窗
function exchangeReminder() {
    $(".centerEmpty").html('請先領取獎勵');
    $(".windowsEmpty").show();
}

function loginAccount() {
    window.open("https://www.digeam.com/login", "_self");
}