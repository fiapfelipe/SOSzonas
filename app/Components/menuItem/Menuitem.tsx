import Link from "next/link"

interface MenuItemProps {
  link: string
  children: React.ReactNode
}

export const MenuItem = ({ link, children }: MenuItemProps) => {
  return (
    <li className="inline font-medium text-black border border-blue-400 hover:bg-blue-200 cursor-pointer rounded-full py-2 px-6 text-[1em]">
      <Link href={link}>{children}</Link>
    </li>
  )
}