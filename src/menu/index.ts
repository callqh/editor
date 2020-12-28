import { createElem } from '../dom/index'
import Editor, { cachedRange } from '../editor/index'
import { menuList, MenuBtnListProps } from './menuBtnList'

class Menu {
    /** 编辑器实例 */
    public editor: Editor
    /** 操作按钮列表 */
    public btnList: MenuBtnListProps[]

    constructor(instance: Editor) {
        this.editor = instance
        this.btnList = menuList
    }

    /**
     * 初始化菜单
     */
    public init(): void {
        const ulElem = createElem('ul')
        ulElem.classList.add('menu-wrapper')
        this.btnList?.forEach(_item => {
            const liElem = createElem('li', `menu-item iconfont icon-${_item.icon}`)
            // 利用事件委托绑定事件
            this.bindEvent(liElem)
            // 添加自定义属性
            if (_item?.command) {
                liElem.setAttribute('command', _item?.command)
            }
            // 如果有子级
            if (_item.children) {
                const pElem = createElem('p', 'menu-item-child')
                // 遍历子元素生成对应节点
                _item.children.forEach((_child: MenuBtnListProps) => {
                    const spanElem = createElem('span', `iconfont icon-${_child.icon}`)
                    pElem.appendChild(spanElem)
                    // 给子级添加对应的属性
                    if (_child?.command) {
                        spanElem.setAttribute('command', _child?.command)
                    }
                    liElem.appendChild(pElem)
                })
            }
            ulElem.appendChild(liElem)
        })
        this.editor.wrapperElem!.appendChild(ulElem)
    }

    /**
     * 绑定点击菜单栏的事件
     */
    public bindEvent(element: HTMLElement): void {
        element.addEventListener('click', e => {
            const clickElem = e.target as HTMLElement
            const selection = window.getSelection()
            selection?.removeAllRanges()
            if (!cachedRange) {
                // 没有选中元素的情况下，就新建range，使之后输入的文字应用新的规则
                // 需要注意的是这里需要把光标移动到末尾
                this.editor.editorElement?.focus()
                const range = document.createRange()
                range.selectNodeContents(this.editor.editorElement!)
                range.collapse(false)
                const selection = window.getSelection()
                selection?.removeAllRanges()
                selection?.addRange(range)
            } else {
                const selection = window.getSelection()
                selection?.removeAllRanges()
                selection?.addRange(cachedRange!)
            }
            this.handleCommand(clickElem)
        })
    }

    /**
     * 处理各个菜单项命令
     */
    public handleCommand(target: HTMLElement): void {
        // command_KV : ["foreColor", "red"]
        const command_KV: string[] = target?.getAttribute('command')?.split('-')!
        command_KV?.length && document.execCommand(command_KV[0], false, command_KV[1] || undefined)
    }
}

export default Menu
