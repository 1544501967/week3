import VueRouter from 'vue-router';
import community from '../components/community';
import register from '../components/register';
import main  from '../components/main'
import login from '../components/login'
import blog from '../components/blog'
import user from '../components/user'
import all  from '../components/all';
import my from '../components/my'
import level from '../components/level';
import radio from '../components/radio';
import sleep from '../components/sleep';
import classify from '../components/classify'
import music from '../components/music';
import search from '../components/search';


export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            component:login
        },
        {
            path:'/all',
            component:all,
            children:[
                {
                    path:'/',
                    component:main
                },
                {
                    path:'/blog',
                    component:blog,
                    children:[
                        {
                            path:'/',
                            component:my
                        },
                        {
                            path:'/level',
                            component:level
                        },
                        {
                            path:'/radio',
                            component:radio
                        },
                        {
                            path:'/sleep',
                            component:sleep
                        },
                        {
                            path:'/classify',
                            component:classify
                        }
                    ]
                },
    
                {
                    path:'/community',
                    component: community
                },
                {
                    path:'/user',
                    component:user
                }
            ]
        },
        {
            path:'/register',
            component: register

        },
        {
            path:'/music',
            component:music
        },
        {
            path:'/search',
            component:search
        }
        
        
    ]
})