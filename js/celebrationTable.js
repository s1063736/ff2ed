//1-2-1表格
var arraytable1_2_1 = {
    trade:[
        ['※可交易'],
        ['※不可交易']
    ],
    name:[
        ['二週年紀念面具x1'],
        ['召喚獸禮盒x1'],
        ['奎利恩武器隨機箱x1'],
        ['里昂的火炬x1'],
        ['精煉卷軸(巴路那)x1'],
        ['屬性骰子(初始化)x1'],
        ['飛兒超可愛氣球(6小時)x1'],
        ['黃色的氣息(1小時)x1'],
        ['紫色的氣息(1小時)x1'],
        ['紅色的氣息(1小時)x1'],
        ['黑色的氣息(1小時)x1'],
        ['綠色的氣息(1小時)x1'],
        ['屬性骰子x1'],
        ['蜂蜜年糕x1'],
        ['艾草年糕x1'],
        ['紅豆年糕x1'],
        ['燦爛煙火禮盒x3'],
        ['夢想飛飛二週年紀念幣x1']
    ],
    manual:[
        ['全能力+15、增加HP率+20%、迴避率+10%、攻擊時增加傷害值+15%。'],
        ['開啟後可隨機獲得一種A級召喚獸禮盒(Lv.1.3.5.7)。'],
        ['開啟後可隨機獲得一個奎利恩系列武器。'],
        ['可讀取付費地區地圖的特殊火炬。  (持續1天)。'],
        ['每次使用後該次精煉成功率提升 10%。(使用後效果消失)。'],
        ['將狀態骰子所給予的隨機屬性初始化，全部歸零的道具。'],
        ['使用後6小時內可以增加攻擊力+500、增加防禦力+500、增加經驗值+10%，一次只能使用一個氣球道具。'],
        ['將防具精鍊效果變成黃色的時間限制道具。'],
        ['將防具精鍊效果變成紫色的時間限制道具。'],
        ['將防具精鍊效果變成紅色的時間限制道具。'],
        ['將防具精鍊效果變成黑色的時間限制道具。'],
        ['將防具精鍊效果變成綠色的時間限制道具。'],
        ['使用後力量、體力、敏捷、智力等四種屬性會隨機+1或-1。'],
        ['HP恢復9999。'],
        ['MP恢復9999。'],
        ['FP恢復9999。'],
        ['裝著很多鞭炮的箱子。'],
        ['使用後經驗值+10%、增加攻擊力+10%、增加HP率+10%，持續30分鐘。夢想飛飛週年活動專屬道具，保留後可於週年活動使用。']
    ]
}

var table1_2_1tbody = "";

table1_2_1tbody += 
'<tr class="text-center table-title"><td colspan="2">'+
'二週年快樂箱​​'+
'</td></tr><tr class="text-center table-subtitle"><td>'+'道具名稱'+
'</td><td>'+'道具說明'+
'</td></tr>';

for(i = 0 ; i < 18 ; i++){
    table1_2_1tbody += 
    '<tr><td class="text-left table-main table-mainP1-3-2L">'+
    '<img src = img/celebration/p1/tab2-1/'+(i+1)+'.png >'+
    arraytable1_2_1.name[i]+
    '</td><td class="text-left table-main">'+
    arraytable1_2_1.manual[i]+
    '<span class="text-center highlight">'
    if(i == 6 || i == 17)
        table1_2_1tbody += arraytable1_2_1.trade[1];
    else
        table1_2_1tbody += arraytable1_2_1.trade[0];
    table1_2_1tbody += '</span></td></tr>';
}

$('.t1_2_1tbody').html(table1_2_1tbody);


