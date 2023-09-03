new Vue({
    el:"#app",
    data:{
        city:'',
        weatherList:[]
    },
    methods:{
        searchWeather:function(){
            var that = this;
            axios.get("https://devapi.qweather.com/v7/weather/7d?location=" + this.city + "&key=91adcefd2f2f44f5ba939e0d218ca082")
            .then(function(response){
                console.log(response);
                that.weatherList = response.data.daily;
            })
            .catch(function(err){})
        },
        remind() {
            alert("北京：101010100\n上海：101020100\n广州：101280101\n深圳：101280601\n福州：101230101");
          }
    }
})