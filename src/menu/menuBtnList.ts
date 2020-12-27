export interface MenuBtnListProps {
    command?: string
    icon: string
    children?: MenuBtnListProps[]
    flag?: string
}
// 菜单项的按钮
export const menuList: MenuBtnListProps[] = [
    {
        icon: 'heading',
        flag: 'fontSizeFlag',
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
        flag: 'boldFlag',
        icon: 'bold',
    },
    {
        icon: 'font-color',
        flag: 'colorFlag',
        children: [
            { icon: 'font-color', command: 'foreColor-black' },
            { icon: 'red', command: 'foreColor-red' },
            { icon: 'yellow', command: 'foreColor-yellow' },
            { icon: 'blue', command: 'foreColor-blue' },
            { icon: 'green', command: 'foreColor-green' },
        ],
    },
]
