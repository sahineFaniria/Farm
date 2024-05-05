import React from 'react';
import setting from "../../images/settings.svg";
import { Input } from '../ui/input';
import { Label } from "../ui/label";
import { Button } from '../ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";


const Header = () => {
  return (
    <div >
        <div className='head px-10 '>
            <h2 className='farm-name '>My Farm Name</h2>
            <div className=' flex gap-1'>
                <h2 className='flex items-center' >Username</h2>
                <div className='flex items-center'>
                    <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" aria-hidden="true">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className='rounded-lg' size='sm' variant="outline"><img className=' cursor-pointer' src={setting} alt="" /></Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle>Modifier Profile</SheetTitle>
                        <SheetDescription>
                            Changer votre profile ici. Cliquer sur enregistrer vous avez fini.
                        </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-start">
                            Farm:
                            </Label>
                            <Input id="name" value="Farm name" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-start">
                            Utilisateur:
                            </Label>
                            <Input id="username" value="@user x" className="col-span-3" />
                        </div>
                        </div>
                        <SheetFooter>
                        <SheetClose asChild>
                            <Button className='text-white' size='lg' variant='rafane' type="submit">Enregistrer</Button>
                        </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
                
                
                
            </div>
            
        </div>

        
        
    </div>
  )
}

export default Header;