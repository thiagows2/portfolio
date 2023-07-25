import cx from 'classnames'

import './styles.css'

const Heading = ({ children, lineBottom = false, size = 'normal', id = ""}: any) => (
  <div className={cx({ 'heading--bottom': lineBottom })}>
    <h2 id={id} className={cx({ [size]: true, 'line-bottom': lineBottom })}>{children}</h2>
  </div>
)

export default Heading
