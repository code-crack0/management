// Sidebar.js
import { useState } from 'react'
import Link from 'next/link'
import { Box, Home, Package, ShoppingCart, Users, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <aside className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out`}>
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Box className="mr-2 h-4 w-4" />
          {isSidebarOpen && <span>Inventory System</span>}
        </Button>
      </div>
      <nav className="space-y-2 p-2">
        <Link href="/">
        <Button variant="ghost" className="w-full justify-start">
          <Home className="mr-2 h-4 w-4" />
          {isSidebarOpen && <span>Dashboard</span>}
        </Button>
        </Link>
        <Link href="/inventory">
          <Button variant="ghost" className="w-full justify-start">
            <Package className="mr-2 h-4 w-4" />
            {isSidebarOpen && <span>Inventory</span>}
          </Button>
        </Link>
        <Button variant="ghost" className="w-full justify-start">
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isSidebarOpen && <span>Orders</span>}
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Users className="mr-2 h-4 w-4" />
          {isSidebarOpen && <span>Suppliers</span>}
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          {isSidebarOpen && <span>Settings</span>}
        </Button>
      </nav>
    </aside>
  )
}
