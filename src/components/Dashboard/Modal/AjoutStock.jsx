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

const AjoutStock = () => {
  return (
    <div>
      <Dialog>
            <DialogTrigger asChild>
            <Button size='sm' variant="rafane">Ajouter+</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Ajout aliment</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Nom</Label>
                        <Input type="email" id="email" placeholder="" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Animaux consommateur</Label>
                        <Input type="email" id="email" placeholder="" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Prix</Label>
                        <Input type="email" id="email" placeholder="" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="email">Quatité</Label>
                        <Input type="email" id="email" placeholder="" />
                    </div>
                </div>
                <DialogFooter>
                    <Button className=' text-white ' size='sm' variant='rafane' type="submit">Ajouter</Button>
                    <Button   size='sm' variant='destructive' type="submit">Annuler</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default AjoutStock
