const BaseFooter = () => {

  return (
    <footer className="footer footer-center bg-neutral-900 text-neutral-300 p-4 mt-40 border-2 border-warning">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by codespace 🚀</p>
      </aside>
    </footer>
  )
}

export default BaseFooter