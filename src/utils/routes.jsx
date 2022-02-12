import React from 'react';
import Display from "../components/Display";
import Home from "../views/Home";

const routes = [
    {
        path: '/',
        name: '主页',
        element: <Home/>
    }
    ,{
        path:'/display/kobe',
        name: "Kobe",
        element: <Display url='http://yivi.space/kobe' effect='Sliding' intro='一个简单的滑动效果'/>
    }
    ,{
        path:'/display/hit',
        name: "暴打土子哥",
        element: <Display url='http://yivi.space/hit_it' effect='小游戏' intro='一个打地鼠游戏，想暴打土子哥的人来'/>
    }
    ,{
        path:'/display/bingdundun',
        name: "冰墩墩",
        element: <Display url='http://yivi.space/bingdundun' effect='CSS' intro='通过CSS3实现的冰墩墩'/>
    }
]

export default routes;