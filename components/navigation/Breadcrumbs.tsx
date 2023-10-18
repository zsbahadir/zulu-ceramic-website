// import Next
import Link from "next/link";

interface BreadcrumbsProps{
items: { label: string; href: string }[];
}


function Breadcrumbs(props: BreadcrumbsProps){

    const { items } = props;

    return(
        <div className="mt-10 ml-4">
            <nav className="flex items-center space-x-2" aria-label="Breadcrumb">
                {items.map((item, index) => 
                    <div key = {index} className="flex items-center">
                        {index > 0 && (
                            <span className="mx-2 text-gray-500">&#8250;</span> // &#8250; ==> >  
                        )}
                        <Link href={item.href} className="hover:underline text-xs">
                        {item.label}
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Breadcrumbs;