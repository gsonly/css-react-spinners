import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'

const dist = 'dist'
const bundle = 'bundle'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs'
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm'
    },
    {
      name: 'CssReactSpinners',
      file: `${dist}/${bundle}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  plugins: [
    string({ include: '**/*.css' }),
    resolve(),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    production && terser()
  ]
}
