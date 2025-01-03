import AnchorLink from "react-anchor-link-smooth-scroll"
import { allPages } from "../share/enumType"

type Props = {
    page: string;
    selectedPage: allPages;
    setSelectedPage: (value: allPages) => void;
}

const Link = ({page, selectedPage, setSelectedPage }: Props) => {
    
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as allPages


  return (
    <AnchorLink
     className={`${selectedPage === lowerCasePage ? "text-primary-500" : "black"}`}
     href={`#${lowerCasePage}`}
     onClick={ () => setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
)
}

export default Link