//1-2-2表格
var arraytable1_2_2 = {
    trade:[
        ['※可交易'],
        ['※不可交易']
    ],
    name:[
        ['繽紛週年紀念蛋糕x1'],
        ['珍珠奶茶x1'],
        ['炸雞排x1'],
        ['夢想飛飛綠色週年蛋糕x1'],
        ['會心藥水x1'],
        ['速攻藥水x1'],
        ['精準藥水x1'],
        ['魔靈藥水x1'],
        ['防禦藥水x1'],
        ['魔防藥水x1'],
        ['魔力藥水x1'],
        ['狂魔藥水x1'],
        ['狂暴藥水x1'],
        ['夢想飛飛二週年紀念幣x1']
    ],
    manual:[
        ['慶祝夢想飛飛週年專用蛋糕，使用後可增加攻擊力+20%、增加HP率+20%、掉落率+15%、攻擊速度+10%，持續30分鐘。(離線仍計算時間)。'],
        ['全能力+10、增加HP率+10%，持續10分鐘。(離線仍計算時間)。'],
        ['致命打擊時增加傷害值+10%、命中率+10%，持續10分鐘。(離線仍計算時間)。'],
        ['慶祝夢想飛飛週年專用蛋糕，使用後移動速度+10%，持續1小時。'],
        ['1小時內，增加10%致命一擊的機率。'],
        ['1小時內，增加10%攻擊速度。'],
        ['1小時內，增加10%命中率。'],
        ['1小時內，增加10%魔法施放速度。'],
        ['1小時內，增加物理防禦力100。'],
        ['1小時內，對魔法攻擊的抵抗力增加50。'],
        ['1小時內，增加最大魔法值10%。'],
        ['1小時內，增加魔法攻擊力20。'],
        ['1小時內，發動致命打擊時增加追加攻擊傷害10%。'],
        ['使用後經驗值+10%、增加攻擊力+10%、增加HP率+10%，持續30分鐘。夢想飛飛週年活動專屬道具，保留後可於週年活動使用。']
    ]
}

var table1_2_2tbody = "";

table1_2_2tbody += 
'<tr class="text-center table-title"><td colspan="2">'+
'二週年Buff箱'+
'</td></tr><tr class="text-center table-subtitle"><td>'+'道具名稱'+
'</td><td>'+'道具說明'+
'</td></tr>';

for(i = 0 ; i < 14 ; i++){
    table1_2_2tbody += 
    '<tr><td class="text-left table-main table-mainP1-3-2L">'+
    '<img src = img/celebration/p1/tab2-2/'+(i+1)+'.png >'+
    arraytable1_2_2.name[i]+
    '</td><td class="text-left table-main">'+
    arraytable1_2_2.manual[i]+
    '<span class="text-center highlight">'
    if(i == 3 || i == 13)
        table1_2_2tbody += arraytable1_2_2.trade[1];
    else
        table1_2_2tbody += arraytable1_2_2.trade[0];
    table1_2_2tbody += '</span></td></tr>';
}

$('.t1_2_2tbody').html(table1_2_2tbody);




//2-2表格
var arraytable2_2 = {
    mission:[
        ['二週年活動參加獎'],
        [''],
        ['二週年活動積極獎'],
        [''],
        ['二週年活動勤勞獎']
    ],
    name:[
        ['粉紅淘氣鬼機器惡魔x1​'],
        ['夢想飛飛二週年紀念幣x5'],
        ['夢想魔法棒x1'],
        ['夢想飛飛二週年紀念幣x15'],
        ['SR卡片兌換碎片禮盒(歸屬)x1'],
        ['精鍊幸運箱(歸屬)x1'],
        ['夢想飛飛二週年紀念幣x30']
    ],
    condition:[
        ['蒐集「二週年夢想印章」x10'],
        [''],
        ['蒐集「二週年夢想印章」x30'],
        [''],
        ['蒐集「二週年夢想印章」x40']
    ]
}

var table2_2tbody = "";

table2_2tbody += 
'<tr class="text-center table-title"><td colspan="3">'+
'任務獎勵​​'+
'</td></tr><tr class="text-center table-subtitle"><td>'+'任務名稱'+
'</td><td>'+'道具名稱'+
'</td><td>'+'任務條件'+
'</td></tr>';

for(i = 0 ; i < 7 ; i++){
    table2_2tbody += '<tr>';

    if(i == 0 || i == 2){
        table2_2tbody += 
        '<td class="text-center table-main" rowspan="2">'+
        arraytable2_2.mission[i];
    }else if(i == 4){
        table2_2tbody += 
        '<td class="text-center table-main" rowspan="3">'+
        arraytable2_2.mission[i];
    }

    table2_2tbody += 
    '</td><td class="text-left table-main">'+
    '<img src = img/celebration/p2/tab2/'+(i+1)+'.png >'+
    arraytable2_2.name[i];
    
    if(i == 0 || i == 2){
        table2_2tbody += 
        '<td class="text-center table-main" rowspan="2">'+
        arraytable2_2.condition[i];
    }else if(i == 4){
        table2_2tbody += 
        '<td class="text-center table-main" rowspan="3">'+
        arraytable2_2.condition[i];
    }
    table2_2tbody += '</td></tr>';
}

$('.t2_2tbody').html(table2_2tbody);




