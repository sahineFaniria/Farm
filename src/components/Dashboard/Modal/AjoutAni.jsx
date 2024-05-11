import React from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../ui/dialog"
import { Label } from "../../ui/label";

const AjoutAni = () => {
  return (

        <Dialog>
            <DialogTrigger asChild>
                <Button size='sm' variant="rafane">Ajouter+</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Ajout animal</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="name" >
                        Nom
                        </Label>
                        <Input
                        id="name"
                        defaultValue="Boeuf"
                        className="col-span-3"
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="name" >
                        Groupe
                        </Label>
                        <Input
                        id="name"
                        defaultValue="B"
                        className="col-span-3"
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="name" >
                        Catégorie
                        </Label>
                        <Input
                        id="name"
                        defaultValue="mamifère"
                        className="col-span-3"
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="username" >
                        Production
                        </Label>
                        <Input
                        id="username"
                        defaultValue="@Lait"
                        className="col-span-3"
                        />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="username" >
                        Santé
                        </Label>
                        <Input
                        id="username"
                        defaultValue="Bonne"
                        className="col-span-3"
                        />
                    </div>
                    <div className="flex w-full max-w-sm items-center gap-1.5">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Age</Label>
                            <Input type="email" id="email" placeholder="1ans" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Poids</Label>
                            <Input type="email" id="email" placeholder="11kg" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Sexe</Label>
                            <Input type="email" id="email" placeholder="Femmele" />
                        </div>
                       
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Origine</Label>
                        <Input type="email" id="email" placeholder="Origine" />
                    </div>
                </div>
                <DialogFooter>
                <Button className=' text-white ' size='sm' variant='rafane' type="submit">Ajouter</Button>
                <Button   size='sm' variant='destructive' type="submit">Annuler</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

  )
}

export default AjoutAni
