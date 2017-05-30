var xhr = new XMLHttpRequest();
xhr.open('get','https://monkeywu.github.io/data.json',false);
xhr.send('null');
var data = JSON.parse(xhr.responseText);

// 收容所經緯度資訊 //
var mapdata = [
{
    position:{lat:25.0631158,lng:121.6067468},
    address:'臺北市內湖區潭美街852號',
    name:'臺北市動物之家'
},
{
    position:{lat:22.9367418,lng:120.1922241},
    address:'臺南市南區省躬里14鄰萬年路580巷92號',
    name:'臺南市動物之家灣裡站'
},
{
    position:{lat:24.1476986,lng:120.5730763},
    address:'臺中市南屯區中台路601號',
    name:'臺中市動物之家南屯園區'
},
{
    position:{lat:25.0040768,lng:121.4581243},
    address:'新北市板橋區四川路1段157巷2號',
    name:'新北市政府動物保護防疫處'
},
{
    position:{lat:25.0081159,lng:121.0257343},
    address:'桃園市新屋區永興里大牛欄 117 號',
    name:'桃園市動物保護教育園區'
},
{
    position:{lat:24.9271594,lng:121.4886195},
    address:'新北市新店區安泰路235號',
    name:'新北市新店區公立動物之家'
},
{
    position:{lat:23.6983039,lng:120.5237493},
    address:'雲林縣斗六市雲林路二段517號',
    name:'雲林縣流浪動物收容所'
},
{
    position:{lat:23.9691965,lng:120.617542},
    address:'彰化縣員林鎮大峰里阿寶坑426號',
    name:'彰化縣流浪狗中途之家'
},
{
    position:{lat:25.0777076,lng:121.4135917},
    address:'新北市五股區外寮路9-9號',
    name:'新北市五股區公立動物之家'
},
{
    position:{lat:22.7926857,lng:120.4024744},
    address:'高雄市燕巢區師大路98號',
    name:'高雄市燕巢動物保護關愛園區'
},
{
    position:{lat:22.6353188,lng:120.2759685},
    address:'高雄市鼓山區萬壽路350號',
    name:'高雄市壽山動物保護教育園區'
},
{
    position:{lat:24.8325516,lng:120.917639},
    address:'新竹市南寮里海濱路250號',
    name:'新竹市動物收容所'
},
{
    position:{lat:24.9755836,lng:121.4866429},
    address:'新北市中和區興南路三段100號',
    name:'新北市中和區公立動物之家 '
},
{
    position:{lat:24.5860428,lng:120.8042099},
    address:'苗栗縣苗栗市新川里泉水窩1號',
    name:'苗栗動物收容所--狗狗收容區'
},
{
    position:{lat:23.5474899,lng:120.5029843},
    address:'嘉義縣民雄鄉松山村後山仔37~1號',
    name:'嘉義縣流浪犬中途之家'
},
{
    position:{lat:24.4440572,lng:118.4425204},
    address:'金門縣金湖鎮裕民農莊20號',
    name:'金門縣動物收容中心'
},
{
    position:{lat:24.8284632,lng:121.0128762},
    address:'新竹縣竹北市縣政五街192號',
    name:'新竹縣動物收容所'
},
{
    position:{lat:24.9957671,lng:121.4461135},
    address:'新北市板橋區華東路1-9號',
    name:'新北市板橋區公立動物之家'
},
{
    position:{lat:23.4786598,lng:120.451332},
    address:'嘉義市彌陀路101號旁(環保局停車場內)',
    name:'嘉義市流浪動物收容所'
},
{
    position:{lat:24.6671279,lng:121.8290163},
    address:'宜蘭縣五結鄉成興村利寶路60號',
    name:'宜蘭縣流浪動物中途之家'
},
{
    position:{lat:23.9287303,lng:121.5908677},
    address:'花蓮縣吉安鄉南濱路1段599號',
    name:'花蓮縣流浪犬中途之家'
},
{
    position:{lat:23.5501969,lng:119.6216481},
    address:'澎湖縣馬公市烏崁里260號',
    name:'澎湖縣流浪動物收容中心'
},
{
    position:{lat:25.2576535,lng:121.4986167},
    address:'新北市三芝區中山路一段32號',
    name:'新北市三芝區公立動物之家'
},
{
    position:{lat:22.6433553,lng:120.5996635},
    address:'屏東縣內埔鄉學府路1號(屏東科技大學內)',
    name:'屏東縣流浪動物收容所'
},
{
    position:{lat:25.0666047,lng:121.4379684},
    address:'新北市泰山區楓江路191號',
    name:'新北市新莊區公立動物之家'
},
{
    position:{lat:23.9064403,lng:120.6706322},
    address:'南投縣南投市嶺興路36之1號',
    name:'南投縣公立動物收容所'
},
{
    position:{lat:22.7321023,lng:121.0981502},
    address:'臺東縣臺東市中華路4段900巷600號',
    name:'臺東縣動物收容中心'
},
{
    position:{lat:23.1488145,lng:120.3294673},
    address:'臺南市善化區東昌里東勢寮1之19號',
    name:'臺南市動物之家善化站'
},
{
    position:{lat:25.0876155,lng:121.3959752},
    address:'新北市八里區長坑村6鄰長道路36號',
    name:'新北市八里區公立動物之家'
},
{
    position:{lat:25.1273878,lng:121.6722848},
    address:'基隆市七堵區瑪西里大華三路45-12號(欣欣安樂園旁)',
    name:'基隆市寵物銀行'
},
{
    position:{lat:26.1596598,lng:119.9360839},
    address:'馬祖南竿鄉復興村(近機場)',
    name:'連江縣流浪犬收容中心'
}
]

