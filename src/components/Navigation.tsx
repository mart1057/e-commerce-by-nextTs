'use client'

import * as React from 'react'
import Link from 'next/link'
import { CircleUserRound, ShoppingCart, Search, Menu } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Input } from '@/components/ui/input'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.'
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.'
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.'
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
  }
]
export function NavigationMenuDemo() {
  return (
    <header className="h-[65px] grid grid-cols-12 items-center px-4 lg:px-8 border-b">
      <div className="col-span-6 lg:col-span-2 flex items-center font-extrabold text-[20px] lg:text-[24px]">
        <div>
          <Menu className="lg:hidden mr-4" size={28} />
        </div>
        LOGO
      </div>
      <nav className="col-span-6 hidden lg:flex lg:col-span-3">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] lg:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="hidden lg:flex col-span-4 ml-8">
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 rounded-[20px]"
          />
        </div>
      </div>
      <div className="col-span-6 lg:col-span-2 flex items-center justify-end gap-4">
        <Search className="lg:hidden" size={28} />
        <CircleUserRound size={28} />
        <div className='relative'>
          <div className='absolute bottom-4 left-4 text-white font-bold bg-orange-600 rounded-[20px] w-[30px] h-[20px] flex items-center justify-center text-[14px]'>4</div>
          <ShoppingCart size={28} />
        </div>
      </div>
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<'li'> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
