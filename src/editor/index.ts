import { createElem, selectElem } from '../dom/index'
import Menu from '../menu/index'
// 缓存选中文字
export let cachedRange: Range | null | undefined = null

class editor {
    /** 用户传入的根节点 */
    public wrapperElem: HTMLElement | null
    /** 菜单元素 */
    public menuElem: Menu
    /** 作为编辑区域的元素 */
    public editorElement: HTMLElement | null

    constructor(selector) {
        this.wrapperElem = selectElem(selector, 'content-wrapper')
        this.menuElem = new Menu(this)
        this.editorElement = createElem('div', 'editor-wrapper')
    }

    /** 生成编辑器 */
    public create(): void {
        // 初始化菜单栏
        this.menuElem.init()
        // 设置选中dom元素为可编辑区域
        this.editorElement?.setAttribute('contenteditable', 'true')
        // fix: 加入该元素的目的是在用户输入时使其被p标签包裹
        this.createPlaceholder()
        // 绑定事件
        this.bindEvent()
        // 将编辑器元素添加进父元素中
        this.wrapperElem?.appendChild(this.editorElement!)
    }
    /**
     * 绑定事件
     */
    private bindEvent(): void {
        /** 键盘弹起事件 */
        document.addEventListener('keyup', (e: KeyboardEvent) => {
            // 删除按钮
            if (e.keyCode === 8) {
                // 防止用户上来就按删除键，造成的文本无法被p标签包裹的问题
                if (!this.editorElement?.innerHTML) {
                    cachedRange = null
                    this.createPlaceholder()
                }
            } else if (e.keyCode === 13) {
                //回车清空range的缓存
                cachedRange = null
                // 回车后将下一行文字的字号回复正常
                document.execCommand('fontSize', false, '3')
            }
        })
        /** 鼠标弹起事件 */
        document.addEventListener('mouseup', () => {
            const selection = window.getSelection()
            // isCollapsed为false时证明选中了文字
            if (!selection?.isCollapsed) {
                cachedRange = selection?.getRangeAt(0)
            }
        })
    }

    /**
     * 使用户的输入处于p标签包裹内
     */
    private createPlaceholder(): void {
        const pElem = createElem('p')
        // 这里需要注意p标签内需要用br标签进行占位
        pElem.innerHTML = `<br>`
        this.editorElement?.appendChild(pElem)
    }
}

/** 暴露至全局以获取实例 */
;(window as any).Editor = editor

export default editor