//3-2表格
var arraytable3_2 = {
    trade:[
        ['※可交易'],
        ['※不可交易']
    ],
    name:[
        ['貝加飾品寶盒'],
        ['慶典飛船'],
        ['130+10裝備組兌換券'],
        ['可愛小柴犬'],
        ['台灣黑熊套裝(男)'],
        ['台灣黑熊套裝(女)'],
        ['藍色小熊軟糖套裝(男)(30天)(歸屬)'],
        ['藍色小熊軟糖套裝(女)(30天)(歸屬)'],
        ['忍者套裝30天(男)(歸屬)'],
        ['忍者套裝30天(女)(歸屬)'],
        ['夢想飛飛紅色週年蛋糕'],
        ['夢想飛飛綠色週年蛋糕'],
        ['夢想飛飛藍色週年蛋糕'],
        ['繽紛週年紀念蛋糕'],
        ['繽紛週年紀念蛋糕']
    ],
    manual:[
        ['裝有貝加飾品組的箱子。'],
        ['最高時速297km/hr(永久)。'],
        ['可向[週年活動總指揮官]兌換130級+10裝備組。'],
        ['可召喚或解除可愛小柴犬，召喚時會自動撿取周邊的的道具(永久)。'],
        ['台灣限定造型時裝，開啟後可以獲得台灣黑熊套裝(男)4件套(永久)。'],
        ['台灣限定造型時裝，開啟後可以獲得台灣黑熊套裝(女)4件套(永久)。'],
        ['開啟後可以獲得藍色小熊軟糖套裝(男)5件套(30天)。<br/>'],
        ['開啟後可以獲得藍色小熊軟糖套裝(女)5件套(30天)。<br/>'],
        ['開啟後可以獲得忍者套裝(男)4件套(30天)。'],
        ['開啟後可以獲得忍者套裝(女)4件套(30天)。'],
        ['慶祝夢想飛飛週年專用蛋糕，使用後可增加攻擊力+10%，持續1小時，死亡後Buff消失。'],
        ['慶祝夢想飛飛週年專用蛋糕，使用後移動速度+10%，持續1小時，死亡後Buff消失。'],
        ['慶祝夢想飛飛週年專用蛋糕，使用後致命打擊時增加傷害+20%，持續1小時，死亡後Buff消失。'],
        ['慶祝夢想飛飛週年專用蛋糕，使用後可增加攻擊力+20%、增加HP率+20%、掉落率+15%、攻擊速度+10%，持續30分鐘。(離線仍計算時間)。'],
        ['慶祝夢想飛飛週年專用蛋糕，使用後可增加攻擊力+20%、增加HP率+20%、掉落率+15%、攻擊速度+10%，持續30分鐘。(離線仍計算時間)。']
    ],
    condition:[
        ['夢想飛飛二週年紀念幣x150'],
        ['夢想飛飛二週年紀念幣x100'],
        ['夢想飛飛二週年紀念幣x100'],
        ['夢想飛飛二週年紀念幣x50'],
        ['夢想飛飛二週年紀念幣x50'],
        ['夢想飛飛二週年紀念幣x50'],
        ['夢想飛飛二週年紀念幣x30'],
        ['夢想飛飛二週年紀念幣x30'],
        ['夢想飛飛二週年紀念幣x20'],
        ['夢想飛飛二週年紀念幣x20'],
        ['夢想飛飛二週年紀念幣x5'],
        ['夢想飛飛二週年紀念幣x5'],
        ['夢想飛飛二週年紀念幣x5'],
        ['夢想飛飛二週年紀念幣x5'],
        ['二週年夢想印章x1']
    ]
}

var table3_2tbody = "";

table3_2tbody += 
'<tr class="text-center table-title"><td colspan="3">'+
'夢想飛飛二週年紀念幣兌換​'+
'</td></tr><tr class="text-center table-subtitle"><td>'+'道具名稱'+
'</td><td>'+'道具說明'+
'</td><td>'+'兌換條件'+
'</td></tr>';

for(i = 0 ; i < 15 ; i++){
    table3_2tbody += 
    '<tr><td class="text-left table-main table-mainP1-3-2L">'+
    '<img src = img/celebration/p3/tab2/'+(i+1)+'.png >'+
    arraytable3_2.name[i]+
    '</td><td class="text-left table-main table-mainP2-3-2M">'+
    arraytable3_2.manual[i]+
    '<span class="text-center highlight">';
    if(i > 5 && i < 13 || i == 2)
        table3_2tbody += arraytable3_2.trade[1];
    else
        table3_2tbody += arraytable3_2.trade[0];
    table3_2tbody += '</span>'+
    '</td><td class="text-left table-main">'+
    arraytable3_2.condition[i]+
    '</td></tr>';
}

$('.t3_2tbody').html(table3_2tbody);




