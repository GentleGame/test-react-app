import { observable, action, decorate,computed } from 'mobx';
import cookies from 'react-cookie';
import axios from 'axios';
import {notification} from 'antd'


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

var registration = {
    disabled:false,
    user:{
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        c_password:'',
    },
    setData(_obj) {
        switch(_obj.name){
            case 'firstname':
                this.user.firstname = _obj.value
            break;
            case 'lastname':
                this.user.lastname = _obj.value
            break;
            case 'username':
                this.user.username = _obj.value
            break;
            case 'email':
                this.user.email = _obj.value
            break;
            case 'password':
                this.user.password = _obj.value
            break;
            case 'c_password':
                this.user.c_password = _obj.value
            break;
        }
    },
    sendReq(){  // отправляем данные на сервер
        this.disabled = true
        if((this.user.firstname!='')&&(this.user.lastname!='')&&(this.user.username!='')&&(this.user.email!='')&&(this.user.password!='')&&(this.user.c_password!='')){
            if(this.user.password == this.user.c_password){
                axios.get(`http://atrokirina.beget.tech/api.php/createAccount?firstname=${this.user.firstname}&lastname=${this.user.lastname}&username=${this.user.username}&email=${this.user.email}&password=${this.user.password}`,{headers:{
                    'X-Access-Token' : '1234',
                }}).then((res)=>{
                    if(res.status == 200){
                        this.disabled = false
                        notification["success"]({
                            message: 'Успешно!',
                            placement:'topLeft',
                            description:
                              'Регистрация пройдена, можно переходить к авторизации',
                          });
                    }
                    
                }).catch(error=>{
                    if(error.response.status == 403){
                    this.disabled = false
                        notification["error"]({
                            message: 'Ошибка!',
                            placement:'topLeft',
                            description:
                              'Данный email уже зарегистрирован в системе ',
                          });
                        }
                        else{
                            this.disabled = false
                        notification["error"]({
                            message: 'Ошибка!',
                            placement:'topLeft',
                            description:
                              'Ошибка, попробуйте через несколько минут ',
                          });
                        }
                          
                })
            }else{
                return false
            }
        }else{
            return false
        }
    }

}

var form = {
    auth:false,
    title:"Регистрация",
    handlerAuth(){
        this.title = "Авторизация"
        this.auth = true
    },
    handlerReg(){
        this.title = "Регистрация"
        this.auth = false
    }
}

var authorization = {
    email:'',
    password:'',
    setData(_obj) {
        switch(_obj.name){
            case 'email':
                this.email = _obj.value
            break;
            case 'password':
                this.password = _obj.value
            break;
        }
    },
    sendReq(){
        if((this.email!='')&&(this.password!='')){
            axios.get(`http://atrokirina.beget.tech/api.php/auth?email=${this.email}&password=${this.password}`,{headers:{
                'X-Access-Token' : '1234'}}).then(res=>{

                }).catch(error=>{
                    
                })
        }
    }
}

var store = {
    lastOffers:lastOffers,
    topOffers:topOffers,
    registration:registration,
    authorization:authorization,
    form:form
}

decorate(store.lastOffers, {
    data:observable,
    getData:action
})
decorate(store.topOffers, {
    data:observable,
    getData:action
})
decorate(store.registration,{
    disabled:observable,
    firstname:observable,
    lastname:observable,
    username:observable,
    email:observable,
    password:observable,
    c_password:observable,
})
decorate(store.form,{
   auth:observable,
   title:observable,
   handlerAuth:action,
   handlerReg:action
})
decorate(store.authorization,{
    email:observable,
    password:observable,
    setData:action,
    sendReq:action
})

export default store;