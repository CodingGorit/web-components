

// 滚动到顶部
export function goToTop() {
    if (!window) {
        return;
    }
    window.scrollTo(0, 0);
}


const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);