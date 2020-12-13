import { create } from '@storybook/theming/create'
import packageJson from '../package.json'

export default create({
  base: 'dark',
  brandTitle: 'CSS REACT SPINNERS',
  brandUrl: packageJson.repository.url
})
