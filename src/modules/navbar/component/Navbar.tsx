import { Container } from "@/components/container"
import { Link } from "@/modules/focusable"
import { ModeSwitch } from "@/modules/navbar/component/ModeSwitch"
import { NavbarTitle } from "@/modules/navbar/component/NavbarTitle"
import { NavbarWatchLaterCount } from "@/modules/navbar/component/NavbarWatchLaterCount"
import { NAVBAR_LINK_ITEMS } from "@/modules/navbar/constant/navbarLinkItems"
import { getNavigationPath } from "@/utils"
import clsx from "clsx"
import { useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <header className="flex h-[60px] justify-center bg-mode-900">
      <Container className="flex justify-center">
        {/* title */}
        <div className="hidden h-full flex-shrink-2 flex-grow basis-1/3 items-center sm:flex">
          {/* visaully hide h1 since we are showing the button, only visible to screen readers */}
          <NavbarTitle />
        </div>
        {/* navigation links */}
        <nav>
          <ul className="flex h-full items-center gap-x-2 gap-y-2">
            {NAVBAR_LINK_ITEMS.map((link) => (
              <li key={link.href} className="flex">
                <Link
                  to={link.href}
                  disabledArrows={link.disabledArrows}
                  aria-label={link["aria-label"]}
                  className={clsx(
                    "relative px-4 py-2 text-mode-400",
                    pathname === getNavigationPath(link.href)
                      ? "text-primary focus-within:text-primary hover:text-primary data-[focused]:text-primary"
                      : undefined,
                  )}
                >
                  <link.Icon className="size-6" />
                  {link.href === "/watch-later" ? <NavbarWatchLaterCount /> : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* mode switch */}
        <div className="hidden h-full flex-shrink-2 flex-grow basis-1/3 items-center justify-end sm:flex">
          <ModeSwitch disabledArrows={["up", "right"]} />
        </div>
      </Container>
    </header>
  )
}

export { Navbar }
