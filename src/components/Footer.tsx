

function Footer() {
  return (
    <footer className="p-4 text-center text-white" style={{ background: 'linear-gradient(45deg, #A100FF, #FF007F)' }}>
    <p>&copy; {new Date().getFullYear()} Olu | Computer Engineering | All Rights Reserved.</p>
  </footer>
  )
}

export default Footer;