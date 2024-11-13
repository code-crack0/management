'use client'

import { useState } from 'react'
import { ChevronDown, Filter, MoreHorizontal, Search } from 'lucide-react'
import { format } from 'date-fns'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const metrics = [
  { label: 'Total orders', value: '48', period: 'Today' },
  { label: 'Ordered items over time', value: '493' },
  { label: 'Returns', value: '6' },
  { label: 'Fulfilled orders over time', value: '359' },
  { label: 'Delivered orders over time', value: '353' },
]

const orders = [
  {
    id: '1',
    product: {
      name: 'MacBook Air (M1, 2020)',
      image: '/placeholder.svg?height=40&width=40',
    },
    customer: {
      name: 'Darrell Steward',
      avatar: '/placeholder.svg?height=24&width=24',
    },
    date: new Date(2024, 3, 19, 8, 1),
    total: 1099.00,
    status: 'Pending',
    items: 1,
    delivery: 'Free Shipping',
  },
  {
    id: '2',
    product: {
      name: 'MacBook Pro 13-inch',
      image: '/placeholder.svg?height=40&width=40',
    },
    customer: {
      name: 'Courtney Henry',
      avatar: '/placeholder.svg?height=24&width=24',
    },
    date: new Date(2024, 3, 19, 9, 15),
    total: 2298.00,
    status: 'Completed',
    items: 2,
    delivery: 'Free Shipping',
  },
  // Add more orders as needed
]

export default function OrdersPage() {
  const [selectedTab, setSelectedTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="p-6 space-y-6">
      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="space-y-1">
                {metric.period && (
                  <p className="text-sm font-medium">{metric.period}</p>
                )}
                <h3 className="text-2xl font-bold">{metric.value}</h3>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="need-to-ship">Need to ship</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancellation">Cancellation</TabsTrigger>
          <TabsTrigger value="returns">Returns</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Search and Filter */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search order..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Select defaultValue="20">
          <SelectTrigger className="w-[100px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="50">50</SelectItem>
            <SelectItem value="100">100</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox />
              </TableHead>
              <TableHead>ORDER</TableHead>
              <TableHead>CUSTOMER</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>TOTAL</TableHead>
              <TableHead>PAYMENT STATUS</TableHead>
              <TableHead>ITEMS</TableHead>
              <TableHead>DELIVERY METHOD</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <span className="text-sm font-medium">{order.product.name}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{order.customer.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {format(order.date, 'MMM dd, hh:mm a')}
                </TableCell>
                <TableCell>
                  ${order.total.toFixed(2)}
                </TableCell>
                <TableCell>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                    ${order.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                      order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'}`}>
                    {order.status}
                  </div>
                </TableCell>
                <TableCell>
                  {order.items} items
                </TableCell>
                <TableCell>
                  {order.delivery}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Update status</DropdownMenuItem>
                      <DropdownMenuItem>Cancel order</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing 1 to 2 of 2 results
        </p>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}