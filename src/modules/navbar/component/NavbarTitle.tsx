import { GitHubIcon } from "@/components/icon"
import { ENV } from "@/env"
import { Link } from "@/modules/focusable"

const NavbarTitle = () => {
  return (
    <>
      {/* visaully hide h1 since we are showing the button, only visible to screen readers */}
      <h1 className="sr-only">Movies</h1>
      <Link
        to={ENV.PROJECT_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="relative ml-2 flex items-center font-medium text-2xl text-mode-400"
        disabledArrows={["left", "up"]}
      >
        M<GitHubIcon className="relative top-px mr-px size-5" />
        vies
      </Link>
    </>
  )
}

export { NavbarTitle }
