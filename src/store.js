import { observable, action, decorate,computed } from 'mobx';
import cookies from 'react-cookie';
import axios from 'axios';


var lastOffers = {
    data:[],
    getData(){
        axios.get("http://atrokirina.beget.tech/api.php/lastreg?value=3",{headers:{
            'X-Access-Token' : '1234',
        }}).then(res=>{
            if(res.status == 200){
                this.data = res.response
                console.log(this.data)
            }
        })
    }
}

var store = {
    lastOffers:lastOffers
}

decorate(store.lastOffers, {
    data:observable,
    getData:action
})

export default store;