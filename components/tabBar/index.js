// 点击 tab-item，开启激活态
const parentNode = document.querySelector('.tabBar');
const activeTop = document.querySelector('.active-top');
// 去除顶部的 active-top
const childList = [...parentNode.children].slice(1);

//利用时间冒泡，使用事件委托绑定事件
parentNode.addEventListener("click", function(event) {
    let currentItem = null;
    const target = event.target;
    // tips：或者使用 event.target.closet(selector) 获取近父节点
    // const targetCloset = target.targetCloset;
    const parentNode = target.parentNode;

    // 鼠标点击可能是  li，也可能是子元素 i p，需要区分
    // 我们只需要获取 li 元素，所以点击子元素时，要取父元素
    if (target.className.includes("tab-item")) {
        currentItem = target;
    } else if (parentNode.className.includes("tab-item")) {
        currentItem = parentNode;
    }

    // 获取当前元素索引
    const currentItemIndex = childList.indexOf(currentItem);
    // 添加 active 激活类，其它兄弟元素移除
    currentItem.classList.add("active");
    childList.forEach((item, index) => {
        if (index !== currentItemIndex) {
            item.classList.remove("active");
        }
    });

    if (!activeTop.style.top && activeTop.style.display) {
        activeTop.style.display = "block";
        activeTop.style.top = "-6px";
    }

    const gap = currentItemIndex ? 23 : 22;
    activeTop.style.left = (currentItem * currentItem.offsetWidth + currentItem.offsetWidth * (currentItemIndex + 1)) / 2 - gap + 'px';
})