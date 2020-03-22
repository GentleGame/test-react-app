import { observable, action, decorate,computed } from 'mobx';
import cookie from 'react-cookies'
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
        if((this.user.firstname!='')&&(this.user.lastname!='')&&(this.user.username!='')&&(this.user.email!='')&&(this.user.password!='')&&(this.user.c_password!='')){
            if(this.user.password == this.user.c_password){
                this.disabled = true
                axios.get(`http://atrokirina.beget.tech/api.php/createAccount?firstname=${this.user.firstname}&lastname=${this.user.lastname}&nickname=${this.user.username}&email=${this.user.email}&pwd=${this.user.password}`,{headers:{
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
    authStatus:false,
    disabled:false,
    authorized:{
        firstname:'',
        lastname:'',
        username:'',
        date:'',
        email:'',
        currentIP:'',
        regIP:''
    },
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

    setCookie(){
        const expires = new Date()
        expires.setDate(Date.now() + 60*30)
        cookie.save("email",this.email,{
            path:'/',
            expires

        })
        cookie.save("password",this.password,{
            path:'/',
            expires

        })
    },
    checkCookie(){
       let c_email = cookie.load("email")
       let c_pass = cookie.load("password")
       if((typeof c_email != "undefined")&&(typeof c_pass != "undefined")){
        axios.get(`http://atrokirina.beget.tech/api.php/auth?email=${c_email}&password=${c_pass}`,{headers:{
            'X-Access-Token' : '1234'}}).then(res=>{
                if(res.status == 200){
                    let time = new Date(res.data.response.datareg*1000)
                    let day = time.getDate()
                    let month = time.getMonth() 
                    let year = time.getFullYear() 
                    let data = day+".0" + month +"."+ year
                    this.authStatus = true 
                    this.authorized.firstname = res.data.response.firstname 
                    this.authorized.lastname = res.data.response.lastname
                    this.authorized.username = res.data.response.nickname
                    this.authorized.date = data
                    this.authorized.email = res.data.response.email 
                    this.authorized.currentIP = res.data.response.cip
                    this.authorized.regIP = res.data.response.ipreg
                }
                
            })
       }
    },
    sendReq(){
        if((this.email!='')&&(this.password!='')){
            this.disabled = true
            axios.get(`http://atrokirina.beget.tech/api.php/auth?email=${this.email}&password=${this.password}`,{headers:{
                'X-Access-Token' : '1234'}}).then(res=>{
                    if(res.status == 200){
                        this.disabled = false
                        notification["success"]({
                            message: 'Успешно!',
                            placement:'topLeft',
                            description:
                              'Вы авторизованы, можно зайти в аккаунт',
                          });
                          setTimeout(()=>{
                            this.setCookie()
                          },1000)
                          setTimeout(()=>{
                            this.checkCookie()
                          },1000)
                    }
                }).catch(error=>{
                    this.disabled = false
                    if(error.response.status ==400){
                        notification["error"]({
                            message: 'Ошибка!',
                            placement:'topLeft',
                            description:
                              'Неверный логин или пароль',
                          });
                        }else{
                            notification["error"]({
                                message: 'Ошибка!',
                                placement:'topLeft',
                                description:
                                  'Что-то пошло не так, попробуйте позже',
                              });
                        }
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
    authStatus:observable,
    disabled:observable,
    authorized:observable,
    email:observable,
    password:observable,
    setData:action,
    sendReq:action
})

export default store;