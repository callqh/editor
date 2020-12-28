export interface MenuBtnListProps {
    /** 命令 */
    command?: string
    /** 图标 */
    icon: string
    /** 子元素 */
    children?: MenuBtnListProps[]
}
// 菜单项的按钮
export const menuList: MenuBtnListProps[] = [
    {
        icon: 'heading',
        children: [
            { icon: 'h-1', command: 'fontSize-6' },
            { icon: 'h-2', command: 'fontSize-5' },
            { icon: 'h-3', command: 'fontSize-4' },
            { icon: 'h-4', command: 'fontSize-3' },
            { icon: 'h-5', command: 'fontSize-2' },
            { icon: 'h-6', command: 'fontSize-1' },
        ],
    },
    {
        command: 'bold',
        icon: 'bold',
    },
    {
        icon: 'font-color',
        children: [
            { icon: 'font-color', command: 'foreColor-black' },
            { icon: 'red', command: 'foreColor-red' },
            { icon: 'yellow', command: 'foreColor-yellow' },
            { icon: 'blue', command: 'foreColor-blue' },
            { icon: 'green', command: 'foreColor-green' },
        ],
    },
]
