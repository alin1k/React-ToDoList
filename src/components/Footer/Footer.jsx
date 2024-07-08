import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.css"

function Footer() {
  return(
    <footer>
      <p>Web app designed and developed by <a href='https://github.com/alin1k' target='_blank' rel='noreferrer'>Olteanu Alin</a> ©</p>
      <div className="githubRepo">
        <p>Check out this project on <a href="https://github.com/alin1k/React-ToDoList" target='_blank' rel='noreferrer'>Github </a> </p>
        <GitHubIcon/>
      </div>
    </footer>
  )
}

export default Footer;