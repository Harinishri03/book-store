import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo  } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiLogin, HiLogout, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

import userImg from "../assets/logo.png";

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
        <SidebarLogo href="/" img={userImg} imgAlt="Flowbite logo" className="rounded">
        Harine's Book Store
      </SidebarLogo>
      <SidebarItems>
        <SidebarItemGroup>
          <SidebarItem href="/admin/dashboard/users" icon={HiShoppingBag}>
            User Details
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Books
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </SidebarItem>
          <SidebarItem href="/admin/dashboard/products" icon={HiShoppingBag}>
            Products
          </SidebarItem>
          <SidebarItem href="/login" icon={HiLogin}>
            Sign In
          </SidebarItem>
          <SidebarItem href="/logout" icon={HiLogout}>
            Log Out
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={HiChartPie}>
            Upgrade to Pro
          </SidebarItem>
          <SidebarItem href="#" icon={HiViewBoards}>
            Documentation
          </SidebarItem>
          <SidebarItem href="#" icon={BiBuoy}>
            Help
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  )
}

export default SideBar