//   控制選擇區域  //
$('.place').hover(function(event) {
    event.preventDefault();
    $(this).siblings().find('select').slideUp();
    $(this).find('select').slideToggle();
  });
//   點擊跑出選單 //
$('.btn').click(function(){
	$('.placechoose').fadeIn();
	$('.choose').fadeIn();
	$('.confirm').fadeIn();
})


var confirm = document.querySelector('.confirm');
confirm.addEventListener('click',click,false)

// 篩選條件 //

function click(){
	 var northcity = document.querySelector('.northcity').value;
	 var centercity = document.querySelector('.centercity').value;
	 var southcity = document.querySelector('.southcity').value;
	 var othercity = document.querySelector('.othercity').value;
	 var spe = document.querySelector('.spe').value;
	 var sex = document.querySelector('.sex').value;
	 var size = document.querySelector('.size').value;
	 var list = document.querySelector('.list');
     var cityarray = [northcity,centercity,southcity,othercity];
	 var str='';
	 var once = true;
        for(var j = 0;j<cityarray.length;j++){
    	 for (var i = 0; i < data.length; i++) {
    	 	var shelter_address = data[i].shelter_address;
    	 	// 篩選選擇哪些區域，及種類、性別、大小 //
    	 	var decide = (shelter_address.indexOf(cityarray[j]) !== -1 && sex == data[i].animal_sex && size == data[i].animal_bodytype && spe == data[i].animal_kind);
    	 	//  四個區域都為預設值，代表沒選區域 //
    	 	var nofind = (northcity == 'choose' && centercity == 'choose' && southcity == 'choose' && othercity == 'choose');
                if(decide) {
              		str += '<li><h3 class="name">'+data[i].shelter_name+'</h3><div class="top" style="background-image:url('+data[i].album_file+'"></div><span>目前地址：'+'<a href="#" class="gomap">'+data[i].shelter_address+'</a></span><span>聯絡電話：'+data[i].shelter_tel+'</span></li>';
                } else if(nofind && once){
                	once = false 
                	console.log(nofind);
                	alert('沒有選地區！');
                } 
                };
           list.innerHTML = str;
           if (str == '' && !nofind) {
           	alert('沒有符合資料！');
           }
         }
        };

// google map //
var map;

// 預設googlemap function //
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:123, lng:456},
    zoom: 14
    });
}


//  點擊地址連結叫出google地圖 //
$('.list').on('click','.gomap',function(e){
    e.preventDefault();
    $('#map').css('left','25%');
    $('.close_map').css('display','block');
    for(i=0;i<mapdata.length;i++){
        if($('.gomap').parent().siblings().text() == mapdata[i].address){
            function initMap() {
            var lat = mapdata[i].position.lat;
            var lng = mapdata[i].position.lng;
            map = new google.maps.Map(document.getElementById('map'), {
            center: {lat, lng},
            zoom: 14
            });

            var marker = new google.maps.Marker({
                position:{lat,lng},
                map:map,
            })
            }
            initMap();
        }
    }
})


// 關閉地圖 //
$('.close_map').click(function(e){
    e.preventDefault();
    $('#map').css('left','-100%');
    $('.close_map').css('display','none');
})
















