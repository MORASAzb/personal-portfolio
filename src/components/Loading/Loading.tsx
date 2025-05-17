import './Loading.css'
import { useThemeMode } from '../../setting/themeHelpers/themeModeUtils'

const Loading = () => {
  const {mode} = useThemeMode();
  const themeClass= mode === 'dark' ? 'dark' : 'light';
  
  return (
    <div className={`body-loading ${themeClass}`}>
    <div className="loading-container">
    <div className="loading-text">
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
    </div>
  </div>
    </div>
  )
}

export default Loading

