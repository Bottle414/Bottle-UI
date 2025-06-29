import autoprefixer from 'autoprefixer'
import postcssPresetEnv from 'postcss-preset-env'

export default {
    plugins: [
        autoprefixer(),
        postcssPresetEnv({
            stage: 3,
            features: {
                'nesting-rules': true
            }
        })
    ]
}
