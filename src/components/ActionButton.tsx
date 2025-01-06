import AnchorLink from "react-anchor-link-smooth-scroll"
import { allPages } from "../share/enumType"

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: allPages) => void;
}

const ActionButton = ({ children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
     className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer"
     onClick={ () => setSelectedPage(allPages.ContactUs)}
     href={`#${allPages.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton