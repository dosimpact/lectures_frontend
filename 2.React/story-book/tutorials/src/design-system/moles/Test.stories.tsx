import Test from './Test'

export default {
  title: 'Design System/Molecules/test-component',
  component: Test,
}

export const Common = () => <Test />
export const Common1 = () => <Test test={false} />
