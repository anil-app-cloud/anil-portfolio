import './index.css'

const ProjectItem = props => {
  const {app} = props
  return (
    <li className="app-item">
      <img src={app.imageUrl} alt={app.projectName} className="app-logo" />
      <h5>{app.projectName}</h5>
      <a href={app.link} target='blank'>{app.link}</a>
      <p>{app.descreption}</p>
    </li>
  )
}

export default ProjectItem
