"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Building2, Globe, User, Calendar, Linkedin, MapPin, Contact, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Company[] = [
    {
      id: "1",
      company: "Google",
      domainName: "google.com",
      accountOwner: "Sundar Pichai",
      creationDate: "1998-09-04",
      linkedIn: "linkedin.com/company/google",
      city: "Mountain View",
      contactInfo: "650-253-0000",
      logo: "https://logo.clearbit.com/google.com",
    },
    {
      id: "2",
      company: "Apple",
      domainName: "apple.com",
      accountOwner: "Tim Cook",
      creationDate: "1976-04-01",
      linkedIn: "linkedin.com/company/apple",
      city: "Cupertino",
      contactInfo: "408-996-1010",
      logo: "https://logo.clearbit.com/apple.com",
    },
    {
      id: "3",
      company: "Microsoft",
      domainName: "microsoft.com",
      accountOwner: "Satya Nadella",
      creationDate: "1975-04-04",
      linkedIn: "linkedin.com/company/microsoft",
      city: "Redmond",
      contactInfo: "425-882-8080",
      logo: "https://logo.clearbit.com/microsoft.com",
    },
    {
      id: "4",
      company: "Amazon",
      domainName: "amazon.com",
      accountOwner: "Andy Jassy",
      creationDate: "1994-07-05",
      linkedIn: "linkedin.com/company/amazon",
      city: "Seattle",
      contactInfo: "206-266-1000",
      logo: "https://logo.clearbit.com/amazon.com",
    },
    {
      id: "5",
      company: "Facebook",
      domainName: "facebook.com",
      accountOwner: "Mark Zuckerberg",
      creationDate: "2004-02-04",
      linkedIn: "linkedin.com/company/facebook",
      city: "Menlo Park",
      contactInfo: "650-543-4800",
      logo: "https://logo.clearbit.com/facebook.com",
    },
    {
      id: "6",
      company: "X(Twitter)",
      domainName: "x.com",
      accountOwner: "Elon Musk",
      creationDate: "2006-03-21",
      linkedIn: "linkedin.com/company/twitter",
      city: "San Francisco",
      contactInfo: "415-222-9670",
      logo: "data:image/jpeg;base64,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",
    },
    {
      id: "7",
      company: "Tesla",
      domainName: "tesla.com",
      accountOwner: "Elon Musk",
      creationDate: "2003-07-01",
      linkedIn: "linkedin.com/company/tesla-motors",
      city: "Palo Alto",
      contactInfo: "650-681-5000",
      logo: "https://logo.clearbit.com/tesla.com",
    },
    {
      id: "8",
      company: "Netflix",
      domainName: "netflix.com",
      accountOwner: "Reed Hastings",
      creationDate: "1997-08-29",
      linkedIn: "linkedin.com/company/netflix",
      city: "Los Gatos",
      contactInfo: "408-540-3700",
      logo: "https://logo.clearbit.com/netflix.com",
    },
    {
      id: "9",
      company: "Uber",
      domainName: "uber.com",
      accountOwner: "Dara Khosrowshahi",
      creationDate: "2009-03-01",
      linkedIn: "linkedin.com/company/uber-com",
      city: "San Francisco",
      contactInfo: "415-986-2104",
      logo: "https://logo.clearbit.com/uber.com",
    },
    {
      id: "10",
      company: "Airbnb",
      domainName: "airbnb.com",
      accountOwner: "Brian Chesky",
      creationDate: "2008-08-11",
      linkedIn: "linkedin.com/company/airbnb",
      city: "San Francisco",
      contactInfo: "415-800-5959",
      logo: "https://logo.clearbit.com/airbnb.com",
    },
  ];
  

export type Company = {
  id: string
  company: string
  domainName: string
  accountOwner: string
  creationDate: string
  linkedIn: string
  city: string
  contactInfo: string
  logo: string
}

export const columns: ColumnDef<Company>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "company",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      ><Building2 className="mr-2 h-4 w-4" />
        Company
        <ArrowUpDown className="inline-block ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center">
        <Avatar className="mr-2 h-6 w-6">
          <AvatarImage
            src={row.original.logo ?? ""}
            alt={row.getValue("company") as string}
          />
          <AvatarFallback>
            {(row.getValue("company") as string)[0]}
          </AvatarFallback>
        </Avatar>
        <div>{row.getValue("company") as string}</div>
      </div>
    ),
  },
  {
    accessorKey: "domainName",
    header: () => (
        <div className="flex items-center">
          <Globe className="mr-2 h-4 w-4" />
          Domain Name
        </div>
      ),
    cell: ({ row }) => <div>{row.getValue("domainName")}</div>,
  },
  {
    accessorKey: "accountOwner",
    header: () => (
        <div className="flex items-center">
          <User className="mr-2 h-4 w-4" />
          Account Owner
        </div>
      ),
    cell: ({ row }) => <div>{row.getValue("accountOwner")}</div>,
  },
  {
    accessorKey: "creationDate",
    header: () => (
        <div className="flex items-center">
          <Calendar className="mr-2 h-4 w-4" />
          Creation Date
        </div>
      ),
    cell: ({ row }) => <div>{row.getValue("creationDate")}</div>,
  },
  {
    accessorKey: "linkedIn",
    header: () => (
        <div className="flex items-center">
          <Linkedin className="mr-2 h-4 w-4" />
          Linkedin
        </div>
      ),
    cell: ({ row }) => (
      <a href={`https://${row.getValue("linkedIn")}`} target="_blank" rel="noopener noreferrer">
        {row.getValue("linkedIn")}
      </a>
    ),
  },
  {
    accessorKey: "city",
    header: () => (
        <div className="flex items-center">
          <MapPin className="mr-2 h-4 w-4" />
          City
        </div>
      ),
    cell: ({ row }) => <div>{row.getValue("city")}</div>,
  },
  {
    accessorKey: "contactInfo",
    header: () => (
        <div className="flex items-center">
          <Contact className="mr-2 h-4 w-4" />
          Contact
        </div>
      ),
    cell: ({ row }) => <div>{row.getValue("contactInfo")}</div>,
  },
  {
    accessorKey: "comments",
    header: () => (
        <div className="flex items-center">
          <MessageSquare className="mr-2 h-4 w-4" />
          Comment
        </div>
      ),
    cell: ({ row }) => (
      <textarea
        className="border rounded px-2 py-1 w-full"
        value={row.getValue("comments")}
      />
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const company = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(company.id)}
            >
              Copy company ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View company details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter companies..."
          value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("company")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DataTableDemo
