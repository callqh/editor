/**
 * 生成指定元素
 * @param elementName 需要生成的元素名称
 * @param className 生成元素的类名
 */
export const createElem = (elementName: string, className?: string): HTMLElement => {
    const newElem = document.createElement(elementName)
    if (className) {
        const tmp = className.split(' ')
        tmp.forEach((_name: string) => newElem.classList.add(_name))
    }
    return newElem
}

/**
 * 选中指定元素
 * @param selector 需要选中的元素或者名称
 * @param className 给选中元素添加对应类名
 */
export const selectElem = (
    selector: string | HTMLElement,
    className?: string
): HTMLElement | null => {
    if (typeof selector === 'string') {
        const elem = document.querySelector(selector) as HTMLElement
        className && elem?.classList.add(className)
        return elem
    }
    className && selector.classList.add(className!)
    return selector
}
