import { observable, action, decorate,computed } from 'mobx';
import TikTokAPI, { getRequestParams } from 'tiktok-api'
import cookies from 'react-cookie';
import axios from 'axios';


var lastOffers = {
    data:[],
    getData(){
        axios.get("http://atrokirina.beget.tech/api.php/lastreg?value=3",{headers:{
            'X-Access-Token' : '1234',
        }}).then(res=>{
            if(res.data.status == 200){
                this.data = res.data.response
            }
        })
    }
}

var topOffers = {
    data:[],
    getData(){
        axios.get("http://atrokirina.beget.tech/api.php/maxf?value=3",{headers:{
            'X-Access-Token' : '1234',
        }}).then(res=>{
            if(res.data.status == 200){
                this.data = res.data.response
            }
        })
    }
}

var store = {
    lastOffers:lastOffers,
    topOffers:topOffers
}

decorate(store.lastOffers, {
    data:observable,
    getData:action
})
decorate(store.topOffers, {
    data:observable,
    getData:action
})

export default store;