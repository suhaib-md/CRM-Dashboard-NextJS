'use client';

import { BellIcon, Cookie, CreditCard, Inbox, MessageSquare, Settings, User, Search, ClipboardList, BadgeHelp, Building2, BriefcaseBusiness } from "lucide-react";
import UserItem from "@/components/UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
            link: "/",
            icon: <Search />,
            text: "Search"
          },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox"
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing"
        },
        {
          link: "/",
          icon: <BellIcon />,
          text: "Notifications"
        },
        {
            link: "/",
            icon: <ClipboardList />,
            text: "Tasks"
          }
      ]
    },
    {
      group: "Workspace",
      items: [
        {
            link: "/",
            icon: <User />,
            text: "People"
          },
          {
              link: "/",
              icon: <Building2 />,
              text: "Companies"
            },
            {
              link: "/",
              icon: <BriefcaseBusiness />,
              text: "Opportunities"
            }
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings"
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy"
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs"
        }
      ]
    }
  ]

  return <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
    <div>
      <UserItem />
    </div>
    <div className="grow">
      <Command style={{ overflow: 'visible' }}>
        <CommandList style={{ overflow: 'visible' }}>
          {menuList.map((menu: any, key: number) => (
            <CommandGroup key={key} heading={menu.group}>
              {menu.items.map((option: any, optionKey: number) =>
                <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                  {option.icon}
                  {option.text}
                </CommandItem>
              )}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>

    </div>
    <div>
    <Button variant="outline" className="inline-flex items-center space-x-1 px-4">
        <BadgeHelp className="h-4 w-4" />
        <span>Support</span>
    </Button>
    </div>
  </div>;
}