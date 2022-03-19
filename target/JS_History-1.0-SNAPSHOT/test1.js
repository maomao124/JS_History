/**
 * Project name(项目名称)：JS_History
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 12:50
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// history 对象中的属性
// 属性	说明
// length	返回浏览历史的数目，包含当前已经加载的页面。
// scrollRestoration	利用浏览器特性，使我们在返回上一页或者下一页时，将页面滚动到之前浏览的位置，该属性有两个值，分别是 auto（表示滚动）与 manual（表示不滚动）。
// state	返回浏览器在当前 URL 下的状态信息，如果没有调用过 pushState() 或 replaceState() 方法，则返回默认值 null。

document.write(history.length + "<br>");
document.write(history.scrollRestoration + "<br>");
document.write(history.state + "<br>");