//4-2表格
var arraytable4_2 = {
    trade:[
        ['※可交易'],
        ['※不可交易']
    ],
    name:[
        ['古文字磁石隨機包'],
        ['夢想蘇打冰棒​'],
        ['蘇打冰棒兌換券​'],
        ['性別轉換卷​'],
        ['高級移動地圖​'],
        ['二週年紅色慶祝箱​'],
        ['二週年藍色慶祝箱​'],
        ['夢想飛飛二週年紀念幣​']
    ],
    manual:[
        ['開啟後可隨機獲得一種古文字磁石。'],
        ['面具部位，全能力+15、移動速度+10%、增加HP率+10%、增加攻擊力+10%、致命打擊時增加傷害+10%。'],
        ['蒐集到一定的數量後可向NPC[布拉里斯市長]兌換夢想蘇打冰棒。'],
        ['使用後可以轉換角色的性別。'],
        ['可以快速移動到其他地區的傳送卷軸，可以登記特定的位置。'],
        ['開啟後可獲得各種實用的道具。'],
        ['開啟後可獲得各種實用的道具。'],
        ['使用後經驗值+10%、增加攻擊力+10%、增加HP率+10%，持續30分鐘。夢想飛飛週年活動專屬道具，保留後可於週年活動使用。']
    ]
}

var table4_2tbody = "";

table4_2tbody += 
'<tr class="text-center table-title"><td colspan="2">'+
'夢想利齒卡爾卡斯 掉落資訊'+
'</td></tr><tr class="text-center table-subtitle"><td>'+'道具名稱'+
'</td><td>'+'道具說明'+
'</td></tr>';

for(i = 0 ; i < 8 ; i++){
    table4_2tbody += 
    '<tr><td class="text-left table-main table-mainP1-3-2L">'+
    '<img src = "img/celebration/p4/tab2/'+(i+1)+'.png" />'+
    arraytable4_2.name[i]+
    '</td><td class="text-left table-main">'+
    arraytable4_2.manual[i]+
    '<span class="text-center highlight">'
    if(i == 7)
        table4_2tbody += arraytable4_2.trade[1];
    else
        table4_2tbody += arraytable4_2.trade[0];
    table4_2tbody += '</span></td></tr>';
}

$('.t4_2tbody').html(table4_2tbody);



//5-1表格
var arraytable5_1 = {
    date:[
        ['06/14 14:00 ~ 06/20 23:59'],
        ['06/21 00:00 ~ 06/27 23:59'],
        ['06/28 00:00 ~ 07/11 23:59']
    ],
    manual:[
        ['經驗值150%<br/>掉落率150%<br/>攻擊力+200<br/>防禦力+200'],
        ['經驗值300%<br/>掉落率150%<br/>攻擊力+500<br/>防禦力+500'],
        //以上內容於6/16~17替換成以下註解內容

        //<span class="highlight">粉絲團週年直播bonus獎勵！<br/>經驗值400%</span><br/><span style="text-decoration:line-through;">經驗值300%</span><br/>掉落率150%<br/>攻擊力+500<br/>防禦力+500
        
        ['經驗值150%<br/>掉落率150%<br/>攻擊力+200<br/>防禦力+200']
    ]
}

var table5_1tbody = "";

table5_1tbody += 
'<tr class="text-center table-title"><td>'+
'日期'+'</td><td>'+
'活動內容'+'</td></tr>';

for(i = 0 ; i < 3 ; i++){
    table5_1tbody += 
    '<tr><td class="text-center table-main table-mainP2-5">'+
    arraytable5_1.date[i]+
    '</td><td class="text-center table-main ">'+
    arraytable5_1.manual[i]+
    '</td></tr>';
}

$('.t5_1tbody').html(table5_1tbody);



//5-2表格
var arraytable5_2 = {
    date:[
        ['06/14維護後 ~ 06/21維護前'],
        ['06/21維護後 ~ 06/28維護前'],
        ['06/28維護後 ~ 07/05維護前']
    ],
    manual:[
        ['「時裝精鍊」、「一般精鍊」<br/>強化機率提升原機率30%'],
        ['「穿洞強化」​、「巴路那精煉」<br/>強化機率提升原機率30%'],
        ['「飾品精煉」<br/>強化機率提升原機率30%']
    ]
}

var table5_2tbody = "";

table5_2tbody += 
'<tr class="text-center table-title"><td>'+
'日期'+'</td><td>'+
'活動內容'+'</td></tr>';

for(i = 0 ; i < 3 ; i++){
    table5_2tbody += 
    '<tr><td class="text-center table-main table-mainP2-5">'+
    arraytable5_2.date[i]+
    '</td><td class="text-center table-main ">'+
    arraytable5_2.manual[i]+
    '</td></tr>';
}

$('.t5_2tbody').html(table5_2tbody);