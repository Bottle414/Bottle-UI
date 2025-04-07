const prefix = 'b'
const statePrefix = 'is'

// 生成bem风格名称
function _bem(prefixName: string, blockSuffix: string, element: string, modifier: string){
    prefixName = '-' + prefixName
    if (blockSuffix){
        prefixName += `-${ blockSuffix }`
    }
    if (element){
        prefixName += `__${ element }`
    }
    if (modifier){
        prefixName += `--${ modifier }`
    }
    return prefixName
}

function useNamespace(block: string){
    const prefixName = `${ prefix }-${ block }`

    // 生成bem类名
    const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '')
    const e = (element: string = '') => element ? _bem(prefixName, '', element, '') : ''// 没有元素直接置空
    const m = (modifier: string = '') => modifier ? _bem(prefixName, '', '', modifier) : ''// 没有修饰器直接置空
    const be = (blockSuffix: string = '', element: string = '') => blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : ''
    const bm = (blockSuffix: string = '', modifier: string = '') => blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''
    const em = (element: string = '', modifier: string = '') => element && modifier ? _bem(prefixName, '', element, modifier) : ''
    const bem = (blockSuffix: string = '',element: string = '', modifier: string = '') => blockSuffix && element && modifier ? _bem(prefixName, blockSuffix, element, modifier) : ''

    const is = (block: string, state: boolean) => state ? `${ statePrefix }-${ block }` : ''

    // 生成css变量名
    const cssVar = (object: Record<string, string>) => {
        const styles: Record<string, string> = {}
        for (const key in object){
            if (object[key]){
                styles[`--${ prefixName }-${ key }`] = object[key]
            }
        }
        return styles
    }

    const cssVarBlock = (object: Record<string, string>) => {
        const styles: Record<string, string> = {}
        for (const key in object){
            if (object[key]){
                styles[`--${ prefixName }-${ key }`] = object[key]
            }
        }
        return styles
    }

    const cssVarName = () => `--${ prefixName }`
    const cssVarBlockName = (name: string) => `--${ prefixName }-${ name }`

    return {
        // 类名
        b,
        e,
        m,
        be,
        bm,
        em,
        bem,
        is,

        // css
        cssVar,
        cssVarName,
        cssVarBlock,
        cssVarBlockName
    }
}

export default useNamespace